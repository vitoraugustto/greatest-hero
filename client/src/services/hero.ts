import { AxiosPromise } from 'axios';

import { IItem } from '../components/SlotItem/SlotItem';
import { instance } from './axios';

export const storeInInventory = (itemId: IItem['_id']): AxiosPromise<[IItem]> =>
  instance({ url: `api/v1/hero/inventory${itemId}`, method: 'POST' });
