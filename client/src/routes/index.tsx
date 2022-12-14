import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import { Toast } from '../components';
import GlobalStyle from '../components/GlobalStyle';
import { HeroInventoryScreen } from '../screens/HeroInventoryScreen';
import { HeroStoreScreen } from '../screens/HeroStoreScreen';
import { MenuScreen } from '../screens/MenuScreen';

export const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <Toast />
      <_Routes>
        <Route path="/" element={<MenuScreen />} />
        <Route path="/store" element={<HeroStoreScreen />} />
        <Route path="/hero/inventory" element={<HeroInventoryScreen />} />
      </_Routes>
    </Router>
  );
};
