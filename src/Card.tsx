import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@styleshift/utils';
import { CardProps } from './types';
import { card } from './Card.styles';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, disabled, children, ...props }, ref) => {
    const styles = card({ variant, disabled });

    return (
      <div ref={ref} className={cn(styles.root(), className)} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
