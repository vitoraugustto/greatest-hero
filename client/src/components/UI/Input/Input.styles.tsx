import styled from 'styled-components';

import { IInput } from './Input.types';

export const StyledInput = styled.input<IInput>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '20px')};
  background-color: transparent;
  color: ${({ theme }) => theme.typography.body.color};
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding: 8px 10px;
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.palette.secondary[300]};
  }
  transition: 0.2s;
`;
