import { CSSProperties } from 'react';
import styled from 'styled-components';

import { Spacer } from './Spacer';

interface IBackground {
  style?: CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}

const Background: React.FC<IBackground> = ({ children }) => {
  return (
    <StyledDiv>
      <Spacer p={16}>{children}</Spacer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div<IBackground>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #332e5b;
  min-height: 100vh;
`;

export default Background;
