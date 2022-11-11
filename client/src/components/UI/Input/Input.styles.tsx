import styled from 'styled-components';

import { IInput } from './Input.types';

export const StyledInput = styled.input<IInput>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '20px')};
  background-color: transparent;
  color: #332e5b;
  border-bottom: 2px solid #332e5b;
  padding: 8px 10px;
  &:focus {
    border-bottom: 2px solid #caa5fa;
  }
  transition: 0.2s;
`;
