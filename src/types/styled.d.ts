import 'styled-components';

import { Color } from '@common/interfaces';

declare module 'styled-components' {
  interface DefaultTheme {
    name: string;
    typography: {
      body: {
        color: Color;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      title: {
        color: Color;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      button: {
        color: Color;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
    };
    palette: {
      mode: 'light' | 'dark';
      primary: {
        300: Color;
        main: Color;
        500: Color;
        600: Color;
        700: Color;
      };
      secondary: {
        300: Color;
        main: Color;
        500: Color;
        600: Color;
        700: Color;
      };
    };
  }
}
