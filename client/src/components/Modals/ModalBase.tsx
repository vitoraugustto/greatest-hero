import { DefaultTheme } from 'styled-components';
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

const StyledModal = Modal.styled`
  border-radius: 8px;
  background-color: ${(props: { theme: DefaultTheme }) =>
    props.theme.palette.secondary.main};
  border: 2px solid ${(props: { theme: DefaultTheme }) =>
    props.theme.palette.primary.main}
`;
