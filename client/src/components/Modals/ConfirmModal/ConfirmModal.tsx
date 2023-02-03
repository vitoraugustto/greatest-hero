import { useTheme } from 'styled-components';

import { Button, ModalBase, Spacer } from '@components';

import { IConfirmModal } from './ConfirmModal.types';

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
