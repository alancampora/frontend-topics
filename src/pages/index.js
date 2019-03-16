import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Videos from "./videos";

export const StyledWrapper = styled.div`
`;

export default ({ data }) => (
  <StyledWrapper>
    <h1> Frontend topics </h1>
    <p> Welcome to our frontend community. Checkout my tutorials about React, gatsby and much more!</p>
    <Videos videos={data.ytNode.childrenYtVideo} />
  </StyledWrapper>
);

export const query = graphql`
  {
    ytNode {
      childrenYtVideo {
        id
        publishedAt
        channelId
        title
        description
        channelTitle
        liveBroadcastContent
        thumbnails {
          default {
            url
            width
            height
          }
        }
      }
    }
  }
`;
