import styled from 'styled-components';

import { IText } from './Text.types';

export const StyledP = styled.p<IText>`
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  font-size: ${(props) => (props.size ? props.size + 'px' : 'initial')};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.font.body};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  letter-spacing: ${(props) =>
    props.spacing ? props.spacing + 'px' : undefined};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : undefined)};
`;
