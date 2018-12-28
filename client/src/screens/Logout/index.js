import React from 'react';
import gql from 'graphql-tag';
import { lifecycle, renderNothing } from 'recompose';
import { Notification, Icon } from 'antd';
import { client } from '../../graphql/initApollo';
import { resetClientState } from '../../utils/resetClientState';
import { theme } from '../../shared/theme';

export const Logout = lifecycle({
  componentDidMount() {
    try {
      client.mutate({
        mutation: gql`
            mutation {
              logout
            }
          `,
      });

      Notification.success({
        message: 'Logout successful',
        description: 'See you again soon!',
        icon: <Icon type="smile" style={{ color: theme.colors.main }} />,
      });

      setTimeout(() => {
        resetClientState(client);
        this.props.history.push('/');
      }, 2000);
    } catch (err) {
      Notification.error({
        message: err,
        icon: <Icon type="smile" style={{ color: theme.colors.error }} />,
      });
    }
  },
})(renderNothing);
