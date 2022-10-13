import styled from 'styled-components';

interface IText {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';
  size?: number | string;
  weight?: string;
  color?: string;
  align?: 'left' | 'center';
  spacing?: number | string;
  lineHeight?: number | string;
  children: React.ReactNode;
}

const Text: React.FC<IText> = ({
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
      size={size && calcPx(size)}
      color={color}
      align={align}
      spacing={spacing && calcPx(spacing)}
      lineHeight={lineHeight && calcPx(lineHeight)}
    >
      {children}
    </StyledP>
  );
};

const StyledP = styled.p<IText>`
  font-weight: ${(props) => (props.weight ? props.weight : 14)};
  font-size: ${(props) => (props.size ? props.size : 14)};
  color: ${(props) => (props.color ? props.color : '#caa5fa')};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : undefined)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : undefined)};
`;

const calcPx = (prop?: string | number) => {
  if (typeof prop === 'string') {
    return prop;
  }

  return prop + 'px';
};

export default Text;
