import { DefaultTheme } from 'styled-components';

import { violet } from '../default/colors';
import { black } from './colors';

export const darkTheme: DefaultTheme = {
  name: 'Tema escuro',
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
    primary: {
      300: violet[300],
      main: violet.main,
      500: violet[500],
      600: violet[600],
      700: violet[700],
    },
    secondary: {
      300: black[300],
      main: black.main,
      500: black[500],
      600: black[600],
      700: black[700],
    },
  },
};
