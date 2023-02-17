import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FloatingOptions } from './FloatingOptions';

export default {
  title: 'Floating Options',
  component: FloatingOptions,
} as ComponentMeta<typeof FloatingOptions>;

const Template: ComponentStory<typeof FloatingOptions> = (args) => (
  <FloatingOptions {...args} />
);

export const _FloatingOptions = Template.bind({});
_FloatingOptions.args = {
  x: 100,
  y: 100,
  options: [{ label: 'Equipar' }],
};
