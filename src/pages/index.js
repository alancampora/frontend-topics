import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Videos from "../components/videos";
import Header from "../components/header";
import SEO from "../components/seo";

export const StyledWrapper = styled.div`
  margin: 1rem;
`;

export default ({ data }) => (
  <StyledWrapper>
    <SEO />
    <Header title="Frontend topics" />
    <Videos videos={data.ytNode.childrenYtVideo} />
  </StyledWrapper>
);

export const query = graphql`
  {
    ytNode {
      childrenYtVideo {
        tags
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
