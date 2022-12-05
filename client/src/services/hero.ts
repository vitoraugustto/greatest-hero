import { AxiosPromise } from 'axios';

import { IItem } from '../components/SlotItem/SlotItem.types';
import { IHero } from '../hooks/useHero';
import { instance } from './axios';

export const fetchHero = (): AxiosPromise<IHero> =>
  instance({ url: 'api/v1/hero' });

export const equipItem = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `api/v1/hero/equip-item/${itemId}`, method: 'POST' });

export const unequipItem = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `api/v1/hero/unequip-item/${itemId}`, method: 'PUT' });

export const storeInInventory = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `api/v1/hero/inventory/${itemId}`, method: 'POST' });

export const removeFromInventory = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `api/v1/hero/inventory/${itemId}`, method: 'PUT' });
