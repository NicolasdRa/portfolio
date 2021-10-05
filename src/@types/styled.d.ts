import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    typography: {
      letterSpacing: string;
    };

    colors: {
      primary0: string;
      primary1: string;
      primary2: string;
      primary3: string;
      primary4: string;
      primary5: string;

      white: string;
      background: string;

      black: string;

      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
      grey5: string;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    animations: {
      transition: string;
    };

    shadows: {
      shadow1: string;
      shadow2: string;
      shadow3: string;
    };

    borderRadius: string;

    transition: string;
  }
}
