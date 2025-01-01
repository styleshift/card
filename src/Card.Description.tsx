import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@styleshift/utils';
import { CardDescriptionProps } from './types';
import { card } from './Card.styles';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, children, ...props }, ref) => {
  const styles = card();

  return (
    <p ref={ref} className={cn(styles.description(), className)} {...props}>
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';
