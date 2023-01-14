import styled from 'styled-components';

import { IInput } from './Input.types';

export const StyledInput = styled.input<IInput>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '20px')};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.font.body};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border.notEmphasized};
  padding: 8px 10px;
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.border.emphasized};
  }
  transition: 0.2s;
`;
