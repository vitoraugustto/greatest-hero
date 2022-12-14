import styled from 'styled-components';

import { IRow } from './Row.types';

export const StyledRow = styled.div<IRow>`
  display: flex;
  flex-direction: row;
  width: 100%;
  word-break: break-word;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  gap: ${(props) => (props.gap ? props.gap + 'px' : 'normal')};
  flex-wrap: ${(props) => (props.flexWrap ? 'wrap' : 'nowrap')};
  justify-content: ${(props) => (props.hCenter ? 'center' : undefined)};
  align-items: ${(props) => (props.vCenter ? 'center' : undefined)};
`;
