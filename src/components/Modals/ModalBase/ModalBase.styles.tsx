import { DefaultTheme } from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledModal = Modal.styled`
border-radius: 8px;
background-color: ${(props: { theme: DefaultTheme }) =>
  props.theme.palette.secondary.main};
border: 2px solid ${(props: { theme: DefaultTheme }) =>
  props.theme.palette.primary.main}
`;
