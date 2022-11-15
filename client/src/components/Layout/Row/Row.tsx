import React from 'react';

import { StyledRow } from './Row.styles';
import { IRow } from './Row.types';

export const Row: React.FC<IRow> = ({
  vCenter,
  hCenter,
  flexWrap,
  style,
  children,
}) => {
  return (
    <StyledRow
      vCenter={vCenter}
      hCenter={hCenter}
      flexWrap={flexWrap}
      style={{ ...style }}
    >
      {children}
    </StyledRow>
  );
};
