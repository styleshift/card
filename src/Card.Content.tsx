import * as React from 'react';
import useCard from './use-card';
import { twMerge } from 'tailwind-merge';

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const {
    styles: { content },
  } = useCard();
  return <div ref={ref} className={twMerge(content(), className)} {...props} />;
});

CardContent.displayName = 'CardContent';
