import React, { useEffect, useState } from 'react';

import GlobalStyle from './components/GlobalStyle';
import Background from './components/Layout/Background';
import Spacer from './components/Layout/Spacer';
import { fetchItems } from './services/items';

export interface IItem {
  _id: string;
  name: string;
  image: string;
  status: {
    attack: number;
    defense: number;
  };
}

interface IText {
  fontSize?: number;
  fontWeight?: string;
  children: React.ReactNode;
}

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<[IItem]>([
    { _id: '', name: '', image: '', status: { attack: 0, defense: 0 } },
  ]);

  const handleFetchItems = async (): Promise<void> => {
    setLoading(true);
    fetchItems()
      .then(({ data }) => setItems(data))
      .catch((err) => console.log(err.response.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleFetchItems();
  }, []);

  const lastItem = (index: number) => {
    return index === items.length - 1;
  };

  return (
    <Background>
      <GlobalStyle />
      <h1 style={{ color: '#fff', fontWeight: 'bold' }}>Loja do Herói</h1>
      <Spacer mt={12} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {loading
          ? 'Carregando...'
          : items.map((item: IItem, index) => (
              <Spacer key={item._id} mr={lastItem(index) ? 0 : 26}>
                <InventoryItem item={item} />
              </Spacer>
            ))}
      </div>
    </Background>
  );
};

const InventoryItem: React.FC<{ item: IItem }> = ({ item }) => {
  const { name, image, status } = item;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        backgroundColor: '#302a54',
        alignItems: 'center',
      }}
    >
      <Spacer p={16}>
        <Text fontWeight="bold" fontSize={14}>
          {name}
        </Text>
        <div
          style={{
            height: 180,
            width: 220,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img style={{ width: 120, borderRadius: 12 }} src={image} />
        </div>
        <div style={{ width: '100%' }}>
          <Text fontSize={14}>Preço: Não definido.</Text>
          <Spacer mt={10} />
          <Text fontSize={14}>Ataque: {status.attack}</Text>
          <Text fontSize={14}>Defesa: {status.defense}</Text>
        </div>
      </Spacer>
    </div>
  );
};

const Text: React.FC<IText> = ({ fontWeight, fontSize, children }) => {
  return (
    <p
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        textAlign: 'left',
        color: '#caa5fa',
      }}
    >
      {children}
    </p>
  );
};

export default App;
