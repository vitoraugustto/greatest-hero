import { useEffect, useState } from 'react';

import {
  Background,
  Box,
  Button,
  FloatingOptions,
  Link,
  Row,
  SlotItem,
  Spacer,
  Text,
} from '../components';
import { IOption } from '../components/FloatingOptions/FloatingOptions.types';
import { ConfirmModal } from '../components/Modals/ConfirmModal';
import { IItem } from '../components/SlotItem/SlotItem.types';
import { useHero } from '../hooks/useHero';

export const HeroInventoryScreen = () => {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [isFloatingOptionsVisible, setFloatingOptionsVisible] =
    useState<boolean>(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [options, setOptions] = useState<IOption[]>([
    { label: '', onClick: () => null },
  ]);
  const { inventory, sellItem, equipItem, unequipItem, equippedItems } =
    useHero();

  const handleSlotClick = (
    item: IItem,
    coords: { x: number; y: number }
  ): void => {
    selectedItem = item;

    setCoords({ x: coords.x, y: coords.y });
    setFloatingOptionsVisible(true);
  };

  const closeConfirmModal = () => setConfirmModalOpen(false);
  const closeFloatingOptions = () => setFloatingOptionsVisible(false);

  const handleEquipItem = () => {
    equipItem(selectedItem._id).then(closeFloatingOptions);
  };

  const handleUnequipItem = () => {
    unequipItem(selectedItem._id).then(closeFloatingOptions);
  };

  const handleSellItem = () => {
    sellItem(selectedItem._id).then(closeConfirmModal);
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
      <Box gap={18}>
        <Text align="center" as="h1" weight="bold" color="#fff">
          Herói
        </Text>
        <Row gap={18} hCenter>
          <Link to="/store">
            <Button text="Loja" />
          </Link>
          <Link to="/">
            <Button text="Menu" />
          </Link>
        </Row>
        <Row gap={18}>
          <Inventory
            inventory={inventory}
            onSlotClick={(data) => {
              setOptions([
                { label: 'Equipar', onClick: handleEquipItem },
                { label: 'Vender', onClick: () => setConfirmModalOpen(true) },
              ]);
              handleSlotClick(data.item, {
                x: data.e.clientX,
                y: data.e.clientY,
              });
            }}
          />
          <EquippedItems
            equippedItems={equippedItems}
            onSlotClick={(data) => {
              setOptions([{ label: 'Desequipar', onClick: handleUnequipItem }]);
              handleSlotClick(
                equippedItems.find((item) => item.type === 'botas') || initItem,
                {
                  x: data.e.clientX,
                  y: data.e.clientY,
                }
              );
            }}
          />
        </Row>
      </Box>
      <ConfirmModal
        isModalOpen={isConfirmModalOpen}
        onConfirm={handleSellItem}
        onCancel={closeConfirmModal}
      >
        <Text size={20}>Você deseja vender o item "{selectedItem.name}"?</Text>
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
    </Background>
  );
};

interface IEquippedItems {
  equippedItems: IItem[];
  onSlotClick: ({ e }: { e: MouseEvent }) => void;
}

const EquippedItems: React.FC<IEquippedItems> = ({
  equippedItems,
  onSlotClick,
}) => {
  return (
    <Box hCenter flex>
      <Text align="center" size={20} weight="bold">
        Equipados
      </Text>
      <Spacer mt={16} />
      <EmptySlot text="Cabeça" />
      <Spacer mt={8} />
      <Row gap={8} hCenter>
        <EmptySlot text="Mão direita" />
        <EmptySlot text="Peitoral" />
        <EmptySlot text="Mão esquerda" />
      </Row>
      <Spacer mt={8} />
      <Row gap={8} hCenter>
        <EmptySlot text="Mãos" />
        <EmptySlot text="Pernas" />
        {equippedItems.find((item) => item.type === 'botas') ? (
          <SlotItem
            key={equippedItems.find((item) => item.type === 'botas')?._id}
            size="small"
            infos={false}
            onClick={(e) => onSlotClick({ e })}
            item={
              equippedItems.find((item) => item.type === 'botas') || initItem
            }
          />
        ) : (
          <EmptySlot text="Pés" />
        )}
      </Row>
    </Box>
  );
};

interface IInventory {
  inventory: IItem[];
  onSlotClick: ({ e, item }: { e: MouseEvent; item: IItem }) => void;
}

const Inventory: React.FC<IInventory> = ({ inventory, onSlotClick }) => {
  return (
    <Box>
      <Text align="center" size={20} weight="bold">
        Inventário
      </Text>
      <Spacer mt={16} />
      <Row gap={26} hCenter flexWrap>
        {inventory.map((item) => (
          <SlotItem
            key={item._id}
            size="small"
            infos={false}
            onClick={(e) => onSlotClick({ e, item })}
            item={item}
          />
        ))}
      </Row>
    </Box>
  );
};

const EmptySlot: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Box
      hCenter
      vCenter
      height={154}
      width={180}
      borderRadius={8}
      bgColor="#302a54"
    >
      <Text>{text}</Text>
    </Box>
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

let selectedItem: IItem = initItem;
