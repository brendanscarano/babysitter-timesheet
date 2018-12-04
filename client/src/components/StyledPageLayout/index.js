import styled from 'styled-components';
import { Layout } from 'antd';
import { theme, media } from '../../shared/theme';

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
  padding-top: calc(${theme.heights.navBar}px + 2rem);
`;

export { StyledPageLayout, StyledPageLayoutWithFixedHeader };
