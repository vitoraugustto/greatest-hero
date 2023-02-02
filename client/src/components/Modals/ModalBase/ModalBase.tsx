import { StyledModal } from './ModalBase.styles';
import { IModalBase } from './ModalBase.types';

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
