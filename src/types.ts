import { HTMLAttributes, ReactNode } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { card } from './Card.styles';

type CardStyles = ReturnType<typeof card>;

export type CardRootVariants = VariantProps<CardStyles['root']>;
export type CardHeaderVariants = VariantProps<CardStyles['header']>;
export type CardTitleVariants = VariantProps<CardStyles['title']>;
export type CardDescriptionVariants = VariantProps<CardStyles['description']>;
export type CardContentVariants = VariantProps<CardStyles['content']>;
export type CardFooterVariants = VariantProps<CardStyles['footer']>;

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    CardRootVariants {
  children: ReactNode;
  className?: string;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

export interface CardDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
