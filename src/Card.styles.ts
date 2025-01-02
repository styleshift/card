import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    root: '',
    header: '',
    content: '',
    footer: '',
  },
  defaultVariants: {
    unstyled: false,
    separators: true,
    disabled: false,
    transitions: true,
    border: true,
  },
  variants: {
    unstyled: {
      false: {
        root: ['border rounded-lg text-card-foreground'],
        header: ['  px-4 py-3 border-b text-sm font-medium text-foreground'],
        content: ['px-4 py-3 text-sm text-foreground'],
        footer: ['px-4 py-3 border-t text-sm text-muted-foreground'],
      },
      true: {},
    },
    separators: {
      true: {
        header: 'border-border',
        footer: 'border-border',
      },
      false: {
        header: 'border-transparent',
        footer: 'border-transparent',
      },
    },
    border: {
      true: {
        root: 'border-border',
      },
      false: {
        root: 'border-transparent',
      },
    },
  },
});

export default styles;
