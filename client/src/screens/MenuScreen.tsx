import { Background, Box, Button, Link, Text } from '../components';

export const MenuScreen = () => {
  return (
    <Background>
      <Box gap={12}>
        <Text align="center" as="h1" color="#fff" weight="bold">
          Menu
        </Text>
        <Link to="/hero/inventory">
          <Button extended text="Inventário" />
        </Link>
        <Link to="/store">
          <Button extended text="Loja" />
        </Link>
      </Box>
    </Background>
  );
};
