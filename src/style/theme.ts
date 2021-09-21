import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  fonts: {
    primary: 'Source Code Pro, sans-serif',
    secondary: 'Space Grotesk, sans-serif',
  },

  typography: {
    letterSpacing: '.2rem',
  },

  colors: {
    primary0: '#ffebec',
    primary1: '#fd9ba0',
    primary2: '#fc5e66',
    primary3: '#fb3640',
    primary4: '#c92b33',
    primary5: '#972026',

    white: '#ffffff',
    background: '#FAFAFA',

    grey1: '#262626',
    grey2: '#515151',
    grey3: '#7d7d7d',
    grey4: '#a8a8a8',
    grey5: '#d4d4d4',
  },

  breakpoints: {
    xs: 'only screen and (max-width: 400px)',
    sm: 'only screen and (max-width: 600px)',
    md: 'only screen and (max-width: 960px)',
    lg: 'only screen and (max-width: 1280px)',
    xl: 'only screen and (max-width: 1920px)',
  },

  animations: { transition: 'all 0.3s ease' },

  shadows: {
    shadow1: '',
    shadow2: '',
    shadow3: '',
  },

  borderRadius: '4px',

  transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
};
