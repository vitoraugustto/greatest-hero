import { useEffect, useState } from 'react';

import { IItem } from '../components/SlotItem/SlotItem.types';
import {
  equipItem as _equipItem,
  unequipItem as _unequipItem,
  fetchHero,
  removeFromInventory,
  storeInInventory,
} from '../services/hero';

export interface IHero {
  name: string;
  role: string;
  status: {
    attack: number;
    defense: number;
    hp: number;
  };
  inventory: IItem[];
  equippedItems: IItem[];
}

export const useHero = () => {
  const [hero, setHero] = useState<IHero>(initHero);

  const handleFetchHero = () => {
    fetchHero().then((res) => setHero(res.data));
  };

  const equipItem = (itemId: IItem['_id']) =>
    new Promise((resolve, reject) =>
      _equipItem(itemId)
        .then((res) => {
          handleFetchHero();
          resolve(res);
        })
        .catch(reject)
    );

  const unequipItem = (itemId: IItem['_id']) =>
    new Promise((resolve, reject) =>
      _unequipItem(itemId)
        .then((res) => {
          handleFetchHero();
          resolve(res);
        })
        .catch(reject)
    );

  const storeItem = (itemId: IItem['_id']) =>
    new Promise((resolve, reject) =>
      storeInInventory(itemId)
        .then((res) => {
          handleFetchHero();
          resolve(res);
        })
        .catch(reject)
    );

  const sellItem = (itemId: IItem['_id']) =>
    new Promise((resolve, reject) =>
      removeFromInventory(itemId)
        .then((res) => {
          handleFetchHero();
          resolve(res);
        })
        .catch(reject)
    );

  useEffect(() => {
    handleFetchHero();
  }, []);

  return {
    hero: { name: hero.name, role: hero.role, status: hero.status },
    equippedItems: hero.equippedItems,
    inventory: hero.inventory,
    equipItem,
    unequipItem,
    storeItem,
    sellItem,
  };
};

const initHero = {
  name: '',
  role: '',
  status: {
    attack: 0,
    defense: 0,
    hp: 0,
  },
  inventory: [],
  equippedItems: [],
};
