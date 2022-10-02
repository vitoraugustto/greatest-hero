import Box from '../Layout/Box';
import Spacer from '../Layout/Spacer';
import Text from '../Text/Text';

export interface IItem {
  _id: string;
  name: string;
  image: string;
  status: {
    attack: number;
    defense: number;
  };
  gold: number;
  type: string;
}

const SlotItem: React.FC<{ item: IItem }> = ({ item }) => {
  const { name, image, status, gold, type } = item;

  return (
    <Box borderRadius={8} bgColor="#302a54" hCenter>
      <Spacer p={16}>
        <Text weight="bold" size={14}>
          {name}
        </Text>
        <div
          style={{
            height: 180,
            width: 220,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img style={{ width: 120, borderRadius: 12 }} src={image} />
        </div>
        <div style={{ width: '100%' }}>
          <Text size={14} color="gold">
            {gold} moedas de ouro
          </Text>
          <Spacer mt={10} />
          <Text size={14}>Tipo: {type.toUpperCase()}</Text>
          <Text size={14}>Ataque: {status.attack}</Text>
          <Text size={14}>Defesa: {status.defense}</Text>
        </div>
      </Spacer>
    </Box>
  );
};

export default SlotItem;
