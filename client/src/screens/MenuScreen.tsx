import Background from '../components/Layout/Background';
import Spacer from '../components/Layout/Spacer';
import { Link } from '../components/Link/Link';
import Text from '../components/Text/Text';
import { Button } from '../components/UI/Button';

export const MenuScreen = () => {
  return (
    <Background>
      <Text as="h1" color="#fff" weight="bold">
        Menu
      </Text>
      <Spacer mt={12} />
      <Link to="/hero/inventory">
        <Button>
          <Text>Inventário</Text>
        </Button>
      </Link>

      <Link to="/store">
        <Button>
          <Text>Loja</Text>
        </Button>
      </Link>
    </Background>
  );
};
