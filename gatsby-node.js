const youtube = require("./youtube-playlist");
const secrets = require("./secrets");
const crypto = require(`crypto`);

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;
  const { keyBackup, channelId } = secrets;
  const playlists = await youtube.channelPlaylists(keyBackup, channelId);
  const ytNode = {
    id: "ytNode",
    parent: null,
    children: playlists.map(playlist => playlist.id),
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

  playlists.forEach(playlist => {
    const props = playlist.snippet;
    const nodeMetadata = {
      id: playlist.id,
      parent: "ytNode",
      children: [],
      internal: {
        type: "ytPlaylist",
        contentDigest: createContentDigest(playlist),
      },
      ...props,
    };

    const node = Object.assign({}, playlist, nodeMetadata);
    createNode(node);
  });
};
