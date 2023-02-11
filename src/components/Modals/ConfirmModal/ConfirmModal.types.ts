export interface IConfirmModal {
  isModalOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  children: React.ReactElement | React.ReactElement[];
}
