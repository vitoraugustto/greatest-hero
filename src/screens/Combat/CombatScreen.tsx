import React, { useEffect, useState } from 'react';

import { IEnemy, IHero } from '@common/interfaces';
import { percentage } from '@common/utils';
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
            <Box gap={42}>
              <CharacterStatus character={combatResult.hero} />
              <CharacterStatus character={combatResult.monster} />
              <Text>
                O {combatResult.monster.name} te atacou e desferiu&nbsp;
                {combatResult.combat.damageTaken} de dano à sua vida.
              </Text>
            </Box>
          )}
        </React.Fragment>
      </Aside>
    </Background>
  );
};

// TODO: Refactor useEffects
const CharacterStatus: React.FC<{
  character: {
    name: string;
    status: {
      attack: number;
      defense: number;
      hp: number;
      maxHp: number;
      attackSpeed: number;
    };
  };
}> = ({ character }) => {
  return (
    <Box>
      <Text>{character.name}</Text>
      <Spacer mt={8} />
      <Box bgColor="#be0000" width={250}>
        <Box
          bgColor="#ff0000"
          width={`${percentage(character.status.hp, character.status.maxHp)}%`}
        >
          <Row
            style={{
              justifyContent: 'space-between',
              minWidth: 250,
              padding: 8,
            }}
          >
            <Text weight="bold" color="white">
              Vida
            </Text>
            <Text weight="bold" color="white">
              {character.status.hp}/{character.status.maxHp}
            </Text>
          </Row>
        </Box>
      </Box>
      <Spacer mt={8} />
      <Text>Ataque: {character.status.attack}</Text>
      <Text>Defesa: {character.status.defense}</Text>
      <Spacer mt={8} />
    </Box>
  );
};
