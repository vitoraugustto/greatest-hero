import { useEffect, useState } from 'react';

import {
  Aside,
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
  const [options, setOptions] = useState<IOption[] | []>([]);
  const { inventory, equipment, sellItem, equipItem, unequipItem } = useHero();

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

  const handleUnequipItem = () => {
    unequipItem(selectedItem._id).then(closeFloatingOptions);
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
          <Text align="center" as="h1" weight="bold" color="#fff">
            Herói
          </Text>
          <Equipment
            equipment={equipment}
            onSlotClick={(data) => {
              handleSlotClick(
                equipment.find((item) => item.type === data.item.type) ||
                  initItem,
                {
                  x: data.e.pageX,
                  y: data.e.pageY,
                },
                [{ label: 'Desequipar', onClick: handleUnequipItem }]
              );
            }}
          />
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

interface IEquipment {
  equipment: IItem[];
  onSlotClick: ({ e, item }: { e: MouseEvent; item: IItem }) => void;
}

const Equipment: React.FC<IEquipment> = ({ equipment, onSlotClick }) => {
  return (
    <Box hCenter flex>
      <Text align="center" size={20} weight="bold">
        Equipamento
      </Text>
      <Spacer mt={16} />
      <MaybeSlotItem
        equipment={findItemByType(equipment, 'head')}
        emptySlotText="Cabeça"
        onSlotClick={onSlotClick}
      />
      <Spacer mt={8} />
      <Row gap={8} hCenter>
        <MaybeSlotItem
          equipment={findItemByType(equipment, 'lefthand')}
          emptySlotText="Mão esquerda"
          onSlotClick={onSlotClick}
        />
        <MaybeSlotItem
          equipment={findItemByType(equipment, 'chest')}
          emptySlotText="Peitoral"
          onSlotClick={onSlotClick}
        />
        <MaybeSlotItem
          equipment={findItemByType(equipment, 'righthand')}
          emptySlotText="Mão direita"
          onSlotClick={onSlotClick}
        />
      </Row>
      <Spacer mt={8} />
      <Row gap={8} hCenter>
        <MaybeSlotItem
          equipment={findItemByType(equipment, 'hands')}
          emptySlotText="Mãos"
          onSlotClick={onSlotClick}
        />
        <MaybeSlotItem
          equipment={findItemByType(equipment, 'legs')}
          emptySlotText="Pernas"
          onSlotClick={onSlotClick}
        />
        <MaybeSlotItem
          equipment={findItemByType(equipment, 'feet')}
          emptySlotText="Pés"
          onSlotClick={onSlotClick}
        />
      </Row>
    </Box>
  );
};

interface IMaybeSlotItem {
  equipment?: IItem;
  onSlotClick: ({ e, item }: { e: MouseEvent; item: IItem }) => void;
  emptySlotText: string;
}

const MaybeSlotItem: React.FC<IMaybeSlotItem> = ({
  equipment,
  onSlotClick,
  emptySlotText,
}) => {
  return equipment ? (
    <SlotItem
      key={equipment._id}
      size="small"
      infos={false}
      onClick={(e) => onSlotClick({ e, item: equipment })}
      item={equipment}
    />
  ) : (
    <Box
      hCenter
      vCenter
      height={154}
      width={180}
      borderRadius={8}
      bgColor="#302a54"
    >
      <Text>{emptySlotText}</Text>
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

const findItemByType = (items: IItem[], type: string): IItem | undefined => {
  return items.find((item) => item.type === type);
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
