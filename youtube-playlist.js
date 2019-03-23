/**
 * Exentending https://github.com/almoore/youtube-channel-videos
 */
var youtube = require("youtube-api");

/**
 * @description Gets playlists snippet
 * props https://developers.google.com/youtube/v3/docs/channels/list
 * @param {string} pageToken
 * @param {string} channelId
 */
const getPlaylists = function(pageToken, channelId) {
  return new Promise(resolve => {
    youtube.playlists.list(
      {
        type: "video",
        part: "snippet",
        pageToken: pageToken,
        maxResults: 50,
        channelId: channelId,
      },
      (err, data) => resolve(data),
    );
  });
};

/**
 * Gets playlist information
 * @param {string} id
 */
const getPlaylistItems = function(id) {
  return new Promise(resolve => {
    youtube.playlistItems.list(
      {
        playlistId: id,
        maxResults: 50,
        part: "snippet",
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
        part: "snippet,contentDetails,statistics",
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
async function channelPlaylistVideos(channelId, pageToken, currentItems) {
  const playlists = await getPlaylists(pageToken, channelId);

  for (var x in playlists.items) {
    let playlist = playlists.items[x];
    const playlistItems = await getPlaylistItems(playlist.id);

    let extendedPlaylistItems = [];
    for (var y in playlistItems.items) {
      let playlistItem = playlistItems.items[y];
      const video = await getVideo(playlistItem.snippet.resourceId.videoId);
      extendedPlaylistItems.push({ ...playlistItem, video });
    }

    console.log(extendedPlaylistItems);
    playlist = { ...playlist, playlistItems: extendedPlaylistItems };

    currentItems.push(playlist);
  }

  if (playlists.nextPageToken) {
    channelPlaylistVideos(channelId, playlists.nextPageToken, currentItems);
  }
  return currentItems;
}

exports.channelPlaylists = function(apiKey, channelId) {
  youtube.authenticate({
    type: "key",
    key: apiKey,
  });

  return new Promise.resolve(channelPlaylistVideos(channelId, null, []));
};
