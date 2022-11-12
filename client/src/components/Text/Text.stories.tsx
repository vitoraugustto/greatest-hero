import { ComponentMeta, ComponentStory } from '@storybook/react';

import GlobalStyle from '../GlobalStyle';
import { Text } from './Text';

export default {
  title: 'Text',
  component: Text,
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const DefaultText = Template.bind({});
DefaultText.args = { children: 'Test text' };
