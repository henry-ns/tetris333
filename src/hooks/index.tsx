import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ConfigProvider } from './config';

import theme from '../styles/themes';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ConfigProvider>{children}</ConfigProvider>
  </ThemeProvider>
);

export default AppProvider;
