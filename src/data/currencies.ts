import { CurrencyConfig } from '../types';

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', name: 'US Dollar', symbol: '$', rateToUSD: 1.0 },
  EUR: { code: 'EUR', name: 'Euro', symbol: '€', rateToUSD: 0.92 },
  GBP: { code: 'GBP', name: 'British Pound', symbol: '£', rateToUSD: 0.79 },
  JPY: { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rateToUSD: 154.2 },
  CAD: { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$', rateToUSD: 1.38 },
  AUD: { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rateToUSD: 1.52 },
  INR: { code: 'INR', name: 'Indian Rupee', symbol: '₹', rateToUSD: 84.4 },
  CHF: { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', rateToUSD: 0.88 },
  SGD: { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rateToUSD: 1.34 },
  AED: { code: 'AED', name: 'UAE Dirham', symbol: 'AED', rateToUSD: 3.67 },
};
