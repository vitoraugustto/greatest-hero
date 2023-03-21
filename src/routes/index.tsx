import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import { EnemiesScreen } from '@screens/Combat/EnemiesScreen';
import { EquipmentScreen } from '@screens/Hero/EquipmentScreen';
import { InventoryScreen } from '@screens/Hero/InventoryScreen';
import { StoreScreen } from '@screens/Store/StoreScreen';

export const Routes = () => {
  return (
    <Router>
      <_Routes>
        <Route path="/" element={<EquipmentScreen />} />
        <Route path="/hero/inventory" element={<InventoryScreen />} />
        <Route path="/store" element={<StoreScreen />} />
        <Route path="/combat" element={<EnemiesScreen />} />
      </_Routes>
    </Router>
  );
};
