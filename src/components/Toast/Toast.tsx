import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IToast } from './Toast.types';

export const Toast: React.FC<IToast> = ({ theme = 'dark' }) => (
  <ToastContainer theme={theme} position="bottom-center" />
);
