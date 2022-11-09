import { ModalProvider } from 'styled-react-modal';

import { Routes } from './routes';

const App = () => {
  return (
    <ModalProvider>
      <Routes />
    </ModalProvider>
  );
};

export default App;
