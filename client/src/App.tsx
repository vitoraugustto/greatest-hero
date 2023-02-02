import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import { Toast } from './components';
import GlobalStyle from './components/GlobalStyle';
import { Routes } from './routes';
import { defaultTheme } from './themes/default/theme';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <GlobalStyle />
        <Toast />
        <Routes />
      </ModalProvider>
    </ThemeProvider>
  );
};
