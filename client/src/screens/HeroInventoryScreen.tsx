import { useState } from 'react';

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
import { useHero } from '../hooks/useHero';

export const HeroInventoryScreen = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IItem>(initItem);
  const { hero, inventory, sellItem } = useHero();

  const closeModal = () => setModalOpen(false);

  const handleClick = (item: IItem): void => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  console.log(hero);

  const handleSellItem = () => {
    sellItem(selectedItem._id).then(closeModal);
  };

  return (
    <Background>
      <Box gap={18}>
        <Text align="center" as="h1" weight="bold" color="#fff">
          Inventário
        </Text>
        <Row gap={18} hCenter>
          <Link to="/store">
            <Button text="Loja" />
          </Link>
          <Link to="/">
            <Button text="Menu" />
          </Link>
        </Row>
        <Row gap={26} hCenter flexWrap>
          {inventory.map((item) => (
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
        onConfirm={handleSellItem}
        onCancel={closeModal}
      >
        <Text size={20}>Você deseja vender o item "{selectedItem.name}"?</Text>
        <Spacer mt={8} />
        <Text color="gold">
          Você receberá {selectedItem.gold} moedas de ouro.
        </Text>
        <Spacer mt={16} />
      </ConfirmModal>
    </Background>
  );
};

const initItem = {
  _id: '',
  name: '',
  image: '',
  status: { attack: 0, defense: 0 },
  gold: 0,
  type: '',
};
