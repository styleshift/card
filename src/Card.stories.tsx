import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';

const defaultChildren = (
  <>
    <Card.Header>
      <p>Card Header</p>
    </Card.Header>
    <Card.Content>
      <p>Card Content</p>
    </Card.Content>
    <Card.Footer>
      <p>Card Footer</p>
    </Card.Footer>
  </>
);

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: defaultChildren,
  },
  argTypes: {
    unstyled: {
      control: 'boolean',
      description: 'Remove all styles',
      table: {
        defaultValue: { summary: false },
      },
    },
    separators: {
      control: 'boolean',
      description: 'When true, shows separators between items',
      defaultValue: true,
    },
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Unstyled: Story = {
  args: {
    unstyled: true,
  },
};

export const WithoutHeader: Story = {
  args: {
    children: (
      <>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </>
    ),
  },
};

export const WithoutFooter: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <p>Card Header</p>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
      </>
    ),
  },
};
