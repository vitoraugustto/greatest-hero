import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import { HeroInventoryScreen } from '../screens/HeroInventoryScreen';
import { HeroStoreScreen } from '../screens/HeroStoreScreen';

export const Routes = () => {
  return (
    <Router>
      <_Routes>
        <Route path="/store" element={<HeroStoreScreen />} />
        <Route path="/hero/inventory" element={<HeroInventoryScreen />} />
      </_Routes>
    </Router>
  );
};
