import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

const Wrapper = styled(Header)`
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #e4e9ee;
    background-color: #fff;
    box-shadow: 0 0 25px 0 hsla(0, 0%, 79%, .35);
`;

const NavBar = () => (
  <Wrapper>NavBar</Wrapper>
);

export { NavBar };
