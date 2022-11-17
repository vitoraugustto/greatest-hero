import styled from 'styled-components';

import { IBackground } from './Background.types';

export const StyledDiv = styled.div<IBackground>`
  display: flex;
  flex-direction: column;
  background-color: #332e5b;
  min-height: 100vh;
`;
