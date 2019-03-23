import React from "react";
import styled from "styled-components";

export const StyledText = styled.h1`
  margin: 0;
  display: inline;
`;
export const StyledBrackets = styled.h1`
  margin: 0 1rem;
  display: inline;
`;

export const StyledWrapper = styled.div`
  width: 380px;
  background: #f8ea6194;
  padding: 0.5rem;
  border-radius: 5px;
`;

const Logo = () => (
  <StyledWrapper>
    <StyledBrackets>{`<`}</StyledBrackets>
    <StyledText>{`Frontendtopics`}</StyledText>
    <StyledBrackets>{`/>`}</StyledBrackets>
  </StyledWrapper>
);

export default Logo;
