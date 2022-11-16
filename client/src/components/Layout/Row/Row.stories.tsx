import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from '../../Text';
import { Box } from '../Box';
import { Spacer } from '../Spacer';
import { Row } from './Row';

export default {
  title: 'Row',
  component: Row,
  decorators: [
    (Story) => (
      <>
        <Row vCenter>
          <Box height={10} width={10} bgColor="pink" borderRadius={5} />
          <Spacer mr={8} />
          <Text color="pink">Row</Text>
        </Row>
        <Spacer mt={8} />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => <Row {...args} />;

export const _Row = Template.bind({});
_Row.args = {
  style: { backgroundColor: 'pink', height: 150 },
  children: (
    <>
      <Box height={100} width={100} bgColor="blue" />
      <Spacer mr={16} />
      <Box height={100} width={100} bgColor="red" />
    </>
  ),
};
