import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Videos from "../components/videos";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

export const StyledWrapper = styled.div`
  margin: 1rem;
`;

export default ({ data }) => (
  <StyledWrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Frontend topics</title>
      <link rel="canonical" href="https://frontendtopics.com" />
    </Helmet>

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
