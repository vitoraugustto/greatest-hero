export interface IText {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';
  size?: number;
  weight?: 'bold' | 'normal';
  color?: string;
  align?: 'left' | 'center';
  spacing?: number;
  lineHeight?: number;
  children: React.ReactNode;
}
