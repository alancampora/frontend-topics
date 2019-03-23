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
  width: 50%;
`;
export const StyledVideo = styled.a`
  margin: 1.2rem;
  padding: 1rem;
  display: block;
  text-decoration: none;
  background: #f6e510c4;
  color: #010101;
  border-radius: 10px;
`;
export const StyledDetails = styled.div`
  padding: 1rem;
`;
export const StyledContent = styled.div``;

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

export const StyledText = styled.p``;

export const StyledTitle = styled.h3`
  text-align: center;
`;

export const StyledFooter = styled.div`
  display: flex;
`;

export const StyledIcon = styled.div`
  flex: 1;
  text-align: center;
`;
