export interface TravelGuide {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  category: 
    | 'Country Guides' 
    | 'City Guides' 
    | 'Budget Guides' 
    | 'Hidden Gems' 
    | 'Travel Tips' 
    | 'Food Guides' 
    | 'First-Time Traveler' 
    | 'Solo Travel' 
    | 'Family Travel';
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishDate: string;
  readingTimeMin: number;
  countryId?: string;
  tableOfContents: { id: string; title: string }[];
  contentSections: {
    id: string;
    heading: string;
    paragraphs: string[];
    image?: string;
    imageCaption?: string;
    proTip?: string;
  }[];
  relatedDestinationIds: string[];
  tags: string[];
}
