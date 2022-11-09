import React from 'react';
import styled from 'styled-components';

import Row from '../Layout/Row';

interface IButton {
  height?: string | number;
  color?: string;
  bgColor?: string;
  rounded?: boolean;
  borderColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  fontSize?: number;
  borderRadius?: string | number;
  children: React.ReactElement | React.ReactElement[];
}

export const Button: React.FC<IButton> = ({
  height,
  color,
  bgColor,
  rounded,
  borderColor,
  onClick,
  disabled,
  fontSize,
  borderRadius,
  children,
}) => {
  return (
    <StyledButton
      height={height}
      fontSize={fontSize}
      disabled={disabled}
      color={color}
      bgColor={bgColor}
      rounded={rounded}
      borderColor={borderColor}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      <Row hCenter vCenter>
        {children}
      </Row>
    </StyledButton>
  );
};

const StyledButton = styled.button<IButton>`
  height: ${(props) => (props.height ? props.height : 'auto')};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '8px'};
  padding: 10px;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  color: ${(props) => (props.color ? props.color : '#fff')};
  letter-spacing: 1.5px;
  border-radius: ${(props) => (props.rounded ? '8px' : '0')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '22px')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
