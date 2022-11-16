export interface IBox {
  as?: 'section' | 'main' | 'header' | 'footer' | 'aside';
  bgColor?: string;
  width?: number;
  height?: number;
  gap?: number;
  vCenter?: boolean;
  hCenter?: boolean;
  borderRadius?: number;
  borderColor?: string;
  flex?: boolean;
  testId?: string;
  onClick?: () => void;
  children?: React.ReactElement | React.ReactElement[];
}
