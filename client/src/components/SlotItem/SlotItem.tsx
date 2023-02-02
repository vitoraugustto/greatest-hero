import { useTheme } from 'styled-components';

import { Box } from '../Layout/Box';
import { Row } from '../Layout/Row';
import { Spacer } from '../Layout/Spacer';
import { Text } from '../Text';
import { ISlotItem } from './SlotItem.types';

export const SlotItem: React.FC<ISlotItem> = ({
  item,
  size,
  infos = true,
  onClick,
}) => {
  const { name, image, status, gold } = item;
  const theme = useTheme();

  return (
    <Box
      testId={`slot-${name.replaceAll(' ', '-')}`}
      borderRadius={10}
      bgColor={theme.palette.secondary.main}
      hCenter
      width={calcSize(size).width}
      onClick={onClick}
    >
      <Spacer p={16}>
        <Box height={32}>
          <Text weight="bold" size={calcSize(size).fontSize}>
            {name}
          </Text>
        </Box>
        <img
          style={{ height: calcSize(size).height, borderRadius: 12 }}
          src={image}
        />
        {infos ? (
          <>
            <Spacer mt={10} />
            <Row>
              <Box>
                <Text size={calcSize(size).fontSize} color="gold">
                  {gold} moedas de ouro
                </Text>
                <Spacer mt={6} />
                <Text size={calcSize(size).fontSize}>
                  Ataque: {status.attack}
                </Text>
                <Text size={calcSize(size).fontSize}>
                  Defesa: {status.defense}
                </Text>
              </Box>
            </Row>
          </>
        ) : (
          <></>
        )}
      </Spacer>
    </Box>
  );
};

const calcSize = (size: ISlotItem['size']) => {
  switch (size) {
    case 'small':
      return { width: 180, height: 90, fontSize: 11 };
    case 'medium':
      return { width: 220, height: 130, fontSize: 12 };
    default:
      return { width: 260, height: 160, fontSize: 14 };
  }
};
