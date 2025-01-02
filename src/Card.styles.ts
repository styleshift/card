import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    root: '',
    header: '',
    content: '',
    footer: '',
    title: '',
    description: '',
  },
  defaultVariants: {
    unstyled: false,
  },
  variants: {
    unstyled: {
      false: {
        root: ['p-4', 'rounded shadow-sm border border-border'],
        header: ['flex flex-col space-y-1.5 p-6'],
        content: ['p-6 pt-0'],
        footer: ['flex items-center p-6 pt-0'],
        title: ['text-2xl font-semibold leading-none tracking-tight'],
        description: ['text-sm text-muted-foreground'],
      },
    },
  },
});

export default styles;
