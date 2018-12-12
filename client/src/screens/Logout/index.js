import { lifecycle, renderNothing } from 'recompose';
import gql from 'graphql-tag';
import { client } from '../../graphql/initApollo';
import { resetClientState } from '../../utils/resetClientState';

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
          resetClientState(client);
          this.props.history.push('/');
        }
      });
  },
})(renderNothing);
