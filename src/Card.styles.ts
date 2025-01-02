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
  },
  variants: {
    unstyled: {
      false: {
        root: [
          'rounded-lg',
          'bg-card',
          'border border-border',
          'text-card-foreground',
          'shadow-sm',
          'shadow-sm',
        ],
        header: ['  px-4 py-3 border-b '],
        content: ['px-4 py-3'],
        footer: ['px-4 py-3 border-t '],
      },
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
  },
});

export default styles;
