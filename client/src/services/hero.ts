import { AxiosPromise } from 'axios';

import { IItem } from '../components/SlotItem/SlotItem.types';
import { IHero } from '../hooks/useHero';
import { instance } from './axios';

export const fetchHero = (): AxiosPromise<IHero> =>
  instance({ url: '/api/v1/hero' });

export const equipItem = (itemId: IItem['_id']): AxiosPromise =>
  instance({
    url: `/api/v1/hero/inventory/${itemId}/equipment`,
    method: 'POST',
  });

export const unequipItem = (itemId: IItem['_id']): AxiosPromise =>
  instance({
    url: `/api/v1/hero/inventory/${itemId}/equipment`,
    method: 'PUT',
  });

export const sellItem = (itemId: IItem['_id']): AxiosPromise =>
  instance({ url: `/api/v1/hero/inventory/${itemId}/sell`, method: 'PUT' });
