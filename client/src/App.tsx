import React, { useEffect, useState } from 'react';

import './App.css';
import reactLogo from './assets/react.svg';
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

  return (
    <div>
      <VitePlusReact />
      <h1>Hero's Market</h1>
      {loading
        ? 'Carregando...'
        : items.map((item: IItem) => (
            <div
              style={{
                display: 'inline-block',
                marginLeft: 12,
                marginRight: 12,
              }}
              key={item._id}
            >
              <img style={{ width: 220, borderRadius: 12 }} src={item.image} />
              <Text fontSize={18}>{item.name}</Text>
              <Text fontSize={16}>Ataque: {item.status.attack}</Text>
              <Text fontSize={16}>Defesa: {item.status.defense}</Text>
            </div>
          ))}
    </div>
  );
};

const Text: React.FC<IText> = ({ fontSize, children }) => {
  return (
    <p
      style={{
        fontSize: fontSize,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#caa5fa',
        letterSpacing: 0.5,
      }}
    >
      {children}
    </p>
  );
};

const VitePlusReact = () => {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};

export default App;
