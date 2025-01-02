import type * as React from 'react';
import type { VariantProps } from 'tailwind-variants';
import type styles from './Card.styles';

export type CardStyles = ReturnType<typeof styles>;

export type CardContextProps = {
  unstyled?: boolean;
  separators?: boolean;
  border?: boolean;
  disabled?: boolean;
  transitions?: boolean;
  ariaLabel?: string;
};

export type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type CardRootVariants = VariantProps<CardStyles['root']>;
export type CardHeaderVariants = VariantProps<CardStyles['header']>;
export type CardContentVariants = VariantProps<CardStyles['content']>;
export type CardFooterVariants = VariantProps<CardStyles['footer']>;

export type CardProps = BaseProps &
  CardRootVariants &
  CardContextProps &
  React.HTMLAttributes<HTMLDivElement>;

export type CardHeaderProps = BaseProps &
  CardHeaderVariants &
  React.HTMLAttributes<HTMLDivElement>;

export type CardContentProps = BaseProps &
  CardContentVariants &
  React.HTMLAttributes<HTMLDivElement>;

export type CardFooterProps = BaseProps &
  CardFooterVariants &
  React.HTMLAttributes<HTMLDivElement>;
