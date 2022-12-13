import { Box } from '../Layout/Box';
import { Row } from '../Layout/Row';
import { Spacer } from '../Layout/Spacer';
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
      width={260}
      onClick={onClick}
    >
      <Spacer p={16}>
        <Box height={32}>
          <Text weight="bold" size={14}>
            {name}
          </Text>
        </Box>
        <img style={{ height: 160, borderRadius: 12 }} src={image} />
        <Spacer mt={10} />
        <Row>
          <Box>
            <Text size={14} color="gold">
              {gold} moedas de ouro
            </Text>
            <Spacer mt={6} />
            <Text size={14}>Tipo: {type.toUpperCase()}</Text>
            <Text size={14}>Ataque: {status.attack}</Text>
            <Text size={14}>Defesa: {status.defense}</Text>
          </Box>
        </Row>
      </Spacer>
    </Box>
  );
};
