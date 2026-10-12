import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CURRENCIES } from '../data/currencies';
import { CurrencyConfig } from '../types';

interface CurrencyStore {
  activeCurrency: CurrencyConfig;
  setCurrency: (code: string) => void;
  convert: (amountUSD: number) => number;
  format: (amountUSD: number) => string;
}

export const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set, get) => ({
      activeCurrency: CURRENCIES.USD,
      setCurrency: (code: string) => {
        const found = CURRENCIES[code] || CURRENCIES.USD;
        set({ activeCurrency: found });
      },
      convert: (amountUSD: number) => {
        const rate = get().activeCurrency.rateToUSD;
        return Math.round(amountUSD * rate);
      },
      format: (amountUSD: number) => {
        const { symbol, code, rateToUSD } = get().activeCurrency;
        const converted = Math.round(amountUSD * rateToUSD);
        if (code === 'JPY' || code === 'KRW' || code === 'VND' || code === 'IDR') {
          return `${symbol}${converted.toLocaleString()}`;
        }
        return `${symbol}${converted.toLocaleString()}`;
      }
    }),
    {
      name: 'travelmore-currency-storage'
    }
  )
);
