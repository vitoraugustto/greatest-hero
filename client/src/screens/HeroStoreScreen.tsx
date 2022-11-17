import { useEffect, useState } from 'react';

import {
  Background,
  Box,
  Button,
  Link,
  Row,
  SlotItem,
  Spacer,
  Text,
} from '../components';
import { ConfirmModal } from '../components/Modals/ConfirmModal';
import { IItem } from '../components/SlotItem/SlotItem.types';
import { storeInInventory } from '../services/hero';
import { fetchItems } from '../services/items';

export const HeroStoreScreen = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IItem>({
    _id: '',
    name: '',
    image: '',
    status: { attack: 0, defense: 0 },
    gold: 0,
    type: '',
  });
  const [items, setItems] = useState<IItem[]>([
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

  const handleClick = (item: IItem): void => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const buyItem = () =>
    storeInInventory(selectedItem._id).then(() => closeModal());

  useEffect(() => {
    handleFetchItems();
  }, []);

  return (
    <Background>
      <Box gap={18}>
        <Text align="center" as="h1" weight="bold" color="#fff">
          Loja do Herói
        </Text>
        <Row gap={18} hCenter>
          <Link to="/hero/inventory">
            <Button text="Inventário" />
          </Link>
          <Link to="/">
            <Button text="Menu" />
          </Link>
        </Row>
        <Row hCenter gap={26} flexWrap>
          {items.map((item) => (
            <SlotItem
              key={item._id}
              onClick={() => handleClick(item)}
              item={item}
            />
          ))}
        </Row>
      </Box>
      <ConfirmModal
        isModalOpen={isModalOpen}
        onConfirm={buyItem}
        onCancel={closeModal}
      >
        <Text size={20}>Você deseja comprar o item "{selectedItem.name}"?</Text>
        <Spacer mt={8} />
        <Text color="gold">
          Vai te custar {selectedItem.gold} moedas de ouro.
        </Text>
        <Spacer mt={16} />
      </ConfirmModal>
    </Background>
  );
};
