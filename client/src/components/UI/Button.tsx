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
  extended?: boolean;
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

const borderRadius = (props: IButton) => {
  if (props.rounded) {
    return '16px';
  } else {
    return props.borderRadius + 'px';
  }
};

const StyledButton = styled.button<IButton>`
  width: ${(props) => (props.extended ? '100%' : 'auto')};
  height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
  border-radius: ${(props) =>
    props.borderRadius || props.rounded ? borderRadius(props) : 0};
  padding: 10px;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  color: ${(props) => (props.color ? props.color : '#fff')};
  letter-spacing: 1.5px;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '22px')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
