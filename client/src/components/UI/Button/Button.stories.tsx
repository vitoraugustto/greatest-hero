import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outlined = Template.bind({});
Outlined.args = { text: 'Outlined Button', borderColor: '#caa5fa' };

export const Solid = Template.bind({});
Solid.args = { text: 'Solid Button', color: '#fff', bgColor: '#caa5fa' };

export const Text = Template.bind({});
Text.args = { text: 'Text Button' };
