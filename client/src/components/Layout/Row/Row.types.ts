import { CSSProperties } from 'styled-components';

export interface IRow {
  vCenter?: boolean;
  hCenter?: boolean;
  flexWrap?: boolean;
  gap?: number;
  style?: CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}
