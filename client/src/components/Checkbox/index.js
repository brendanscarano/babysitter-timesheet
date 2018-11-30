import React from 'react';
import styled from 'styled-components';
import { Checkbox as Check } from 'antd';
import { FlexRow } from '../Flex';

const Wrapper = styled(FlexRow)`
    justify-content: center;
`;

export const Checkbox = ({ onChange, isChecked }) =>
    <Wrapper>
        <Check
            checked={isChecked}
            onChange={onChange}
        />
    </Wrapper>
