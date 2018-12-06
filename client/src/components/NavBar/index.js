import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar, Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { FlexRow } from '../Flex';

const { Header } = Layout;

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  height: 100%;
  > span, h1 {
    font-family: Lobster;
    font-size: 24px;
  }
  > span {
    margin-right: .25rem;
  }
`;

const NavBar = ({ isUserSignedIn }) => (
  <Header>
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
  </Header>
);

NavBar.propTypes = {
  isUserSignedIn: PropTypes.bool.isRequired,
};

export { NavBar };
