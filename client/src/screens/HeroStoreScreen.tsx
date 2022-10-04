import { useEffect, useState } from 'react';

import Background from '../components/Layout/Background';
import Spacer from '../components/Layout/Spacer';
import SlotItem, { IItem } from '../components/SlotItem/SlotItem';
import Text from '../components/Text/Text';
import { fetchItems } from '../services/items';

export const HeroStoreScreen = () => {
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

  const handleFetchItems = async (): Promise<void> => {
    fetchItems()
      .then(({ data }) => setItems(data))
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    handleFetchItems();
  }, []);

  return (
    <Background>
      <Text as="h1" weight="bold" color="#fff">
        Loja do Herói
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
            <SlotItem item={item} />
          </Spacer>
        ))}
      </div>
    </Background>
  );
};