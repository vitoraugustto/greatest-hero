import React from 'react';

import { StyledRow } from './Row.styles';
import { IRow } from './Row.types';

export const Row: React.FC<IRow> = ({
  vCenter,
  hCenter,
  flexWrap,
  gap,
  bgColor,
  children,
}) => {
  return (
    <StyledRow
      vCenter={vCenter}
      hCenter={hCenter}
      gap={gap}
      bgColor={bgColor}
      flexWrap={flexWrap}
    >
      {children}
    </StyledRow>
  );
};
