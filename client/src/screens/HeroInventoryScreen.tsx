import { useEffect, useState } from 'react';

import Background from '../components/Layout/Background';
import Spacer from '../components/Layout/Spacer';
import SlotItem, { IItem } from '../components/SlotItem/SlotItem';
import Text from '../components/Text/Text';
import { fetchInventory, removeFromInventory } from '../services/hero';

export const HeroInventoryScreen = () => {
  const [items, setItems] = useState<[IItem]>([
    {
      _id: '',
      name: '',
      image: '',
      status: { attack: 0, defense: 0 },
      gold: 0,
      type: '',
    },
  ]);

  useEffect(() => {
    fetchInventory().then((res) => setItems(res.data));
  }, []);

  return (
    <Background>
      <Text as="h1" weight="bold" color="#fff">
        Inventário
      </Text>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {items.map((item: IItem) => (
          <Spacer key={item._id} mr={26} mt={26}>
            <SlotItem onClick={removeFromInventory} item={item} />
          </Spacer>
        ))}
      </div>
    </Background>
  );
};
