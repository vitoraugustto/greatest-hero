import { Spacer } from '../Layout/Spacer';
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
        <>{children}</>
        <Button
          text="Confirmar"
          extended
          onClick={onConfirm}
          borderColor="#caa5fa"
        />
        <Spacer mt={8} />
        <Button text="Cancelar" extended onClick={onCancel} />
      </Spacer>
    </ModalBase>
  );
};
