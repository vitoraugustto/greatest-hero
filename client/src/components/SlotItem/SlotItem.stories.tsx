import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SlotItem } from './SlotItem';

export default {
  title: 'SlotItem',
  component: SlotItem,
} as ComponentMeta<typeof SlotItem>;

const Template: ComponentStory<typeof SlotItem> = (args) => (
  <SlotItem {...args} />
);

const item = {
  status: {
    attack: 0,
    defense: 2,
  },
  _id: '633505f975f08380eebbc3b0',
  name: 'Botas de couro',
  description: 'Baixo nível de defesa.',
  role: 'Guerreiro',
  image:
    'https://res.cloudinary.com/dm2k8fifm/image/upload/v1664419321/leather-boots.png',
  __v: 0,
  gold: 4,
  type: 'botas',
};

export const _SlotItem = Template.bind({});
_SlotItem.args = { item };
