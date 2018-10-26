import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
    background-color: transparent;
    border: none;
`;

const EmptyCell = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export { EmptyCell };
