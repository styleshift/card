import { tv } from '@styleshift/utils';

export const card = tv({
  slots: {
    root: 'rounded-lg border bg-card text-card-foreground shadow-sm',
    header: 'flex flex-col space-y-1.5 p-6',
    title: 'text-2xl font-semibold leading-none tracking-tight',
    description: 'text-sm text-muted-foreground',
    content: 'p-6 pt-0',
    footer: 'flex items-center p-6 pt-0',
  },
  variants: {
    variant: {
      default: {},
      destructive: {
        root: 'bg-destructive text-destructive-foreground',
      },
      ghost: {
        root: 'border-none shadow-none bg-background',
      },
    },
    disabled: {
      true: {
        root: 'opacity-50 pointer-events-none',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
