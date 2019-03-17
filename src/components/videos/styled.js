import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
25% {
  transform: scale(1.2);
}
50% {
  transform: scale(1);
}
75% {
  transform: scale(1.2);
}
100% {
  transform: scale(1);
}
`;

export const StyledWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  padding-top: 100px;
`;
export const StyledVideo = styled.a`
  margin: 1.2rem;
  display: block;
  text-decoration: none;
`;
export const StyledContent = styled.div`
  padding: 1rem;
  background: #f6e510c4;
  color: #010101;
  border-radius: 10px;
`;
export const StyledImage = styled.div`
  margin: 0;
  text-align: center;

  img {
    height: 150px;
    border-radius: 50%;
    padding: 3px;
    border: 5px solid black;
  }
  :hover {
    animation: ${bounceAnimation} 2s linear infinite;
  }
`;

export const StyledText = styled.div`
  white-space: pre-line;
`;
