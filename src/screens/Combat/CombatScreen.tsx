import { useEffect, useState } from 'react';

import { Aside, Background, Text } from '@components';

export const CombatScreen = () => {
  const [wsMessage, setWsMessage] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.addEventListener('message', (e) => setWsMessage(e.data));

    return () => {
      ws.removeEventListener('message', (e) => setWsMessage(e.data));
      ws.close();
    };
  }, []);

  return (
    <Background>
      <Aside>
        <Text>{wsMessage}</Text>
      </Aside>
    </Background>
  );
};
