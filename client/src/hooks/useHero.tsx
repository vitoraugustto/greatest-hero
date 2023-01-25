import { useEffect, useState } from 'react';

import { INIT_HERO } from '../common/constants';
import { IHero, IItem } from '../common/interfaces';
import {
  equipItem as _equipItem,
  sellItem as _sellItem,
  unequipItem as _unequipItem,
  fetchHero,
} from '../services/hero';
import { useToast } from './useToast';

export const useHero = () => {
  const [hero, setHero] = useState<IHero>(INIT_HERO);
  const toast = useToast();

  const handleFetchHero = () => {
    fetchHero().then(({ data }) => setHero(data));
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

  const sellItem = (itemId: IItem['_id']) =>
    toast.promise(
      new Promise((resolve, reject) =>
        _sellItem(itemId)
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
    hero: {
      name: hero.name,
      role: hero.role,
      status: hero.status,
      gold: hero.gold,
    },
    equipment: hero.equipment,
    inventory: hero.inventory,
    equipItem,
    unequipItem,
    sellItem,
  };
};

const GENERIC_ERROR_MESSAGE =
  'Oops, algo deu errado. Por favor, tente novamente mais tarde.';
