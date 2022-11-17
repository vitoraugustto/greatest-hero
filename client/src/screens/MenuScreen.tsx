import { Background, Box, Button, Link, Row, Text } from '../components';

export const MenuScreen = () => {
  return (
    <Background>
      <Box gap={18}>
        <Text align="center" as="h1" color="#fff" weight="bold">
          Menu
        </Text>
        <Row gap={18} hCenter>
          <Link to="/store">
            <Button text="Loja" />
          </Link>
          <Link to="/hero/inventory">
            <Button text="Inventário" />
          </Link>
        </Row>
      </Box>
    </Background>
  );
};
