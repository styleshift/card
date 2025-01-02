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
    border: true,
  },
  variants: {
    unstyled: {
      false: {
        root: [
          'border rounded-lg',
          'bg-card',
          'border border-transparent',
          'text-card-foreground',
        ],
        header: ['  px-4 py-3 border-b '],
        content: ['px-4 py-3'],
        footer: ['px-4 py-3 border-t '],
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
