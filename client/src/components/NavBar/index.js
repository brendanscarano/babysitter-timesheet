import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Avatar, Dropdown, Layout, Menu,
} from 'antd';
import { Link, Redirect } from 'react-router-dom';
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

const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
`;

const DropdownMenu = ({ history }) => (
  <Menu>
    <Menu.Item>
      <Link to="/my-profile">
        My Profile
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/new-child">
        New Child
      </Link>
    </Menu.Item>
    <Menu.Item>
      <LogOutButton
        onClick={async () => {
          await localStorage.removeItem('token');
          return history.push('/');
        }}
        type="button"
      >
        Log Out
      </LogOutButton>
    </Menu.Item>
  </Menu>
);

const StyledDropdown = styled(Dropdown)`
  cursor: pointer;

  > svg {
    height: 18px;
    width: 18px;
  }
`;

const NavBar = ({ isUserSignedIn, history }) => {
  console.log('history', history);
  const DropdownMenuWithHistory = () => <DropdownMenu history={history} />;
  return (
    <Wrapper>
      <StyledLink to="/">
        <span role="img" aria-label="baby">👶</span>
        <h1>Sitter Sheet</h1>
      </StyledLink>
      {isUserSignedIn && (
        <FlexRow>
          <StyledDropdown overlay={DropdownMenuWithHistory()}>
            <Avatar icon="user" />
          </StyledDropdown>
        </FlexRow>
      )}
    </Wrapper>
  );
};

NavBar.propTypes = {
  isUserSignedIn: PropTypes.bool.isRequired,
};

export { NavBar };
