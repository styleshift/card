import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';

// Define content data separately
const CARD_CONTENT = {
  header: 'Card Header',
  content: 'Card Content',
  footer: 'Card Footer',
} as const;

const CardTemplate = () => (
  <Card>
    <Card.Header>
      <p>{CARD_CONTENT.header}</p>
    </Card.Header>
    <Card.Content>
      <p>{CARD_CONTENT.content}</p>
    </Card.Content>
    <Card.Footer>
      <p>{CARD_CONTENT.footer}</p>
    </Card.Footer>
  </Card>
);

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: <CardTemplate />,
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
    disabled: {
      control: 'boolean',
      description: 'Disables all interactions',
      defaultValue: false,
    },
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

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default card configuration with all features enabled.',
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
