import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface IBox {
  as?: 'section' | 'main' | 'header' | 'footer' | 'aside';
  color?: string;
  bgColor?: string;
  width?: number;
  height?: number;
  vCenter?: boolean;
  hCenter?: boolean;
  borderRadius?: number;
  borderColor?: string;
  flex?: true;
  testId?: string;
  onClick?: () => void;
  style?: CSSProperties;
  children?: React.ReactElement | React.ReactElement[];
}

const Box: React.FC<IBox> = ({
  as,
  color,
  bgColor,
  width,
  height,
  vCenter,
  hCenter,
  borderRadius,
  borderColor,
  flex,
  testId,
  onClick,
  style,
  children,
}) => {
  // I don't know what it does "[x: string]: unknown"
  const Component: React.FC<IBox & { [x: string]: unknown }> = onClick
    ? StyledButton
    : StyledBox;

  return (
    <Component
      as={as}
      testId={testId}
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
      vCenter={vCenter}
      hCenter={hCenter}
      borderRadius={borderRadius}
      borderColor={borderColor}
      flex={flex}
      style={{ ...style }}
    >
      {children}
    </Component>
  );
};

const addTestId = (testId: IBox['testId']) => {
  return {
    'data-test': testId,
  };
};

const StyledBox = styled.div.attrs((props: IBox) => {
  return addTestId(props.testId);
})<IBox>`
  display: flex;
  flex-direction: column;
  word-break: break-word;
  flex: ${(props) => (props.flex ? 1 : undefined)};
  justify-content: ${(props) => (props.vCenter ? 'center' : undefined)};
  align-items: ${(props) => (props.hCenter ? 'center' : undefined)};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  color: ${(props) => (props.color ? props.color : 'white')};
  width: ${(props) => (props.width ? props.width + 'px' : 'auto')};
  height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + 'px' : 0};
  border: ${(props) =>
    props.borderColor ? '1px solid ' + props.borderColor : undefined};
`;

const StyledButton = styled.button.attrs((props: IBox) => {
  return addTestId(props.testId);
})<IBox>`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? 1 : undefined)};
  justify-content: ${(props) => (props.vCenter ? 'center' : undefined)};
  align-items: ${(props) => (props.hCenter ? 'center' : undefined)};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  color: ${(props) => (props.color ? props.color : 'white')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)};
  border: ${(props) =>
    props.borderColor ? '1px solid ' + props.borderColor : undefined};
`;

export default Box;
