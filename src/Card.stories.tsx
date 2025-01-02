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
  parameters: {
    docs: {
      description: {
        component:
          'A flexible container for grouping related content and actions.',
      },
    },
  },
  argTypes: {
    unstyled: {
      control: 'boolean',
      description: 'When true, removes all default styling',
      defaultValue: false,
    },
    separators: {
      control: 'boolean',
      description: 'When true, shows visual separators between card sections',
      defaultValue: true,
    },
    border: {
      control: 'boolean',
      description: 'When true, shows a border around the card',
      defaultValue: true,
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, disables all interactive elements within the card',
      defaultValue: false,
    },
    transitions: {
      control: 'boolean',
      description:
        'When true, enables smooth transitions for interactive states',
      defaultValue: true,
    },
    className: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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
