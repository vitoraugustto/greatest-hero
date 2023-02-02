import styled from 'styled-components';

import { IText } from './Text.types';

export const StyledP = styled.p<IText>`
  font-weight: ${({ weight, theme }) =>
    weight ? weight : theme.typography.body.fontWeight};
  font-size: ${({ size, theme }) =>
    size ? size + 'px' : theme.typography.body.fontSize};
  color: ${({ color, theme }) => (color ? color : theme.typography.body.color)};
  text-align: ${({ align }) => (align ? align : 'left')};
  letter-spacing: ${({ spacing, theme }) =>
    spacing ? spacing + 'px' : theme.typography.body.letterSpacing};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : undefined)};
`;
