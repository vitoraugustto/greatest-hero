import { ModalProvider } from 'styled-react-modal';

import { Routes } from './routes';

export const App = () => {
  return (
    <ModalProvider>
      <Routes />
    </ModalProvider>
  );
};
