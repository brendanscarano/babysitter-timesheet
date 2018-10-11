import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Wrapper = styled(Header)`
    width: 100%;
    border-bottom: 1px solid #e4e9ee;
    background-color: #fff;
    box-shadow: 0 0 25px 0 hsla(0, 0%, 79%, .35);
    font-size: 1.125rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  >span, h1 {
    font-size: 20px;
  }
  > span {
    margin-right: .25rem;
  }
`;

const NavBar = () => (
  <Wrapper>
    <StyledLink to="/">
      <span role="img" aria-label="baby">👶</span>
      <h1>Sitter Sheet</h1>
    </StyledLink>
  </Wrapper>
);

export { NavBar };
