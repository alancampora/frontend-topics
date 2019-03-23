import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Playlists from "../components/playlists";
import Header from "../components/header";
import SEO from "../components/seo";

export const StyledWrapper = styled.div`
  margin: 1rem;
`;

export default ({ data }) => (
  <StyledWrapper>
    <SEO />
    <Header title="Frontend topics" />
    <Playlists playlists={data.ytNode.childrenYtPlaylist} />
  </StyledWrapper>
);

export const query = graphql`
  {
    ytNode {
      childrenYtPlaylist {
        snippet {
          title
        }
        playlistItems {
          video {
            items {
              id
              statistics {
                viewCount
                likeCount
                dislikeCount
                favoriteCount
                commentCount
              }
              contentDetails {
                duration
                dimension
                definition
                caption
                licensedContent
                projection
              }
              snippet {
                tags
                title
                description
              }
            }
          }
        }
      }
    }
  }
`;
// export const query = graphql`
//   {
//     ytNode {
//       childrenYtVideo {
//         tags
//         id
//         publishedAt
//         channelId
//         title
//         description
//         channelTitle
//         liveBroadcastContent
//         thumbnails {
//           default {
//             url
//             width
//             height
//           }
//         }
//       }
//     }
//   }
// `;
