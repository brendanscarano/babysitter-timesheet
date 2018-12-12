import React from 'react';
import { lifecycle, renderNothing } from 'recompose';
import { Notification, Icon } from 'antd';
import gql from 'graphql-tag';
import { client } from '../../graphql/initApollo';
import { resetClientState } from '../../utils/resetClientState';
import { theme } from '../../shared/theme';

export const Logout = lifecycle({
  componentDidMount() {
    client
      .mutate({
        mutation: gql`
          mutation {
            logout
          }
        `,
      })
      .then(({ data: { logout } }) => {
        if (logout) {
          Notification.success({
            message: 'Logout successful',
            description: 'See you again soon!',
            icon: <Icon type="smile" style={{ color: theme.colors.main }} />,
          });

          setTimeout(() => {
            resetClientState(client);
            this.props.history.push('/');
          }, 2000);
        }
      });
  },
})(renderNothing);
