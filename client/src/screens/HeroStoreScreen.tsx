import { useEffect, useState } from 'react';
import Modal from 'styled-react-modal';

import Background from '../components/Layout/Background';
import Spacer from '../components/Layout/Spacer';
import { Link } from '../components/Link/Link';
import SlotItem, { IItem } from '../components/SlotItem/SlotItem';
import Text from '../components/Text/Text';
import { Button } from '../components/UI/Button';
import { storeInInventory } from '../services/hero';
import { fetchItems } from '../services/items';

export const HeroStoreScreen = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IItem>({
    _id: '',
    name: '',
    image: '',
    status: { attack: 0, defense: 0 },
    gold: 0,
    type: '',
  });
  const [items, setItems] = useState<[IItem]>([
    {
      _id: '',
      name: '',
      image: '',
      status: { attack: 0, defense: 0 },
      gold: 0,
      type: '',
    },
  ]);

  const handleFetchItems = async (): Promise<void> => {
    fetchItems().then(({ data }) => setItems(data));
  };

  const handleClick = (item: IItem): void => {
    setSelectedItem(item);
    setModalOpen(true);
    // storeInInventory(itemId);
  };

  const closeModal = () => setModalOpen(false);

  const buyItem = () =>
    storeInInventory(selectedItem._id).then(() => closeModal());

  useEffect(() => {
    handleFetchItems();
  }, []);

  return (
    <Background>
      <Text as="h1" weight="bold" color="#fff">
        Loja do Herói
      </Text>
      <Spacer mt={12} />
      <Link to="/hero/inventory">
        <Text>Ir para o inventário</Text>
      </Link>
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
            <SlotItem onClick={() => handleClick(item)} item={item} />
          </Spacer>
        ))}
      </div>
      <CustomModal
        buyItem={buyItem}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        selectedItem={selectedItem}
      />
    </Background>
  );
};

interface ICustomModal {
  isModalOpen: boolean;
  closeModal: () => void;
  selectedItem: IItem;
  buyItem: () => void;
}

const CustomModal: React.FC<ICustomModal> = ({
  isModalOpen,
  closeModal,
  buyItem,
  selectedItem,
}) => {
  return (
    <StyledModal
      onEscapeKeydown={closeModal}
      onBackgroundClick={closeModal}
      isOpen={isModalOpen}
    >
      <Spacer p={16}>
        <Text size={20}>Você deseja comprar o item "{selectedItem.name}"?</Text>
        <Spacer mt={8} />
        <Text color="gold">
          Vai te custar {selectedItem.gold} moedas de ouro.
        </Text>
        <Spacer mt={16} />
        <Button onClick={buyItem} borderColor="#caa5fa">
          <Text>Sim</Text>
        </Button>
        <Spacer mt={8} />
        <Button onClick={closeModal}>
          <Text size={18}>Cancelar</Text>
        </Button>
      </Spacer>
    </StyledModal>
  );
};

const StyledModal = Modal.styled`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #302a54;
`;
