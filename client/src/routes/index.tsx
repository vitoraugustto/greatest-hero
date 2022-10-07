import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import GlobalStyle from '../components/GlobalStyle';
import { HeroStoreScreen } from '../screens/HeroStoreScreen';

export const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <_Routes>
        <Route path="/" element={<HeroStoreScreen />} />
      </_Routes>
    </Router>
  );
};
