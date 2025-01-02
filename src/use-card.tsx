'use client';

import { createContext, useContext } from 'react';
import styles from './Card.styles';
import { CardContextProps } from './types';

export const CardContext = createContext<CardContextProps | undefined>(
  undefined,
);

interface UseCardReturn extends CardContextProps {
  styles: ReturnType<typeof styles>;
}

export function useCard(): UseCardReturn {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }

  return {
    ...context,
    styles: styles(context),
  };
}

export default useCard;
