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
  },
  variants: {
    unstyled: {
      false: {
        root: ['border border-border rounded-lg', 'text-card-foreground'],
        header: ['  px-4 py-3 border-b '],
        content: ['px-4 py-3'],
        footer: ['px-4 py-3 border-t '],
      },
      true: {},
    },
    separators: {
      true: {
        header: 'border-b-border',
        footer: 'border-t-border',
      },
      false: {
        header: 'border-t-transparent',
        footer: 'border-b-transparent',
      },
    },
    disabled: {
      true: {
        root: 'opacity-50',
      },
    },
  },
});

export default styles;
