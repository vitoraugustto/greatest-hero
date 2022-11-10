import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface IRow {
  vCenter?: boolean;
  hCenter?: boolean;
  flexWrap?: boolean;
  style?: CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}

const Row: React.FC<IRow> = ({
  vCenter,
  hCenter,
  flexWrap,
  style,
  children,
}) => {
  return (
    <StyledRow
      vCenter={vCenter}
      hCenter={hCenter}
      flexWrap={flexWrap}
      style={{ ...style }}
    >
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div<IRow>`
  display: flex;
  flex-direction: row;
  width: 100%;
  word-break: break-word;
  flex-wrap: ${(props) => (props.flexWrap ? 'wrap' : 'nowrap')};
  justify-content: ${(props) => (props.hCenter ? 'center' : undefined)};
  align-items: ${(props) => (props.vCenter ? 'center' : undefined)};
`;

export default Row;
