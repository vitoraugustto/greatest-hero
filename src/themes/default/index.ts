import { DefaultTheme } from 'styled-components';

import { purple, violet } from './colors';

export const defaultTheme: DefaultTheme = {
  name: 'Tema padrão',
  typography: {
    body: {
      color: '#caa5fa',
      fontFamily: 'Courier New',
      fontSize: '1em',
      fontWeight: 'normal',
      letterSpacing: '0px',
    },
    title: {
      color: '#fff',
      fontFamily: 'Courier New',
      fontSize: '26px',
      fontWeight: 'bold',
      letterSpacing: '0px',
    },
    button: {
      color: '#caa5fa',
      fontFamily: 'Courier New',
      fontSize: '22px',
      fontWeight: 'bold',
      letterSpacing: '2px',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      300: violet[300],
      main: violet.main,
      500: violet[500],
      600: violet[600],
      700: violet[700],
    },
    secondary: {
      300: purple[300],
      main: purple.main,
      500: purple[500],
      600: purple[600],
      700: purple[700],
    },
  },
};
