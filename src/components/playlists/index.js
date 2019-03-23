import React from "react";
import Video from "../video";
import { StyledWrapper, StyledVideos } from "./styled";

const Playlists = ({ playlists }) => {
  return (
    <StyledWrapper>
      {playlists &&
        playlists.map(playlist => (
          <div>
            <h2>{playlist.snippet.title}</h2>
            <StyledVideos>
              {playlist.playlistItems.map(item => {
                const video = item.video.items[0];
                return (
                  <Video
                    id={video.id}
                    snippet={video.snippet}
                    contentDetails={video.contentDetails}
                    statistics={video.statistics}
                  />
                );
              })}
            </StyledVideos>
          </div>
        ))}
    </StyledWrapper>
  );
};

export default Playlists;
