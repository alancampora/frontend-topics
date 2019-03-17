import React from 'react';
import { StyledWrapper, StyledTitle } from "./styled";

const Header = ({ title }) => (
  <StyledWrapper>
    <StyledTitle>{title}</StyledTitle>
  </StyledWrapper>
);

export default Header;
