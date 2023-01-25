import { useEffect, useState } from 'react';

import { GENERIC_ERROR_MESSAGE } from '../common/constants';
import { IItem } from '../common/interfaces';
import { purchaseItem as _purchaseItem, fetchStore } from '../services/store';
import { useToast } from './useToast';

export const useStore = () => {
  const [store, setStore] = useState<IItem[]>([]);
  const toast = useToast();

  const handleFetchStore = () => {
    fetchStore().then(({ data }) => setStore(data));
  };

  const purchaseItem = (itemId: IItem['_id']) =>
    new Promise((resolve, reject) =>
      toast.promise(_purchaseItem(itemId).then(resolve).catch(reject), {
        pending: 'Comprando item...',
        success: 'Item comprado com sucesso.',
        error: GENERIC_ERROR_MESSAGE,
      })
    );

  useEffect(() => {
    handleFetchStore();
  }, []);

  return { store, purchaseItem };
};
