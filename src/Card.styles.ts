import { tv } from 'tailwind-variants';

export default tv({
  slots: {
    root: [
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      'dark:bg-card-dark dark:text-card-dark-foreground',
    ],
    header: ['flex flex-col space-y-1.5 p-6'],
    content: ['p-6 pt-0'],
    footer: ['flex items-center p-6 pt-0'],
    title: ['text-2xl font-semibold leading-none tracking-tight'],
    description: ['text-sm text-muted-foreground'],
  },
});
