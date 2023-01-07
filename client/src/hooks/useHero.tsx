import { useEffect, useState } from 'react';

import { IItem } from '../components/SlotItem/SlotItem.types';
import {
  equipItem as _equipItem,
  unequipItem as _unequipItem,
  fetchHero,
  removeFromInventory,
  storeInInventory,
} from '../services/hero';
import { useToast } from './useToast';

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
  const toast = useToast();
  const [hero, setHero] = useState<IHero>(initHero);

  const handleFetchHero = () => {
    fetchHero().then((res) => setHero(res.data));
  };

  const equipItem = (itemId: IItem['_id']) =>
    toast.promise(
      new Promise((resolve, reject) =>
        _equipItem(itemId)
          .then((res) => {
            handleFetchHero();
            resolve(res);
          })
          .catch(reject)
      ),
      {
        pending: 'Equipando item...',
        success: 'Item equipado com sucesso.',
        error: GENERIC_ERROR_MESSAGE,
      }
    );

  const unequipItem = (itemId: IItem['_id']) =>
    toast.promise(
      new Promise((resolve, reject) =>
        _unequipItem(itemId)
          .then((res) => {
            handleFetchHero();
            resolve(res);
          })
          .catch(reject)
      ),
      {
        pending: 'Desequipando item...',
        success: 'Item desequipado com sucesso.',
        error: GENERIC_ERROR_MESSAGE,
      }
    );

  const buyItem = (itemId: IItem['_id']) =>
    new Promise((resolve, reject) =>
      toast.promise(storeInInventory(itemId).then(resolve).catch(reject), {
        pending: 'Comprando item...',
        success: 'Item comprado com sucesso.',
        error: GENERIC_ERROR_MESSAGE,
      })
    );

  const sellItem = (itemId: IItem['_id']) =>
    toast.promise(
      new Promise((resolve, reject) =>
        removeFromInventory(itemId)
          .then((res) => {
            handleFetchHero();
            resolve(res);
          })
          .catch(reject)
      ),
      {
        pending: 'Vendendo item...',
        success: 'Item vendido com sucesso.',
        error: GENERIC_ERROR_MESSAGE,
      }
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
    buyItem,
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

const GENERIC_ERROR_MESSAGE =
  'Oops, algo deu errado. Por favor, tente novamente mais tarde.';
