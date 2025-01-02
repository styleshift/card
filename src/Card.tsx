import * as React from 'react';
import styles from './styles';
import type { CardProps } from './types';
import { CardProvider } from './use-card';
import { twMerge } from 'tailwind-merge';
export function Card({
  children,
  className,
  unstyled = false,
  ...props
}: CardProps) {
  const classes = styles();

  return (
    <CardProvider value={{ unstyled }}>
      <div className={twMerge(classes.root({ className, ...props }))}>
        {children}
      </div>
    </CardProvider>
  );
}

export default Card;
