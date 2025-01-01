import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '.';
import * as React from 'react';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'ghost'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>content</CardContent>
      <CardFooter className="flex justify-between">footer</CardFooter>
    </Card>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Card className="w-[350px]" variant="destructive">
      <CardHeader>
        <CardTitle>Delete Project</CardTitle>
        <CardDescription>This action cannot be undone.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Are you sure you want to delete this project?</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <button>Cancel</button>
        <button>Delete</button>
      </CardFooter>
    </Card>
  ),
};

export const Ghost: Story = {
  render: () => (
    <Card className="w-[350px]" variant="ghost">
      <CardHeader>
        <CardTitle>Quick View</CardTitle>
        <CardDescription>Preview content without borders</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a ghost card variant with no borders or shadows.</p>
      </CardContent>
    </Card>
  ),
};
