import { Continent } from './common';

export interface Country {
  id: string; // e.g. "japan"
  name: string;
  officialName: string;
  continent: Continent;
  flag: string; // Emoji
  heroImage: string;
  gallery: string[];
  capital: string;
  currency: {
    code: string;
    name: string;
    symbol: string;
    exchangeRateToUSD: number;
  };
  dailyBudgetUSD: number; // Starting daily budget in USD
  budgetTier: 'Budget' | 'Mid-range' | 'Luxury';
  bestMonths: string[]; // ["Mar", "Apr", "Oct", "Nov"]
  overallScore: number; // 9.5
  safetyScore: number; // 9.8
  climate: string; // "Temperate / Seasonal"
  visaDifficulty: 'Easy / Visa Free' | 'eVisa' | 'Moderate' | 'Strict';
  bestFor: string[]; // ["Culture", "Gastronomy", "Safety", "Transit"]
  overview: string;
  quickStats: {
    plugType: string;
    drivingSide: 'Left' | 'Right';
    language: string;
    timeZone: string;
    waterDrinkable: boolean;
  };
  pros: string[];
  cons: string[];
  travelTips: {
    title: string;
    description: string;
    category: 'Money' | 'Culture' | 'Transport' | 'Safety' | 'Packing';
  }[];
  foodHighlights: {
    name: string;
    description: string;
    mustTry: boolean;
    image: string;
  }[];
  monthConditions: {
    month: string;
    status: 'Peak' | 'Shoulder' | 'Off-Peak';
    temp: string;
    rainfall: 'Low' | 'Moderate' | 'High';
    crowds: 'Low' | 'Medium' | 'High';
  }[];
  budgetBreakdown: {
    backpacker: number;
    midRange: number;
    luxury: number;
    accommodationAvg: number;
    mealAvg: number;
    transitAvg: number;
  };
}
