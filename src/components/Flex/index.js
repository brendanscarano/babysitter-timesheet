import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const FlexRow = ({ children }) => <Row>{children}</Row>;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FlexColumn = ({ children }) => <Column>{children}</Column>;
