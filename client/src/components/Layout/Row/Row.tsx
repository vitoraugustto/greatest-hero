import React from 'react';

import { StyledRow } from './Row.styles';
import { IRow } from './Row.types';

export const Row: React.FC<IRow> = ({
  vCenter,
  hCenter,
  flexWrap,
  gap,
  style,
  children,
}) => {
  return (
    <StyledRow
      vCenter={vCenter}
      hCenter={hCenter}
      gap={gap}
      flexWrap={flexWrap}
      style={{ ...style }}
    >
      {children}
    </StyledRow>
  );
};
