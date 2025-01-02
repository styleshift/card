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

export const Default: Story = {
  args: {
    separators: true,
    unstyled: false,
  },
};

export const WithoutBorder: Story = {
  args: {
    ...Default.args,
    border: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'An card without a border',
      },
    },
  },
};

export const WithoutSeparators: Story = {
  args: {
    ...Default.args,
    separators: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'An card with visual separators between items',
      },
    },
  },
};

export const Unstyled: Story = {
  args: {
    ...Default.args,
    unstyled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A bare card without any default styling applied, useful for custom styling implementations.',
      },
    },
  },
};
