import { useState } from 'react';
import { useTheme } from 'styled-components';

import { INIT_ITEM } from '../../common/constants';
import { IItem } from '../../common/interfaces';
import {
  Aside,
  Background,
  Box,
  ConfirmModal,
  Row,
  SlotItem,
  Spacer,
  Text,
} from '../../components';
import { useStore } from '../../hooks/useStore';

export const StoreScreen = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IItem>(INIT_ITEM);

  const { store, purchaseItem } = useStore();
  const theme = useTheme();

  const handleClick = (item: IItem): void => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handlePurchaseItem = () => {
    purchaseItem(selectedItem._id).then(closeModal);
  };

  return (
    <Background>
      <Aside>
        <Box gap={18}>
          <Text
            align="center"
            as="h1"
            weight="bold"
            color={theme.typography.title.color}
            size={26}
          >
            Loja
          </Text>
          <Row gap={26} flexWrap>
            {store.map((item) => (
              <SlotItem
                key={item._id}
                size="small"
                onClick={() => handleClick(item)}
                item={item}
              />
            ))}
          </Row>
        </Box>
        <ConfirmModal
          isModalOpen={isModalOpen}
          onConfirm={handlePurchaseItem}
          onCancel={closeModal}
        >
          <Text size={20}>
            Você deseja comprar o item "{selectedItem.name}"?
          </Text>
          <Spacer mt={8} />
          <Text color="gold">
            Vai te custar {selectedItem.gold} moedas de ouro.
          </Text>
          <Spacer mt={16} />
        </ConfirmModal>
      </Aside>
    </Background>
  );
};
