import * as React from 'react';
import styles from './Card.styles';
import { CardProps } from './types';
import { twMerge } from 'tailwind-merge';
import { CardContext } from './use-card';
import { CardHeader } from './Card.Header';
import { CardContent } from './Card.Content';
import { CardFooter } from './Card.Footer';

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      unstyled = false,
      separators = true,
      border = true,
      ariaLabel,
      ...props
    },
    ref,
  ) => {
    const { root } = styles({ unstyled, separators, border });

    return (
      <CardContext.Provider value={{ unstyled, separators, border }}>
        <div
          ref={ref}
          className={twMerge(root(), className)}
          role="region"
          aria-label={ariaLabel || 'Card content'}
          {...props}
        >
          {children}
        </div>
      </CardContext.Provider>
    );
  },
);

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});

export default Card;
