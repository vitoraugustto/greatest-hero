import Modal from 'styled-react-modal';

import { StyledModal } from './ModalBase.styles';
import { IModalBase } from './ModalBase.types';

export const ModalBase: React.FC<IModalBase> = ({
  isModalOpen,
  onEscapeKeydown,
  onBackgroundClick,
  children,
}) => {
  return (
    <Modal
      onEscapeKeydown={onEscapeKeydown}
      onBackgroundClick={onBackgroundClick}
      isOpen={isModalOpen}
    >
      <StyledModal>{children}</StyledModal>
    </Modal>
  );
};
