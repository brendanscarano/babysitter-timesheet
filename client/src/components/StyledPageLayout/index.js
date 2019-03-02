import styled from 'styled-components';
import { Layout } from 'antd';
import { media } from '../../shared/theme';

const StyledPageLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;

  ${media.desktop`
    width: 400px;
    margin: auto;
  `};
`;

const StyledPageLayoutWithFixedHeader = styled(StyledPageLayout)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export { StyledPageLayout, StyledPageLayoutWithFixedHeader };
