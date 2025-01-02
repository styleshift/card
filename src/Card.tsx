import * as React from 'react';
import styles from './Card.styles';
import type { CardProps } from './types';
import { CardProvider } from './use-card';

export function Card({
  children,
  className,
  unstyled = false,
  ...props
}: CardProps) {
  const classes = styles({ unstyled });

  return (
    <CardProvider value={{ unstyled }}>
      <div className={classes.root({ className, ...props })}>{children}</div>
    </CardProvider>
  );
}

export default Card;
