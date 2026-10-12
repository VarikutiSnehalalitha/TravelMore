export type RankingTier = 
  | 'hidden_gem'  // 💎 Hidden Gem
  | 'underrated'  // 🟢 Underrated
  | 'emerging'    // 🟡 Emerging
  | 'popular'     // 🔴 Popular
  | 'iconic'      // 👑 Iconic
  | 'crowded';    // ⚠️ Crowded

export type DestinationCategory =
  | 'Cities'
  | 'Beaches'
  | 'Mountains'
  | 'National Parks'
  | 'Historical Sites'
  | 'Islands'
  | 'Villages'
  | 'Adventure'
  | 'Cultural'
  | 'Food'
  | 'Nightlife';

export type Continent = 
  | 'All' 
  | 'Europe' 
  | 'Asia' 
  | 'Americas' 
  | 'Africa' 
  | 'Oceania' 
  | 'Middle East';

export type TravelStyle = 
  | 'Budget' 
  | 'Mid-range' 
  | 'Luxury' 
  | 'Backpacking' 
  | 'Family' 
  | 'Couple' 
  | 'Solo' 
  | 'Adventure';

export type CrowdLevel = 'Very Low' | 'Low' | 'Moderate' | 'High' | 'Extremely Crowded';

export interface CurrencyConfig {
  code: string;
  name: string;
  symbol: string;
  rateToUSD: number; // e.g. EUR = 0.92, JPY = 152.5, GBP = 0.78, INR = 84.5
}
