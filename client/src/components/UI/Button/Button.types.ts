export interface IButton {
  testId?: string;
  height?: number;
  color?: string;
  bgColor?: string;
  rounded?: boolean;
  borderColor?: string;
  extended?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  fontSize?: number;
  borderRadius?: number;
  text: string;
}
