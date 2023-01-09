import { AxiosPromise } from 'axios';

import { IItem } from '../components/SlotItem/SlotItem.types';
import { instance } from './axios';

export const fetchItems = (): AxiosPromise<IItem[]> =>
  instance({ url: '/api/v1/items' });
