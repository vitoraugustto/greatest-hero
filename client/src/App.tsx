import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import { Toast } from './components';
import GlobalStyle from './components/GlobalStyle';
import { Routes } from './routes';
import { purple } from './themes/purple';

export const App = () => {
  return (
    <ThemeProvider theme={purple}>
      <ModalProvider>
        <GlobalStyle />
        <Toast />
        <Routes />
      </ModalProvider>
    </ThemeProvider>
  );
};
