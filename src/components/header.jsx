import { Link } from 'gatsby';
import React from 'react';
import { styled } from '@linaria/react';

const StyledHeader = styled.header`
  color: #fff;
  background-color: rebeccapurple;
  height: 100px;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </StyledHeader>
);

export default Header;
