import styled from 'styled-components';

import { ASIDE_WIDTH } from '../../helpers/constants';
import { IAside } from './Aside.types';

export const StyledAside = styled.aside<IAside>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${ASIDE_WIDTH}px;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.background.emphasized};
`;
