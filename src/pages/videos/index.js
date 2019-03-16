import React from "react";
import styled from "styled-components";

export const StyledWrapper = styled.div`
`;

export const StyledVideo = styled.div`
  margin: 1rem;
`;

const Videos = ({ videos }) => (
  <StyledWrapper>
    {videos && videos.map(video => (
      <StyledVideo key={video.id}>
        <h3> {video.title}</h3>
        <div> {video.description}</div>
      </StyledVideo>
    ))}
  </StyledWrapper>
);

export default Videos;
