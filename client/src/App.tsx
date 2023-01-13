import { ModalProvider } from 'styled-react-modal';

import { Toast } from './components';
import GlobalStyle from './components/GlobalStyle';
import { Routes } from './routes';

export const App = () => {
  return (
    <ModalProvider>
      <GlobalStyle />
      <Toast />
      <Routes />
    </ModalProvider>
  );
};
