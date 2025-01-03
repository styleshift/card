import * as React from 'react';
import useCard from './use-card';
import { twMerge } from 'tailwind-merge';

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const {
    styles: { footer },
  } = useCard();
  return <div ref={ref} className={twMerge(footer(), className)} {...props} />;
});

CardFooter.displayName = 'CardFooter';
