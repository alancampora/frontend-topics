// const {createFilePath} = require('gatsby-source-filesystem');
// const path = require('path');
const ypi = require("youtube-channel-videos");
const secrets = require('./secrets');
const crypto = require(`crypto`);

const getVideos = function(key, channelId) {
  return new Promise(resolve => {
    ypi.channelVideos(
      key,
      channelId,
      items => resolve(items),
    );
  });
};

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;

  const videos = await getVideos(secrets.key, secrets.channelId);

  const ytNode = {
    id: "ytNode",
    parent: null,
    children: videos.map(video => createNodeId(video.id.videoId)),
    internal: {
      type: "ytNode",
    },
  };
  const contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(ytNode))
    .digest(`hex`);

  ytNode.internal.contentDigest = contentDigest;
  createNode(ytNode);

  videos.forEach(video => {
    const props = video.snippet;
    const nodeMetadata = {
      id: createNodeId(video.id.videoId),
      parent: "ytNode",
      children: [],
      internal: {
        type: "ytVideo",
        contentDigest: createContentDigest(video),
      },
      ...props,
    };

    const node = Object.assign({}, video, nodeMetadata);
    createNode(node);
  });
};
