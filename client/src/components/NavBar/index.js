import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { Avatar, Dropdown, Menu, Button, Layout } from 'antd';
import { FlexRow } from '../Flex';
import { ME_QUERY } from '../../graphql/queries/ME_QUERY';
import { formatDateForUrl } from '../../helpers/formatDateForUrl';
// TODO: Inject theme instead of importing it
import { theme } from '../../shared/theme';
import { Loader } from '../Loader';

const { Header } = Layout;

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  > span, h1 {
    font-family: Lobster;
    font-size: 24px;
    padding: 0;
    margin: 0;
  }
  > span {
    margin-right: .25rem;
  }
`;

const LogOutButton = styled(Button)`
  background-color: transparent;
  border: none;
`;

const DropdownMenu = ({ history }) => (
	<Menu>
		{/* <Menu.Item>
      <Link to="/new-sitte">New Sitte</Link>
    </Menu.Item> */}
		<Menu.Item>
			<Link to="/sittes">Calendar</Link>
		</Menu.Item>
		{/* <Menu.Item>
      <Link to={`/sheet/${moment().format('MM-YYYY')}`}>Sheet</Link>
    </Menu.Item> */}
		<Menu.Item>
			<Link to="/account">Account</Link>
		</Menu.Item>
		<Menu.Item>
			<LogOutButton onClick={() => history.push('/logout')} type="danger">
				Log Out
			</LogOutButton>
		</Menu.Item>
	</Menu>
);

const StyledDropdown = styled(Dropdown)`
  cursor: pointer;

  svg {
    height: 18px;
    width: 18px;
  }
`;

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

const NavBar = withRouter(({ isLoggedIn, history }) => {
	const DropdownMenuWithHistory = () => <DropdownMenu history={history} />;
	return (
		<Wrapper>
			<StyledLink to={isLoggedIn ? `/sheet/${formatDateForUrl}` : '/register'}>
				<span role="img" aria-label="baby">
					👶
				</span>
				<h1>Sitter Sheet</h1>
			</StyledLink>
			{isLoggedIn ? (
				<Query query={ME_QUERY}>
					{({ loading }) => {
						if (loading) {
							return '';
						}
						return (
							<FlexRow>
								<StyledDropdown overlay={DropdownMenuWithHistory()}>
									<Avatar icon="user" />
								</StyledDropdown>
							</FlexRow>
						);
					}}
				</Query>
			) : (
				<StyledLink to="/register">Sign Up</StyledLink>
			)}
		</Wrapper>
	);
});

NavBar.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired
};

export { NavBar };
