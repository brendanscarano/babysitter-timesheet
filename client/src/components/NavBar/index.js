import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar, Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { FlexRow } from '../Flex';
import { theme } from '../../shared/theme';

const { Header } = Layout;

const Wrapper = styled(Header)`
    position: fixed;
    z-index: ${theme.zIndex.navBar};
    height: ${theme.heights.navBar};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #e4e9ee;
    background-color: #fff;
    box-shadow: 0 0 25px 0 hsla(0, 0%, 79%, .35);
    font-size: 1.125rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  height: 100%;
  >span, h1 {
    font-family: Lobster;
    font-size: 24px;
  }
  > span {
    margin-right: .25rem;
  }
`;

const NavBar = ({ isUserSignedIn }) => (
  <Wrapper>
    <StyledLink to="/">
      <span role="img" aria-label="baby">👶</span>
      <h1>Sitter Sheet</h1>
    </StyledLink>
    {isUserSignedIn && (
      <FlexRow>
        <Link to="/new-child">
          <Icon type="plus-circle" />
          {' '}
  New Child
        </Link>
        <Link to="/my-profile">
          <Avatar icon="user" />
        </Link>
      </FlexRow>
    )}
  </Wrapper>
);

NavBar.propTypes = {
  isUserSignedIn: PropTypes.bool.isRequired,
};

export { NavBar };
