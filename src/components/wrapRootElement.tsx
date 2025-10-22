import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../style/themes';
import { ThemeModeProvider, useThemeMode } from '../context/ThemeContext';

const ThemedApp: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { themeMode } = useThemeMode();
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <ThemeModeProvider>
    <ThemedApp>{element}</ThemedApp>
  </ThemeModeProvider>
);
