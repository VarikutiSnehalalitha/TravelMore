import React from 'react';
import { useCurrencyStore } from '../../stores/useCurrencyStore';

interface PriceDisplayProps {
  amountUSD: number;
  suffix?: string;
  className?: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ amountUSD, suffix = '', className = '' }) => {
  const format = useCurrencyStore(state => state.format);
  return (
    <span className={className}>
      {format(amountUSD)}{suffix ? ` ${suffix}` : ''}
    </span>
  );
};
