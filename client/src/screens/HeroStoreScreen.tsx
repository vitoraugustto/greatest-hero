import { useEffect, useState } from 'react';

import Background from '../components/Layout/Background';
import Spacer from '../components/Layout/Spacer';
import { Link } from '../components/Link/Link';
import SlotItem, { IItem } from '../components/SlotItem/SlotItem';
import Text from '../components/Text/Text';
import { storeInInventory } from '../services/hero';
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
    fetchItems().then(({ data }) => setItems(data));
  };

  useEffect(() => {
    handleFetchItems();
  }, []);

  return (
    <Background>
      <Text as="h1" weight="bold" color="#fff">
        Loja do Herói
      </Text>
      <Spacer mt={12} />
      <Link to="/hero/inventory">
        <Text>Ir para o inventário</Text>
      </Link>
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
            <SlotItem onClick={storeInInventory} item={item} />
          </Spacer>
        ))}
      </div>
    </Background>
  );
};
