import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@styleshift/utils';
import { CardHeaderProps } from './types';
import { card } from './Card.styles';

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    const styles = card();

    return (
      <div ref={ref} className={cn(styles.header(), className)} {...props}>
        {children}
      </div>
    );
  },
);

CardHeader.displayName = 'CardHeader';
