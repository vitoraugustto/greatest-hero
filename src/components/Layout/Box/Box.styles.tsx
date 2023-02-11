import styled, { CSSObject } from 'styled-components';

import { IBox } from './Box.types';

const addTestId = (testId: IBox['testId']) => {
  return {
    'data-test': testId,
  };
};

const boxStyles = (props: IBox): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: props.gap ? props.gap : 'normal',
  flex: props.flex ? 1 : undefined,
  justifyContent: props.vCenter ? 'center' : undefined,
  alignItems: props.hCenter ? 'center' : undefined,
  backgroundColor: props.bgColor ? props.bgColor : 'transparent',
  width: props.width ? props.width : 'auto',
  height: props.height ? props.height : 'auto',
  borderRadius: props.borderRadius ? props.borderRadius : 0,
  border: props.borderColor ? '2px solid ' + props.borderColor : undefined,
});
export const StyledBox = styled.div.attrs((props: IBox) => {
  return addTestId(props.testId);
})<IBox>(boxStyles);

export const StyledButton = styled.button.attrs((props: IBox) => {
  return addTestId(props.testId);
})<IBox>(boxStyles);
