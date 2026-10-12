import { Country } from '../types';

export const ADDITIONAL_COUNTRIES: Country[] = [
  {
    id: 'argentina',
    name: 'Argentina',
    officialName: 'Argentine Republic',
    continent: 'Americas',
    flag: '🇦🇷',
    heroImage: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Buenos Aires',
    currency: {
      code: 'ARS',
      name: 'Argentine Peso',
      symbol: '$',
      exchangeRateToUSD: 1020
    },
    dailyBudgetUSD: 50,
    budgetTier: 'Budget',
    bestMonths: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    overallScore: 9.5,
    safetyScore: 8.6,
    climate: 'Temperate & Sub-Antarctic Patagonia',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Patagonia Glaciers (Perito Moreno)', 'Tango in San Telmo', 'World-Class Asado Steaks', 'Mendoza Malbec Vineyards', 'Iguazu Waterfalls'],
    overview: 'From the European architecture and late-night tango milongas of Buenos Aires to the towering blue walls of the Perito Moreno Glacier in Patagonia and the snow-capped Andes mountains of Mendoza, Argentina is grand and passionate.',
    quickStats: {
      plugType: 'Type C & I (220V)',
      drivingSide: 'Right',
      language: 'Spanish',
      timeZone: 'UTC-3 (ART)',
      waterDrinkable: true
    },
    pros: [
      'Incredible value for fine dining and boutique wine tours',
      'World-famous hiking trails in El Chaltén beneath Mount Fitz Roy',
      'Vibrant cosmopolitan nightlife and literary cafes in Buenos Aires',
      'Epic natural wonders: Iguazu, Patagonia, Bariloche lakes'
    ],
    cons: [
      'Inflation requires understanding currency exchange (MEP rate / Western Union)',
      'Large internal distances mean domestic flights are necessary',
      'Patagonian winds can be ferocious during spring and summer'
    ],
    travelTips: [
      {
        title: 'Use Credit Cards with MEP Rate',
        description: 'Foreign Visa and Mastercard automatically apply the favorable MEP exchange rate, giving great value without carrying stacks of cash.',
        category: 'Money'
      },
      {
        title: 'El Chaltén is the Trekking Capital',
        description: 'Trails to Laguna de los Tres and Laguna Torre are well-marked and free to enter without requiring paid guides.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Argentine Asado & Ojo de Bife',
        description: 'Grass-fed ribeye steak grilled over wood coals, served with herbaceous chimichurri and crisp empanadas.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Alfajores with Dulce de Leche',
        description: 'Crumbly cornstarch cookies sandwiched with rich caramel dulce de leche and rolled in desiccated coconut.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '24°C / 75°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Apr', status: 'Shoulder', temp: '18°C / 64°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'May', status: 'Off-Peak', temp: '14°C / 57°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Jun', status: 'Off-Peak', temp: '11°C / 52°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Jul', status: 'Off-Peak', temp: '11°C / 52°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '13°C / 55°F', rainfall: 'Low', crowds: 'Low' },
      { month: 'Sep', status: 'Shoulder', temp: '15°C / 59°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Oct', status: 'Peak', temp: '18°C / 64°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Nov', status: 'Peak', temp: '21°C / 70°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Dec', status: 'Peak', temp: '24°C / 75°F', rainfall: 'Moderate', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 28,
      midRange: 65,
      luxury: 210,
      accommodationAvg: 32,
      mealAvg: 15,
      transitAvg: 10
    }
  },
  {
    id: 'croatia',
    name: 'Croatia',
    officialName: 'Republic of Croatia',
    continent: 'Europe',
    flag: '🇭🇷',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Zagreb',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      exchangeRateToUSD: 0.92
    },
    dailyBudgetUSD: 85,
    budgetTier: 'Mid-range',
    bestMonths: ['May', 'Jun', 'Sep', 'Oct'],
    overallScore: 9.5,
    safetyScore: 9.7,
    climate: 'Sunny Adriatic Mediterranean',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Dubrovnik Old Town Walls', 'Plitvice Lakes Waterfalls', 'Sailing the Dalmatian Islands', 'Hvar Nightlife & Lavender', 'Roman Diocletian Palace in Split'],
    overview: 'Where medieval walled fortresses meet translucent sapphire Adriatic waters. Walk atop Dubrovnik’s iconic stone ramparts, explore living Roman history inside Diocletian’s Palace in Split, island-hop aboard catamarans between Hvar and Korčula, and gaze at stepped turquoise cascades in Plitvice Lakes.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'Croatian',
      timeZone: 'UTC+1 (CET)',
      waterDrinkable: true
    },
    pros: [
      'Stunning sapphire coastline and over 1,000 pristine islands',
      'Exceptionally well-preserved medieval and Roman stone architecture',
      'High public safety across both cities and remote island fishing villages',
      'Plitvice Lakes is one of Europe’s most awe-inspiring national parks'
    ],
    cons: [
      'Dubrovnik experiences high cruise ship density in July and August',
      'Adoption of the Euro has increased prices across the Dalmatian coast',
      'Pebble beaches rather than soft sand (pack water shoes)'
    ],
    travelTips: [
      {
        title: 'Walk Dubrovnik Walls at 8:00 AM',
        description: 'Enter the city ramparts right at opening to avoid blistering midday sun and thousands of cruise ship passengers.',
        category: 'Culture'
      },
      {
        title: 'Pack Water Shoes',
        description: 'Croatian beaches feature polished limestone pebbles and sea urchins; comfortable rubber water shoes are essential.',
        category: 'Packing'
      }
    ],
    foodHighlights: [
      {
        name: 'Crni Rižot (Black Risotto)',
        description: 'Rich creamy Arborio rice stained dark with cuttlefish ink, loaded with tender squid, garlic, and white wine.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Dalmatian Peka',
        description: 'Veal, lamb, or octopus slow-roasted under a heavy cast-iron bell covered with glowing embers, cooked with wine and potatoes.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '9°C / 48°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '10°C / 50°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Off-Peak', temp: '13°C / 55°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Apr', status: 'Shoulder', temp: '16°C / 61°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'May', status: 'Peak', temp: '21°C / 70°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '30°C / 86°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '30°C / 86°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '20°C / 68°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '14°C / 57°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Off-Peak', temp: '10°C / 50°F', rainfall: 'High', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 42,
      midRange: 95,
      luxury: 280,
      accommodationAvg: 52,
      mealAvg: 25,
      transitAvg: 14
    }
  },
  {
    id: 'austria',
    name: 'Austria',
    officialName: 'Republic of Austria',
    continent: 'Europe',
    flag: '🇦🇹',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Vienna',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      exchangeRateToUSD: 0.92
    },
    dailyBudgetUSD: 95,
    budgetTier: 'Mid-range',
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Dec'],
    overallScore: 9.6,
    safetyScore: 9.9,
    climate: 'Continental & Alpine',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Imperial Vienna Palaces', 'Classical Music & Opera', 'Hallstatt Alpine Village', 'Tyrol Skiing & Hiking', 'Historic Coffeehouse Culture'],
    overview: 'Austria echoes with the timeless melodies of Mozart, Beethoven, and Strauss amidst grand imperial Habsburg palaces and majestic alpine peaks. Savor Sachertorte in gilded Viennese coffeehouses, explore Salzburg’s baroque fortress, and gaze at fairytale lakeside villages in the Salzkammergut.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'German',
      timeZone: 'UTC+1 (CET)',
      waterDrinkable: true
    },
    pros: [
      'Vienna is repeatedly named the world’s most livable city',
      'Unsurpassed classical music, museums, and imperial palace architecture',
      'Clean, punctual ÖBB rail network connecting all cities and alpine valleys',
      'Exceptional Christmas markets across Vienna and Innsbruck in December'
    ],
    cons: [
      'Hallstatt day-trip crowds can be intense between 11 AM and 3 PM',
      'Shops and grocery stores are strictly closed on Sundays',
      'Winter weather can be overcast in the lowlands'
    ],
    travelTips: [
      {
        title: 'Experience Traditional Kaffeehaus Culture',
        description: 'Order a Melange coffee with an Apfelstrudel; waitstaff will leave you undisturbed for hours to read and soak in the ambiance.',
        category: 'Culture'
      },
      {
        title: 'Stay Overnight in Hallstatt',
        description: 'Most visitors arrive on day buses; staying overnight allows you to enjoy magical misty mornings and peaceful evenings all to yourself.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Wiener Schnitzel',
        description: 'Tender veal cutlet pounded thin, breaded in fine crumbs, and pan-fried golden in clarified butter, served with potato salad and lemon.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sachertorte with Schlagobers',
        description: 'Dense dark chocolate cake layered with tart apricot jam and glazed in glossy dark chocolate, served with unsweetened whipped cream.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '1°C / 34°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Feb', status: 'Peak', temp: '3°C / 37°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Mar', status: 'Off-Peak', temp: '8°C / 46°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Apr', status: 'Shoulder', temp: '13°C / 55°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'May', status: 'Peak', temp: '18°C / 64°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '22°C / 72°F', rainfall: 'High', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '25°C / 77°F', rainfall: 'High', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '24°C / 75°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '13°C / 55°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '7°C / 45°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Dec', status: 'Peak', temp: '2°C / 36°F', rainfall: 'Moderate', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 48,
      midRange: 110,
      luxury: 310,
      accommodationAvg: 60,
      mealAvg: 30,
      transitAvg: 16
    }
  },
  {
    id: 'turkey',
    name: 'Turkey (Türkiye)',
    officialName: 'Republic of Türkiye',
    continent: 'Middle East',
    flag: '🇹🇷',
    heroImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Ankara',
    currency: {
      code: 'TRY',
      name: 'Turkish Lira',
      symbol: '₺',
      exchangeRateToUSD: 34.3
    },
    dailyBudgetUSD: 50,
    budgetTier: 'Budget',
    bestMonths: ['Apr', 'May', 'Jun', 'Sep', 'Oct', 'Nov'],
    overallScore: 9.5,
    safetyScore: 8.7,
    climate: 'Mediterranean & Continental Anatolian',
    visaDifficulty: 'eVisa',
    bestFor: ['Cappadocia Hot Air Balloons', 'Hagia Sophia & Grand Bazaar', 'Turquoise Coast Yachting', 'Pamukkale Travertines', 'Turkish Breakfast Feasts'],
    overview: 'Bridging East and West across the storied Bosphorus Strait. Gaze at the soaring domes and minarets of Hagia Sophia and the Blue Mosque in Istanbul, float in a sunrise hot air balloon over Cappadocia’s fairytale fairy chimneys, and cruise the breathtaking Turquoise Coast on a wooden gulet.',
    quickStats: {
      plugType: 'Type C & F (230V)',
      drivingSide: 'Right',
      language: 'Turkish',
      timeZone: 'UTC+3 (TRT)',
      waterDrinkable: false
    },
    pros: [
      'Incredible crossroad of Roman, Byzantine, and Ottoman empires',
      'World-famous sunrise hot air balloon flights in Göreme',
      'Sprawling Turkish breakfast (Kahvaltı) with dozens of small plates',
      'Affordable domestic flights on Turkish Airlines and Pegasus'
    ],
    cons: [
      'Persistent carpet and leather vendors in Istanbul’s tourist centers',
      'Exchange rate volatility can cause shifting local pricing',
      'Summer midday heat along the southern coast can exceed 38°C'
    ],
    travelTips: [
      {
        title: 'Book Cappadocia Balloons for Your First Morning',
        description: 'Flights cancel during high winds; booking your first day gives you backup opportunities if weather postpones it.',
        category: 'Culture'
      },
      {
        title: 'Get an Istanbulkart',
        description: 'One card works for all ferries, trams, subways, and funiculars across the European and Asian shores.',
        category: 'Transport'
      }
    ],
    foodHighlights: [
      {
        name: 'Traditional Turkish Kahvaltı',
        description: 'Lavish spread of fresh cheeses, olives, honey and clotted kaymak, warm simit bread, sucuk sausage, and menemen eggs.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Adana Kebab & Pistachio Baklava',
        description: 'Hand-minced spicy lamb skewered on flat iron swords and charred over wood charcoal, followed by crispy honey-drenched baklava.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '8°C / 46°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '9°C / 48°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Shoulder', temp: '12°C / 54°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Peak', temp: '16°C / 61°F', rainfall: 'Low', crowds: 'High' },
      { month: 'May', status: 'Peak', temp: '21°C / 70°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '26°C / 79°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '29°C / 84°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '29°C / 84°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '25°C / 77°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Nov', status: 'Shoulder', temp: '14°C / 57°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Dec', status: 'Off-Peak', temp: '10°C / 50°F', rainfall: 'Moderate', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 28,
      midRange: 65,
      luxury: 210,
      accommodationAvg: 35,
      mealAvg: 14,
      transitAvg: 9
    }
  },
  {
    id: 'colombia',
    name: 'Colombia',
    officialName: 'Republic of Colombia',
    continent: 'Americas',
    flag: '🇨🇴',
    heroImage: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Bogotá',
    currency: {
      code: 'COP',
      name: 'Colombian Peso',
      symbol: '$',
      exchangeRateToUSD: 4420
    },
    dailyBudgetUSD: 42,
    budgetTier: 'Budget',
    bestMonths: ['Dec', 'Jan', 'Feb', 'Mar', 'Jul', 'Aug'],
    overallScore: 9.3,
    safetyScore: 8.2,
    climate: 'Tropical Equatorial & Mountain Springtime',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Coffee Triangle (Eje Cafetero)', 'Colonial Cartagena Walled City', 'Cocora Valley Giant Wax Palms', 'Medellín Innovation & Cable Cars', 'Tayrona Caribbean Jungle'],
    overview: 'A country of breathtaking biodiversity, infectious salsa rhythm, and extraordinary warmth. Stand beneath giant wax palms in the misty Cocora Valley, sip world-class single-origin coffee on lush Andean fincas, wander Cartagena’s colorful bougainvillea-draped colonial balconies, and experience the stunning transformation of Medellín.',
    quickStats: {
      plugType: 'Type A & B (110V)',
      drivingSide: 'Right',
      language: 'Spanish',
      timeZone: 'UTC-5 (COT)',
      waterDrinkable: true
    },
    pros: [
      'Top-tier value for lodging, dining, tours, and domestic flights',
      'Medellín’s "City of Eternal Spring" climate and modern Metrocable transit',
      'Warmest, most genuinely enthusiastic local hospitality in South America',
      'Stunning diversity from high Andes peaks to Caribbean jungles'
    ],
    cons: [
      'Street smarts required ("No dar papaya" - don’t show off expensive items)',
      'Bogotá traffic can be slow and weather can be brisk and rainy',
      'Tayrona National Park closes annually for spiritual indigenous rejuvenation'
    ],
    travelTips: [
      {
        title: 'Ride Willy Jeeps in Salento',
        description: 'Stand on the back bumper of vintage WWII Willy jeeps to journey from Salento into the Cocora Valley.',
        category: 'Transport'
      },
      {
        title: 'Use InDrive or Uber in Cities',
        description: 'Avoid hailing unmarked street cabs; ride-hailing apps provide safer, metered rates.',
        category: 'Safety'
      }
    ],
    foodHighlights: [
      {
        name: 'Bandeja Paisa',
        description: 'Monster platter featuring crispy chicharrón, ground beef, fried egg, plantain, arepa, avocado, and red beans.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Fresh Arepas con Queso',
        description: 'Sweet golden sweet corn patties grilled with butter and stuffed with molten melted mozzarella cheese.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Shoulder', temp: '21°C / 70°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Apr', status: 'Shoulder', temp: '21°C / 70°F', rainfall: 'High', crowds: 'Low' },
      { month: 'May', status: 'Off-Peak', temp: '21°C / 70°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jun', status: 'Shoulder', temp: '22°C / 72°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Jul', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '23°C / 73°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Shoulder', temp: '22°C / 72°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Oct', status: 'Off-Peak', temp: '21°C / 70°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Nov', status: 'Off-Peak', temp: '21°C / 70°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Peak', temp: '22°C / 72°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 25,
      midRange: 58,
      luxury: 180,
      accommodationAvg: 28,
      mealAvg: 11,
      transitAvg: 7
    }
  },
  {
    id: 'philippines',
    name: 'Philippines',
    officialName: 'Republic of the Philippines',
    continent: 'Asia',
    flag: '🇵🇭',
    heroImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Manila',
    currency: {
      code: 'PHP',
      name: 'Philippine Peso',
      symbol: '₱',
      exchangeRateToUSD: 58.8
    },
    dailyBudgetUSD: 38,
    budgetTier: 'Budget',
    bestMonths: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    overallScore: 9.3,
    safetyScore: 8.3,
    climate: 'Tropical Maritime',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['El Nido & Coron Limestone Lagoons', 'World-Class Island Hopping', 'Whale Shark Encounters', 'Boracay White Beach Powdery Sands', 'Warm English-Fluent Hospitality'],
    overview: 'An archipelago of over 7,600 tropical islands blessed with crystalline waters of luminous turquoise and blindingly white powder sand beaches. Cruise between hidden lagoons surrounded by colossal black limestone karsts in El Nido and dive into WWII shipwrecks in Coron.',
    quickStats: {
      plugType: 'Type A, B & C (220V)',
      drivingSide: 'Right',
      language: 'Filipino (Tagalog) & English',
      timeZone: 'UTC+8 (PHT)',
      waterDrinkable: false
    },
    pros: [
      'Some of the most breathtaking tropical seascape lagoons on Earth',
      'English is widely spoken nationwide, making communication seamless',
      'Affordable island excursions, private boat charters, and fresh seafood',
      'Renowned warmth and musical joy of Filipino locals'
    ],
    cons: [
      'Island-to-island ferry and regional propeller flights can encounter delays',
      'Typhoon season from July to October can bring severe maritime storms',
      'Internet and Wi-Fi can be patchy in remote islands like Siargao or Palawan'
    ],
    travelTips: [
      {
        title: 'Book Private Island-Hopping Bangka in Coron',
        description: 'Chartering a private outrigger boat lets you depart at 7 AM and reach Kayangan Lake hours before tour groups.',
        category: 'Transport'
      },
      {
        title: 'Get an eSim with Smart or Globe',
        description: 'Purchase an eSim upon landing; Smart tends to have superior coverage across Palawan and Siargao.',
        category: 'Safety'
      }
    ],
    foodHighlights: [
      {
        name: 'Crispy Lechon Pork',
        description: 'Whole roasted pig stuffed with lemongrass, garlic, and scallions, roasted over glowing coals until skin is glassy and crisp.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Chicken & Pork Adobo',
        description: 'Tender meat braised in dark soy sauce, cane vinegar, garlic, black peppercorns, and bay leaves over fluffy garlic rice.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '29°C / 84°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Apr', status: 'Peak', temp: '31°C / 88°F', rainfall: 'Low', crowds: 'High' },
      { month: 'May', status: 'Peak', temp: '32°C / 90°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Jun', status: 'Shoulder', temp: '31°C / 88°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Jul', status: 'Off-Peak', temp: '30°C / 86°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Aug', status: 'Off-Peak', temp: '30°C / 86°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Sep', status: 'Off-Peak', temp: '30°C / 86°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Oct', status: 'Shoulder', temp: '30°C / 86°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Nov', status: 'Shoulder', temp: '29°C / 84°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Dec', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 22,
      midRange: 55,
      luxury: 170,
      accommodationAvg: 25,
      mealAvg: 10,
      transitAvg: 6
    }
  },
  {
    id: 'scotland',
    name: 'Scotland (UK)',
    officialName: 'Scotland',
    continent: 'Europe',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Edinburgh',
    currency: {
      code: 'GBP',
      name: 'British Pound',
      symbol: '£',
      exchangeRateToUSD: 0.79
    },
    dailyBudgetUSD: 110,
    budgetTier: 'Mid-range',
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
    overallScore: 9.6,
    safetyScore: 9.7,
    climate: 'Oceanic Maritime & Scottish Highlands',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Isle of Skye Fairy Pools', 'Edinburgh Castle & Royal Mile', 'Highland Single Malt Whiskies', 'Loch Ness & Dramatic Glens', 'North Coast 500 Roadtrip'],
    overview: 'A land of mist-cloaked castles, brooding glens, and ancient Celtic folklore. Walk the medieval cobblestones of Edinburgh’s Royal Mile beneath its volcanic castle crag, drive through the moody majesty of Glen Coe, cross over to the dramatic peaks of the Isle of Skye, and sample peaty single malts inside historic Speyside distilleries.',
    quickStats: {
      plugType: 'Type G (230V)',
      drivingSide: 'Left',
      language: 'English & Scots Gaelic',
      timeZone: 'UTC+0 (GMT)',
      waterDrinkable: true
    },
    pros: [
      'Incredible road tripping on the North Coast 500 (NC500)',
      'Edinburgh is one of Europe’s most visually dramatic capitals',
      'The right to responsible access (Scottish Outdoor Access Code) allows wild camping',
      'Rich whisky heritage with over 140 operating distilleries'
    ],
    cons: [
      'Highland midges (tiny biting insects) can be annoying in July-August',
      'Scottish weather is famously unpredictable ("four seasons in one day")',
      'Single-track highland roads require polite reversing into passing places'
    ],
    travelTips: [
      {
        title: 'Master Single-Track Passing Places',
        description: 'When driving in the Highlands, always pull into (or wait opposite) the nearest passing place on your left to let oncoming cars pass.',
        category: 'Transport'
      },
      {
        title: 'Smidge Repellent for Midges',
        description: 'Standard bug spray doesn’t deter Scottish midges; buy the local repellent brand "Smidge" at any outdoor shop.',
        category: 'Packing'
      }
    ],
    foodHighlights: [
      {
        name: 'Haggis, Neeps and Tatties',
        description: 'Traditional spiced Scottish minced meat seasoned with oats, served with mashed rutabaga (neeps), potatoes (tatties), and whisky cream sauce.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Cullen Skink',
        description: 'Thick, creamy Scottish soup made of smoked haddock, potatoes, onions, and rich cream, served with crusty brown bread.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Off-Peak', temp: '4°C / 39°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Feb', status: 'Off-Peak', temp: '5°C / 41°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Mar', status: 'Off-Peak', temp: '7°C / 45°F', rainfall: 'Moderate', crowds: 'Low' },
      { month: 'Apr', status: 'Shoulder', temp: '10°C / 50°F', rainfall: 'Low', crowds: 'Medium' },
      { month: 'May', status: 'Peak', temp: '14°C / 57°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jun', status: 'Peak', temp: '17°C / 63°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Jul', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '19°C / 66°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '15°C / 59°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '11°C / 52°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '7°C / 45°F', rainfall: 'High', crowds: 'Low' },
      { month: 'Dec', status: 'Off-Peak', temp: '5°C / 41°F', rainfall: 'High', crowds: 'Low' }
    ],
    budgetBreakdown: {
      backpacker: 55,
      midRange: 125,
      luxury: 340,
      accommodationAvg: 70,
      mealAvg: 30,
      transitAvg: 16
    }
  },
  {
    id: 'singapore',
    name: 'Singapore',
    officialName: 'Republic of Singapore',
    continent: 'Asia',
    flag: '🇸🇬',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=1200&q=80'
    ],
    capital: 'Singapore',
    currency: {
      code: 'SGD',
      name: 'Singapore Dollar',
      symbol: 'S$',
      exchangeRateToUSD: 1.34
    },
    dailyBudgetUSD: 115,
    budgetTier: 'Mid-range',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Jul', 'Aug', 'Sep', 'Oct'],
    overallScore: 9.7,
    safetyScore: 10.0,
    climate: 'Tropical Rainforest Equatorial',
    visaDifficulty: 'Easy / Visa Free',
    bestFor: ['Gardens by the Bay Supertrees', 'Hawker Centre Street Food Michelin Stars', 'Marina Bay Sands SkyPark', 'Changi Jewel Indoor Waterfall', 'Impeccable Safety & Greenery'],
    overview: 'A futuristic "City in a Garden" where soaring biome domes, glowing solar-powered Supertrees, and infinity rooftop pools rise beside lush rainforests. UNESCO-recognized open-air hawker centres dish up mouthwatering Hainanese chicken rice and laksa for \$4, while the MRT subway runs with clockwork precision.',
    quickStats: {
      plugType: 'Type G (230V)',
      drivingSide: 'Left',
      language: 'English, Malay, Mandarin, Tamil',
      timeZone: 'UTC+8 (SGT)',
      waterDrinkable: true
    },
    pros: [
      'One of the safest, cleanest, and most modern cities in existence',
      'World-famous hawker centres serve Michelin-starred food for under $5',
      'Superb Changi Airport is an attraction in itself with the Jewel rain vortex',
      'English is the universal working language'
    ],
    cons: [
      'Hotel accommodation and nightlife cocktails are expensive',
      'High tropical humidity year-round (expect 30°C+ daily)',
      'Chewing gum and littering laws are strictly enforced with steep fines'
    ],
    travelTips: [
      {
        title: 'Tap In with Credit/Debit Cards on MRT',
        description: 'Simply tap your contactless foreign credit card or phone wallet directly at the subway turnstiles without buying transit tickets.',
        category: 'Transport'
      },
      {
        title: 'Chope a Table at Hawker Centres',
        description: 'Locals reserve tables by placing a packet of tissue paper on the chair ("choping"); respect this unspoken etiquette.',
        category: 'Culture'
      }
    ],
    foodHighlights: [
      {
        name: 'Hainanese Chicken Rice',
        description: 'Poached silky chicken served over intensely fragrant jasmine rice cooked in chicken fat and pandan broth, with ginger-scallion and chili sauce.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Singapore Chili Crab',
        description: 'Giant mud crab wok-fried in a sweet, savory, and spicy tomato-chili egg gravy, eaten with fried mantou buns.',
        mustTry: true,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      }
    ],
    monthConditions: [
      { month: 'Jan', status: 'Peak', temp: '27°C / 81°F', rainfall: 'Moderate', crowds: 'High' },
      { month: 'Feb', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Mar', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Apr', status: 'Shoulder', temp: '29°C / 84°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'May', status: 'Shoulder', temp: '29°C / 84°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Jun', status: 'Shoulder', temp: '29°C / 84°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Jul', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Aug', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Sep', status: 'Peak', temp: '28°C / 82°F', rainfall: 'Low', crowds: 'High' },
      { month: 'Oct', status: 'Shoulder', temp: '28°C / 82°F', rainfall: 'Moderate', crowds: 'Medium' },
      { month: 'Nov', status: 'Off-Peak', temp: '27°C / 81°F', rainfall: 'High', crowds: 'Medium' },
      { month: 'Dec', status: 'Peak', temp: '27°C / 81°F', rainfall: 'High', crowds: 'High' }
    ],
    budgetBreakdown: {
      backpacker: 52,
      midRange: 125,
      luxury: 360,
      accommodationAvg: 75,
      mealAvg: 25,
      transitAvg: 12
    }
  }
];
