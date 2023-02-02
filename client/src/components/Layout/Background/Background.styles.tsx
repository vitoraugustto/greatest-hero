import styled from 'styled-components';

import { IBackground } from './Background.types';

export const StyledDiv = styled.div<IBackground>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary[300]};
  min-height: 100vh;
`;
