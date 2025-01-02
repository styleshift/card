import * as React from 'react';
import styles from './Card.styles';
import { CardProps } from './types';
import { twMerge } from 'tailwind-merge';
import { CardContext } from './use-card';
import useCard from './use-card';

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      unstyled = false,
      separators = true,
      border = true,
      ...props
    },
    ref,
  ) => {
    const { root } = styles({ unstyled, separators, border });
    return (
      <CardContext.Provider value={{ unstyled, separators, border }}>
        <div ref={ref} className={twMerge(root(), className)} {...props}>
          {children}
        </div>
      </CardContext.Provider>
    );
  },
);

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const {
    styles: { header },
  } = useCard();
  return <div className={twMerge(header(), className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const {
    styles: { content },
  } = useCard();
  return <div className={twMerge(content(), className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const {
    styles: { footer },
  } = useCard();
  return <div className={twMerge(footer(), className)} {...props} />;
}

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});

export default Card;
