import React from 'react';
import styled from 'styled-components';

import Row from '../Layout/Row';
import Text from '../Text/Text';

interface IButton {
  height?: number;
  color?: string;
  bgColor?: string;
  rounded?: boolean;
  borderColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  fontSize?: number;
  borderRadius?: number;
  text: string;
}

export const Button: React.FC<IButton> = ({
  height,
  color,
  bgColor,
  rounded,
  borderColor,
  text,
  onClick,
  disabled,
  fontSize,
  borderRadius,
}) => {
  return (
    <StyledButton
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

const StyledButton = styled.button<IButton>`
  height: ${(props) => (props.height ? props.height : 'auto')};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + 'px' : '8px'};
  padding: 10px;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  color: ${(props) => (props.color ? props.color : '#fff')};
  letter-spacing: 1.5px;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '22px')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
