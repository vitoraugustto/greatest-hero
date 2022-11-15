import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from '../Box';
import Spacer from '../Spacer';
import { Row } from './Row';

export default {
  title: 'Row',
  component: Row,
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => <Row {...args} />;

export const _Row = Template.bind({});
_Row.args = {
  children: (
    <>
      <Box height={130} width={130} bgColor="blue" />
      <Spacer mr={8} />
      <Box height={70} width={70} bgColor="red" />
    </>
  ),
};
