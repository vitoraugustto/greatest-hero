import { useEffect, useState } from 'react';

import { IItem } from '../components/SlotItem/SlotItem.types';
import {
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

  const storeItem = (itemId: IItem['_id']) =>
    new Promise((resolve) =>
      storeInInventory(itemId).then(() => {
        handleFetchHero();
        resolve({ message: 'Item stored.' });
      })
    );

  const sellItem = (itemId: IItem['_id']) =>
    new Promise((resolve) =>
      removeFromInventory(itemId).then(() => {
        handleFetchHero();
        resolve({ message: 'Item sold.' });
      })
    );

  useEffect(() => {
    handleFetchHero();
  }, []);

  return {
    hero: { name: hero.name, role: hero.role, status: hero.status },
    equippedItems: hero.equippedItems,
    inventory: hero.inventory,
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
