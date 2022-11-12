import React from 'react';

import { StyledBox, StyledButton } from './Box.styles';
import { IBox } from './Box.types';

export const Box: React.FC<IBox> = ({
  as,
  bgColor,
  width,
  height,
  vCenter,
  hCenter,
  borderRadius,
  borderColor,
  flex,
  testId,
  onClick,
  style,
  children,
}) => {
  // I don't know what it does "[x: string]: unknown"
  const Component: React.FC<IBox & { [x: string]: unknown }> = onClick
    ? StyledButton
    : StyledBox;

  return (
    <Component
      as={as}
      testId={testId}
      onClick={onClick}
      bgColor={bgColor}
      height={height}
      width={width}
      vCenter={vCenter}
      hCenter={hCenter}
      borderRadius={borderRadius}
      borderColor={borderColor}
      flex={flex}
      style={{ ...style }}
    >
      {children}
    </Component>
  );
};
