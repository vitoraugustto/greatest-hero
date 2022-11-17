import { Spacer } from '../Spacer';
import { StyledDiv } from './Background.styles';
import { IBackground } from './Background.types';

export const Background: React.FC<IBackground> = ({ children }) => {
  return (
    <StyledDiv>
      <Spacer p={16}>{children}</Spacer>
    </StyledDiv>
  );
};
