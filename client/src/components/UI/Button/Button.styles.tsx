import styled from 'styled-components';

import { IButton } from './Button.types';

export const StyledButton = styled.button<IButton>`
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

const borderRadius = (props: IButton) => {
  if (props.rounded) {
    return '16px';
  } else {
    return props.borderRadius + 'px';
  }
};
