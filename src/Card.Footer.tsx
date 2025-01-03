import * as React from 'react';
import useCard from './use-card';
import { twMerge } from 'tailwind-merge';

export const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const {
    styles: { footer },
  } = useCard();
  return <div className={twMerge(footer(), className)} {...props} />;
};
