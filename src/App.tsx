import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import { Toast } from '@components';

import GlobalStyle from './components/GlobalStyle';
import { Routes } from './routes';
import { darkTheme } from './themes/dark';

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ModalProvider>
        <GlobalStyle />
        <Toast />
        <Routes />
      </ModalProvider>
    </ThemeProvider>
  );
};
