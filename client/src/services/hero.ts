import { AxiosPromise } from 'axios';

import { IItem } from '../components/SlotItem/SlotItem.types';
import { instance } from './axios';

export const fetchHero = (): AxiosPromise<{ inventory: IItem[] }> =>
  instance({ url: 'api/v1/hero' });

export const storeInInventory = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `api/v1/hero/inventory/${itemId}`, method: 'POST' });

export const removeFromInventory = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `api/v1/hero/inventory/${itemId}`, method: 'PUT' });
