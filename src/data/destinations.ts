import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  // JAPAN
  {
    id: 'kyoto',
    name: 'Kyoto',
    countryId: 'japan',
    countryName: 'Japan',
    countryFlag: '🇯🇵',
    region: 'Kansai',
    category: 'Cultural',
    rankingTier: 'iconic',
    rating: 4.9,
    reviewCount: 3840,
    dailyBudgetUSD: 95,
    crowdLevel: 'High',
    popularityScore: 98,
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [35.0116, 135.7681],
    bestTimeToVisit: 'March to May & October to November',
    recommendedStayDays: 4,
    safetyScore: 9.9,
    gettingThere: '2 hours 15 minutes from Tokyo via Tokaido Shinkansen bullet train.',
    description: 'The cultural soul of Japan, boasting over 2,000 Buddhist temples and Shinto shrines, tranquil Zen rock gardens, and historic wooden geisha districts in Gion.',
    whyVisit: [
      'Over 2,000 preserved Buddhist temples and Shinto shrines',
      'Iconic torii tunnel at Fushimi Inari Taisha',
      'Authentic geisha sightings in traditional Gion machiya alleys',
      'Matcha and Kaiseki multi-course imperial dining'
    ],
    whyYouMightSkip: [
      'Famous sites like Kinkaku-ji and Arashiyama suffer intense crowding mid-day',
      'City buses can become packed with travelers during peak foliage season',
      'Accommodation rates skyrocket during Sakura (cherry blossom) week'
    ],
    topThingsToDo: [
      { id: 'k1', title: 'Walk the 10,000 Torii Gates at Fushimi Inari', duration: '3 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' },
      { id: 'k2', title: 'Admire Kinkaku-ji (Golden Pavilion)', duration: '1.5 hours', costUSD: 5, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' },
      { id: 'k3', title: 'Explore Arashiyama Bamboo Grove at Dawn', duration: '2 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Otagi Nenbutsu-ji', description: 'Hidden temple deep in northern Arashiyama featuring 1,200 whimsical stone statues carved with individual facial expressions.', tip: 'Take the bus past bamboo grove; almost no crowds.' },
      { title: 'Murin-an Garden', description: 'Tranquil Meiji-era villa garden featuring streams sourced directly from Lake Biwa Canal.', tip: 'Requires reservations; peaceful tea room overlooking mossy lawns.' }
    ],
    localFood: [
      { name: 'Kyoto Kaiseki Ryori', description: 'Intricate seasonal multi-course banquet served in traditional private tatami rooms.', priceRange: '$$$$' },
      { name: 'Uji Matcha Parfait', description: 'Decadent green tea ice cream, dango mochi, sweet red azuki beans, and matcha jelly.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Higashiyama', vibe: 'Historic preservation district with lantern-lit cobblestones', recommendedHotel: 'Park Hyatt Kyoto or Traditional Machiya Stay', priceTier: 'Luxury' },
      { area: 'Downtown Karasuma', vibe: 'Convenient subway hub near Nishiki Market', recommendedHotel: 'The Thousand Kyoto', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'Kyoto Subway & Buses', detail: 'Cover the entire basin; tap digital IC card', costPerDayUSD: 7 },
      { mode: 'Bicycle Rental', detail: 'Flat basin makes cycling between shrines a joy', costPerDayUSD: 10 }
    ],
    nearbyDestinations: ['nara', 'osaka', 'shirakawa-go'],
    travelerReviews: [
      { author: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '2 weeks ago', comment: 'Hiking Fushimi Inari at 6:30 AM before anyone else arrived was a spiritual experience I will never forget.' }
    ]
  },
  {
    id: 'shirakawa-go',
    name: 'Shirakawa-go',
    countryId: 'japan',
    countryName: 'Japan',
    countryFlag: '🇯🇵',
    region: 'Gifu Prefecture',
    category: 'Villages',
    rankingTier: 'hidden_gem',
    rating: 4.8,
    reviewCount: 1420,
    dailyBudgetUSD: 75,
    crowdLevel: 'Low',
    popularityScore: 72,
    heroImage: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [36.2575, 136.9066],
    bestTimeToVisit: 'January & February for winter snow, or October for autumn leaves',
    recommendedStayDays: 2,
    safetyScore: 9.9,
    gettingThere: 'Highway express bus from Kanazawa (75 mins) or Takayama (50 mins).',
    description: 'A secluded mountain valley famous for traditional gassho-zukuri farmhouses whose steep thatched roofs resemble hands folded in prayer to withstand heavy snowfall.',
    whyVisit: [
      'UNESCO-listed authentic thatched-roof farmhouses over 250 years old',
      'Breathtaking fairy-tale illumination in deep winter snow',
      'Overnight stay inside a working family farmhouse (Minshuku)'
    ],
    whyYouMightSkip: [
      'Winter illumination weekends require lotteries months in advance',
      'Limited dining options after 5:00 PM when day visitors leave',
      'Remote mountain access requires planned bus reservations'
    ],
    topThingsToDo: [
      { id: 's1', title: 'Shiroyama Viewpoint Panorama', duration: '1 hour', costUSD: 0, image: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=600&q=80' },
      { id: 's2', title: 'Wada House Museum Tour', duration: '1 hour', costUSD: 3, image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Gassho-zukuri Minkaen Open-Air Museum', description: 'Across the footbridge from main village; preserved quiet farmhouses with almost no day tourists.', tip: 'Visit late afternoon when day tour buses leave.' }
    ],
    localFood: [
      { name: 'Hida Beef Skewers & Soba', description: 'Melt-in-mouth marbled A5 Hida beef grilled over charcoal with mountain soba.', priceRange: '$$' }
    ],
    whereToStay: [
      { area: 'Ogimachi Village Minshuku', vibe: 'Traditional tatami farmhouse with hearth dinner', recommendedHotel: 'Magoemon Minshuku', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'Walking', detail: 'The village is small and best explored on foot', costPerDayUSD: 0 }
    ],
    nearbyDestinations: ['kyoto', 'tokyo'],
    travelerReviews: [
      { author: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'Sleeping under that massive thatched roof while fresh snow fell outside was pure magic.' }
    ]
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    countryId: 'japan',
    countryName: 'Japan',
    countryFlag: '🇯🇵',
    region: 'Kanto',
    category: 'Cities',
    rankingTier: 'iconic',
    rating: 4.9,
    reviewCount: 9400,
    dailyBudgetUSD: 105,
    crowdLevel: 'High',
    popularityScore: 100,
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [35.6762, 139.6503],
    bestTimeToVisit: 'March to May & September to November',
    recommendedStayDays: 5,
    safetyScore: 9.9,
    gettingThere: 'Direct flights into Narita (NRT) or Haneda (HND); Narita Express / Keikyu line into city center.',
    description: 'A dazzling megalopolis where neon-lit skyscraper canyons meet ancient cedar shrines, world-leading subway systems, and the highest concentration of Michelin stars on the globe.',
    whyVisit: [
      'Shibuya Crossing: the busiest pedestrian intersection in the world',
      'Unsurpassed gastronomy from \$3 konbini egg sandwiches to 3-star Michelin sushi',
      'Sublime neighborhoods with distinct personalities (Shinjuku, Akihabara, Yanaka, Ginza)',
      'Exceptional cleanliness and 24/7 public safety'
    ],
    whyYouMightSkip: [
      'Rush hour subway cars (8:00 AM - 9:00 AM) can be intensely packed',
      'The vast scale of the city requires significant walking every day',
      'Summer months (July-August) can be uncomfortably humid'
    ],
    topThingsToDo: [
      { id: 't1', title: 'Cross Shibuya Scramble & Visit Hachiko', duration: '1.5 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' },
      { id: 't2', title: 'Wander Senso-ji Temple in Asakusa', duration: '2 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' },
      { id: 't3', title: 'teamLab Borderless Digital Art Museum', duration: '3 hours', costUSD: 30, image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Yanaka Ginza Shitamachi District', description: 'Historic low-rise neighborhood that survived WWII air raids; filled with retro cat statues, street snack vendors, and temple graveyards.', tip: 'Stroll at 4 PM for the famous Yuyake Dandan sunset staircase view.' }
    ],
    localFood: [
      { name: 'Tsukemen Dipping Ramen', description: 'Thick chewy chilled noodles served with an ultra-concentrated pork and bonito dipping broth.', priceRange: '$' },
      { name: 'Monjayaki in Tsukishima', description: 'Tokyo’s savory pancake batter specialty cooked hot on table-top teppan griddles.', priceRange: '$$' }
    ],
    whereToStay: [
      { area: 'Shinjuku / Shibuya', vibe: 'Epic nightlife, dining, and transit hub', recommendedHotel: 'Hotel Gracery Shinjuku or Cerulean Tower', priceTier: 'Luxury' },
      { area: 'Asakusa / Ueno', vibe: 'Traditional, quieter, and budget-friendly', recommendedHotel: 'The Gate Hotel Asakusa', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'Tokyo Metro & JR Yamanote Line', detail: 'Unbeatable subway coverage with tap-to-pay Suica/Pasmo', costPerDayUSD: 8 }
    ],
    nearbyDestinations: ['kyoto', 'shirakawa-go'],
    travelerReviews: [
      { author: 'Liam Scott', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '3 days ago', comment: 'Tokyo feels like living in the year 2050 while retaining total respect and quiet calm.' }
    ]
  },

  // ITALY
  {
    id: 'amalfi-coast',
    name: 'Amalfi Coast',
    countryId: 'italy',
    countryName: 'Italy',
    countryFlag: '🇮🇹',
    region: 'Campania',
    category: 'Beaches',
    rankingTier: 'crowded',
    rating: 4.8,
    reviewCount: 5200,
    dailyBudgetUSD: 160,
    crowdLevel: 'Extremely Crowded',
    popularityScore: 97,
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [40.6333, 14.6029],
    bestTimeToVisit: 'May to June & September to October (avoid July/August)',
    recommendedStayDays: 4,
    safetyScore: 9.0,
    gettingThere: 'High-speed train to Salerno, followed by a ferry or scenic coastal SITA bus to Positano or Amalfi.',
    description: 'Spectacular pastel-hued cliffside villages cascading sheer into the cobalt Tyrrhenian Sea, terraced lemon groves, and scenic cliff-top hiking trails.',
    whyVisit: [
      'Positano’s postcard vertical cliffside village panorama',
      'Path of the Gods (Sentiero degli Dei) hiking trail high above the sea',
      'Fresh limoncello crafted from giant Amalfi sfusato lemons',
      'Private wooden boat charters to secret sea grottos'
    ],
    whyYouMightSkip: [
      'Extreme gridlock traffic along the narrow cliff highway during summer',
      'High parking fees (€8-€10/hour) and steep hotel rates',
      'Thousands of stone stairs make mobility challenging'
    ],
    topThingsToDo: [
      { id: 'a1', title: 'Hike the Path of the Gods', duration: '4 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80' },
      { id: 'a2', title: 'Take a Sunset Ferry from Positano to Amalfi', duration: '30 mins', costUSD: 12, image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80' },
      { id: 'a3', title: 'Visit Villa Cimbrone Gardens in Ravello', duration: '2 hours', costUSD: 10, image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Fiordo di Furore', description: 'Dramatic deep natural fjord carved between towering cliffs with a secret pebble beach bridged overhead.', tip: 'Arrive early in the morning via local bus.' }
    ],
    localFood: [
      { name: 'Scialatielli ai Frutti di Mare', description: 'Hand-rolled thick fresh pasta with clams, mussels, prawns, garlic, and cherry tomatoes.', priceRange: '$$$' },
      { name: 'Delizia al Limone', description: 'Dome-shaped sponge cake infused with lemon syrup and filled with limoncello custard cream.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Positano', vibe: 'Glitz, glamorous beach clubs, and iconic sunset views', recommendedHotel: 'Le Sirenuse or Villa Franca', priceTier: 'Luxury' },
      { area: 'Ravello', vibe: 'Peaceful clifftop retreat away from coastal ferries', recommendedHotel: 'Villa Maria', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'Ferries (Travelmar)', detail: 'Bypasses cliff traffic with spectacular views from the sea', costPerDayUSD: 20 },
      { mode: 'SITA Bus', detail: 'Cheap but can have long queues in peak summer', costPerDayUSD: 8 }
    ],
    nearbyDestinations: ['rome', 'albarracin'],
    travelerReviews: [
      { author: 'Camilla Dupont', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'Hiking the Path of the Gods and ending with lemon granita in Nocelle was the peak of my European travels.' }
    ]
  },
  {
    id: 'rome',
    name: 'Rome',
    countryId: 'italy',
    countryName: 'Italy',
    countryFlag: '🇮🇹',
    region: 'Lazio',
    category: 'Historical Sites',
    rankingTier: 'iconic',
    rating: 4.8,
    reviewCount: 11200,
    dailyBudgetUSD: 100,
    crowdLevel: 'High',
    popularityScore: 99,
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [41.9028, 12.4964],
    bestTimeToVisit: 'March to May & September to November',
    recommendedStayDays: 4,
    safetyScore: 8.9,
    gettingThere: 'Leonardo Express train from Rome Fiumicino Airport (FCO) direct to Roma Termini in 32 minutes.',
    description: 'The Eternal City is a 2,800-year-old living museum where grand Roman amphitheaters, Renaissance palaces, and Baroque fountains surround bustling modern espresso cafes.',
    whyVisit: [
      'Walk inside the Colosseum and imagine gladiatorial contests',
      'Marvel at the unreinforced concrete dome of the 2,000-year-old Pantheon',
      'Toss a coin into the Trevi Fountain to guarantee your return',
      'Vatican City: St. Peter’s Basilica and the Sistine Chapel'
    ],
    whyYouMightSkip: [
      'Summer midday heat (July-August) can be sweltering',
      'Persistent ticket scalpers and street sellers around the Colosseum',
      'Lines at St. Peter’s Basilica can stretch over 2 hours without skip-the-line passes'
    ],
    topThingsToDo: [
      { id: 'r1', title: 'Colosseum & Roman Forum Guided Walk', duration: '3.5 hours', costUSD: 24, image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80' },
      { id: 'r2', title: 'Pantheon Exploration at Noon', duration: '1 hour', costUSD: 5, image: 'https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&w=600&q=80' },
      { id: 'r3', title: 'Evening Stroll in Trastevere', duration: '2.5 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Aventine Keyhole (Il Buco della Serratura)', description: 'Peek through the brass keyhole of the Priory of the Knights of Malta for a perfectly framed view of St. Peter’s dome aligned between garden hedges.', tip: 'Visit at sunset; peaceful and charming.' }
    ],
    localFood: [
      { name: 'Cacio e Pepe Pasta', description: 'Tonnarelli pasta tossed with grated aged Pecorino Romano and freshly cracked black pepper in starchy pasta water.', priceRange: '$$' },
      { name: 'Supplì al Telefono', description: 'Crispy fried risotto croquette stuffed with slow-cooked ragù and molten mozzarella that strings like a telephone wire.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Trastevere', vibe: 'Bohemian cobblestone streets, lively wine bars, and ivy-clad trattorias', recommendedHotel: 'VOI Donna Camilla Savelli', priceTier: 'Mid-range' },
      { area: 'Centro Storico', vibe: 'Steps from Piazza Navona and the Pantheon', recommendedHotel: 'Singer Palace Hotel', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Walking', detail: 'Rome is best experienced on foot', costPerDayUSD: 0 },
      { mode: 'Metro & ATAC Buses', detail: 'Connect Termini, Colosseum, and Vatican', costPerDayUSD: 7 }
    ],
    nearbyDestinations: ['amalfi-coast'],
    travelerReviews: [
      { author: 'Mateo Morales', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '2 weeks ago', comment: 'Standing beneath the Pantheon oculus while light poured through was transcendent.' }
    ]
  },

  // SPAIN
  {
    id: 'albarracin',
    name: 'Albarracín',
    countryId: 'spain',
    countryName: 'Spain',
    countryFlag: '🇪🇸',
    region: 'Aragón',
    category: 'Villages',
    rankingTier: 'hidden_gem',
    rating: 4.9,
    reviewCount: 680,
    dailyBudgetUSD: 55,
    crowdLevel: 'Very Low',
    popularityScore: 54,
    heroImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [40.4076, -1.4422],
    bestTimeToVisit: 'April to June & September to October',
    recommendedStayDays: 2,
    safetyScore: 9.9,
    gettingThere: '2-hour drive from Valencia or 35 minutes from Teruel by car/bus.',
    description: 'Frequently voted Spain’s most beautiful village, this dramatic pink-tinted medieval fortress town perches high on a curved bend over the Guadalaviar River gorge, backed by towering Moorish defensive walls.',
    whyVisit: [
      'Spectacular pink-hued medieval stone architecture and cantilevered houses',
      'Walk the ancient Murallas de Albarracín fortress walls on the ridge',
      'Remarkably peaceful and untouched by mass tourism'
    ],
    whyYouMightSkip: [
      'Requires a rental car to reach conveniently from major airports',
      'Quiet nights with minimal commercial nightlife',
      'Steep stone inclines require good walking shoes'
    ],
    topThingsToDo: [
      { id: 'al1', title: 'Climb the Ancient Fortress Wall Ramparts', duration: '2 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=600&q=80' },
      { id: 'al2', title: 'Explore the Casa de la Julianeta', duration: '45 mins', costUSD: 0, image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Pinares de Rodeno', description: 'Red sandstone pine forest surrounding the village featuring prehistoric cave rock art paintings.', tip: 'A 10-minute drive into the hills with easy walking loops.' }
    ],
    localFood: [
      { name: 'Aragonese Roasted Ternasco Lamb', description: 'Milk-fed lamb shoulder roasted with rosemary and potatoes until meltingly tender.', priceRange: '$$' }
    ],
    whereToStay: [
      { area: 'Historic Old Quarter', vibe: 'Medieval wood-beamed stone posadas', recommendedHotel: 'Hotel Posada del Rodeno', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'Walking', detail: 'The village is completely pedestrianized', costPerDayUSD: 0 }
    ],
    nearbyDestinations: ['barcelona'],
    travelerReviews: [
      { author: 'Javier Gomez', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'You feel like you stepped back into the 14th century. Completely magical at dusk when the walls light up.' }
    ]
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    countryId: 'spain',
    countryName: 'Spain',
    countryFlag: '🇪🇸',
    region: 'Catalonia',
    category: 'Cities',
    rankingTier: 'iconic',
    rating: 4.8,
    reviewCount: 9800,
    dailyBudgetUSD: 95,
    crowdLevel: 'High',
    popularityScore: 98,
    heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [41.3879, 2.1699],
    bestTimeToVisit: 'May to June & September to October',
    recommendedStayDays: 4,
    safetyScore: 8.8,
    gettingThere: 'Aerobús connects El Prat Airport (BCN) directly to Plaça de Catalunya in 30 minutes.',
    description: 'A sun-drenched Mediterranean cultural metropolis world-famous for Antoni Gaudí’s surrealist modernist architecture, lively tapas bars, Gothic quarters, and urban golden sand beaches.',
    whyVisit: [
      'Gaze in awe at the soaring interior columns of the Sagrada Família',
      'Stroll the vibrant mosaic benches and gingerbread houses of Park Güell',
      'Feast on Basque pintxos and fresh seafood in El Born and Gràcia',
      'Bustling beachfront boardwalks along Barceloneta'
    ],
    whyYouMightSkip: [
      'Pickpocketing vigilance required along Las Ramblas and crowded metro stations',
      'Sagrada Família and Park Güell sell out days in advance without online bookings',
      'Mid-summer heat can be muggy'
    ],
    topThingsToDo: [
      { id: 'b1', title: 'Sagrada Família Basilical Tour', duration: '2.5 hours', costUSD: 26, image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=600&q=80' },
      { id: 'b2', title: 'Sunset at Bunkers del Carmel', duration: '2 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80' },
      { id: 'b3', title: 'Stroll Park Güell Gardens', duration: '2 hours', costUSD: 10, image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Hospital de Sant Pau', description: 'Massive UNESCO-listed Art Nouveau hospital complex designed by Lluís Domènech i Montaner, with a fraction of the crowds of Gaudí buildings.', tip: 'Only a 10-minute walk up Avinguda Gaudí from the Sagrada Família.' }
    ],
    localFood: [
      { name: 'Pa amb Tomàquet & Jamón', description: 'Toasted rustic bread rubbed with ripe tomatoes, extra virgin olive oil, and sea salt, topped with acorn-fed Ibérico ham.', priceRange: '$$' },
      { name: 'Crema Catalana', description: 'Silky citrus and cinnamon infused custard topped with a brittle caramelized sugar crust.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'El Born & Gothic Quarter', vibe: 'Trendy boutiques, historic alleys, and craft bars', recommendedHotel: 'The Hoxton Poblenou or Mercer Hotel', priceTier: 'Luxury' },
      { area: 'Eixample', vibe: 'Elegant wide boulevards near Gaudí masterworks', recommendedHotel: 'Praktik Bakery Hotel', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'T-Casual Metro Card', detail: '10 rides for public transit anywhere in Zone 1', costPerDayUSD: 6 }
    ],
    nearbyDestinations: ['albarracin'],
    travelerReviews: [
      { author: 'Clara Chen', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '3 weeks ago', comment: 'The stained glass lighting inside the Sagrada Família in late afternoon brought tears to my eyes.' }
    ]
  },

  // SWITZERLAND
  {
    id: 'zermatt',
    name: 'Zermatt & Matterhorn',
    countryId: 'switzerland',
    countryName: 'Switzerland',
    countryFlag: '🇨🇭',
    region: 'Valais',
    category: 'Mountains',
    rankingTier: 'iconic',
    rating: 4.9,
    reviewCount: 3900,
    dailyBudgetUSD: 195,
    crowdLevel: 'Moderate',
    popularityScore: 96,
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [45.9765, 7.7491],
    bestTimeToVisit: 'July to September for hiking, December to April for skiing',
    recommendedStayDays: 3,
    safetyScore: 9.9,
    gettingThere: 'Car-free village; park in Täsch and take the 12-minute shuttle train into Zermatt.',
    description: 'A storybook car-free alpine village nestled beneath the iconic pyramid peak of the Matterhorn, boasting year-round glacier skiing, mountaineering, and luxury chalets.',
    whyVisit: [
      'Unsurpassed close-up views of the 4,478m Matterhorn peak',
      'Ride the Gornergrat cogwheel train up to 3,089m with glacier panoramas',
      '100% car-free streets where quiet electric taxis and horse-drawn carriages travel',
      'Ski across international borders into Cervinia, Italy in a single day'
    ],
    whyYouMightSkip: [
      'High dining and hotel prices',
      'Mountain weather can occasionally conceal the Matterhorn behind clouds for days',
      'High elevation requires warm layers even in mid-summer'
    ],
    topThingsToDo: [
      { id: 'z1', title: 'Gornergrat Railway & Riffelsee Reflection', duration: '3 hours', costUSD: 75, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80' },
      { id: 'z2', title: 'Matterhorn Glacier Paradise Cable Car', duration: '3.5 hours', costUSD: 90, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Findeln Hamlet Walk', description: 'Traditional sun-blackened timber larch chalets perched on high mountain meadows with incredible outdoor dining looking at the Matterhorn.', tip: 'Reserve lunch on the terrace at Chez Vrony.' }
    ],
    localFood: [
      { name: 'Valaisanne Raclette', description: 'Wheel of raw alpine cow milk cheese scraped molten over boiled new potatoes, gherkins, and pickled onions.', priceRange: '$$$' }
    ],
    whereToStay: [
      { area: 'Winkelmatten / Village Center', vibe: 'Unobstructed Matterhorn views and cozy fireplaces', recommendedHotel: 'Omnia Mountain Lodge or Backstage Hotel', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Walking & E-Bus', detail: 'The village is small, scenic, and pedestrian-friendly', costPerDayUSD: 0 }
    ],
    nearbyDestinations: ['gimmelwald'],
    travelerReviews: [
      { author: 'Stefan Huber', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'Seeing the sunrise turn the tip of the Matterhorn into molten gold at 6 AM was the greatest view of my life.' }
    ]
  },
  {
    id: 'gimmelwald',
    name: 'Gimmelwald',
    countryId: 'switzerland',
    countryName: 'Switzerland',
    countryFlag: '🇨🇭',
    region: 'Bernese Oberland',
    category: 'Villages',
    rankingTier: 'hidden_gem',
    rating: 4.9,
    reviewCount: 920,
    dailyBudgetUSD: 110,
    crowdLevel: 'Very Low',
    popularityScore: 61,
    heroImage: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [46.5492, 7.8931],
    bestTimeToVisit: 'June to September',
    recommendedStayDays: 2,
    safetyScore: 10.0,
    gettingThere: 'Stechelberg cable car from Lauterbrunnen valley up to Gimmelwald in 5 minutes.',
    description: 'A tiny, car-free farming settlement perched precariously on a high cliff terrace above the Lauterbrunnen valley, surrounded by the towering peaks of the Eiger, Mönch, and Jungfrau.',
    whyVisit: [
      'One of the most authentic, peaceful farming hamlets remaining in the Swiss Alps',
      'Car-free tranquility with cowbells as the primary soundtrack',
      'Honesty shops where you buy alpine cheese and sausages by dropping money into a wooden box',
      'Spectacular trails connecting to Mürren and Schilthorn'
    ],
    whyYouMightSkip: [
      'Only accessible via cable car or a steep mountain trail',
      'Zero grocery stores or supermarkets (nearest shop is up in Mürren)',
      'Very limited lodging options that book up quickly in summer'
    ],
    topThingsToDo: [
      { id: 'gw1', title: 'Cliff Walk from Gimmelwald to Mürren', duration: '1 hour', costUSD: 0, image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80' },
      { id: 'gw2', title: 'Schilthorn Piz Gloria Cable Car Trip', duration: '3 hours', costUSD: 60, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'The Honesty Shop', description: 'Europe’s first unmanned village shop where local crafts, knitted socks, and postcards are sold on the honor system.', tip: 'Located next to Mountain Hostel.' }
    ],
    localFood: [
      { name: 'Fresh Alpkäse & Sourdough', description: 'Aged mountain cheese purchased directly from the dairy farmer who milks his cows on the slopes.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Gimmelwald Meadow', vibe: 'Rustic wooden chalets overlooking vertical glacier waterfalls', recommendedHotel: 'Mountain Hostel Gimmelwald or Chalet Waterfalls', priceTier: 'Budget' }
    ],
    gettingAround: [
      { mode: 'Walking & Schilthornbahn Cable Car', detail: 'Scenic walking paths and 5-minute cable cars', costPerDayUSD: 10 }
    ],
    nearbyDestinations: ['zermatt'],
    travelerReviews: [
      { author: 'Arthur Pendelton', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '2 months ago', comment: 'Sitting on the deck with a cold beer watching the sunset hit the Jungfrau without hearing a single engine is paradise.' }
    ]
  },

  // NORWAY
  {
    id: 'lofoten',
    name: 'Lofoten Islands',
    countryId: 'norway',
    countryName: 'Norway',
    countryFlag: '🇳🇴',
    region: 'Nordland',
    category: 'Islands',
    rankingTier: 'iconic',
    rating: 4.9,
    reviewCount: 3100,
    dailyBudgetUSD: 145,
    crowdLevel: 'Moderate',
    popularityScore: 94,
    heroImage: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [68.2093, 13.9372],
    bestTimeToVisit: 'June to August for Midnight Sun & hiking; September to March for Aurora Borealis',
    recommendedStayDays: 5,
    safetyScore: 9.9,
    gettingThere: 'Flight into Evenes (EVE) or Svolvær (SVJ), or ferry from Bodø to Moskenes.',
    description: 'An archipelago of razor-sharp granite peaks soaring sheer out of the Arctic ocean, crimson fisherman rorbuer cabins on stilts, and Caribbean-turquoise white sand beaches above the Arctic Circle.',
    whyVisit: [
      'Dramatic Reinefjorden peaks and picturesque red fishing hamlets (Hamnøy, Reine)',
      'Hike to secret arctic surf beaches like Kvalvika and Unstad',
      'Watch the green dance of the Northern Lights reflected in still fjord waters',
      'Experience the 24-hour golden light of the Midnight Sun in mid-summer'
    ],
    whyYouMightSkip: [
      'Rental cars and fuel are expensive in the Arctic',
      'Weather can shift between bright sunshine and gale horizontal rain within an hour',
      'Narrow scenic bridges and roads require careful driving'
    ],
    topThingsToDo: [
      { id: 'lf1', title: 'Climb Reinebringen Sherpa Steps', duration: '3 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=600&q=80' },
      { id: 'lf2', title: 'Hike to Kvalvika Beach', duration: '4 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Nusfjord Historic Village', description: 'Norway’s oldest preserved fishing village tucked into a secluded mountain fjord, with traditional cod-liver oil factory museums.', tip: 'Stay overnight in an authentic waterfront rorbu.' }
    ],
    localFood: [
      { name: 'Arctic Stockfish (Tørrfisk)', description: 'Cod wind-dried on massive outdoor wooden racks beneath Arctic salt sea breezes, prepared into gourmet baked stews.', priceRange: '$$$' }
    ],
    whereToStay: [
      { area: 'Reine / Hamnøy', vibe: 'Iconic crimson rorbuer cabins over tidal fjords', recommendedHotel: 'Eliassen Rorbuer', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Rental Car', detail: 'Essential to explore beaches, trails, and bridges along the E10 highway', costPerDayUSD: 70 }
    ],
    nearbyDestinations: ['reykjavik'],
    travelerReviews: [
      { author: 'Astrid Lind', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'Standing atop Reinebringen looking at Reinefjorden is the single most breathtaking view in Europe.' }
    ]
  },

  // PERU
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    countryId: 'peru',
    countryName: 'Peru',
    countryFlag: '🇵🇪',
    region: 'Cusco',
    category: 'Historical Sites',
    rankingTier: 'iconic',
    rating: 4.9,
    reviewCount: 14200,
    dailyBudgetUSD: 90,
    crowdLevel: 'High',
    popularityScore: 100,
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [-13.1631, -72.5450],
    bestTimeToVisit: 'May to September (dry season in the Andes)',
    recommendedStayDays: 2,
    safetyScore: 9.2,
    gettingThere: 'Inca Rail or PeruRail train from Ollantaytambo to Aguas Calientes, followed by a 25-minute shuttle bus.',
    description: 'The lost 15th-century Incan citadel dramatically perched on a razor ridge between two emerald Andean peaks, surrounded by mist-shrouded cloud forests and the rushing Urubamba River.',
    whyVisit: [
      'A Wonder of the World engineered with mortar-free stone masonry (ashlar)',
      'Watch early morning mist burn off the sun temple and agricultural terraces',
      'Hike Huayna Picchu or Machu Picchu Mountain for jaw-dropping aerial viewpoints',
      'The culmination of the legendary 4-day Inca Trail trek'
    ],
    whyYouMightSkip: [
      'Strict circuit ticket regulations requiring advance booking 2-4 months ahead',
      'High train and entrance permit fees compared to the rest of Peru',
      'Altitude at surrounding Cusco requires acclimatization days'
    ],
    topThingsToDo: [
      { id: 'mp1', title: 'Circuit 2 Classic Citadel Walk', duration: '3 hours', costUSD: 45, image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80' },
      { id: 'mp2', title: 'Climb Huayna Picchu Peak', duration: '2.5 hours', costUSD: 18, image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Inca Bridge Trail', description: 'Narrow stone cliff ledge trail built into the vertical granite wall, historically used as a secret secret escape route.', tip: 'Included with specific upper terrace tickets; dramatic drop-offs.' }
    ],
    localFood: [
      { name: 'Pachamanca & Quinoa Chowder', description: 'Ancient Andean feast of spiced meats and native potatoes cooked under scorching river stones.', priceRange: '$$' }
    ],
    whereToStay: [
      { area: 'Aguas Calientes (Machu Picchu Pueblo)', vibe: 'Riverside mountain town at base of the sanctuary', recommendedHotel: 'Inkaterra Machu Picchu Pueblo Hotel', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Consettur Shuttle Bus', detail: 'Transports visitors from town up the switchbacks to entrance', costPerDayUSD: 24 }
    ],
    nearbyDestinations: ['cusco'],
    travelerReviews: [
      { author: 'Mateo Morales', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'No photograph in the world prepares you for the colossal energy of stepping through the Sun Gate.' }
    ]
  },
  {
    id: 'cusco',
    name: 'Cusco & Sacred Valley',
    countryId: 'peru',
    countryName: 'Peru',
    countryFlag: '🇵🇪',
    region: 'Cusco',
    category: 'Cultural',
    rankingTier: 'iconic',
    rating: 4.8,
    reviewCount: 6500,
    dailyBudgetUSD: 48,
    crowdLevel: 'Moderate',
    popularityScore: 93,
    heroImage: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [-13.5319, -71.9675],
    bestTimeToVisit: 'May to October',
    recommendedStayDays: 4,
    safetyScore: 8.8,
    gettingThere: '1-hour flight from Lima (LIM) into Alejandro Velasco Astete Airport (CUZ).',
    description: 'The historic capital of the Inca Empire where colonial Spanish cathedrals sit atop massive polygonal Incan stone foundations, and artisan Quechua markets fill cobblestone plazas.',
    whyVisit: [
      'Marvel at the 12-angled stone and Saksaywamán cyclopean fortress',
      'Artisan weavers and organic coffee in bohemian San Blas district',
      'Visit the Maras Salt Mines and Moray circular agricultural terraces',
      'Acclimatize in luxury Andean haciendas in the Sacred Valley'
    ],
    whyYouMightSkip: [
      'High altitude (3,400 meters) can induce mild altitude sickness (soroche)',
      'Rainy season (December-March) brings heavy mountain showers',
      'Persistent tour operators around Plaza de Armas'
    ],
    topThingsToDo: [
      { id: 'c1', title: 'San Pedro Market & Plaza de Armas Walk', duration: '2 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=600&q=80' },
      { id: 'c2', title: 'Day Trip to Maras Salt Mines & Moray', duration: '5 hours', costUSD: 25, image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Tipón Hydraulic Ruins', description: 'Southern valley Incan site featuring functioning ancient water channels, fountains, and stone baths, with almost zero tourists.', tip: 'Pair with a traditional cuy (guinea pig) lunch in nearby town of Tipón.' }
    ],
    localFood: [
      { name: 'Alpaca Tenderloin Steak', description: 'Lean, tender mountain alpaca seared with Andean herbs, served with native purple mashed potatoes.', priceRange: '$$' }
    ],
    whereToStay: [
      { area: 'San Blas', vibe: 'Arty hillside streets with quiet courtyards and cafes', recommendedHotel: 'Palacio Manco Capac', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Walking & Colectivo Vans', detail: 'Walk within the historic center; take colectivos across Sacred Valley', costPerDayUSD: 6 }
    ],
    nearbyDestinations: ['machu-picchu'],
    travelerReviews: [
      { author: 'Sofia Rivera', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '2 weeks ago', comment: 'Cusco is my favorite city in South America. The blend of Inca stone walls and colonial balconies is hypnotizing.' }
    ]
  },

  // THAILAND
  {
    id: 'bangkok',
    name: 'Bangkok',
    countryId: 'thailand',
    countryName: 'Thailand',
    countryFlag: '🇹🇭',
    region: 'Central Thailand',
    category: 'Cities',
    rankingTier: 'iconic',
    rating: 4.8,
    reviewCount: 12500,
    dailyBudgetUSD: 45,
    crowdLevel: 'High',
    popularityScore: 99,
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [13.7563, 100.5018],
    bestTimeToVisit: 'November to February (cooler and dry)',
    recommendedStayDays: 4,
    safetyScore: 8.8,
    gettingThere: 'Airport Rail Link connects Suvarnabhumi Airport (BKK) directly to downtown Phaya Thai station in 26 minutes.',
    description: 'An electrifying sensory metropolis where ornate gold-spired temples stand beside futuristic mega-malls, bustling street food stalls, and scenic longtail boats gliding down the Chao Phraya River.',
    whyVisit: [
      'Grand Palace and Wat Phra Kaew (Temple of the Emerald Buddha)',
      'Legendary Michelin-awarded street food like Jay Fai’s crab omelet',
      'Chao Phraya river express boats and romantic rooftop cocktail bars',
      'Chatuchak Weekend Market: 15,000+ stalls of fashion, food, and crafts'
    ],
    whyYouMightSkip: [
      'Heavy automotive traffic during peak rush hours',
      'Midday heat and humidity year-round (expect 32°C+)',
      'Tuk-tuk scams outside temples ("temple is closed today")'
    ],
    topThingsToDo: [
      { id: 'bk1', title: 'Wat Arun (Temple of Dawn) at Sunset', duration: '2 hours', costUSD: 3, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80' },
      { id: 'bk2', title: 'Grand Palace Exploration', duration: '3 hours', costUSD: 14, image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=600&q=80' },
      { id: 'bk3', title: 'Chinatown (Yaowarat) Night Food Safari', duration: '2.5 hours', costUSD: 12, image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Kudi Chin Portuguese Community', description: 'Historic riverside neighborhood founded in the 18th century; quiet pedestrian alleys baking ancient Portuguese-Thai sponge cakes.', tip: 'Cross the Chao Phraya on a cross-river ferry near Wat Kalayanamit.' }
    ],
    localFood: [
      { name: 'Crispy Crab Omelet', description: 'Wok-fried golden egg roll loaded with giant chunks of sweet lump crab meat.', priceRange: '$$$' },
      { name: 'Mango Sticky Rice', description: 'Sweet ripe honey mango served over coconut-cream soaked glutinous rice with toasted mung beans.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Riverside', vibe: 'Serene luxury overlooking riverboats and temples', recommendedHotel: 'The Siam or Mandarin Oriental Bangkok', priceTier: 'Luxury' },
      { area: 'Sukhumvit', vibe: 'BTS Skytrain access, dining, and vibrant nightlife', recommendedHotel: 'Aloft Bangkok Sukhumvit', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'BTS Skytrain & MRT Subway', detail: 'Fast, air-conditioned, and glides over traffic', costPerDayUSD: 5 },
      { mode: 'Chao Phraya Express Boat', detail: 'Scenic travel to all major river temples', costPerDayUSD: 2 }
    ],
    nearbyDestinations: ['chiang-mai'],
    travelerReviews: [
      { author: 'Daniel Thorne', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'The culinary energy in Chinatown at night is unlike anywhere else on this planet.' }
    ]
  },
  {
    id: 'chiang-mai',
    name: 'Chiang Mai',
    countryId: 'thailand',
    countryName: 'Thailand',
    countryFlag: '🇹🇭',
    region: 'Northern Thailand',
    category: 'Cultural',
    rankingTier: 'popular',
    rating: 4.8,
    reviewCount: 5400,
    dailyBudgetUSD: 35,
    crowdLevel: 'Moderate',
    popularityScore: 90,
    heroImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [18.7883, 98.9853],
    bestTimeToVisit: 'November to February (avoid burning season in Feb-April)',
    recommendedStayDays: 4,
    safetyScore: 9.3,
    gettingThere: '1-hour domestic flight from Bangkok or overnight scenic sleeper train.',
    description: 'The relaxed cultural capital of the north, encircled by ancient moat walls and mountain temples, ethical elephant sanctuaries, and a world-renowned digital nomad cafe culture.',
    whyVisit: [
      'Wat Phra That Doi Suthep mountain temple overlooking the entire valley',
      'Ethical elephant rescue and rehabilitation sanctuaries (Elephant Nature Park)',
      'Rich Lanna culture, artisan silverware, and vibrant Sunday Walking Street',
      'Unbelievable value for budget, wellness, and nomad living'
    ],
    whyYouMightSkip: [
      'Burning season (crop smoke) from late February to mid-April causes severe air pollution',
      'No comprehensive metro system (reliance on red songthaew trucks and Grab)',
      'Temperatures can be chilly in mountain peaks at night in December'
    ],
    topThingsToDo: [
      { id: 'cm1', title: 'Doi Suthep Golden Stupa at Sunrise', duration: '3 hours', costUSD: 2, image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=600&q=80' },
      { id: 'cm2', title: 'Sunday Night Walking Street Market', duration: '3 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Wat Pha Lat (Monk’s Trail Hike)', description: 'Hidden forest temple built over a mountain jungle waterfall halfway up Doi Suthep.', tip: 'Hike the Monk’s Trail marked with orange robes tied around trees; magical and quiet.' }
    ],
    localFood: [
      { name: 'Khao Soi Curry Noodle Soup', description: 'Rich northern coconut curry broth with egg noodles and braised chicken, topped with crispy fried noodles, lime, and pickled greens.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Old City', vibe: 'Walk to 30+ ancient temples and night markets', recommendedHotel: 'Tamarind Village', priceTier: 'Mid-range' },
      { area: 'Nimman', vibe: 'Trendy boutiques, specialty cafes, and co-working spaces', recommendedHotel: 'Akyra Manor Chiang Mai', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Red Songthaew & Grab', detail: 'Shared red pickup trucks charge 30 THB around town; Grab for fixed rates', costPerDayUSD: 4 }
    ],
    nearbyDestinations: ['bangkok'],
    travelerReviews: [
      { author: 'Maya Patel', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'Eating Khao Soi at Mae Sai and hiking the monk trail to Wat Pha Lat made me fall in love with Chiang Mai.' }
    ]
  },

  // ICELAND
  {
    id: 'reykjavik',
    name: 'Reykjavik & Golden Circle',
    countryId: 'iceland',
    countryName: 'Iceland',
    countryFlag: '🇮🇸',
    region: 'Capital Region',
    category: 'National Parks',
    rankingTier: 'iconic',
    rating: 4.8,
    reviewCount: 7200,
    dailyBudgetUSD: 165,
    crowdLevel: 'Moderate',
    popularityScore: 97,
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [64.1466, -21.9426],
    bestTimeToVisit: 'June to August for roadtrips & puffins; November to March for Northern Lights & ice caves',
    recommendedStayDays: 4,
    safetyScore: 10.0,
    gettingThere: 'Fly into Keflavík International Airport (KEF); Flybus connects to Reykjavik center in 45 minutes.',
    description: 'The world’s northernmost sovereign capital, serving as the launchpad for geysers, tectonic plate rifts at Þingvellir, roaring glacial waterfalls, and milky-blue geothermal spas.',
    whyVisit: [
      'Soak in steaming mineral waters at the Blue Lagoon or Sky Lagoon',
      'Walk between the North American and Eurasian tectonic plates at Þingvellir',
      'Watch Strokkur geyser blast 30 meters of boiling water into the sky every 6 minutes',
      'Marvel at the rainbow cascades of Gullfoss and Seljalandsfoss'
    ],
    whyYouMightSkip: [
      'High dining, alcohol, and lodging expenses',
      'Winter weather conditions can close roads with zero warning',
      'Popular Golden Circle stops see high tour bus traffic between 10 AM and 3 PM'
    ],
    topThingsToDo: [
      { id: 'rk1', title: 'Golden Circle Tour (Þingvellir, Geysir, Gullfoss)', duration: '7 hours', costUSD: 70, image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80' },
      { id: 'rk2', title: 'Sky Lagoon 7-Step Oceanfront Ritual', duration: '3 hours', costUSD: 85, image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Gljufrabui Hidden Waterfall', description: 'Concealed canyon waterfall tucked behind a narrow rock cleft right next to Seljalandsfoss.', tip: 'Wear waterproof boots and rain gear to squeeze through the rock slot.' }
    ],
    localFood: [
      { name: 'Icelandic Langoustine Feast', description: 'Sweet tender wild Atlantic langoustine tails baked in garlic butter and parsley in coastal Stokkseyri.', priceRange: '$$$$' }
    ],
    whereToStay: [
      { area: 'Downtown 101 Reykjavik', vibe: 'Colorful corrugated iron houses, design shops, and craft pubs', recommendedHotel: 'The Reykjavik EDITION or Canopy by Hilton', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Rental 4WD Car', detail: 'Essential to explore outside Reykjavik independently', costPerDayUSD: 80 }
    ],
    nearbyDestinations: ['lofoten'],
    travelerReviews: [
      { author: 'Kari Sigurdsson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '3 weeks ago', comment: 'Floating in the ocean infinity pool at Sky Lagoon while snow dusted my hair was unforgettable.' }
    ]
  },

  // GREECE
  {
    id: 'santorini',
    name: 'Santorini',
    countryId: 'greece',
    countryName: 'Greece',
    countryFlag: '🇬🇷',
    region: 'Cyclades',
    category: 'Islands',
    rankingTier: 'crowded',
    rating: 4.8,
    reviewCount: 13400,
    dailyBudgetUSD: 130,
    crowdLevel: 'Extremely Crowded',
    popularityScore: 99,
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [36.3932, 25.4615],
    bestTimeToVisit: 'May to June & September to October (avoid July/August mid-day)',
    recommendedStayDays: 3,
    safetyScore: 9.3,
    gettingThere: 'Flight into Thira (JTR) or high-speed SeaJets ferry from Piraeus port (Athens) in 4.5 hours.',
    description: 'A collapsed volcanic caldera crowned with whitewashed cliffside villages, cobalt-blue domes, dramatic volcanic sunset vistas, and private plunge pools over the Aegean.',
    whyVisit: [
      'Iconic blue-domed church views over the submerged volcanic crater',
      'World-famous sunsets from Oia’s castle ramparts',
      'Hike the 10km scenic caldera rim trail from Fira to Oia',
      'Crisp Assyrtiko white wines produced from ancient basket-trained vines'
    ],
    whyYouMightSkip: [
      'Oia sunset pathways become densely shoulder-to-shoulder with thousands of visitors in peak season',
      'Pebble and volcanic black/red beaches can become scorching under mid-day sun',
      'Caldera-view accommodation carries a significant price premium'
    ],
    topThingsToDo: [
      { id: 'st1', title: 'Fira to Oia Caldera Rim Hike', duration: '3.5 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' },
      { id: 'st2', title: 'Catamaran Sunset Cruise with Greek BBQ', duration: '5 hours', costUSD: 110, image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Pyrgos Village', description: 'The former capital built atop the island’s highest point; labyrinthine medieval fortified alleys, cozy tavernas, and almost zero cruise ship crowds.', tip: 'Enjoy panoramic sunset drinks at Franco’s Cafe in Pyrgos.' }
    ],
    localFood: [
      { name: 'Santorini Tomato Fritters (Tomatokeftedes)', description: 'Crispy fried patties of sweet sun-dried Santorini cherry tomatoes, mint, onion, and fresh herbs.', priceRange: '$' },
      { name: 'Santorini Fava Bean Dip', description: 'Velvety puree of yellow split fava beans drizzled with extra virgin olive oil, capers, and chopped red onions.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Imerovigli', vibe: 'Highest point of caldera; quieter and more dramatic than Oia', recommendedHotel: 'Grace Hotel, Auberge Resorts Collection', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Local KTEL Bus', detail: 'Connects all towns through central Fira hub', costPerDayUSD: 6 },
      { mode: 'ATV / Scooter Rental', detail: 'Convenient to reach wineries and south beaches', costPerDayUSD: 35 }
    ],
    nearbyDestinations: ['amalfi-coast', 'croatia'],
    travelerReviews: [
      { author: 'Chloe Bennett', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'Staying in Imerovigli instead of Oia was the best decision we made. Sunset from our balcony was pure serenity.' }
    ]
  },

  // ALBANIA (UNDERRATED)
  {
    id: 'ksamil',
    name: 'Ksamil & The Albanian Riviera',
    countryId: 'albania',
    countryName: 'Albania',
    countryFlag: '🇦🇱',
    region: 'Ionian Coast',
    category: 'Beaches',
    rankingTier: 'underrated',
    rating: 4.7,
    reviewCount: 1650,
    dailyBudgetUSD: 45,
    crowdLevel: 'Low',
    popularityScore: 78,
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [39.7708, 20.0039],
    bestTimeToVisit: 'May to June & September to October (avoid peak August weekends)',
    recommendedStayDays: 4,
    safetyScore: 9.5,
    gettingThere: '30-minute passenger ferry from Corfu (Greece) to Sarandë port, followed by a 15-minute bus/taxi down to Ksamil.',
    description: 'Dubbed the "Maldives of Europe" for its four offshore islets, translucent turquoise Ionian waters, and beachside fresh seafood tavernas at one-third the price of nearby Greece or Italy.',
    whyVisit: [
      'Translucent Caribbean-like turquoise water in the heart of Europe',
      'Swim or paddleboard to four uninhabited offshore islets',
      'Superb UNESCO World Heritage archaeological site of Butrint right next door',
      'Exceptional value: fresh grilled whole sea bass for €8-€10'
    ],
    whyYouMightSkip: [
      'Beach clubs in peak mid-summer (July/August) play loud music',
      'Public beaches can become packed with sun loungers during August',
      'Cash is preferred; card payment terminals can have connectivity issues'
    ],
    topThingsToDo: [
      { id: 'ks1', title: 'Kayak to the Ksamil Islands', duration: '2 hours', costUSD: 10, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
      { id: 'ks2', title: 'Explore Ancient Butrint National Park', duration: '3 hours', costUSD: 9, image: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'The Blue Eye (Syri i Kaltër)', description: 'Hypnotic natural freshwater spring bubbling up from a deep karst cave; brilliant electric-turquoise waters surrounded by lush oak trees.', tip: 'Visit before 10 AM before tour vans arrive from Sarandë.' }
    ],
    localFood: [
      { name: 'Fresh Grilled Ionian Sea Bass & Mussels', description: 'Freshly harvested Butrint lake mussels cooked in white wine, garlic, and fresh parsley.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Ksamil Coast', vibe: 'Modern waterfront boutique hotels overlooking the islands', recommendedHotel: 'Hotel Luxury or Blue Water Hotel', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'Walking & Local Bus', detail: 'Ksamil is walkable; local buses connect to Sarandë and Butrint', costPerDayUSD: 2 }
    ],
    nearbyDestinations: ['santorini'],
    travelerReviews: [
      { author: 'Lukas Meyer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'Taking a ferry from Corfu to Albania felt like discovering a paradise that cost a fraction of what Greece charges.' }
    ]
  },

  // SLOVENIA (UNDERRATED)
  {
    id: 'lake-bled',
    name: 'Lake Bled & Julian Alps',
    countryId: 'slovenia',
    countryName: 'Slovenia',
    countryFlag: '🇸🇮',
    region: 'Upper Carniola',
    category: 'Mountains',
    rankingTier: 'underrated',
    rating: 4.9,
    reviewCount: 4200,
    dailyBudgetUSD: 85,
    crowdLevel: 'Moderate',
    popularityScore: 89,
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [46.3636, 14.0938],
    bestTimeToVisit: 'May to October',
    recommendedStayDays: 3,
    safetyScore: 9.9,
    gettingThere: '40-minute drive or regular hourly bus from Ljubljana capital or Ljubljana Airport (LJU).',
    description: 'A real-life fairytale setting featuring a tear-shaped emerald island with a gothic church belltower floating in the center of an alpine lake, crowned by an 11th-century cliff castle.',
    whyVisit: [
      'Row a traditional wooden pletna boat to the island church and ring the wishing bell',
      'Hike up to Ojstrica and Mala Osojnica for the world-famous aerial viewpoint',
      'Walk along the turquoise rapids of Vintgar Gorge on wooden boardwalks',
      'Sample the famous golden Bled cream cake (kremna rezina) lakeside'
    ],
    whyYouMightSkip: [
      'Lake perimeter road can experience weekend traffic during mid-summer',
      'Parking fees around the lake can add up without a hotel pass',
      'Pletna boat rides carry a fixed €15-€18 cash fee per person'
    ],
    topThingsToDo: [
      { id: 'lb1', title: 'Sunrise Hike to Ojstrica Viewpoint', duration: '1.5 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
      { id: 'lb2', title: 'Row to Bled Island & Ring the Wishing Bell', duration: '2 hours', costUSD: 18, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
      { id: 'lb3', title: 'Walk the Wooden Boardwalks of Vintgar Gorge', duration: '2 hours', costUSD: 10, image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Lake Bohinj (Triglav National Park)', description: 'Only 25 minutes past Bled; wilder, completely uncommercialized glacier lake surrounded by soaring granite cliffs.', tip: 'Take the Vogel cable car up for panoramas over Mount Triglav.' }
    ],
    localFood: [
      { name: 'Original Bled Cream Cake', description: 'Fluffy vanilla custard layered under whipped cream and crispy puff pastry dusted with sugar.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Lake Bled Shore', vibe: 'Historic lakeside villas with private boat docks', recommendedHotel: 'Vila Bled (former presidential residence)', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Walking & Bicycle', detail: 'The 6km walking loop around Lake Bled is flat and scenic', costPerDayUSD: 8 }
    ],
    nearbyDestinations: ['zermatt', 'croatia'],
    travelerReviews: [
      { author: 'Mia Petrovic', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '2 weeks ago', comment: 'Standing on Ojstrica as the morning fog lifted off the lake church was something out of a Tolkien novel.' }
    ]
  }
];

import { ADDITIONAL_DESTINATIONS } from './moreDestinations';

export const ALL_DESTINATIONS: Destination[] = [...DESTINATIONS, ...ADDITIONAL_DESTINATIONS];

