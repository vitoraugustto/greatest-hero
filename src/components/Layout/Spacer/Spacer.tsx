import { StyledDiv } from './Spacer.styles';
import { ISpacer } from './Spacer.types';

/**
 * Component for spacing (margin and padding)\
 * "m" refers to margin\
 * "p" refers to padding
 * ____________________________________________
 *
 * Use "t", "r", "b", "l", "y" or "x" to specify the spacing direction\
 * **First example**: same of `margin-top: 12px`\
 * **Second example**: same of `padding: 8px 0px`\
 * **Third example**: same of `padding: 10px`
 *
 * @example <Spacer mt={12} />
 * @example <Spacer py={8} />
 * @example <Spacer p={10} />
 */

export const Spacer: React.FC<ISpacer> = ({
  p,
  pt,
  pr,
  pb,
  pl,
  py,
  px,
  m,
  mt,
  mr,
  mb,
  ml,
  my,
  mx,
  children,
}) => {
  return (
    <StyledDiv
      p={p}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      py={py}
      px={px}
      m={m}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      my={my}
      mx={mx}
    >
      {children}
    </StyledDiv>
  );
};
