export interface IModalBase {
  isModalOpen: boolean;
  onEscapeKeydown: () => void;
  onBackgroundClick: () => void;
  children: React.ReactElement | React.ReactElement[];
}
