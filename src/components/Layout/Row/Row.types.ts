import { CSSObject } from 'styled-components';

import { Color } from '@common/interfaces';

export interface IRow {
  vCenter?: boolean;
  hCenter?: boolean;
  flexWrap?: boolean;
  gap?: number | string;
  bgColor?: Color;
  style?: CSSObject;
  children: React.ReactElement | React.ReactElement[];
}
