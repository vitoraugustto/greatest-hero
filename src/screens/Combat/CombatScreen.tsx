import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import { IEnemy } from '@common/interfaces';
import { Aside, Background, Box, Row, Spacer, Text } from '@components';
import { fetchEnemies } from '@services/enemy';

export const CombatScreen = () => {
  const [enemies, setEnemies] = useState<IEnemy[]>([]);
  const theme = useTheme();

  useEffect(() => {
    fetchEnemies().then((res) => setEnemies(res.data));
  }, []);

  return (
    <Background>
      <Aside>
        {enemies.map((enemy) => (
          <Row>
            <Box borderRadius={10} bgColor={theme.palette.secondary.main}>
              <Spacer p={10}>
                <img src={enemy.image} width="124px" />
                <Text>{enemy.name}</Text>
              </Spacer>
            </Box>
          </Row>
        ))}
      </Aside>
    </Background>
  );
};
