import Spacer from '../Layout/Spacer';
import Text from '../Text/Text';
import { Button } from '../UI/Button';
import { ModalBase } from './ModalBase';

interface IConfirmModal {
  isModalOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  children: React.ReactElement | React.ReactElement[];
}

export const ConfirmModal: React.FC<IConfirmModal> = ({
  isModalOpen,
  onCancel,
  onConfirm,
  children,
}) => {
  return (
    <ModalBase
      isModalOpen={isModalOpen}
      onEscapeKeydown={onCancel}
      onBackgroundClick={onCancel}
    >
      <Spacer p={16}>
        {children}
        <Button onClick={onConfirm} borderColor="#caa5fa">
          <Text>Confirmar</Text>
        </Button>
        <Spacer mt={8} />
        <Button onClick={onCancel}>
          <Text size={18}>Cancelar</Text>
        </Button>
      </Spacer>
    </ModalBase>
  );
};
