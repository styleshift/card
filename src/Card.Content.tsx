import * as React from 'react';
import useCard from './use-card';
import { twMerge } from 'tailwind-merge';

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const {
    styles: { content },
  } = useCard();
  return <div className={twMerge(content(), className)} {...props} />;
};
