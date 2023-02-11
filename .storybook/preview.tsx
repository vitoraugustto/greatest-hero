import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/components/GlobalStyle';
import { defaultTheme } from '../src/themes/default';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];
