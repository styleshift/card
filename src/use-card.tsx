import * as React from 'react';
import type { CardContextProps } from './types';

const CardContext = React.createContext<CardContextProps | undefined>(
  undefined,
);

export function CardProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: CardContextProps;
}) {
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export function useCard() {
  const context = React.useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
}

export default useCard;
