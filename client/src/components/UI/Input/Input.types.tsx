import { CSSProperties } from 'react';

export interface IInput {
  onChange?: () => void;
  onBlur?: () => void;
  onKeyUp?: () => void;
  fontSize?: number;
  value?: string;
  placeholder?: string;
  style?: CSSProperties;
}
