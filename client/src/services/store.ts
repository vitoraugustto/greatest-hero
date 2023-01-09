import { AxiosPromise } from 'axios';

import { IItem } from '../components/SlotItem/SlotItem.types';
import { instance } from './axios';

export const purchaseItem = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `/api/v1/store/${itemId}/purchase`, method: 'POST' });
