import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';

// Define content data separately
const CARD_ITEMS = {
  header: 'Card Header',
  content: 'Card Content',
  footer: 'Card Footer',
} as const;

const CardTemplate = () => (
  <>
    <Card.Header>
      <p>{CARD_ITEMS.header}</p>
    </Card.Header>
    <Card.Content>
      <p>{CARD_ITEMS.content}</p>
    </Card.Content>
    <Card.Footer>
      <p>{CARD_ITEMS.footer}</p>
    </Card.Footer>
  </>
);

const meta = {
  title: 'Card',
  // @ts-ignore
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A flexible container for grouping related content and actions.',
      },
    },
  },
  argTypes: {
    // @ts-ignore
    border: {
      control: { type: 'boolean' },
      description: 'Shows outer border',
      defaultValue: true,
      table: {
        defaultValue: { summary: true },
      },
    },
    separators: {
      control: { type: 'boolean' },
      description: 'When true, shows visual separators between card sections',
      table: {
        defaultValue: { summary: true },
      },
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
  args: {
    children: CardTemplate(),
  },
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
    children: CardTemplate(),
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

export const WithoutBorder: Story = {
  args: {
    ...Default.args,
    border: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'No outer border.',
      },
    },
  },
};
export const Unstyled: Story = {
  args: {
    children: CardTemplate(),
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
