import { CardHeaderProps } from './types';
import useCard from './use-card';
import { twMerge } from 'tailwind-merge';
import * as React from 'react';

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    const {
      styles: { header },
    } = useCard();

    return (
      <div
        ref={ref}
        className={twMerge(header(), className)}
        role="heading"
        {...props}
      >
        {props.children}
      </div>
    );
  },
);

CardHeader.displayName = 'CardHeader';
