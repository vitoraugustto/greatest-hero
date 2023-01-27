import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GENERIC_ERROR_MESSAGE } from '../common/constants';
import { IItem } from '../common/interfaces';
import {
  equipItem as _equipItem,
  sellItem as _sellItem,
  unequipItem as _unequipItem,
} from '../services/hero';
import { AppDispatch, RootState } from '../store';
import { fetchHeroAction } from '../store/actions/hero';
import { useToast } from './useToast';

export const useHero = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hero = useSelector((state: RootState) => state.hero);
  const toast = useToast();

  const handleFetchHero = () => {
    dispatch(fetchHeroAction());
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
    if (!hero.name) {
      handleFetchHero();
    }
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
