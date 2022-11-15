import { AxiosPromise } from 'axios';

import { IItem } from '../components/SlotItem/SlotItem.types';
import { instance } from './axios';

export const fetchInventory = (): AxiosPromise<[IItem]> =>
  instance({ url: 'api/v1/hero/inventory' });

export const storeInInventory = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `api/v1/hero/inventory/${itemId}`, method: 'POST' });

export const removeFromInventory = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `api/v1/hero/inventory/${itemId}`, method: 'PUT' });
