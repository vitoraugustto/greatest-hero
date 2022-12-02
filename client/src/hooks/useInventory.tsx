import { useEffect, useState } from 'react';

import { IItem } from '../components/SlotItem/SlotItem.types';
import {
  fetchHero,
  removeFromInventory,
  storeInInventory,
} from '../services/hero';

export const useInventory = () => {
  const [inventory, setInventory] = useState<IItem[]>([]);

  const handleFetchInventory = () => {
    fetchHero().then((res) => setInventory(res.data.inventory));
  };

  const storeItem = (itemId: IItem['_id']) =>
    new Promise((resolve) =>
      storeInInventory(itemId).then(() => {
        handleFetchInventory();
        resolve({ message: 'Item stored.' });
      })
    );

  const sellItem = (itemId: IItem['_id']) =>
    new Promise((resolve) =>
      removeFromInventory(itemId).then(() => {
        handleFetchInventory();
        resolve({ message: 'Item sold.' });
      })
    );

  useEffect(() => {
    handleFetchInventory();
  }, []);

  return { inventory, storeItem, sellItem };
};
