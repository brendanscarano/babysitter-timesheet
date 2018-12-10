import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Avatar, Dropdown, Layout, Menu,
} from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';
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
      <ApolloConsumer>
        {client => (
          <LogOutButton
            onClick={async () => {
              await window.localStorage.removeItem('token');
              client.writeData({ data: { isLoggedIn: false } });
              client.resetStore();
              return history.push('/');
            }}
            type="button"
          >
            Log Out
          </LogOutButton>
        )}
      </ApolloConsumer>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: whitesmoke;
`;

const NavBar = withRouter(({ isLoggedIn, history }) => {
  const DropdownMenuWithHistory = () => <DropdownMenu history={history} />;
  return (
    <Wrapper>
      <StyledLink to="/">
        <span role="img" aria-label="baby">👶</span>
        <h1>Sitter Sheet</h1>
      </StyledLink>
      {
        isLoggedIn
          ? (
            <FlexRow>
              <StyledDropdown overlay={DropdownMenuWithHistory()}>
                <Avatar icon="user" />
              </StyledDropdown>
            </FlexRow>
          )
          : <StyledLink to="/register">Signup</StyledLink>
      }
    </Wrapper>
  );
});

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export { NavBar };
