import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import { INIT_ITEM } from '../../common/constants';
import { IItem } from '../../common/interfaces';
import {
  Aside,
  Background,
  Box,
  ConfirmModal,
  FloatingOptions,
  Row,
  SlotItem,
  Spacer,
  Text,
} from '../../components';
import { IOption } from '../../components/FloatingOptions/FloatingOptions.types';
import { useHero } from '../../hooks/useHero';

export const InventoryScreen = () => {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [isFloatingOptionsVisible, setFloatingOptionsVisible] =
    useState<boolean>(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [options, setOptions] = useState<IOption[] | []>([]);

  const { inventory, sellItem, equipItem } = useHero();
  const theme = useTheme();

  const handleSlotClick = (
    item: IItem,
    coords: { x: number; y: number },
    _options: IOption[]
  ): void => {
    selectedItem = item;

    setOptions(_options);
    setCoords({ x: coords.x, y: coords.y });
    setFloatingOptionsVisible(true);
  };

  const closeConfirmModal = () => setConfirmModalOpen(false);
  const closeFloatingOptions = () => setFloatingOptionsVisible(false);

  const handleEquipItem = () => {
    equipItem(selectedItem._id).then(closeFloatingOptions);
  };

  const handleSellItem = () => {
    sellItem(selectedItem._id).then(() => {
      closeFloatingOptions();
      closeConfirmModal();
    });
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeFloatingOptions();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <Background>
      <Aside>
        <Box gap={18}>
          <Text
            align="center"
            as="h1"
            weight="bold"
            color={theme.colors.font.title}
          >
            Inventário
          </Text>
          <Inventory
            inventory={inventory}
            onSlotClick={(data) => {
              handleSlotClick(
                data.item,
                {
                  x: data.e.pageX,
                  y: data.e.pageY,
                },
                [
                  { label: 'Equipar', onClick: handleEquipItem },
                  { label: 'Vender', onClick: () => setConfirmModalOpen(true) },
                ]
              );
            }}
          />
        </Box>
        <ConfirmModal
          isModalOpen={isConfirmModalOpen}
          onConfirm={handleSellItem}
          onCancel={closeConfirmModal}
        >
          <Text size={20}>
            Você deseja vender o item "{selectedItem.name}"?
          </Text>
          <Spacer mt={8} />
          <Text color="gold">
            Você receberá {selectedItem.gold} moedas de ouro.
          </Text>
          <Spacer mt={16} />
        </ConfirmModal>
        <FloatingOptions
          x={coords.x}
          y={coords.y}
          isVisible={isFloatingOptionsVisible}
          options={options}
        />
      </Aside>
    </Background>
  );
};

interface IInventory {
  inventory: IItem[];
  onSlotClick: ({ e, item }: { e: MouseEvent; item: IItem }) => void;
}

const Inventory: React.FC<IInventory> = ({ inventory, onSlotClick }) => {
  return (
    <Box>
      <Row gap={26} hCenter flexWrap>
        {inventory.length ? (
          inventory.map((item) => (
            <SlotItem
              key={item._id}
              size="small"
              infos={false}
              onClick={(e) => onSlotClick({ e, item })}
              item={item}
            />
          ))
        ) : (
          <Text>Inventário vazio. 🙁</Text>
        )}
      </Row>
    </Box>
  );
};

let selectedItem: IItem = INIT_ITEM;
