import { useEffect, useState } from 'react';

import GlobalStyle from './components/GlobalStyle';
import Background from './components/Layout/Background';
import Spacer from './components/Layout/Spacer';
import SlotItem, { IItem } from './components/SlotItem/SlotItem';
import { fetchItems } from './services/items';

const App = () => {
  const [items, setItems] = useState<[IItem]>([
    { _id: '', name: '', image: '', status: { attack: 0, defense: 0 } },
  ]);

  const handleFetchItems = async (): Promise<void> => {
    fetchItems()
      .then(({ data }) => setItems(data))
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    handleFetchItems();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Background>
        <h1 style={{ color: '#fff', fontWeight: 'bold' }}>Loja do Herói</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {items.map((item: IItem) => (
            <Spacer key={item._id} mr={26} mt={26}>
              <SlotItem item={item} />
            </Spacer>
          ))}
        </div>
      </Background>
    </>
  );
};

export default App;
