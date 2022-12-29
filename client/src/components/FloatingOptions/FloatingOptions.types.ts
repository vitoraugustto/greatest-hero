export interface IFloatingOptions {
  x: number;
  y: number;
  isVisible: boolean;
  options: IOption[];
}

export interface IOption {
  label: string;
  onClick: () => void;
}
