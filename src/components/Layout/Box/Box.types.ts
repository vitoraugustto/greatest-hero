import { CSSObject } from 'styled-components';

import { Color } from '@common/interfaces';

export interface IBox {
  as?: 'section' | 'main' | 'header' | 'footer' | 'aside';
  bgColor?: Color;
  width?: number | string;
  height?: number | string;
  gap?: number | string;
  vCenter?: boolean;
  hCenter?: boolean;
  borderRadius?: number | string;
  borderColor?: Color;
  flex?: boolean;
  testId?: string;
  onClick?: (e: MouseEvent) => void;
  style?: CSSObject;
  children?: React.ReactElement | React.ReactElement[];
}
