import React from 'react';

import { Row } from '../../Layout/Row';
import { Text } from '../../Text';
import { StyledButton } from './Button.styles';
import { IButton } from './Button.types';

export const Button: React.FC<IButton> = ({
  height,
  color,
  bgColor,
  rounded,
  borderColor,
  extended,
  text,
  onClick,
  disabled,
  fontSize,
  borderRadius,
}) => {
  return (
    <StyledButton
      extended={extended}
      height={height}
      disabled={disabled}
      color={color}
      bgColor={bgColor}
      rounded={rounded}
      text={text}
      borderColor={borderColor}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      <Row hCenter vCenter>
        <Text size={fontSize} color={color}>
          {text}
        </Text>
      </Row>
    </StyledButton>
  );
};
