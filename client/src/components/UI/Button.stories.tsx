import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Botão primário',
  borderColor: '#caa5fa',
};

export const Secondary = Template.bind({});
Secondary.args = { text: 'Botão secundário' };
