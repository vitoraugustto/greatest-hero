import { Box } from '../Layout/Box';
import Spacer from '../Layout/Spacer';
import { Text } from '../Text';
import { ISlotItem } from './SlotItem.types';

export const SlotItem: React.FC<ISlotItem> = ({ item, onClick }) => {
  const { name, image, status, gold, type } = item;

  return (
    <Box
      testId={`slot-${name.replaceAll(' ', '-')}`}
      borderRadius={10}
      bgColor="#302a54"
      hCenter
      onClick={onClick}
    >
      <Spacer p={16}>
        <Text weight="bold" size={14}>
          {name}
        </Text>
        <Box height={180} width={220} hCenter vCenter>
          <img style={{ width: 120, borderRadius: 12 }} src={image} />
        </Box>
        <Box width={220}>
          <Text size={14} color="gold">
            {gold} moedas de ouro
          </Text>
          <Spacer mt={10} />
          <Text size={14}>Tipo: {type.toUpperCase()}</Text>
          <Text size={14}>Ataque: {status.attack}</Text>
          <Text size={14}>Defesa: {status.defense}</Text>
        </Box>
      </Spacer>
    </Box>
  );
};
