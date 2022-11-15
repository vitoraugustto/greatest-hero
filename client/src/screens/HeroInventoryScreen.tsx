import { useEffect, useState } from 'react';

import { Background, Row, SlotItem, Spacer, Text } from '../components';
import { ConfirmModal } from '../components/Modals/ConfirmModal';
import { IItem } from '../components/SlotItem/SlotItem.types';
import { fetchInventory, removeFromInventory } from '../services/hero';

export const HeroInventoryScreen = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IItem>({
    _id: '',
    name: '',
    image: '',
    status: { attack: 0, defense: 0 },
    gold: 0,
    type: '',
  });

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

  const handleClick = (item: IItem): void => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleFetchInventory = () => {
    fetchInventory().then((res) => {
      setItems(res.data);
    });
  };

  const sellItem = () => {
    removeFromInventory(selectedItem._id).then(() => {
      closeModal();
      handleFetchInventory();
    });
  };

  useEffect(() => {
    handleFetchInventory();
  }, []);

  return (
    <Background>
      <Text as="h1" weight="bold" color="#fff">
        Inventário
      </Text>

      <Row flexWrap>
        {items.map((item: IItem) => (
          <Spacer key={item._id} mr={26} mt={26}>
            <SlotItem onClick={() => handleClick(item)} item={item} />
          </Spacer>
        ))}
      </Row>
      <ConfirmModal
        isModalOpen={isModalOpen}
        onConfirm={sellItem}
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
