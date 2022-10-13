import Background from '../components/Layout/Background';
import Spacer from '../components/Layout/Spacer';
import { Link } from '../components/Link/Link';
import Text from '../components/Text/Text';

export const MenuScreen = () => {
  return (
    <Background>
      <Text as="h1" color="#fff" weight="bold">
        Menu
      </Text>
      <Spacer mt={12} />
      <Link to="/hero/inventory">
        <button style={{ border: '2px solid #302a54', borderRadius: 12 }}>
          <Spacer p={12}>
            <Text color="#fff" weight="bold" size={18} spacing={1.2}>
              Ir para o inventário
            </Text>
          </Spacer>
        </button>
      </Link>
    </Background>
  );
};
