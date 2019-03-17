const youtube = require("./youtube");
const secrets = require("./secrets");
const crypto = require(`crypto`);

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;
  const { keyBackup, channelId } = secrets;
  const videos = await youtube.channelVideos(keyBackup, channelId);

  const ytNode = {
    id: "ytNode",
    parent: null,
    children: videos.map(video => video.id),
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
      id: video.id,
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
