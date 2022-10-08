import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

interface ILink {
  to: string;
  state?: object;
  children: React.ReactElement | React.ReactElement[];
}

export const Link: React.FC<ILink> = ({ to = '', state, children }) => {
  return (
    <StyledLink to={to} state={state}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  display: inherit;
  flex-direction: inherit;
`;
