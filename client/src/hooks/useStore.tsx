import { IItem } from '../components/SlotItem/SlotItem.types';
import { purchaseItem as _purchaseItem } from '../services/store';
import { useToast } from './useToast';

export const useStore = () => {
  const toast = useToast();

  const purchaseItem = (itemId: IItem['_id']) =>
    new Promise((resolve, reject) =>
      toast.promise(_purchaseItem(itemId).then(resolve).catch(reject), {
        pending: 'Comprando item...',
        success: 'Item comprado com sucesso.',
        error: GENERIC_ERROR_MESSAGE,
      })
    );

  return { purchaseItem };
};

const GENERIC_ERROR_MESSAGE =
  'Oops, algo deu errado. Por favor, tente novamente mais tarde.';
