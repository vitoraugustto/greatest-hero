import { CSSProperties } from 'styled-components';

export interface IRow {
  vCenter?: boolean;
  hCenter?: boolean;
  flexWrap?: boolean;
  style?: CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}
