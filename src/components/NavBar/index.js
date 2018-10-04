import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 1000;
    height: 80px;
    border-bottom: 1px solid #e4e9ee;
    background-color: #fff;
    box-shadow: 0 0 25px 0 hsla(0, 0%, 79%, .35);
`;

const NavBar = () => (
  <Wrapper>NavBar</Wrapper>
);

export { NavBar };
