import { DefaultTheme } from 'styled-components';

const commonTheme = {
  fonts: {
    primary: 'Source Code Pro, sans-serif',
    secondary: 'Space Grotesk, sans-serif',
    tertiary: 'Oswald, sans-serif',
  },

  typography: {
    letterSpacing: '.2rem',
  },

  breakpoints: {
    xs: 'only screen and (max-width: 400px)',
    sm: 'only screen and (max-width: 600px)',
    tablet: 'only screen and (max-width: 768px)',
    md: 'only screen and (max-width: 960px)',
    mdLg: 'only screen and (max-width: 1024px)',
    lg: 'only screen and (max-width: 1280px)',
    xl: 'only screen and (max-width: 1920px)',
  },

  animations: { transition: 'all 0.3s ease' },

  shadows: {
    shadow1: '',
    shadow2: '',
    shadow3: '',
  },

  borderRadius: '2px',

  transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
};

export const lightTheme: DefaultTheme = {
  ...commonTheme,
  mode: 'light',
  colors: {
    primary0: '#ffebec',
    primary1: '#e88b91',  // Soft pink-red
    primary2: '#e25862',  // Soft medium red
    primary3: '#d94048',  // Balanced primary red (between vibrant and muted)
    primary4: '#b8353d',  // Darker soft red
    primary5: '#8f2a30',  // Darkest soft red

    white: '#ffffff',
    background: '#FAFAFA',

    black: '#111111',

    grey1: '#262626',
    grey2: '#515151',
    grey3: '#7d7d7d',
    grey4: '#a8a8a8',
    grey5: '#d4d4d4',
  },
};

export const darkTheme: DefaultTheme = {
  ...commonTheme,
  mode: 'dark',
  colors: {
    // Muted red colors for dark theme - less vibrant but still visible
    primary0: '#2a1315',
    primary1: '#d08085',  // Muted pink-red
    primary2: '#c55a61',  // Muted medium red
    primary3: '#b84550',  // Muted primary red (was #fb3640)
    primary4: '#9e3a43',  // Darker muted red
    primary5: '#7d2e35',  // Darkest muted red

    // Invert white and black
    white: '#111111',
    background: '#0a0a0a',

    black: '#f0f0f0',

    // Improved contrast greys for dark theme
    grey1: '#f0f0f0',  // Lightest - used for main hero text
    grey2: '#b0b0b0',  // Light grey - social links default
    grey3: '#9a9a9a',  // Medium grey - subtitle
    grey4: '#505050',  // Dark grey - borders
    grey5: '#2a2a2a',  // Darkest - used for subtle borders/dividers
  },
};

// Keep the original theme export for backward compatibility
export const theme = lightTheme;