import * as React from 'react';
import styles from './Card.styles';
import { CardHeaderProps, CardProps } from './types';
import { twMerge } from 'tailwind-merge';
import useCard, { CardContext } from './use-card';

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

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const {
    styles: { content },
  } = useCard();
  return <div className={twMerge(content(), className)} {...props} />;
};

export const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const {
    styles: { footer },
  } = useCard();
  return <div className={twMerge(footer(), className)} {...props} />;
};

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});

export default Card;
