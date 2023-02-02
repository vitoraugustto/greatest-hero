import 'styled-components';

import { Color } from '../common/interfaces';

declare module 'styled-components' {
  interface DefaultTheme {
    name: string;
    typography: {
      body: {
        color: Color;
        fontFamily: string;
        fontSize: number;
        letterSpacing: number;
        lineHeight: number;
      };
      title: {
        color: Color;
        fontFamily: string;
        fontSize: number;
        letterSpacing: number;
        lineHeight: number;
      };
    };
    palette: {
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
