/**
 * Exentending https://github.com/almoore/youtube-channel-videos
 */
var youtube = require("youtube-api");

/**
 * @description Gets channel snippet
 * props https://developers.google.com/youtube/v3/docs/channels/list
 * @param {string} pageToken
 * @param {string} channelId
 */
const getChannel = function(pageToken, channelId) {
  return new Promise(resolve => {
    youtube.search.list(
      {
        type: "video",
        part: "snippet",
        pageToken: pageToken,
        maxResults: 2,
        channelId: channelId,
      },
      (err, data) => resolve(data),
    );
  });
};

/**
 * Gets video information https://developers.google.com/youtube/v3/docs/videos/list
 * @param {string} id
 */
const getVideo = function(id) {
  return new Promise(resolve => {
    youtube.videos.list(
      {
        id,
        part: "snippet",
      },
      (err, data) => resolve(data),
    );
  });
};

/**
 * Recursevely gets channels video.
 * Get channel retrives bare props for the video that's why it's needed to perform one more request per video.
 * @param {string} channelId
 * @param {number} callStackSize
 * @param {string} pageToken
 * @param {array} currentItems
 */
async function channelVideosRecursive(channelId, pageToken, currentItems) {
  const data = await getChannel(pageToken, channelId);

  for (var x in data.items) {
    const video = data.items[x];
    const extendedVideoData = await getVideo(video.id.videoId);
    currentItems.push(extendedVideoData.items[0]);
  }

  if (data.nextPageToken) {
    channelVideosRecursive(channelId, data.nextPageToken, currentItems);
  }
  return currentItems;
}

exports.channelVideos = function(apiKey, channelId) {
  youtube.authenticate({
    type: "key",
    key: apiKey,
  });

  return new Promise.resolve(channelVideosRecursive(channelId, null, []));
};
