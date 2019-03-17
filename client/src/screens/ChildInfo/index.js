import React from 'react';
import gql from 'graphql-tag';
import { Spin, Alert } from 'antd';
import { Query } from 'react-apollo';

const ChildInfo = () => (
  <Query query={gql`
    query getSitte{
      sitte {
        id
      }
    }
  `}
  >
    {({ data, loading, error }) => {
      console.log(loading, data, error);
      if (loading) {
        return (<Spin />);
      }

      if (error) {
        return (
          <div>
            <Alert message="Something went wrong" type="error" showIcon />
          </div>
        );
      }

      return (
        <div>
          Hello
          <pre>{JSON.stringify(data, null, 3)}</pre>
        </div>
      );
    }}
  </Query>
);

export default ChildInfo;
