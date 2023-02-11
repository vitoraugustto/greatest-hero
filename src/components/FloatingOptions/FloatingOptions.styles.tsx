import styled from 'styled-components';

import { IFloatingOptions } from './FloatingOptions.types';

export const StyledDiv = styled.div<IFloatingOptions>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
`;
