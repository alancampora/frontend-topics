import React from "react";
import {
  StyledWrapper,
  StyledVideo,
  StyledContent,
  StyledImage,
  StyledText,
} from "./styled";

const createMarkup = str => ({ __html: str });

// tags have a framework:something to detect the framework image
const getFramework = list => {
  let tag = list.find(tag => tag.includes("framework:"));
  return tag ? tag.replace(/framework:/, "") : "javascript";
};

const Videos = ({ videos }) => (
  <StyledWrapper>
    {videos &&
      videos.map(video => (
        <StyledVideo key={video.id}>
          <StyledImage>
            <img
              src={`/img/${getFramework(video.tags)}.png`}
              alt=""
            />
          </StyledImage>
          <StyledContent>
            <h3> {video.title}</h3>
            <StyledText dangerouslySetInnerHTML={createMarkup(video.description)} />
          </StyledContent>
        </StyledVideo>
      ))}
  </StyledWrapper>
);

export default Videos;
