import { useTheme } from 'styled-components';

import { Aside, Background, Text } from '@components';

export const CombatScreen = () => {
  const theme = useTheme();

  return (
    <Background>
      <Aside>
        <Text
          align="center"
          as="h1"
          weight="bold"
          color={theme.typography.title.color}
          size={26}
        >
          Combate
        </Text>
      </Aside>
    </Background>
  );
};
