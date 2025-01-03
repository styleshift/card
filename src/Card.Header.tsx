import { CardHeaderProps } from './types';
import useCard from './use-card';
import { twMerge } from 'tailwind-merge';
import * as React from 'react';

export const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  const {
    styles: { header },
  } = useCard();

  return (
    <div className={twMerge(header(), className)} role="heading" {...props}>
      {props.children}
    </div>
  );
};
