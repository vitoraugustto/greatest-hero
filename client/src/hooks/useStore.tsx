import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { GENERIC_ERROR_MESSAGE } from '@common/constants';
import { IItem } from '@common/interfaces';
import { useToast } from '@hooks/useToast';
import { purchaseItem as _purchaseItem, fetchStore } from '@services/store';

import { AppDispatch } from '../store';
import { fetchHeroAction } from '../store/actions/hero';

export const useStore = () => {
  const [store, setStore] = useState<IItem[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();

  const handleFetchStore = () => {
    fetchStore().then(({ data }) => setStore(data));
  };

  const purchaseItem = (itemId: IItem['_id']) =>
    new Promise((resolve, reject) =>
      toast.promise(
        _purchaseItem(itemId)
          .then((res) => {
            dispatch(fetchHeroAction());
            resolve(res);
          })
          .catch(reject),
        {
          pending: 'Comprando item...',
          success: 'Item comprado com sucesso.',
          error: GENERIC_ERROR_MESSAGE,
        }
      )
    );

  useEffect(() => {
    handleFetchStore();
  }, []);

  return { store, purchaseItem };
};
