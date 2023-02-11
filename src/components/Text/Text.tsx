import { StyledP } from './Text.styles';
import { IText } from './Text.types';

export const Text: React.FC<IText> = ({
  as,
  weight,
  size,
  color,
  align,
  spacing,
  lineHeight,
  children,
}) => {
  return (
    <StyledP
      as={as}
      weight={weight}
      size={size}
      color={color}
      align={align}
      spacing={spacing}
      lineHeight={lineHeight}
    >
      {children}
    </StyledP>
  );
};
