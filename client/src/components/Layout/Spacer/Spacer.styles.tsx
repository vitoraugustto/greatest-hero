import styled from 'styled-components';

import { ISpacer } from './Spacer.types';

export const StyledDiv = styled.div<ISpacer>`
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  ${(props) => props.p && `padding: ${props.p}px`};
  ${(props) =>
    props.pt
      ? `padding-top: ${props.pt}px`
      : props.py
      ? `padding-top: ${props.py}px`
      : null};
  ${(props) =>
    props.pr
      ? `padding-right: ${props.pr}px`
      : props.px
      ? `padding-right: ${props.px}px`
      : null};
  ${(props) =>
    props.pb
      ? `padding-bottom: ${props.pb}px`
      : props.py
      ? `padding-bottom: ${props.py}px`
      : null};
  ${(props) =>
    props.pl
      ? `padding-left: ${props.pl}px`
      : props.px
      ? `padding-left: ${props.px}px`
      : null};

  ${(props) => props.m && `margin: ${props.m}px`};
  ${(props) =>
    props.mt
      ? `margin-top: ${props.mt}px`
      : props.my
      ? `margin-top: ${props.my}px`
      : null};
  ${(props) =>
    props.mr
      ? `margin-right: ${props.mr}px`
      : props.mx
      ? `margin-right: ${props.mx}px`
      : null};
  ${(props) =>
    props.mb
      ? `margin-bottom: ${props.mb}px`
      : props.my
      ? `margin-bottom: ${props.my}px`
      : null};
  ${(props) =>
    props.ml
      ? `margin-left: ${props.ml}px`
      : props.mx
      ? `margin-left: ${props.mx}px`
      : null};
`;
