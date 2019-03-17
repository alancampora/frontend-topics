import React from "react";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
`;

export const StyledVideo = styled.div`
  margin: 1rem;
`;
export const StyledContent = styled.div`
  border: #78d4e8 3px dashed;
  border-radius: 10px;
  padding: 0.5rem;
`;

const createMarkup = str => ({ __html: str });

const Videos = ({ videos }) => (
  <StyledWrapper>
    {videos &&
      videos.map(video => (
        <StyledVideo key={video.id}>
          <h3> {video.title}</h3>
          <StyledContent>
            <div dangerouslySetInnerHTML={createMarkup(video.description)} />
          </StyledContent>
        </StyledVideo>
      ))}
  </StyledWrapper>
);

export default Videos;
