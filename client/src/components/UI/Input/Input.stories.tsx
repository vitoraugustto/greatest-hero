import { ComponentMeta, ComponentStory } from '@storybook/react';

import GlobalStyle from '../../GlobalStyle';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const CustomizableInput = Template.bind({});
