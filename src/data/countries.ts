import { Country } from '../types';

export const COUNTRIES: Country[] = [
  {
    id: 'japan',
    name: 'Japan',
    officialName: 'State of Japan',
    continent: 'Asia',
    flag: '🇯🇵',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Tokyo',
    currency: {
      code: 'JPY',
      name: 'Japanese Yen',
      symbol: '¥',
      exchangeRateToUSD: 154.2
    },
    dailyBudgetUSD: 95,
    budgetTier: 'Mid-range',
    bestMonths: ['Mar', 'Apr', 'Oct', 'Nov'],
    overallScore: 9.7,
    safetyScore: 9.9,
    climate: 'Temperate Four Seasons',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Culinary Excellence', 'Safety', 'Ancient Culture', 'High-Speed Rail', 'Futuristic Cities'],
    overview: 'Japan balances hyper-modern neon metropolises with ancient cedar-lined shinto shrines, Zen rock gardens, and an obsessive culinary craftsmanship unmatched anywhere on Earth. From bullet-train hops between Tokyo and Kyoto to steaming mountain onsens in Hokkaido, Japan is remarkably safe, impeccably clean, and consistently mind-expanding.',
    quickStats: {
      plugType: 'Type A & B (100V)',
      drivingSide: 'Left',
      language: 'Japanese',
      timeZone: 'UTC+9 (JST)',
      waterDrinkable: true
    },
    pros: [
      'World-class bullet train (Shinkansen) network',
      'Unsurpassed Michelin-grade gastronomy at all price tiers',
      'Extremely high public safety for solo travelers and families',
      'Immaculately maintained historical shrines and temples'
    ],
    cons: [
      'Cherry blossom (Sakura) and Autumn peak seasons are very crowded',
      'English can be limited outside major tourist corridors',
      'Tattoos can occasionally be restricted at traditional onsens'
    ],
    travelTips: [
      {
        title: 'Get a Digital IC Card',
        description: 'Load a Suica or Pasmo card directly into your phone wallet for contactless subway, bus, and vending machine payments.',
        category: 'Transport'
      },
      {
        title: 'Konbini Quality is Exceptional',
        description: '7-Eleven, Lawson, and FamilyMart offer chef-grade onigiri, egg sandwiches, hot fried chicken, and specialty matcha snacks for $2-$4.',
        category: 'Money'
      },
      {
        title: 'Trash Etiquette',
        description: 'Public bins are rare. Carry a small plastic bag in your daypack to pack out your garbage until returning to your hotel or convenience store.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Tonkotsu & Shoyu Ramen',
        description: 'Deeply simmered broth noodles topped with melt-in-mouth chashu pork, seasoned soft-boiled egg, and nori.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Omakase Nigiri Sushi',
        description: 'Chef-curated fresh seasonal fish brushed with house-brewed nikiri soy sauce on warm vinegared rice.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Wagyu Yakiniku & Sukiyaki',
        description: 'A5 Kuroge Wagyu marbled beef slices seared quickly and dipped in rich egg yolk or savory tare.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '5°C / 41°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '6°C / 43°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '11°C / 52°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Peak', temp: '16°C / 61°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'May', status: 'Shoulder', temp: '20°C / 68°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Jun', status: 'Off-Peak', temp: '23°C / 73°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jul', status: 'Shoulder', temp: '27°C / 81°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Aug', status: 'Shoulder', temp: '29°C / 84°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Sep', status: 'Shoulder', temp: '25°C / 77°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Oct', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Nov', status: 'Peak', temp: '14°C / 57°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Dec', status: 'Off-Peak', temp: '8°C / 46°F', rainfall: 'Low', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 50,
      midRange: 120,
      luxury: 340,
      accommodationAvg: 65,
      mealAvg: 28,
      transitAvg: 18
    }
  },
  {
    id: 'italy',
    name: 'Italy',
    officialName: 'Italian Republic',
    continent: 'Europe',
    flag: '🇮🇹',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Rome',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      exchangeRateToUSD: 0.92
    },
    dailyBudgetUSD: 110,
    budgetTier: 'Mid-range',
    bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
    overallScore: 9.6,
    safetyScore: 8.9,
    climate: 'Mediterranean Sun & Alpine North',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Renaissance Art', 'Regional Cuisine', 'Coastal Splendor', 'Wine Trails', 'Ancient Ruins'],
    overview: 'Italy is an open-air museum and culinary heart of the Mediterranean. Wander through millennial Roman forums, cruise the pastel-hued cliffside villages of the Amalfi Coast, savor slow-simmered Tuscan ragù, and drift across Venetian canals in gondolas under twilight skies.',
    quickStats: {
      plugType: 'Type C, F & L (230V)',
      drivingSide: 'Right',
      language: 'Italian',
      timeZone: 'UTC+1 (CET)',
      waterDrinkable: true
    },
    pros: [
      'Deepest density of UNESCO World Heritage sites globally',
      'Unrivaled regional cuisine and vineyard culture',
      'Efficient Frecciarossa high-speed rail connects all major cities',
      'Idyllic coastline, rolling hills, and dramatic alpine peaks'
    ],
    cons: [
      'July and August can be oppressively hot and tourist-choked in Rome/Venice',
      'Pickpocketing vigilance required at crowded train stations',
      'Bureaucracy can slow opening hours of certain historical sites'
    ],
    travelTips: [
      {
        title: 'Validate Regional Train Tickets',
        description: 'Physical paper train tickets must be stamped at the green/yellow validation machines on the platform prior to boarding.',
        category: 'Transport'
      },
      {
        title: 'Coperto & Coffee Standing Up',
        description: 'Sitting down in a piazza comes with a coperto (table fee). Drink your espresso al banco (at the bar) like locals for €1.20.',
        category: 'Money'
      },
      {
        title: 'Book the Vatican & Uffizi Months Ahead',
        description: 'Lines can take 3+ hours; always reserve timed-entry skip-the-line tickets online in advance.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Authentic Roman Carbonara',
        description: 'Crispy guanciale, fresh egg yolks, sharp Pecorino Romano, and cracked black pepper with rigatoni.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Neapolitan Pizza Margherita',
        description: 'Charred pillowy sourdough blistered in a wood-fired oven with San Marzano tomatoes, fior di latte, and basil.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Artisanal Gelato',
        description: 'Dense, naturally flavored pistachio di Bronte and stracciatella gelato served from covered pozetti carapine.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '8°C / 46°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '10°C / 50°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '14°C / 57°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Peak', temp: '18°C / 64°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'May', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '31°C / 88°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '31°C / 88°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '20°C / 68°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '14°C / 57°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Off-Peak', temp: '9°C / 48°F', rainfall: 'Moderate', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 55,
      midRange: 135,
      luxury: 380,
      accommodationAvg: 75,
      mealAvg: 35,
      transitAvg: 20
    }
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    officialName: 'Swiss Confederation',
    continent: 'Europe',
    flag: '🇨🇭',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Bern',
    currency: {
      code: 'CHF',
      name: 'Swiss Franc',
      symbol: 'CHF',
      exchangeRateToUSD: 0.88
    },
    dailyBudgetUSD: 180,
    budgetTier: 'Luxury',
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Dec', 'Jan'],
    overallScore: 9.8,
    safetyScore: 9.9,
    climate: 'Alpine & Continental',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Alpine Scenery', 'Scenic Trains', 'Pristine Lakes', 'Skiing & Hiking', 'Safety & Precision'],
    overview: 'Nowhere else on the planet are soaring glaciers, turquoise alpine tarns, and flower-filled meadows as immaculately woven together as in Switzerland. Journey aboard the Glacier Express through dramatic mountain passes, wander car-free villages like Zermatt beneath the Matterhorn, and feast on fondue in historic chalets.',
    quickStats: {
      plugType: 'Type J (230V)',
      drivingSide: 'Right',
      language: 'German, French, Italian, Romansh',
      timeZone: 'UTC+1 (CET)',
      waterDrinkable: true
    },
    pros: [
      'Unsurpassed alpine landscapes and spotless cleanliness',
      'Swiss Travel Pass gives seamless access to trains, boats, and mountain lifts',
      'Extremely safe, tranquil, and punctual public infrastructure',
      'Year-round outdoor recreation from world-class skiing to summer trekking'
    ],
    cons: [
      'One of the most expensive travel destinations globally',
      'Dining out and hotel rates can quickly add up',
      'Weather in the high Alps can shift quickly'
    ],
    travelTips: [
      {
        title: 'Invest in the Swiss Travel Pass',
        description: 'For 3 to 15 days, it includes unlimited trains, panoramic routes, city buses, lake steamers, and free entry into 500+ museums.',
        category: 'Money'
      },
      {
        title: 'Drink from Public Fountains',
        description: 'The crystal-clear water gushing from historic Swiss town fountains is 100% pure mineral water from mountain springs.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Gruyère & Vacherin Cheese Fondue',
        description: 'Molten bubbling Swiss cheeses infused with white wine, garlic, and kirsch, served with crusty bread cubes.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Crispy Swiss Rösti',
        description: 'Golden pan-fried grated potato pancake topped with smoked bacon, fried egg, and melted alpine cheese.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '-2°C / 28°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '0°C / 32°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Mar', status: 'Shoulder', temp: '5°C / 41°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Off-Peak', temp: '9°C / 48°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'May', status: 'Shoulder', temp: '14°C / 57°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Jun', status: 'Peak', temp: '18°C / 64°F', rainfall: 'High', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '21°C / 70°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '16°C / 61°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '10°C / 50°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '4°C / 39°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Dec', status: 'Peak', temp: '0°C / 32°F', rainfall: 'Moderate', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 90,
      midRange: 220,
      luxury: 550,
      accommodationAvg: 110,
      mealAvg: 45,
      transitAvg: 35
    }
  },
  {
    id: 'norway',
    name: 'Norway',
    officialName: 'Kingdom of Norway',
    continent: 'Europe',
    flag: '🇳🇴',
    heroImage: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Oslo',
    currency: {
      code: 'NOK',
      name: 'Norwegian Krone',
      symbol: 'kr',
      exchangeRateToUSD: 10.9
    },
    dailyBudgetUSD: 140,
    budgetTier: 'Luxury',
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Jan', 'Feb'],
    overallScore: 9.6,
    safetyScore: 9.9,
    climate: 'Maritime Arctic & Coastal Temperate',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Fjord Cruises', 'Northern Lights', 'Midnight Sun', 'Wild Camping', 'Viking Heritage'],
    overview: 'Towering granite cliffs that plunge sheer into emerald fjords, dramatic wooden stave churches, and ethereal Arctic lights in Tromsø make Norway an untamed Nordic paradise. With the legal right to roam (Allemannsretten), adventurous travelers can hike, camp, and forage freely across its majestic wilderness.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'Norwegian (English universally spoken)',
      timeZone: 'UTC+1 (CET)',
      waterDrinkable: true
    },
    pros: [
      'Breathtaking fjords (Geirangerfjord, Nærøyfjord) and Lofoten Islands',
      'Right to roam allows responsible camping in nature anywhere',
      'Cashless society; virtually every payment is contactless card or mobile',
      'Spectacular Northern Lights in winter and Midnight Sun in summer'
    ],
    cons: [
      'High cost for dining out and alcohol',
      'Distances between scenic spots require ferries or extensive driving',
      'Winter daylight hours in northern regions can be very short'
    ],
    travelTips: [
      {
        title: 'Go Completely Cashless',
        description: 'Physical cash is rarely accepted; ensure you have a debit or credit card with zero foreign transaction fees.',
        category: 'Money'
      },
      {
        title: 'Supermarket Picnics',
        description: 'Save significantly on dining by shopping at REMA 1000 or Kiwi for smoked salmon, brown cheese (brunost), and fresh rye.',
        category: 'Money'
      }
    ],
    foodHighlights: [
      {
        name: 'Wild Arctic Salmon & Gravlax',
        description: 'Cured salmon delicately seasoned with sea salt, dill, and crushed peppercorns, served with sweet mustard sauce.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Brunost (Sweet Brown Cheese)',
        description: 'Caramelized whey cheese with a distinct fudge-like savoriness, shaved thin over warm freshly baked waffles.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Shoulder', temp: '-4°C / 25°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Shoulder', temp: '-3°C / 27°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Off-Peak', temp: '0°C / 32°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Apr', status: 'Off-Peak', temp: '5°C / 41°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'May', status: 'Shoulder', temp: '11°C / 52°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Jun', status: 'Peak', temp: '16°C / 61°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '18°C / 64°F', rainfall: 'High', crowds: 'High' },
      { month: 'Sep', status: 'Shoulder', temp: '13°C / 55°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Oct', status: 'Off-Peak', temp: '7°C / 45°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Nov', status: 'Off-Peak', temp: '1°C / 34°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Dec', status: 'Shoulder', temp: '-2°C / 28°F', rainfall: 'Moderate', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 75,
      midRange: 160,
      luxury: 420,
      accommodationAvg: 85,
      mealAvg: 40,
      transitAvg: 25
    }
  },
  {
    id: 'greece',
    name: 'Greece',
    officialName: 'Hellenic Republic',
    continent: 'Europe',
    flag: '🇬🇷',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Athens',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      exchangeRateToUSD: 0.92
    },
    dailyBudgetUSD: 75,
    budgetTier: 'Budget',
    bestMonths: ['May', 'Jun', 'Sep', 'Oct'],
    overallScore: 9.4,
    safetyScore: 9.1,
    climate: 'Sunny Mediterranean',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Island Hopping', 'Ancient Mythology', 'Sun-Kissed Beaches', 'Fresh Seafood', 'Nightlife'],
    overview: 'Whitewashed villages crowned with cobalt-blue domes, crumbling Acropolis columns under golden Aegean sunsets, and secluded turquoise coves make Greece an idyllic holiday dream. Island-hop across the Cyclades or Crete for fresh grilled octopus, cold Mythos, and legendary hospitality.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'Greek',
      timeZone: 'UTC+2 (EET)',
      waterDrinkable: false
    },
    pros: [
      'Incredible value for money compared to Western Europe',
      'Thousands of varied islands offering both buzzing nightlife and tranquil silence',
      'Rich mythological history and legendary hospitality (Philoxenia)',
      'Fresh and healthy Mediterranean olive oil cuisine'
    ],
    cons: [
      'Santorini and Mykonos suffer from intense overcrowding in July-August',
      'Ferry schedules can be disrupted by strong summer Meltemi winds',
      'Tap water on smaller islands is not recommended for drinking'
    ],
    travelTips: [
      {
        title: 'Explore the Cyclades in Shoulder Season',
        description: 'September brings warm sea temperatures, golden sunsets, and half the crowds and lodging rates of mid-summer.',
        category: 'Culture'
      },
      {
        title: 'Rent a Scooter or ATV on Islands',
        description: 'Renting a scooter allows you to easily discover hidden beaches that public buses cannot reach.',
        category: 'Transport'
      }
    ],
    foodHighlights: [
      {
        name: 'Souvlaki & Gyros Pita',
        description: 'Warm fluffy pita wrapped around spiced charred pork, crisp fries, sweet tomatoes, and garlicky tzatziki.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Fresh Grilled Octopus',
        description: 'Sun-dried octopus grilled over glowing coals with extra virgin Cretan olive oil, lemon, and wild oregano.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '10°C / 50°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '11°C / 52°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Off-Peak', temp: '13°C / 55°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Apr', status: 'Shoulder', temp: '16°C / 61°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'May', status: 'Peak', temp: '21°C / 70°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Jun', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '30°C / 86°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '30°C / 86°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '20°C / 68°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '15°C / 59°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Dec', status: 'Off-Peak', temp: '11°C / 52°F', rainfall: 'Moderate', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 38,
      midRange: 85,
      luxury: 250,
      accommodationAvg: 45,
      mealAvg: 22,
      transitAvg: 12
    }
  },
  {
    id: 'thailand',
    name: 'Thailand',
    officialName: 'Kingdom of Thailand',
    continent: 'Asia',
    flag: '🇹🇭',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Bangkok',
    currency: {
      code: 'THB',
      name: 'Thai Baht',
      symbol: '฿',
      exchangeRateToUSD: 34.8
    },
    dailyBudgetUSD: 40,
    budgetTier: 'Budget',
    bestMonths: ['Nov', 'Dec', 'Jan', 'Feb'],
    overallScore: 9.3,
    safetyScore: 8.8,
    climate: 'Tropical Monsoonal',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Street Food Capital', 'Limestone Islands', 'Ornate Buddhist Temples', 'Budget Friendly', 'Night Markets'],
    overview: 'The "Land of Smiles" is a sensory wonderland. Neon-drenched night markets serve world-famous pad thai and spicy som tum for pennies, while northern Chiang Mai offers mist-shrouded temple sanctuaries, and southern limestone carsts rise dramatically out of the Andaman Sea.',
    quickStats: {
      plugType: 'Type A, B & C (220V)',
      drivingSide: 'Left',
      language: 'Thai',
      timeZone: 'UTC+7 (ICT)',
      waterDrinkable: false
    },
    pros: [
      'Exceptional value for accommodation, food, and activities',
      'Electrifying street food culture recognized globally',
      'Friendly locals and deeply established backpacker & traveler infrastructure',
      'World-famous tropical islands with diving and snorkeling'
    ],
    cons: [
      'Monsoon season from July to October brings heavy rain',
      'Bangkok traffic can be notoriously gridlocked during rush hour',
      'Tourist scams around tuk-tuks and gem stores require vigilance'
    ],
    travelTips: [
      {
        title: 'Use Grab or Bolt for Rides',
        description: 'Avoid haggling with street taxis and tuk-tuks by hailing metered rides through ride-sharing apps.',
        category: 'Transport'
      },
      {
        title: 'Temple Dress Code',
        description: 'Shoulders and knees must always be respectfully covered when entering sacred wats.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Pad Thai Goong',
        description: 'Wok-charred rice noodles stir-fried with juicy prawns, tofu, tamarind pulp, bean sprouts, and crushed peanuts.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Tom Yum Goong',
        description: 'Aromatic hot and sour soup infused with lemongrass, galangal, kaffir lime leaves, fresh chili, and giant river prawns.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '29°C / 84°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Shoulder', temp: '32°C / 90°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Apr', status: 'Shoulder', temp: '34°C / 93°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'May', status: 'Off-Peak', temp: '33°C / 91°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jun', status: 'Off-Peak', temp: '32°C / 90°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jul', status: 'Off-Peak', temp: '31°C / 88°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '31°C / 88°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Sep', status: 'Off-Peak', temp: '30°C / 86°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Oct', status: 'Shoulder', temp: '29°C / 84°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Nov', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Dec', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 25,
      midRange: 60,
      luxury: 180,
      accommodationAvg: 25,
      mealAvg: 10,
      transitAvg: 6
    }
  },
  {
    id: 'peru',
    name: 'Peru',
    officialName: 'Republic of Peru',
    continent: 'Americas',
    flag: '🇵🇪',
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Lima',
    currency: {
      code: 'PEN',
      name: 'Peruvian Sol',
      symbol: 'S/',
      exchangeRateToUSD: 3.75
    },
    dailyBudgetUSD: 50,
    budgetTier: 'Budget',
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
    overallScore: 9.5,
    safetyScore: 8.5,
    climate: 'Coastal Desert, Andes Mountains & Amazon Rainforest',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Machu Picchu', 'Incan Architecture', 'World Gastronomy Capital', 'High-Altitude Trekking', 'Amazon Biodiversity'],
    overview: 'From the mystical cloud-shrouded ruins of Machu Picchu and the Sacred Valley to the hyper-biodiverse Amazon Basin, Peru is an adventurer’s crown jewel. Simultaneously, Lima is celebrated as one of the culinary capitals of the world, serving mind-bending Nikkei fusion and citrus-bright ceviche.',
    quickStats: {
      plugType: 'Type A & C (220V)',
      drivingSide: 'Right',
      language: 'Spanish & Quechua',
      timeZone: 'UTC-5 (PET)',
      waterDrinkable: false
    },
    pros: [
      'Epic Andean trekking trails including the Inca Trail and Salkantay Trek',
      'Lima houses multiple top 10 restaurants in the world (Central, Maido)',
      'Rich indigenous textile traditions and Quechua heritage',
      'Inexpensive domestic flights and comfortable sleeper buses'
    ],
    cons: [
      'Altitude sickness in Cusco (3,400m) requires 1-2 days of acclimatization',
      'Machu Picchu circuit tickets must be booked several months ahead',
      'Rainy season in the Andes from December to March causes landslides'
    ],
    travelTips: [
      {
        title: 'Acclimatize Slowly in the Sacred Valley',
        description: 'Fly into Cusco and head immediately down to Urubamba or Ollantaytambo (lower altitude) to adjust before ascending.',
        category: 'Safety'
      },
      {
        title: 'Drink Muña and Coca Tea',
        description: 'Locals drink infusions of wild mint (muña) and coca leaves to ease altitude symptoms naturally.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Classic Peruvian Ceviche',
        description: 'Raw sea bass flash-cured in freshly squeezed lime leche de tigre, served with sweet potato, cancha corn, and rocoto.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Lomo Saltado',
        description: 'Wok-fired strips of beef tenderloin sautéed with red onions, aji amarillo chili, and cilantro, served over rice and crispy fries.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '14°C / 57°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '14°C / 57°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '14°C / 57°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Shoulder', temp: '14°C / 57°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'May', status: 'Peak', temp: '13°C / 55°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '12°C / 54°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '12°C / 54°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '13°C / 55°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '14°C / 57°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '15°C / 59°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Shoulder', temp: '15°C / 59°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Dec', status: 'Off-Peak', temp: '15°C / 59°F', rainfall: 'High', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 30,
      midRange: 75,
      luxury: 210,
      accommodationAvg: 30,
      mealAvg: 15,
      transitAvg: 10
    }
  },
  {
    id: 'iceland',
    name: 'Iceland',
    officialName: 'Republic of Iceland',
    continent: 'Europe',
    flag: '🇮🇸',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1476610182048-b716b85e8a00?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Reykjavik',
    currency: {
      code: 'ISK',
      name: 'Icelandic Króna',
      symbol: 'kr',
      exchangeRateToUSD: 139.5
    },
    dailyBudgetUSD: 165,
    budgetTier: 'Luxury',
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec', 'Jan', 'Feb'],
    overallScore: 9.7,
    safetyScore: 10.0,
    climate: 'Subarctic Oceanic',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Volcanic Landscapes', 'Geothermal Lagoons', 'Waterfalls', 'Aurora Borealis', 'Ring Road Roadtrips'],
    overview: 'The land of fire and ice is an otherworldly realm of black sand beaches, roaring glacial waterfalls, geothermal lagoons, and towering active volcanoes. Driving the famous Ring Road reveals raw, primal nature untouched by time.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'Icelandic (English fluent)',
      timeZone: 'UTC+0 (GMT)',
      waterDrinkable: true
    },
    pros: [
      'Ranked #1 safest country on earth consistently',
      'Unmatched geological drama: glaciers, geysers, lava tubes, and hot springs',
      'Straightforward road tripping along Route 1 (Ring Road)',
      'Geothermal energy powers heated pools in almost every small town'
    ],
    cons: [
      'Extremely high fuel, vehicle rental, and food costs',
      'Volatile weather; high winds can blow car doors backwards',
      'Winter brings icy road conditions and limited daylight'
    ],
    travelTips: [
      {
        title: 'Check Vedur.is and SafeTravel.is Daily',
        description: 'Icelandic weather changes in minutes. Never ignore gale wind warnings when driving.',
        category: 'Safety'
      },
      {
        title: 'Shop at Bónus Supermarkets',
        description: 'Eating out daily will devour your budget. Buy groceries at the discount pig-logo supermarket Bónus.',
        category: 'Money'
      }
    ],
    foodHighlights: [
      {
        name: 'Icelandic Lamb Stew (Kjötsúpa)',
        description: 'Slow-simmered tender free-range Arctic lamb with potatoes, rutabaga, and aromatic herbs.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bæjarins Beztu Pylsur Hot Dog',
        description: 'Iconic lamb-based hot dog served with raw onion, crispy fried onion, sweet brown mustard, and remoulade.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Shoulder', temp: '-1°C / 30°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Shoulder', temp: '-1°C / 30°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '0°C / 32°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Off-Peak', temp: '3°C / 37°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'May', status: 'Shoulder', temp: '6°C / 43°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Jun', status: 'Peak', temp: '11°C / 52°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '14°C / 57°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '13°C / 55°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '9°C / 48°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Oct', status: 'Shoulder', temp: '5°C / 41°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Nov', status: 'Shoulder', temp: '1°C / 34°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Shoulder', temp: '-1°C / 30°F', rainfall: 'Moderate', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 80,
      midRange: 190,
      luxury: 480,
      accommodationAvg: 95,
      mealAvg: 48,
      transitAvg: 35
    }
  },
  {
    id: 'portugal',
    name: 'Portugal',
    officialName: 'Portuguese Republic',
    continent: 'Europe',
    flag: '🇵🇹',
    heroImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Lisbon',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      exchangeRateToUSD: 0.92
    },
    dailyBudgetUSD: 70,
    budgetTier: 'Budget',
    bestMonths: ['Apr', 'May', 'Jun', 'Sep', 'Oct'],
    overallScore: 9.5,
    safetyScore: 9.6,
    climate: 'Sunny Atlantic-Mediterranean',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Warm Hospitality', 'Surfing & Cliffs', 'Historic Trams & Azulejos', 'Pastéis de Nata', 'Affordable Europe'],
    overview: 'Perched on Europe’s southwestern Atlantic edge, Portugal is renowned for sunshine, ornate azulejo ceramic tiles, rattling vintage yellow trams, and fresh grilled sardines. From the fairytale castles of Sintra to the golden sea arches of the Algarve and the terraced Douro Valley vineyards, Portugal captivates every traveler.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'Portuguese (English widely understood)',
      timeZone: 'UTC+0 (WET)',
      waterDrinkable: true
    },
    pros: [
      'Outstanding value compared to other Western European nations',
      'Consistently ranked among the top 10 most peaceful countries in the world',
      'Thriving surf culture across Ericeira, Peniche, and Nazaré',
      'Warm, welcoming, and hospitable local population'
    ],
    cons: [
      'Cobblestone hills in Lisbon and Porto can be slippery and exhausting',
      'Ocean water along the Atlantic coast remains chilly even in summer',
      'Rental car availability in peak season can get scarce in the Algarve'
    ],
    travelTips: [
      {
        title: 'Wear Shoes with Strong Grip',
        description: 'The polished limestone calçada portuguesa pavements in Lisbon and Porto can be extremely slick.',
        category: 'Packing'
      },
      {
        title: 'Ride Tram 28 Early in the Morning',
        description: 'Beat the cruise ship crowds by boarding the iconic scenic tram before 8:30 AM or after 7 PM.',
        category: 'Transport'
      }
    ],
    foodHighlights: [
      {
        name: 'Pastel de Nata',
        description: 'Warm, flaky puff pastry tart filled with rich caramelized egg custard, dusted with cinnamon and powdered sugar.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bacalhau à Brás',
        description: 'Shredded salt cod sautéed with finely chopped onions, matchstick straw potatoes, scrambled eggs, and black olives.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '12°C / 54°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '13°C / 55°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '15°C / 59°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Apr', status: 'Shoulder', temp: '17°C / 63°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'May', status: 'Peak', temp: '20°C / 68°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '20°C / 68°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '15°C / 59°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Off-Peak', temp: '12°C / 54°F', rainfall: 'High', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 35,
      midRange: 80,
      luxury: 230,
      accommodationAvg: 40,
      mealAvg: 20,
      transitAvg: 10
    }
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    officialName: 'Socialist Republic of Vietnam',
    continent: 'Asia',
    flag: '🇻🇳',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Hanoi',
    currency: {
      code: 'VND',
      name: 'Vietnamese Dong',
      symbol: '₫',
      exchangeRateToUSD: 25400
    },
    dailyBudgetUSD: 35,
    budgetTier: 'Budget',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Oct', 'Nov'],
    overallScore: 9.3,
    safetyScore: 8.9,
    climate: 'Tropical & Subtropical',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Street Food Mastery', 'Ha Long Bay Crags', 'Lantern-lit Hoi An', 'Motorbike Loop Adventures', 'Coffee Culture'],
    overview: 'Vietnam is vibrant, resilient, and intoxicating. Slurp steaming bowls of phở on plastic stools in Hanoi’s ancient quarter, cruise between emerald karst pillars in Ha Long Bay, tailor silk clothing in historic Hoi An, and conquer dramatic northern mountain passes along the Ha Giang loop.',
    quickStats: {
      plugType: 'Type A & C (220V)',
      drivingSide: 'Right',
      language: 'Vietnamese',
      timeZone: 'UTC+7 (ICT)',
      waterDrinkable: false
    },
    pros: [
      'Incredible cost of living makes luxury and budget travel unbeatable',
      'Sensational coffee culture (egg coffee, condensed milk ca phe sua da)',
      'Rich historic legacy with ancient citadels and French colonial influence',
      'Spectacular northern mountain landscapes for road tripping'
    ],
    cons: [
      'Crossing streets amidst millions of motorbikes takes courage',
      'Touts in prime tourist hotspots can be persistent',
      'Regional weather variations mean north and south can feel entirely different'
    ],
    travelTips: [
      {
        title: 'Crossing the Street Confidence',
        description: 'Keep a steady, predictable pace when crossing roads; motorbikes will seamlessly steer around you. Do not stop or sprint suddenly.',
        category: 'Safety'
      },
      {
        title: 'Try Egg Coffee (Cà Phê Trứng)',
        description: 'Invented at Cafe Giảng in Hanoi, robust dark coffee is topped with a rich, velvety whipped egg yolk and condensed milk cream.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Phở Bò (Northern Beef Noodle Soup)',
        description: 'Clear, deeply spiced cinnamon and star anise bone broth poured over tender beef slices, rice noodles, and fresh herbs.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Crispy Bánh Mì',
        description: 'Warm French baguette filled with pork liver pâté, cha lua ham, pickled daikon and carrots, fresh cucumber, chili, and cilantro.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '20°C / 68°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Apr', status: 'Shoulder', temp: '26°C / 79°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'May', status: 'Shoulder', temp: '30°C / 86°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jun', status: 'Off-Peak', temp: '32°C / 90°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jul', status: 'Off-Peak', temp: '32°C / 90°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '31°C / 88°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Sep', status: 'Off-Peak', temp: '29°C / 84°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Oct', status: 'Shoulder', temp: '26°C / 79°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Dec', status: 'Peak', temp: '20°C / 68°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 22,
      midRange: 55,
      luxury: 160,
      accommodationAvg: 20,
      mealAvg: 8,
      transitAvg: 5
    }
  },
  {
    id: 'spain',
    name: 'Spain',
    officialName: 'Kingdom of Spain',
    continent: 'Europe',
    flag: '🇪🇸',
    heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Madrid',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      exchangeRateToUSD: 0.92
    },
    dailyBudgetUSD: 90,
    budgetTier: 'Mid-range',
    bestMonths: ['Apr', 'May', 'Jun', 'Sep', 'Oct'],
    overallScore: 9.6,
    safetyScore: 9.2,
    climate: 'Sunny Mediterranean & Oceanic North',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Tapas & Wine Culture', 'Gaudí Architecture', 'Flamenco Passion', 'Moorish Palaces', 'Lively Plazas'],
    overview: 'Spain pulses with boundless energy. Marvel at Antoni Gaudí’s Sagrada Família in Barcelona, gaze at the intricate stucco lace of the Alhambra in Granada, hop between bustling Basque pintxos bars in San Sebastián, and embrace midnight dinners that stretch into lively open-air fiesta mornings.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'Spanish (Castilian)',
      timeZone: 'UTC+1 (CET)',
      waterDrinkable: true
    },
    pros: [
      'High-speed AVE train network connects cities across the peninsula in hours',
      'Electrifying nightlife and late-evening dining culture',
      'San Sebastián has one of the highest densities of Michelin stars per capita',
      'Rich architectural tapestry blending Moorish and Gothic design'
    ],
    cons: [
      'Inland Madrid and Seville reach 40°C+ during July and August',
      'Dining rhythm is late (lunch at 2 PM, dinner rarely before 9:30 PM)',
      'Sunday business closures in smaller towns'
    ],
    travelTips: [
      {
        title: 'Adapt to the Spanish Clock',
        description: 'Embrace the afternoon rest (siesta) and head out for tapas after 8:30 PM when the streets truly come alive.',
        category: 'Culture'
      },
      {
        title: 'Book the Alhambra 2 Months in Advance',
        description: 'Tickets for the Nasrid Palaces in Granada sell out completely weeks ahead.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Jamón Ibérico de Bellota',
        description: 'Acorn-fed cured Iberian ham carved paper-thin, melting instantly on the tongue with rich nutty umami.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Paella Valenciana',
        description: 'Traditional saffron rice cooked in a broad pan with rabbit, chicken, green beans, and a crunchy socarrat crust.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '10°C / 50°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '12°C / 54°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '15°C / 59°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Peak', temp: '18°C / 64°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'May', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '32°C / 90°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '32°C / 90°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '21°C / 70°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '14°C / 57°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Dec', status: 'Off-Peak', temp: '11°C / 52°F', rainfall: 'Moderate', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 48,
      midRange: 110,
      luxury: 320,
      accommodationAvg: 60,
      mealAvg: 28,
      transitAvg: 16
    }
  },
  {
    id: 'morocco',
    name: 'Morocco',
    officialName: 'Kingdom of Morocco',
    continent: 'Africa',
    flag: '🇲🇦',
    heroImage: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Rabat',
    currency: {
      code: 'MAD',
      name: 'Moroccan Dirham',
      symbol: 'MAD',
      exchangeRateToUSD: 9.85
    },
    dailyBudgetUSD: 55,
    budgetTier: 'Budget',
    bestMonths: ['Mar', 'Apr', 'May', 'Sep', 'Oct', 'Nov'],
    overallScore: 9.2,
    safetyScore: 8.6,
    climate: 'Mediterranean & Saharan Desert',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Sahara Desert Glamping', 'Historic Medinas & Souks', 'Aromatic Tagines', 'Riad Architecture', 'Blue Chefchaouen'],
    overview: 'An exotic gateway to North Africa where labyrinthine medieval medinas hum with the scent of cumin and cedarwood, kaleidoscopic hand-woven Berber carpets line alley walls, and orange dunes rise under starlit Saharan skies. Staying in a serene courtyard riad offers peaceful sanctuary after exploring bustling souks.',
    quickStats: {
      plugType: 'Type C & E (220V)',
      drivingSide: 'Right',
      language: 'Arabic, Berber, French',
      timeZone: 'UTC+1 (WEST)',
      waterDrinkable: false
    },
    pros: [
      'Sensory magic in Marrakech, Fes, and blue-painted Chefchaouen',
      'Authentic desert camel treks and overnight dune camps in Erg Chebbi',
      'Stunning handcrafted architecture in traditional riads',
      'High-speed Al Boraq train links Casablanca and Tangier in 2 hours'
    ],
    cons: [
      'Persistent vendors and faux guides in medinas require firm politeness',
      'Alcohol is not widely available outside hotels and international venues',
      'Summer temperatures in inland desert regions exceed 42°C'
    ],
    travelTips: [
      {
        title: 'Polite Negotiation in Souks',
        description: 'Haggling is an art and cultural interaction. Start at around half the asking price with a smile, and stay friendly.',
        category: 'Money'
      },
      {
        title: 'Stay in a Traditional Riad',
        description: 'Skip standard chain hotels; riads offer authentic central fountains, mosaic zellige tilework, and rooftop breakfasts.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Slow-Cooked Lamb Tagine',
        description: 'Tender braised lamb shanks infused with saffron, ginger, cinnamon, sweet caramelized prunes, and toasted almonds.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Fresh Mint Tea (Moroccan Whiskey)',
        description: 'Boiling green gunpowder tea poured from high above into glasses with fresh spearmint leaves and pure sugar.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Shoulder', temp: '14°C / 57°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Feb', status: 'Shoulder', temp: '16°C / 61°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Mar', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Apr', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'May', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Shoulder', temp: '31°C / 88°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Jul', status: 'Off-Peak', temp: '37°C / 98°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '37°C / 98°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Sep', status: 'Peak', temp: '31°C / 88°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Nov', status: 'Peak', temp: '20°C / 68°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Dec', status: 'Shoulder', temp: '15°C / 59°F', rainfall: 'Moderate', crowds: 'Medium' }
    ],
    budgetBreakdown: {
      backpacker: 28,
      midRange: 65,
      luxury: 220,
      accommodationAvg: 35,
      mealAvg: 14,
      transitAvg: 10
    }
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    officialName: 'New Zealand / Aotearoa',
    continent: 'Oceania',
    flag: '🇳🇿',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Wellington',
    currency: {
      code: 'NZD',
      name: 'New Zealand Dollar',
      symbol: 'NZ$',
      exchangeRateToUSD: 1.64
    },
    dailyBudgetUSD: 130,
    budgetTier: 'Luxury',
    bestMonths: ['Dec', 'Jan', 'Feb', 'Mar'],
    overallScore: 9.7,
    safetyScore: 9.9,
    climate: 'Maritime Temperate',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Great Walks & Tramping', 'Lord of the Rings Film Scenery', 'Milford Sound Fjords', 'Adrenaline Capital', 'Pristine Nature'],
    overview: 'From the geothermal geysers and Maori culture of Rotorua in the North Island to the alpine peaks, hanging glaciers, and roaring fiords of Queenstown and Milford Sound in the South Island, New Zealand is the ultimate outdoor playground. Renting a campervan allows total freedom amidst cinematic scenery.',
    quickStats: {
      plugType: 'Type I (230V)',
      drivingSide: 'Left',
      language: 'English & Te Reo Māori',
      timeZone: 'UTC+12 (NZST)',
      waterDrinkable: true
    },
    pros: [
      'Nine world-class designated "Great Walks" across national parks',
      'Queenstown is the bungee jumping and jet-boating capital of the world',
      'Incredibly warm "Kiwi" friendliness and rich indigenous culture',
      'Unspoiled landscapes with almost zero pollution and brilliant starry skies'
    ],
    cons: [
      'Long-haul flights from North America and Europe',
      'Campervan and rental car rates surge heavily during December-January',
      'Sandflies can be relentless around coastal fiordland areas'
    ],
    travelTips: [
      {
        title: 'Book Great Walk Huts When Reservations Open',
        description: 'Milford and Routeburn huts sell out within minutes of being released in June/July for the summer season.',
        category: 'Transport'
      },
      {
        title: 'Pack Insect Repellent with DEET',
        description: 'West Coast and Fiordland sandflies are notoriously persistent; keep strong repellent handy.',
        category: 'Packing'
      }
    ],
    foodHighlights: [
      {
        name: 'New Zealand Green-Lipped Mussels',
        description: 'Giant sweet mussels steamed in Marlborough Sauvignon Blanc, garlic, and fresh herbs.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Pavlova with Kiwi & Passionfruit',
        description: 'Crisp marshmallow meringue topped with fresh whipped cream and tart tropical fruits.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Apr', status: 'Shoulder', temp: '16°C / 61°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'May', status: 'Off-Peak', temp: '12°C / 54°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Jun', status: 'Off-Peak', temp: '9°C / 48°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jul', status: 'Shoulder', temp: '8°C / 46°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Aug', status: 'Shoulder', temp: '9°C / 48°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Sep', status: 'Off-Peak', temp: '12°C / 54°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Oct', status: 'Shoulder', temp: '15°C / 59°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Nov', status: 'Shoulder', temp: '17°C / 63°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Dec', status: 'Peak', temp: '20°C / 68°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 65,
      midRange: 145,
      luxury: 390,
      accommodationAvg: 75,
      mealAvg: 35,
      transitAvg: 25
    }
  },
  {
    id: 'france',
    name: 'France',
    officialName: 'French Republic',
    continent: 'Europe',
    flag: '🇫🇷',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520939817895-060bdef4dc1a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Paris',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      exchangeRateToUSD: 0.92
    },
    dailyBudgetUSD: 120,
    budgetTier: 'Mid-range',
    bestMonths: ['Apr', 'May', 'Jun', 'Sep', 'Oct'],
    overallScore: 9.6,
    safetyScore: 9.0,
    climate: 'Temperate Oceanic & Mediterranean',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Haute Cuisine & Wine', 'Louvre & Art Museums', 'Châteaux of the Loire', 'French Riviera Glamour', 'Chic Cafés'],
    overview: 'From the glittering wrought-iron grandeur of the Eiffel Tower and the bohemian art alleys of Montmartre to the lavender fields of Provence and the azure coves of the Côte d’Azur, France defines cultural elegance and the art of living well (l’art de vivre).',
    quickStats: {
      plugType: 'Type C & E (230V)',
      drivingSide: 'Right',
      language: 'French',
      timeZone: 'UTC+1 (CET)',
      waterDrinkable: true
    },
    pros: [
      'World-famous museums: Louvre, Musée d’Orsay, Centre Pompidou',
      'High-speed TGV trains traverse from Paris to the Mediterranean in 3 hours',
      'Sublime boulangeries and patisseries on almost every corner',
      'Incredible diversity of wine regions: Champagne, Bordeaux, Burgundy'
    ],
    cons: [
      'Paris accommodation is expensive and hotel rooms are compact',
      'Service workers appreciate greeting with polite French (Bonjour Madame/Monsieur)',
      'Major tourist hubs have long museum entrance queues without reservations'
    ],
    travelTips: [
      {
        title: 'Always Say "Bonjour" First',
        description: 'Starting any interaction in a shop or restaurant with a polite "Bonjour" instantly opens doors and smiles.',
        category: 'Culture'
      },
      {
        title: 'Use the Navigo Easy Pass in Paris',
        description: 'Load digital subway and bus tickets onto a Navigo Easy card to save over 30% compared to single tickets.',
        category: 'Transport'
      }
    ],
    foodHighlights: [
      {
        name: 'Boeuf Bourguignon',
        description: 'Classic French beef stew braised for hours in Pinot Noir wine with mushrooms, pearl onions, and lardons.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Croissant au Beurre',
        description: 'Layered French viennoiserie pastry with shatteringly crisp golden crust and rich buttery honeycomb interior.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '6°C / 43°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '7°C / 45°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '11°C / 52°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Peak', temp: '15°C / 59°F', rainfall: 'Low', crowds: 'High' },
      { month: 'May', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '16°C / 61°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '10°C / 50°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Off-Peak', temp: '7°C / 45°F', rainfall: 'Moderate', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 60,
      midRange: 140,
      luxury: 410,
      accommodationAvg: 80,
      mealAvg: 38,
      transitAvg: 18
    }
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    officialName: 'Republic of Korea',
    continent: 'Asia',
    flag: '🇰🇷',
    heroImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Seoul',
    currency: {
      code: 'KRW',
      name: 'South Korean Won',
      symbol: '₩',
      exchangeRateToUSD: 1395
    },
    dailyBudgetUSD: 75,
    budgetTier: 'Budget',
    bestMonths: ['Mar', 'Apr', 'May', 'Sep', 'Oct', 'Nov'],
    overallScore: 9.5,
    safetyScore: 9.8,
    climate: 'Four Seasons Continental',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['K-Culture & Pop Music', 'Korean BBQ & Street Food', 'Ancient Joseon Palaces', '24/7 Energy & Cafes', 'High-Speed Connectivity'],
    overview: 'South Korea seamlessly merges futuristic skyscraper cityscapes with ancient Joseon royal palaces and tranquil mountain Buddhist hermitages. Seoul never sleeps, with 24-hour barbecue joints, themed aesthetic coffee shops, vibrant shopping districts in Myeongdong, and high-speed KTX trains zooming to coastal Busan in two hours.',
    quickStats: {
      plugType: 'Type C & F (220V)',
      drivingSide: 'Right',
      language: 'Korean',
      timeZone: 'UTC+9 (KST)',
      waterDrinkable: true
    },
    pros: [
      'Superb high-speed transit and subway infrastructure with bilingual signage',
      'Tremendous public safety; safe at any hour of the night',
      'World-leading cafe culture with remarkable interior architecture',
      'Incredible value for skincare, cosmetics, and electronics'
    ],
    cons: [
      'Google Maps does not provide walking directions (Naver Map / KakaoMap required)',
      'Mid-summer brings high humidity and heavy monsoon downpours',
      'Solo dining options can be limited at traditional barbecue spots requiring 2+ portions'
    ],
    travelTips: [
      {
        title: 'Download Naver Map or KakaoMap',
        description: 'Google Maps is legally restricted from storing detailed Korean map vectors; install Naver Map for accurate English directions.',
        category: 'Transport'
      },
      {
        title: 'Get a T-Money Card',
        description: 'Tap-to-pay card usable on all subways, buses, taxis, and convenience stores nationwide.',
        category: 'Money'
      }
    ],
    foodHighlights: [
      {
        name: 'Korean BBQ (Samgyeopsal & Hanwoo)',
        description: 'Thick pork belly and premium Hanwoo beef grilled table-side, wrapped in sesame perilla leaves with garlic, ssamjang, and kimchi.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Crispy Korean Fried Chicken (Chimaek)',
        description: 'Double-fried shatteringly crispy chicken tossed in sweet spicy gochujang glaze, paired with ice-cold draft beer and pickled radish.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '-2°C / 28°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '1°C / 34°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '7°C / 45°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Peak', temp: '13°C / 55°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'May', status: 'Peak', temp: '18°C / 64°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Jun', status: 'Shoulder', temp: '23°C / 73°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Jul', status: 'Off-Peak', temp: '26°C / 79°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '27°C / 81°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Sep', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Oct', status: 'Peak', temp: '15°C / 59°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Nov', status: 'Shoulder', temp: '8°C / 46°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Dec', status: 'Off-Peak', temp: '0°C / 32°F', rainfall: 'Low', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 38,
      midRange: 85,
      luxury: 260,
      accommodationAvg: 48,
      mealAvg: 20,
      transitAvg: 10
    }
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    officialName: 'Republic of Indonesia',
    continent: 'Asia',
    flag: '🇮🇩',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Jakarta (Nusantara)',
    currency: {
      code: 'IDR',
      name: 'Indonesian Rupiah',
      symbol: 'Rp',
      exchangeRateToUSD: 15850
    },
    dailyBudgetUSD: 42,
    budgetTier: 'Budget',
    bestMonths: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    overallScore: 9.4,
    safetyScore: 8.7,
    climate: 'Tropical Equatorial',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Bali Spiritual Retreats', 'Komodo Dragons', 'Volcano Sunrise Treks', 'World-Class Surfing', 'Lush Rice Terraces'],
    overview: 'An archipelago of over 17,000 islands spanning equatorial waters between the Indian and Pacific Oceans. Indonesia enchants with Bali’s spiritual temples and emerald Tegallalang rice terraces, Komodo Island’s prehistoric dragons, Mount Bromo’s smoking volcanic caldera, and pristine coral reefs in Raja Ampat.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Left',
      language: 'Bahasa Indonesia',
      timeZone: 'UTC+7 to UTC+9',
      waterDrinkable: false
    },
    pros: [
      'Tremendous value for luxury private pool villas and wellness retreats',
      'Surfer and scuba diver mecca with world-class breaks and coral biodiversity',
      'Warm spiritual warmth and deep Balinese cultural heritage',
      'Incredible adventure trekking on active volcanoes (Bromo, Ijen)'
    ],
    cons: [
      'South Bali (Canggu, Seminyak) traffic can be intensely congested',
      'Rainy wet season from November to March brings heavy tropical showers',
      'Cash or QRIS is needed in rural island locations'
    ],
    travelTips: [
      {
        title: 'Rent a Scooter Wisely in Bali',
        description: 'Only ride if you have an International Driving Permit and prior experience; wear a helmet at all times.',
        category: 'Safety'
      },
      {
        title: 'Hike Mount Ijen at Midnight',
        description: 'Climb Mount Ijen to witness the world-famous electric blue sulfur flames before sunrise over the turquoise acid crater lake.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Nasi Goreng Special',
        description: 'Aromatic wok-fried jasmine rice with sweet kecap manis, chili, shallots, garlic, satay chicken skewers, and sunny fried egg.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Beef Rendang',
        description: 'Slow-caramelized Sumatran beef braised for hours in rich coconut milk, lemongrass, galangal, turmeric, and toasted coconut.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '28°C / 82°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '28°C / 82°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '29°C / 84°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Peak', temp: '29°C / 84°F', rainfall: 'Low', crowds: 'High' },
      { month: 'May', status: 'Peak', temp: '29°C / 84°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Peak', temp: '29°C / 84°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Nov', status: 'Shoulder', temp: '29°C / 84°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Dec', status: 'Off-Peak', temp: '28°C / 82°F', rainfall: 'High', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 25,
      midRange: 60,
      luxury: 190,
      accommodationAvg: 28,
      mealAvg: 11,
      transitAvg: 7
    }
  },
  {
    id: 'costa-rica',
    name: 'Costa Rica',
    officialName: 'Republic of Costa Rica',
    continent: 'Americas',
    flag: '🇨🇷',
    heroImage: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'San José',
    currency: {
      code: 'CRC',
      name: 'Costa Rican Colón',
      symbol: '₡',
      exchangeRateToUSD: 512
    },
    dailyBudgetUSD: 70,
    budgetTier: 'Budget',
    bestMonths: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    overallScore: 9.4,
    safetyScore: 9.1,
    climate: 'Tropical Rainforest & Pacific Beaches',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Pura Vida Lifestyle', 'Sloths & Toucans Biodiversity', 'Arenal Volcano Hot Springs', 'Cloud Forests', 'Canopy Ziplining'],
    overview: 'Pioneers of eco-tourism and wildlife conservation, Costa Rica lives by the tranquil motto "Pura Vida" (pure life). Hike through mist-wrapped Monteverde cloud forests on hanging suspension bridges, soak in natural volcanic thermal springs beneath Arenal Volcano, and catch surf waves along the Pacific coast.',
    quickStats: {
      plugType: 'Type A & B (120V)',
      drivingSide: 'Right',
      language: 'Spanish (English common in tourism)',
      timeZone: 'UTC-6 (CST)',
      waterDrinkable: true
    },
    pros: [
      'Over 25% of national land area preserved as national parks and reserves',
      'Unmatched wildlife sightings: three-toed sloths, scarlet macaws, howler monkeys',
      'High political stability and no standing army since 1948',
      'Top-tier eco-lodges integrated into jungle canopies'
    ],
    cons: [
      'More expensive than neighboring Central American countries',
      'Green/rainy season from May to November brings afternoon downpours',
      'Unpaved rural roads can require a 4x4 vehicle'
    ],
    travelTips: [
      {
        title: 'Hire a Certified Naturalist Guide',
        description: 'Sloths and camouflaged wildlife are nearly invisible to untrained eyes; guides with spotting scopes are worth every colón.',
        category: 'Culture'
      },
      {
        title: 'Rent a 4WD SUV',
        description: 'Getting to remote gems like Monteverde or the Osa Peninsula requires navigating gravel roads and river crossings.',
        category: 'Transport'
      }
    ],
    foodHighlights: [
      {
        name: 'Gallo Pinto Breakfast',
        description: 'Savory stir-fried rice and black beans seasoned with Salsa Lizano, served with fried eggs, plantains, and fresh queso turrialba.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Casado Platter',
        description: 'Hearty traditional lunch with grilled fish or steak, rice, beans, fresh cabbage salad, and sweet caramelized maduros.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Apr', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'May', status: 'Shoulder', temp: '27°C / 81°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Jun', status: 'Shoulder', temp: '27°C / 81°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Jul', status: 'Shoulder', temp: '27°C / 81°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Aug', status: 'Shoulder', temp: '26°C / 79°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Sep', status: 'Off-Peak', temp: '25°C / 77°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Oct', status: 'Off-Peak', temp: '25°C / 77°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Nov', status: 'Shoulder', temp: '25°C / 77°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Dec', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 38,
      midRange: 85,
      luxury: 250,
      accommodationAvg: 45,
      mealAvg: 22,
      transitAvg: 14
    }
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    officialName: 'Republic of South Africa',
    continent: 'Africa',
    flag: '🇿🇦',
    heroImage: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Pretoria / Cape Town / Bloemfontein',
    currency: {
      code: 'ZAR',
      name: 'South African Rand',
      symbol: 'R',
      exchangeRateToUSD: 18.2
    },
    dailyBudgetUSD: 65,
    budgetTier: 'Budget',
    bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug'],
    overallScore: 9.3,
    safetyScore: 7.9,
    climate: 'Mediterranean & Subtropical',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Big Five Safaris', 'Table Mountain Sunsets', 'Cape Winelands', 'Scenic Garden Route Drive', 'African Penguins'],
    overview: 'The "Rainbow Nation" offers some of the most dramatic landscapes on the planet: Cape Town’s flat-topped Table Mountain rising sheer above two colliding oceans, Stellenbosch’s sun-drenched vineyards, and world-renowned Kruger National Park where lions, leopards, rhinos, elephants, and cape buffalos roam free.',
    quickStats: {
      plugType: 'Type M & C (230V)',
      drivingSide: 'Left',
      language: 'English, Zulu, Xhosa, Afrikaans',
      timeZone: 'UTC+2 (SAST)',
      waterDrinkable: true
    },
    pros: [
      'Incredible value for money for international visitors due to favorable exchange rates',
      'World-class private game lodges and self-drive safari infrastructure in Kruger',
      'Cape Town is consistently voted among the most visually stunning cities on Earth',
      'Award-winning Cape Winelands with gourmet estate dining'
    ],
    cons: [
      'Safety awareness required; avoid walking alone after dark in downtown areas',
      'Load shedding (scheduled power blackouts) can occur periodically',
      'Large geographical distances require domestic flights or rental car'
    ],
    travelTips: [
      {
        title: 'Rent a Car for the Garden Route',
        description: 'The scenic coastal drive between Cape Town, Hermanus, Knysna, and Plettenberg Bay is safe, modern, and breathtaking.',
        category: 'Transport'
      },
      {
        title: 'Visit Boulders Beach Penguins Early',
        description: 'See the famous African penguin colony at Boulders Beach before tour buses arrive at 10 AM.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'South African Braai (Barbecue)',
        description: 'Wood-fired open-air barbecue featuring spiced boerewors sausages, karoo lamb chops, and peri-peri chicken.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Cape Malay Bobotie',
        description: 'Spiced minced beef baked with golden sultanas, fragrant curry spices, and a savory baked egg custard topping.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Apr', status: 'Shoulder', temp: '22°C / 72°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'May', status: 'Shoulder', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Jun', status: 'Off-Peak', temp: '17°C / 63°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jul', status: 'Off-Peak', temp: '16°C / 61°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '17°C / 63°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Sep', status: 'Shoulder', temp: '18°C / 64°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Oct', status: 'Shoulder', temp: '21°C / 70°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Nov', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Dec', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 32,
      midRange: 75,
      luxury: 240,
      accommodationAvg: 40,
      mealAvg: 18,
      transitAvg: 12
    }
  },
  {
    id: 'mexico',
    name: 'Mexico',
    officialName: 'United Mexican States',
    continent: 'Americas',
    flag: '🇲🇽',
    heroImage: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512816689620-80486c476722?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Mexico City',
    currency: {
      code: 'MXN',
      name: 'Mexican Peso',
      symbol: '$',
      exchangeRateToUSD: 20.4
    },
    dailyBudgetUSD: 50,
    budgetTier: 'Budget',
    bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    overallScore: 9.5,
    safetyScore: 8.3,
    climate: 'Tropical & Desert & Temperate Highlands',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Taco Mastery & Street Food', 'Ancient Mayan & Aztec Pyramids', 'Cenote Caverns', 'Colonial Art Towns', 'Vibrant Culture'],
    overview: 'A kaleidoscopic explosion of vibrant color, ancient pyramids, and culinary wizardry. Mexico City is a world-class cultural metropolis brimming with art museums and leafy plazas, Oaxaca is the culinary heart of mole and mezcal, and the Yucatán Peninsula offers crystal-clear freshwater cenotes and turquoise Caribbean waters.',
    quickStats: {
      plugType: 'Type A & B (127V)',
      drivingSide: 'Right',
      language: 'Spanish',
      timeZone: 'UTC-6 (CST)',
      waterDrinkable: false
    },
    pros: [
      'Mexican cuisine is an intangible cultural heritage of humanity (UNESCO)',
      'Astonishing density of Mayan and Aztec archaeological wonders (Chichén Itzá, Teotihuacan)',
      'Affordable living costs across lodging, transport, and dining',
      'Warm, welcoming, and deeply celebratory culture'
    ],
    cons: [
      'Stick to reputable neighborhoods in major cities and exercise sensible precautions',
      'Never drink tap water; always ask for agua purificada',
      'Sargassum seaweed can periodically affect certain Riviera Maya beaches'
    ],
    travelTips: [
      {
        title: 'Use Uber or DiDi in Mexico City',
        description: 'Safe, tracked, and extremely inexpensive (often $3-$6 across neighborhoods).',
        category: 'Transport'
      },
      {
        title: 'Swim in Underground Cenotes',
        description: 'In the Yucatán, rent a car or scooter to explore semi-open and cave cenotes like Dos Ojos or Ik Kil.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Tacos al Pastor',
        description: 'Spit-roasted marinated pork sliced hot onto corn tortillas, topped with charred pineapple, cilantro, diced onion, and smoky salsa.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Oaxacan Mole Negro',
        description: 'Complex velvety sauce crafted from over 30 roasted chilies, Mexican chocolate, spices, and nuts served over tender chicken.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '24°C / 75°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Apr', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'May', status: 'Shoulder', temp: '28°C / 82°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Jun', status: 'Shoulder', temp: '26°C / 79°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jul', status: 'Shoulder', temp: '25°C / 77°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Aug', status: 'Shoulder', temp: '25°C / 77°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Sep', status: 'Off-Peak', temp: '24°C / 75°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Oct', status: 'Shoulder', temp: '24°C / 75°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Nov', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Dec', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 30,
      midRange: 68,
      luxury: 210,
      accommodationAvg: 35,
      mealAvg: 14,
      transitAvg: 8
    }
  },
  {
    id: 'egypt',
    name: 'Egypt',
    officialName: 'Arab Republic of Egypt',
    continent: 'Africa',
    flag: '🇪🇬',
    heroImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Cairo',
    currency: {
      code: 'EGP',
      name: 'Egyptian Pound',
      symbol: 'E£',
      exchangeRateToUSD: 49.3
    },
    dailyBudgetUSD: 45,
    budgetTier: 'Budget',
    bestMonths: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    overallScore: 9.3,
    safetyScore: 8.2,
    climate: 'Hyper-Arid Desert',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Pyramids of Giza', 'Nile River Cruises', 'Valley of the Kings', 'Red Sea Scuba Diving', 'Grand Egyptian Museum'],
    overview: 'The cradle of human civilization where the colossal limestone Great Pyramid of Giza and the enigmatic Sphinx have stood sentinel for over 4,500 years. Sail down the eternal Nile aboard a traditional felucca, walk among towering pharaonic columns at Karnak Temple in Luxor, and dive vibrant coral walls in the Red Sea at Sharm El Sheikh.',
    quickStats: {
      plugType: 'Type C & F (220V)',
      drivingSide: 'Right',
      language: 'Arabic',
      timeZone: 'UTC+2 (EET)',
      waterDrinkable: false
    },
    pros: [
      'Unrivaled ancient archaeological monuments on earth',
      'World-class scuba diving in the Red Sea with incredible visibility',
      'Phenomenal value for budget and luxury travelers',
      'New Grand Egyptian Museum (GEM) is one of the largest archaeological museum complexes globally'
    ],
    cons: [
      'Persistent camel handlers and souvenir sellers at the Pyramids require patience',
      'Extreme summer heat in Upper Egypt (Luxor and Aswan) can exceed 44°C',
      'Cairo traffic can be intense and noisy'
    ],
    travelTips: [
      {
        title: 'Hire a Licensed Egyptologist Guide',
        description: 'Having a knowledgeable guide transforms hieroglyphic walls into captivating stories and shields you from street touts.',
        category: 'Culture'
      },
      {
        title: 'Take a Sleeper Train or Domestic Flight to Luxor',
        description: 'Save days of overland travel by flying EgyptAir from Cairo to Luxor or Aswan in one hour.',
        category: 'Transport'
      }
    ],
    foodHighlights: [
      {
        name: 'Koshary',
        description: 'Egypt’s beloved national comfort dish: a layered bowl of rice, lentils, macaroni, chickpeas, crispy fried onions, and spiced garlic-vinegar tomato sauce.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Ta’ameya (Egyptian Falafel)',
        description: 'Crispy green falafel made from fava beans mixed with fresh coriander and dill, fried golden and dusted with sesame seeds.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '21°C / 70°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Apr', status: 'Shoulder', temp: '29°C / 84°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'May', status: 'Shoulder', temp: '33°C / 91°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Jun', status: 'Off-Peak', temp: '36°C / 97°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Jul', status: 'Off-Peak', temp: '37°C / 99°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '37°C / 99°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Sep', status: 'Off-Peak', temp: '34°C / 93°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Oct', status: 'Peak', temp: '30°C / 86°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Nov', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Dec', status: 'Peak', temp: '20°C / 68°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 25,
      midRange: 60,
      luxury: 190,
      accommodationAvg: 30,
      mealAvg: 12,
      transitAvg: 8
    }
  },
  {
    id: 'australia',
    name: 'Australia',
    officialName: 'Commonwealth of Australia',
    continent: 'Oceania',
    flag: '🇦🇺',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Canberra',
    currency: {
      code: 'AUD',
      name: 'Australian Dollar',
      symbol: 'A$',
      exchangeRateToUSD: 1.52
    },
    dailyBudgetUSD: 125,
    budgetTier: 'Luxury',
    bestMonths: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    overallScore: 9.6,
    safetyScore: 9.8,
    climate: 'Temperate South, Tropical North & Red Centre Desert',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Great Barrier Reef', 'Sydney Opera House & Harbour', 'Unique Wildlife (Kangaroos & Koalas)', 'Epic Coastal Roadtrips', 'Coffee Culture'],
    overview: 'A vast sun-drenched continent where cosmopolitan cities meet wilderness of epic proportions. Sail past the Sydney Opera House, snorkel amongst kaleidoscopic coral on the Great Barrier Reef, drive the dramatic Great Ocean Road cliffs, and witness sacred red monolithic sunrises at Uluru in the heart of the Outback.',
    quickStats: {
      plugType: 'Type I (230V)',
      drivingSide: 'Left',
      language: 'English',
      timeZone: 'UTC+8 to UTC+10',
      waterDrinkable: true
    },
    pros: [
      'World-famous flat whites and Melbourne specialty coffee scene',
      'Vast coastal wilderness with pristine public beaches',
      'Friendly, laid-back outdoor culture and high safety index',
      'Unique endemic wildlife found nowhere else on the planet'
    ],
    cons: [
      'Massive distances require domestic flights between regions',
      'Strong ultraviolet sun index requires diligent sunscreen and hat protection',
      'Relatively high cost of living for dining and hospitality'
    ],
    travelTips: [
      {
        title: 'Swim Between the Red and Yellow Flags',
        description: 'Australian ocean beaches have strong rip currents; always swim only where professional lifeguards are stationed.',
        category: 'Safety'
      },
      {
        title: 'Slip, Slop, Slap',
        description: 'The southern hemisphere ozone layer is thin; reapply SPF 50+ sunscreen every 2 hours even on overcast days.',
        category: 'Safety'
      }
    ],
    foodHighlights: [
      {
        name: 'Melbourne Flat White Coffee & Smashed Avo',
        description: 'Velvety micro-foamed espresso paired with sourdough toast topped with seasoned avocado, poached eggs, and feta.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Fresh Barramundi & Sydney Rock Oysters',
        description: 'Pan-seared native wild barramundi served alongside chilled, briny rock oysters and lemon wedges.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '24°C / 75°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Shoulder', temp: '22°C / 72°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'May', status: 'Shoulder', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Jun', status: 'Off-Peak', temp: '17°C / 63°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Jul', status: 'Off-Peak', temp: '16°C / 61°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '18°C / 64°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Sep', status: 'Shoulder', temp: '20°C / 68°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Oct', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Nov', status: 'Peak', temp: '24°C / 75°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Dec', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 62,
      midRange: 140,
      luxury: 370,
      accommodationAvg: 70,
      mealAvg: 35,
      transitAvg: 20
    }
  },
  {
    id: 'jordan',
    name: 'Jordan',
    officialName: 'Hashemite Kingdom of Jordan',
    continent: 'Middle East',
    flag: '🇯🇴',
    heroImage: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Amman',
    currency: {
      code: 'JOD',
      name: 'Jordanian Dinar',
      symbol: 'JD',
      exchangeRateToUSD: 0.71
    },
    dailyBudgetUSD: 80,
    budgetTier: 'Mid-range',
    bestMonths: ['Mar', 'Apr', 'May', 'Oct', 'Nov'],
    overallScore: 9.4,
    safetyScore: 9.0,
    climate: 'Arid Desert & Mediterranean Highlands',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Ancient Rose-Red City of Petra', 'Floating in the Dead Sea', 'Wadi Rum Mars Landscapes', 'Bedouin Hospitality', 'Roman Ruins of Jerash'],
    overview: 'An oasis of peace and profound history in the Middle East. Walk through the narrow Siq canyon until the iconic Treasury of Petra emerges from rose-red sandstone cliffs, float weightlessly in the hypersaline waters of the Dead Sea, and camp in geodesic luxury domes under starry desert skies in Wadi Rum.',
    quickStats: {
      plugType: 'Type C, D, F, G & J (230V)',
      drivingSide: 'Right',
      language: 'Arabic (English widely spoken)',
      timeZone: 'UTC+3 (AST)',
      waterDrinkable: false
    },
    pros: [
      'Petra is an undisputed Wonder of the Modern World',
      'Jordan Pass covers entry visas and access to over 40 major attractions',
      'Legendary Bedouin warmth, mint tea, and storytelling',
      'Wadi Rum offers unforgettable desert jeep tours and Martian landscapes'
    ],
    cons: [
      'The Jordanian Dinar is pegged higher than the US Dollar (1 JOD ≈ $1.41 USD)',
      'Summer months (June-August) can be blistering in the desert',
      'Dead Sea water can sting any open cuts or sensitive skin'
    ],
    travelTips: [
      {
        title: 'Buy the Jordan Pass Online Before Arrival',
        description: 'Purchasing the Jordan Pass waives the 40 JOD visa fee upon landing at Queen Alia Airport and includes full Petra entry.',
        category: 'Money'
      },
      {
        title: 'Petra by Night & The Monastery Hike',
        description: 'Wake up early to climb the 850 steps to the Monastery (Ad-Deir) before the heat and crowds peak.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Mansaf (National Dish)',
        description: 'Tender lamb cooked in a fermented dried yogurt (jameed) broth, served atop flatbread and turmeric rice, sprinkled with toasted pine nuts.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bedouin Zarb',
        description: 'Traditional underground barbecue where marinated chicken, lamb, and vegetables are slow-roasted in a pit dug into desert sand.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '12°C / 54°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '13°C / 55°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Peak', temp: '18°C / 64°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Apr', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'May', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Shoulder', temp: '31°C / 88°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Jul', status: 'Off-Peak', temp: '33°C / 91°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '33°C / 91°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Sep', status: 'Shoulder', temp: '31°C / 88°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Oct', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Nov', status: 'Peak', temp: '20°C / 68°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Dec', status: 'Off-Peak', temp: '14°C / 57°F', rainfall: 'Moderate', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 42,
      midRange: 95,
      luxury: 280,
      accommodationAvg: 50,
      mealAvg: 22,
      transitAvg: 18
    }
  },
  {
    id: 'canada',
    name: 'Canada',
    officialName: 'Canada',
    continent: 'Americas',
    flag: '🇨🇦',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Ottawa',
    currency: {
      code: 'CAD',
      name: 'Canadian Dollar',
      symbol: 'CA$',
      exchangeRateToUSD: 1.38
    },
    dailyBudgetUSD: 115,
    budgetTier: 'Mid-range',
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Dec', 'Jan', 'Feb'],
    overallScore: 9.6,
    safetyScore: 9.8,
    climate: 'Continental & Subarctic & Pacific Maritime',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Banff & Jasper Rocky Mountains', 'Glacial Turquoise Lakes', 'Wildlife (Bears, Moose & Whales)', 'Multicultural Metropolises', 'Winter Skiing'],
    overview: 'Spanning six time zones of pristine wilderness, Canada astounds with the jagged turquoise-reflected peaks of Banff and Lake Louise, the cosmopolitan waterfront sophistication of Vancouver, the European charm of Old Quebec, and world-class powder skiing at Whistler Blackcomb.',
    quickStats: {
      plugType: 'Type A & B (120V)',
      drivingSide: 'Right',
      language: 'English & French',
      timeZone: 'UTC-3.5 to UTC-8',
      waterDrinkable: true
    },
    pros: [
      'Spectacular Canadian Rockies national parks system with pristine wildlife',
      'Exceptionally safe and polite culture across both cities and remote towns',
      'Vibrant multicultural culinary scenes in Vancouver, Toronto, and Montreal',
      'Clean air and crystal-clear glacier lakes'
    ],
    cons: [
      'Very cold winter temperatures inland (-15°C to -30°C in prairie and alpine zones)',
      'Summer park shuttles and campsite permits book out months in advance',
      'Distances between provinces are vast'
    ],
    travelTips: [
      {
        title: 'Reserve Parks Canada Shuttles for Moraine Lake',
        description: 'Personal vehicles are no longer allowed at Moraine Lake; book official Parks Canada shuttle passes online ahead of time.',
        category: 'Transport'
      },
      {
        title: 'Carry Bear Spray in the Rockies',
        description: 'When hiking in Banff or Jasper, always carry bear spray on your hip and know how to use it safely.',
        category: 'Safety'
      }
    ],
    foodHighlights: [
      {
        name: 'Quebec Poutine',
        description: 'Crispy thick-cut French fries smothered in piping-hot savory brown gravy and squeaky fresh cheese curds.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Wild Pacific Salmon',
        description: 'Cedar-plank roasted British Columbia wild sockeye salmon with pure maple glaze and fresh herbs.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Shoulder', temp: '-8°C / 18°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Feb', status: 'Shoulder', temp: '-6°C / 21°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Mar', status: 'Off-Peak', temp: '-1°C / 30°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Apr', status: 'Off-Peak', temp: '6°C / 43°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'May', status: 'Shoulder', temp: '13°C / 55°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Jun', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '17°C / 63°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '10°C / 50°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '2°C / 36°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Shoulder', temp: '-5°C / 23°F', rainfall: 'High', crowds: 'Medium' }
    ],
    budgetBreakdown: {
      backpacker: 58,
      midRange: 130,
      luxury: 360,
      accommodationAvg: 75,
      mealAvg: 32,
      transitAvg: 18
    }
  },
  {
    id: 'brazil',
    name: 'Brazil',
    officialName: 'Federative Republic of Brazil',
    continent: 'Americas',
    flag: '🇧🇷',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Brasília',
    currency: {
      code: 'BRL',
      name: 'Brazilian Real',
      symbol: 'R$',
      exchangeRateToUSD: 5.75
    },
    dailyBudgetUSD: 55,
    budgetTier: 'Budget',
    bestMonths: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    overallScore: 9.3,
    safetyScore: 8.0,
    climate: 'Tropical & Subtropical',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Rio de Janeiro & Christ the Redeemer', 'Iguazu Falls Thunder', 'Carnaval Samba Energy', 'Amazon River Wildlife', 'Copacabana Beach Vibes'],
    overview: 'A country of boundless rhythm, lush rainforests, and epic coastlines. Rio de Janeiro’s dramatic green mountains drop directly onto iconic golden beaches of Copacabana and Ipanema, while the thunderous 275 cataracts of Iguazu Falls shake the earth along the Argentine border.',
    quickStats: {
      plugType: 'Type C & N (127V / 220V)',
      drivingSide: 'Right',
      language: 'Portuguese',
      timeZone: 'UTC-3 (BRT)',
      waterDrinkable: false
    },
    pros: [
      'Incredible scenic geography in Rio de Janeiro (Sugarloaf Mountain, Corcovado)',
      'Unsurpassed biodiversity in the Amazon Basin and the Pantanal wetlands',
      'Infectious warmth, music, and welcoming attitude from Brazilians',
      'Fabulous churrascaria barbecue steakhouses and fresh açai bowls'
    ],
    cons: [
      'Urban safety vigilance is needed; keep jewelry and high-end phones discreet',
      'English can be limited outside five-star hotels and major tourist agencies',
      'Domestic flights can be pricey during Carnaval and New Year’s Eve'
    ],
    travelTips: [
      {
        title: 'Use Registered Taxis or Uber in Rio',
        description: 'Uber is safe, trackable, and cheap; avoid flagging unmarked street taxis after dark.',
        category: 'Safety'
      },
      {
        title: 'Eat at a Rodízio Churrascaria',
        description: 'Passionate gaucho servers carve skewers of picanha, filet, and lamb continuously at your table until you flip your coaster to red.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Picanha Barbecue',
        description: 'Prime top sirloin cap grilled over open flames with coarse rock salt, sliced tender and served with farofa and vinaigrette.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Feijoada Completa',
        description: 'Rich slow-cooked black bean stew loaded with smoked sausage, pork ribs, and beef, accompanied by collard greens and orange slices.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '29°C / 84°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '30°C / 86°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '29°C / 84°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Apr', status: 'Shoulder', temp: '27°C / 81°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'May', status: 'Shoulder', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Jun', status: 'Off-Peak', temp: '24°C / 75°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Jul', status: 'Off-Peak', temp: '24°C / 75°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '24°C / 75°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Sep', status: 'Shoulder', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Oct', status: 'Shoulder', temp: '26°C / 79°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Dec', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Moderate', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 32,
      midRange: 75,
      luxury: 230,
      accommodationAvg: 38,
      mealAvg: 16,
      transitAvg: 10
    }
  },
  {
    id: 'india',
    name: 'India',
    officialName: 'Republic of India',
    continent: 'Asia',
    flag: '🇮🇳',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'New Delhi',
    currency: {
      code: 'INR',
      name: 'Indian Rupee',
      symbol: '₹',
      exchangeRateToUSD: 84.4
    },
    dailyBudgetUSD: 35,
    budgetTier: 'Budget',
    bestMonths: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    overallScore: 9.3,
    safetyScore: 8.2,
    climate: 'Tropical & Subtropical Monsoon',
    visaDifficulty: 'eVisa',
    bestFor: ['Taj Mahal Wonder', 'Spiritual Varanasi Ghats', 'Royal Rajasthan Palaces', 'Spicy Regional Curries', 'Himalayan Foothills'],
    overview: 'A kaleidoscopic subcontinent that awakens every single sense. Marvel at the white marble symmetry of the Taj Mahal in Agra, wander through the fairytale desert forts of Rajasthan, experience ancient spiritual ceremonies on the sacred river Ganges in Varanasi, and drift through tranquil palm-fringed Kerala backwaters.',
    quickStats: {
      plugType: 'Type C, D & M (230V)',
      drivingSide: 'Left',
      language: 'Hindi & English (plus 21 official languages)',
      timeZone: 'UTC+5:30 (IST)',
      waterDrinkable: false
    },
    pros: [
      'Tremendous value for money; one of the most budget-friendly destinations on earth',
      'Incomparable depth of spiritual, architectural, and culinary diversity',
      'Indian Railways is an iconic cultural journey across the subcontinent',
      'Incredible hospitality (Atithi Devo Bhava: Guest is God)'
    ],
    cons: [
      'Sensory overload and crowded city centers can be overwhelming at first',
      'Monsoon season (July-August) brings widespread flooding in certain states',
      'Never drink unbottled tap water or consume raw unpeeled fruit from street stalls'
    ],
    travelTips: [
      {
        title: 'Drink Only Sealed Bottled Water',
        description: 'Stick to trusted bottled water brands (Bisleri, Kinley) and check that the seal is completely intact.',
        category: 'Safety'
      },
      {
        title: 'Book First/Second AC Train Classes',
        description: 'Air-conditioned rail travel (1A, 2A, 3A) provides clean berths, comfortable bedding, and delightful scenery.',
        category: 'Transport'
      }
    ],
    foodHighlights: [
      {
        name: 'Butter Chicken & Garlic Naan',
        description: 'Tandoori-charred chicken simmered in a velvety tomato, cream, cashew, and fenugreek gravy, scooped with piping hot garlic naan.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Hyderabadi Dum Biryani',
        description: 'Fragrant basmati rice slow-cooked in a sealed handi pot with marinated spiced meat, saffron, caramelized onions, and fresh mint.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '18°C / 64°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Apr', status: 'Shoulder', temp: '33°C / 91°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'May', status: 'Off-Peak', temp: '38°C / 100°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Jun', status: 'Off-Peak', temp: '37°C / 99°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Jul', status: 'Off-Peak', temp: '32°C / 90°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '31°C / 88°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Sep', status: 'Shoulder', temp: '30°C / 86°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Oct', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Nov', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Dec', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 20,
      midRange: 55,
      luxury: 180,
      accommodationAvg: 22,
      mealAvg: 9,
      transitAvg: 6
    }
  },
  {
    id: 'albania',
    name: 'Albania',
    officialName: 'Republic of Albania',
    continent: 'Europe',
    flag: '🇦🇱',
    heroImage: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Tirana',
    currency: {
      code: 'ALL',
      name: 'Albanian Lek',
      symbol: 'L',
      exchangeRateToUSD: 93.5
    },
    dailyBudgetUSD: 45,
    budgetTier: 'Budget',
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    overallScore: 9.3,
    safetyScore: 9.4,
    climate: 'Mediterranean & Balkan Alpine',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Riviera Hidden Beaches', 'Accursed Mountains Trekking', 'Balkan Hospitality', 'Budget European Getaway', 'Ottoman Stone Towns'],
    overview: 'Europe’s best-kept secret and greatest value. The Albanian Riviera boasts crystal-clear Ionian waters rivaling Greece and the Amalfi Coast at a fraction of the cost, while northern Theth and Valbona offer breathtaking alpine trails through the untamed Accursed Mountains.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'Albanian',
      timeZone: 'UTC+1 (CET)',
      waterDrinkable: false
    },
    pros: [
      'Unbelievably affordable compared to neighboring Western European spots',
      'Pristine uncrowded beaches in Ksamil, Himara, and Dhermi',
      'Theth to Valbona mountain hike is one of Europe’s finest alpine walks',
      'Safe, incredibly hospitable locals who treat visitors as honored guests'
    ],
    cons: [
      'Public transit (furgons minibuses) runs informally without strict timetables',
      'Cash is king; cards are not accepted at many family tavernas',
      'Rapid coastal development is transforming certain beach towns'
    ],
    travelTips: [
      {
        title: 'Always Carry Cash Lek',
        description: 'ATMs are available in Tirana and coastal hubs, but small guesthouses and family restaurants rarely accept credit cards.',
        category: 'Money'
      },
      {
        title: 'Hike Theth to Valbona',
        description: 'A 6-hour spectacular trek over the Valbona Pass connects traditional stone guesthouses with alpine panoramas.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Tavë Kosi',
        description: 'Albania’s national comfort dish: tender baked lamb cooked in a savory garlic-infused sour milk and egg yogurt casserole.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Fresh Grilled Sea Bream & Byrek',
        description: 'Whole wild sea bream caught fresh off the Ionian coast paired with flaky spinach-and-feta filo pastry.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '8°C / 46°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '9°C / 48°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Off-Peak', temp: '12°C / 54°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Apr', status: 'Shoulder', temp: '16°C / 61°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'May', status: 'Peak', temp: '21°C / 70°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Jun', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '30°C / 86°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '30°C / 86°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '20°C / 68°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '14°C / 57°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Off-Peak', temp: '9°C / 48°F', rainfall: 'High', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 25,
      midRange: 55,
      luxury: 160,
      accommodationAvg: 28,
      mealAvg: 12,
      transitAvg: 7
    }
  },
  {
    id: 'slovenia',
    name: 'Slovenia',
    officialName: 'Republic of Slovenia',
    continent: 'Europe',
    flag: '🇸🇮',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Ljubljana',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      exchangeRateToUSD: 0.92
    },
    dailyBudgetUSD: 85,
    budgetTier: 'Mid-range',
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    overallScore: 9.6,
    safetyScore: 9.9,
    climate: 'Alpine & Mediterranean',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Fairytale Lake Bled', 'Triglav National Park Emerald Rivers', 'Eco-Green Ljubljana', 'Soča Valley Rafting', 'Postojna Caves'],
    overview: 'Europe’s green boutique gem. From the storybook island church in the center of Lake Bled to the electric-turquoise waters of the Soča River flowing from the Julian Alps, Slovenia is compact, pristine, remarkably sustainable, and far less crowded than neighboring Austria or Italy.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'Slovene (English fluent)',
      timeZone: 'UTC+1 (CET)',
      waterDrinkable: true
    },
    pros: [
      'Consistently ranked in the top 10 most peaceful and cleanest countries',
      'Ljubljana is a car-free pedestrian capital designed for walking and cycling',
      'Compact size: drive from the Julian Alps to the Adriatic coast in 2 hours',
      'Superb local wine culture and farm-to-table culinary movement'
    ],
    cons: [
      'Lake Bled parking can be challenging during peak summer weekends',
      'Highway vignette sticker required for driving on freeways',
      'High alpine mountain passes (Vršič Pass) close in winter due to snow'
    ],
    travelTips: [
      {
        title: 'Buy the E-Vignette for Highway Driving',
        description: 'Slovenia uses digital vignettes for toll motorways; purchase online at evinjeta.dars.si before driving across borders.',
        category: 'Transport'
      },
      {
        title: 'Visit Lake Bohinj for Fewer Crowds',
        description: 'Just 30 minutes past Lake Bled, Lake Bohinj is wilder, quieter, and situated in the heart of Triglav National Park.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Bled Cream Cake (Kremna Rezina)',
        description: 'Iconic Lake Bled dessert featuring layers of golden puff pastry, thick vanilla custard cream, and whipped cream.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kranjska Klobasa (Carniolan Sausage)',
        description: 'Traditional smoked pork and bacon sausage served with coarse grain mustard, freshly grated horseradish, and crusty bread.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '1°C / 34°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '3°C / 37°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '8°C / 46°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Apr', status: 'Shoulder', temp: '12°C / 54°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'May', status: 'Peak', temp: '17°C / 63°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '22°C / 72°F', rainfall: 'High', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '25°C / 77°F', rainfall: 'High', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '24°C / 75°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '19°C / 66°F', rainfall: 'High', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '13°C / 55°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '7°C / 45°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Off-Peak', temp: '2°C / 36°F', rainfall: 'Moderate', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 42,
      midRange: 95,
      luxury: 260,
      accommodationAvg: 52,
      mealAvg: 24,
      transitAvg: 14
    }
  }
];

import { ADDITIONAL_COUNTRIES } from './moreCountries';

export const ALL_COUNTRIES: Country[] = [...COUNTRIES, ...ADDITIONAL_COUNTRIES];

