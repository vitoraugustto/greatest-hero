import React from 'react';

import Armor from '../../assets/icons/armor.png';
import Chest from '../../assets/icons/chest.png';
import Store from '../../assets/icons/store.png';
import { ASIDE_WIDTH } from '../../common/constants';
import { Box } from '../Layout/Box';
import { Row } from '../Layout/Row';
import { Spacer } from '../Layout/Spacer';
import { Link } from '../Link';
import { Text } from '../Text';
import { StyledAside } from './Aside.styles';
import { IAside, IAsideOption } from './Aside.types';

export const Aside: React.FC<IAside> = ({ children }) => {
  return (
    <>
      <StyledAside>
        <AsideOption linkTo="/" label="Equipamento" icon={Armor} />
        <AsideOption linkTo="/hero/inventory" label="Inventário" icon={Chest} />
        <AsideOption linkTo="/store" label="Loja" icon={Store} />
      </StyledAside>
      <Spacer pl={ASIDE_WIDTH}>{children}</Spacer>
    </>
  );
};

const AsideOption: React.FC<IAsideOption> = ({ label, linkTo, icon }) => {
  return (
    <Link to={linkTo}>
      <Box height={48} vCenter>
        <Spacer pl={24}>
          <Row gap={22} vCenter>
            <img src={icon} style={{ width: 26 }} />
            <Text size={20} weight="bold">
              {label}
            </Text>
          </Row>
        </Spacer>
      </Box>
    </Link>
  );
};
