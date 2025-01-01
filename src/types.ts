import styles from './styles';
import { VariantProps } from '@styleshift/utils';

type CardStyles = ReturnType<typeof styles>;

export type CardContextProps = {
  unstyled?: boolean;
};

export type BaseProps = {
  children: React.ReactNode;
  className?: string;
};
export type CardRootVariants = VariantProps<CardStyles['root']>;

export type AccordionProps = BaseProps & CardRootVariants & CardContextProps;
