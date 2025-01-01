import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@styleshift/utils';
import { CardTitleProps } from './types';
import { card } from './Card.styles';

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    const styles = card();

    return (
      <h3 ref={ref} className={cn(styles.title(), className)} {...props}>
        {children}
      </h3>
    );
  },
);

CardTitle.displayName = 'CardTitle';
