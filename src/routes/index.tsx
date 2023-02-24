import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import { CombatScreen } from '@screens/Combat/CombatScreen';
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
        <Route path="/combat" element={<CombatScreen />} />
      </_Routes>
    </Router>
  );
};
