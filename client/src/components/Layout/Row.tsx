import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface IRow {
  vCenter?: boolean;
  hCenter?: boolean;
  style?: CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}

const Row: React.FC<IRow> = ({ style, vCenter, hCenter, children }) => {
  return (
    <StyledRow vCenter={vCenter} hCenter={hCenter} style={{ ...style }}>
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div<IRow>`
  display: flex;
  flex-direction: row;
  width: 100%;
  word-break: break-word;
  justify-content: ${(props) => (props.hCenter ? 'center' : undefined)};
  align-items: ${(props) => (props.vCenter ? 'center' : undefined)};
`;

export default Row;
