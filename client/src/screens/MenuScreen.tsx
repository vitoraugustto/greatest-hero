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
        <Button text="Ir para o inventário " />
      </Link>

      <Link to="/store">
        <Button text="Ir para a loja " />
      </Link>
    </Background>
  );
};
