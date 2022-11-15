import { ComponentMeta, ComponentStory } from '@storybook/react';

import GlobalStyle from '../../GlobalStyle';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const _Button = Template.bind({});
_Button.args = { text: 'Eu sou um botão!!' };
