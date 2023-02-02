import { useTheme } from 'styled-components';

import { Spacer } from '../Layout/Spacer';
import { Button } from '../UI/Button';
import { ModalBase } from './ModalBase/ModalBase';

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
  const theme = useTheme();

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
          borderColor={theme.palette.primary.main}
        />
        <Spacer mt={8} />
        <Button cleared text="Cancelar" extended onClick={onCancel} />
      </Spacer>
    </ModalBase>
  );
};
