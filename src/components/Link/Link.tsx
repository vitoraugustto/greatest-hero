import { StyledLink } from './Link.styles';
import { ILink } from './Link.types';

export const Link: React.FC<ILink> = ({ to = '', state, children }) => {
  return (
    <StyledLink to={to} state={state}>
      {children}
    </StyledLink>
  );
};
