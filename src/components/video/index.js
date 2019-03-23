import React from "react";
import moment from "moment";
import {
  StyledWrapper,
  StyledVideo,
  StyledContent,
  StyledDetails,
  StyledTitle,
  StyledText,
  StyledFooter,
  StyledIcon,
} from "./styled";
import { toFormattedTime, toSeconds } from "./helpers";

const createMarkup = str => ({ __html: str });

/**
 * Every video should have the following structure
 * ---Description
 * words words and more words
 * ---
 * other stuff
 * Therefore: Replace "---Description", and everything at the end "--- other stuff"
 * @param {*} str
 */
const getDescription = str => {
  let result = str.replace(/---Description\s*/, "");
  return result.replace(/\s*---[\w\W]*/, "");
};

// tags have a framework:something to detect the framework image
const getFramework = list => {
  let tag = list.find(tag => tag.includes("framework:"));
  return tag ? tag.replace(/framework:/, "") : "javascript";
};

const Video = ({ id, snippet, contentDetails, statistics }) => (
  <StyledWrapper>
    <StyledVideo
      key={id}
      href={`https://www.youtube.com/watch?v=${id}`}
      aria-label={`open ${snippet.title}`}
      target="_blank"
    >
      <StyledContent>
        <StyledDetails>
          <StyledTitle>{snippet.title}</StyledTitle>
          <StyledText>{getDescription(snippet.description)}</StyledText>
        </StyledDetails>
      </StyledContent>
      <StyledFooter>
        <StyledIcon>{`⌛${toFormattedTime(toSeconds(contentDetails.duration))}`}</StyledIcon>
        <StyledIcon>{`👀${statistics.viewCount}`}</StyledIcon>
      </StyledFooter>
    </StyledVideo>
  </StyledWrapper>
);

export default Video;
