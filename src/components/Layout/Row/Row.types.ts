import { CSSObject } from 'styled-components';

export interface IRow {
  vCenter?: boolean;
  hCenter?: boolean;
  flexWrap?: boolean;
  gap?: number;
  bgColor?: string;
  style?: CSSObject;
  children: React.ReactElement | React.ReactElement[];
}
