import React from 'react';

import { ASIDE_WIDTH } from '../../helpers/constants';
import { Box } from '../Layout/Box';
import { Spacer } from '../Layout/Spacer';
import { Link } from '../Link';
import { Text } from '../Text';
import { StyledAside } from './Aside.styles';
import { IAside, IAsideOption } from './Aside.types';

export const Aside: React.FC<IAside> = ({ children }) => {
  return (
    <>
      <StyledAside>
        <AsideOption linkTo="/hero/equipment" label="Equipamento" />
        <AsideOption linkTo="/" label="Inventário" />
        <AsideOption linkTo="/store" label="Loja" />
      </StyledAside>
      <Spacer pl={ASIDE_WIDTH}>{children}</Spacer>
    </>
  );
};

const AsideOption: React.FC<IAsideOption> = ({ label, linkTo }) => {
  return (
    <Link to={linkTo}>
      <Box height={48} vCenter>
        <Spacer pl={24}>
          <Text size={20} weight="bold">
            {label}
          </Text>
        </Spacer>
      </Box>
    </Link>
  );
};
