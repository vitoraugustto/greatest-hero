import styled from 'styled-components';

interface IText {
  size?: number;
  weight?: string;
  color?: string;
  align?: 'left' | 'center';
  spacing?: number;
  lineHeight?: number;
  children: React.ReactNode;
}

const Text: React.FC<IText> = ({
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

const StyledP = styled.p<IText>`
  font-weight: ${(props) => (props.weight ? props.weight : 14)};
  font-size: ${(props) => (props.size ? props.size : 14)};
  color: ${(props) => (props.color ? props.color : '#caa5fa')};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : undefined)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : undefined)};
`;

export default Text;
