import { useState } from 'react';
import { useTheme } from 'styled-components';

import { INIT_ITEM } from '../../common/constants';
import {
  Aside,
  Background,
  Box,
  FloatingOptions,
  Row,
  SlotItem,
  Spacer,
  Text,
} from '../../components';
import { IOption } from '../../components/FloatingOptions/FloatingOptions.types';
import { IItem } from '../../components/SlotItem/SlotItem.types';
import { useHero } from '../../hooks/useHero';

export const EquipmentScreen = () => {
  const [isFloatingOptionsVisible, setFloatingOptionsVisible] =
    useState<boolean>(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [options, setOptions] = useState<IOption[] | []>([]);

  const { equipment, unequipItem } = useHero();
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

  const closeFloatingOptions = () => setFloatingOptionsVisible(false);

  const handleUnequipItem = () => {
    unequipItem(selectedItem._id).then(closeFloatingOptions);
  };

  return (
    <Background>
      <Aside>
        <Text
          align="center"
          as="h1"
          weight="bold"
          color={theme.colors.font.title}
        >
          Equipamento
        </Text>
        <Equipment
          equipment={equipment}
          onSlotClick={(data) => {
            handleSlotClick(
              equipment.find((item) => item.type === data.item.type) ||
                INIT_ITEM,
              {
                x: data.e.pageX,
                y: data.e.pageY,
              },
              [{ label: 'Desequipar', onClick: handleUnequipItem }]
            );
          }}
        />
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
  const theme = useTheme();

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
      bgColor={theme.colors.background.emphasized}
    >
      <Text>{emptySlotText}</Text>
    </Box>
  );
};

const findItemByType = (items: IItem[], type: string): IItem | undefined => {
  return items.find((item) => item.type === type);
};

let selectedItem: IItem = INIT_ITEM;
