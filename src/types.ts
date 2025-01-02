import type styles from './Card.styles';
import * as React from 'react';
import { VariantProps } from 'tailwind-variants';

export type CardStyles = ReturnType<typeof styles>;

export type CardContextProps = {
  unstyled?: boolean;
};

export type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type CardRootVariants = VariantProps<CardStyles['root']>;

export type CardProps = BaseProps & CardRootVariants & CardContextProps;
