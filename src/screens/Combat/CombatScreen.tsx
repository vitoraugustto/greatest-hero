import React, { useEffect, useState } from 'react';

import { IEnemy, IHero } from '@common/interfaces';
import { Aside, Background, Box, Row, Spacer, Text } from '@components';

export const CombatScreen = () => {
  const [combatResult, setCombatResult] = useState<{
    hero: IHero;
    monster: IEnemy;
    combat: { damageTaken: number };
  }>();

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.addEventListener('message', (e) => setCombatResult(JSON.parse(e.data)));

    return () => {
      ws.removeEventListener('message', (e) =>
        setCombatResult(JSON.parse(e.data))
      );
      ws.close();
    };
  }, []);

  return (
    <Background>
      <Aside>
        <React.Fragment>
          {combatResult && (
            <Box gap={18} style={{ alignItems: 'center', marginTop: 120 }}>
              <Row style={{ justifyContent: 'space-evenly' }}>
                <Box>
                  <Text>Herói: {combatResult.hero.name}</Text>
                  <Spacer mt={8} />
                  <Text>
                    Vida {combatResult.hero.status.hp}/
                    {combatResult.hero.status.maxHp}
                  </Text>
                  <Text>Ataque: {combatResult.hero.status.attack}</Text>
                  <Text>Defesa: {combatResult.hero.status.defense}</Text>
                </Box>
                <Box>
                  <Text>Monstro: {combatResult.monster.name}</Text>
                  <Text>
                    Vida {combatResult.monster.status.hp}/
                    {combatResult.monster.status.maxHp}
                  </Text>
                  <Text>Ataque: {combatResult.monster.status.attack}</Text>
                  <Text>Defesa: {combatResult.monster.status.defense}</Text>
                </Box>
              </Row>
              <Text>
                O {combatResult.monster.name} te atacou e desferiu{' '}
                {combatResult.combat.damageTaken} de dano à sua vida.
              </Text>
            </Box>
          )}
        </React.Fragment>
      </Aside>
    </Background>
  );
};
