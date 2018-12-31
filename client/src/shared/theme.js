import { css } from 'styled-components';

export const theme = {
  heights: {
    navBar: 64,
  },
  zIndex: {
    navBar: 1,
  },
  colors: {
    background: '#fff',
    dataSheetBackground: '#fafafa',
    evenRow: 'whitesmoke',
    white: '#fff',
    main: '#319193',
    error: 'red',
    sheetHighlights: '#1890ff',
  },
};

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
