import styled, { DefaultTheme } from 'styled-components';

// TODO: Change Modal Library
export const StyledModal = styled.div`
  border-radius: 8px;
  background-color: ${(props: { theme: DefaultTheme }) =>
    props.theme.palette.secondary.main};
  border: 2px solid
    ${(props: { theme: DefaultTheme }) => props.theme.palette.primary.main};
`;
