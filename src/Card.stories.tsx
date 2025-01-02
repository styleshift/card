import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';
import * as React from 'react';

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem
        commodi, enim ex inventore labore laborum laudantium natus nobis
        pariatur perferendis placeat, reprehenderit voluptate. Atque cumque
        ducimus magni quia quos.
      </>
    ),
  },
};

export const Unstyled: Story = {
  args: {
    unstyled: true,
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error
        in minus porro quos sed tempore ullam voluptatem voluptates. Aut ea enim
        fuga nam optio qui recusandae vitae voluptas voluptatem!
      </>
    ),
  },
};
