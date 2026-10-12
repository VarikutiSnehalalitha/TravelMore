import { DestinationCategory, RankingTier, CrowdLevel } from './common';

export interface Destination {
  id: string; // e.g. "kyoto"
  name: string;
  countryId: string; // e.g. "japan"
  countryName: string;
  countryFlag: string;
  region: string;
  category: DestinationCategory;
  rankingTier: RankingTier;
  rating: number; // e.g. 4.9
  reviewCount: number;
  dailyBudgetUSD: number;
  crowdLevel: CrowdLevel;
  popularityScore: number; // 1-100
  heroImage: string;
  gallery: string[];
  coordinates: [number, number]; // [lat, lng]
  
  // Quick Info
  bestTimeToVisit: string;
  recommendedStayDays: number;
  safetyScore: number;
  gettingThere: string;

  // Rich Sections
  description: string;
  whyVisit: string[];
  whyYouMightSkip: string[];
  topThingsToDo: {
    id: string;
    title: string;
    duration: string;
    costUSD: number;
    image: string;
  }[];
  hiddenSpots: {
    title: string;
    description: string;
    tip: string;
  }[];
  localFood: {
    name: string;
    description: string;
    priceRange: string;
  }[];
  whereToStay: {
    area: string;
    vibe: string;
    recommendedHotel: string;
    priceTier: string;
  }[];
  gettingAround: {
    mode: string;
    detail: string;
    costPerDayUSD: number;
  }[];
  nearbyDestinations: string[]; // destination IDs
  travelerReviews: {
    author: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}
