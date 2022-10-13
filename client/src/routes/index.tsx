import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import GlobalStyle from '../components/GlobalStyle';
import { HeroInventoryScreen } from '../screens/HeroInventoryScreen';
import { HeroStoreScreen } from '../screens/HeroStoreScreen';
import { MenuScreen } from '../screens/MenuScreen';

export const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <_Routes>
        <Route path="/" element={<MenuScreen />} />
        <Route path="/store" element={<HeroStoreScreen />} />
        <Route path="/hero/inventory" element={<HeroInventoryScreen />} />
      </_Routes>
    </Router>
  );
};
