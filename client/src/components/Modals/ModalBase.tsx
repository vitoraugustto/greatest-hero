import { CSSObject } from 'styled-components';
import Modal from 'styled-react-modal';

interface IModalBase {
  isModalOpen: boolean;
  onEscapeKeydown: () => void;
  onBackgroundClick: () => void;
  children: React.ReactElement | React.ReactElement[];
}

export const ModalBase: React.FC<IModalBase> = ({
  isModalOpen,
  onEscapeKeydown,
  onBackgroundClick,
  children,
}) => {
  return (
    <StyledModal
      onEscapeKeydown={onEscapeKeydown}
      onBackgroundClick={onBackgroundClick}
      isOpen={isModalOpen}
    >
      {children}
    </StyledModal>
  );
};

const modalStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  backgroundColor: '#302a54',
};

const StyledModal = Modal.styled(modalStyles);
