import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@styleshift/utils';
import { CardFooterProps } from './types';
import { card } from './Card.styles';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    const styles = card();

    return (
      <div ref={ref} className={cn(styles.footer(), className)} {...props}>
        {children}
      </div>
    );
  },
);

CardFooter.displayName = 'CardFooter';
