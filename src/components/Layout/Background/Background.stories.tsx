import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Background } from './Background';

export default {
  title: 'Background',
  component: Background,
} as ComponentMeta<typeof Background>;

const Template: ComponentStory<typeof Background> = (args) => (
  <Background {...args} />
);

export const _Background = Template.bind({});
