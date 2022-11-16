import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from '../../Text';
import { Box } from './Box';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const _Box = Template.bind({});
_Box.args = {
  children: <Text size={22}>Oi! Eu sou uma Box!</Text>,
  bgColor: '#302a54',
  vCenter: true,
  hCenter: true,
};
