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
}

const SlotItem: React.FC<{ item: IItem }> = ({ item }) => {
  const { name, image, status } = item;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        backgroundColor: '#302a54',
        alignItems: 'center',
      }}
    >
      <Spacer p={16}>
        <Text fontWeight="bold" fontSize={14}>
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
          <Text fontSize={14}>Preço: Não definido.</Text>
          <Spacer mt={10} />
          <Text fontSize={14}>Ataque: {status.attack}</Text>
          <Text fontSize={14}>Defesa: {status.defense}</Text>
        </div>
      </Spacer>
    </div>
  );
};

export default SlotItem;
