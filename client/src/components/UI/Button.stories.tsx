import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const OutlinedButton = Template.bind({});
OutlinedButton.args = { text: 'Outlined Button', borderColor: '#caa5fa' };

export const SolidButton = Template.bind({});
SolidButton.args = { text: 'Solid Button', color: '#fff', bgColor: '#caa5fa' };

export const TextButton = Template.bind({});
TextButton.args = { text: 'Text Button' };
