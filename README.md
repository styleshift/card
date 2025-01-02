# Card Component

A flexible and customizable card component for React applications.

## Features

- Modular structure with Header, Content, and Footer components
- Unstyled mode for complete style control
- Built with TypeScript for type safety
- Fully accessible
- Responsive design with Tailwind CSS

## Installation

```bash
pnpm add @your-org/card
```

## Usage

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@your-org/card';

export function Example() {
  return (
    <Card>
      <CardHeader>
        <h3>Card Title</h3>
        <p>Card Description</p>
      </CardHeader>
      <CardContent>
        <p>Main content goes here</p>
      </CardContent>
      <CardFooter>
        <p>Footer content</p>
      </CardFooter>
    </Card>
  );
}
```

## API

### Card

The main container component.

Props:

- `children`: React nodes to render inside the card
- `className`: Additional CSS classes
- `unstyled`: Remove default styling

### CardHeader

Container for the card's header content.

### CardContent

Container for the card's main content.

### CardFooter

Container for the card's footer content.

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build package
pnpm build

# Run linting
pnpm lint
```
