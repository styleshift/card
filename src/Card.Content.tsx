import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@styleshift/utils';
import { CardContentProps } from './types';
import { card } from './Card.styles';

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    const styles = card();

    return (
      <div ref={ref} className={cn(styles.content(), className)} {...props}>
        {children}
      </div>
    );
  },
);

CardContent.displayName = 'CardContent';
