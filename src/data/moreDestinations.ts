import { Destination } from '../types';

export const ADDITIONAL_DESTINATIONS: Destination[] = [
  // JORDAN
  {
    id: 'petra',
    name: 'Petra & Wadi Rum',
    countryId: 'jordan',
    countryName: 'Jordan',
    countryFlag: '🇯🇴',
    region: 'Ma’an Governorate',
    category: 'Historical Sites',
    rankingTier: 'iconic',
    rating: 4.9,
    reviewCount: 7800,
    dailyBudgetUSD: 85,
    crowdLevel: 'Moderate',
    popularityScore: 98,
    heroImage: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [30.3285, 35.4444],
    bestTimeToVisit: 'March to May & October to November',
    recommendedStayDays: 3,
    safetyScore: 9.1,
    gettingThere: '3-hour scenic drive along the Desert Highway or King’s Highway from Amman (AMM).',
    description: 'The ancient rose-red Nabataean capital carved directly into sandstone cliffs over 2,000 years ago, paired with the Martian red desert dunes of Wadi Rum.',
    whyVisit: [
      'Walk through the dramatic Siq canyon until Al-Khazneh (The Treasury) is revealed',
      'Climb 850 rock-cut steps to the colossal Monastery (Ad-Deir)',
      'Experience Petra by Night illuminated by 1,500 glowing candles',
      'Camp in luxury Martian geodesic domes in the Wadi Rum desert'
    ],
    whyYouMightSkip: [
      'Extensive walking required (15-20 km per day on rugged rock trails)',
      'Mid-summer desert temperatures can reach 40°C',
      'Persistent camel and donkey ride offers along main pathways'
    ],
    topThingsToDo: [
      { id: 'p1', title: 'Walk The Siq to The Treasury at 6:30 AM', duration: '2 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&w=600&q=80' },
      { id: 'p2', title: 'Hike to the High Place of Sacrifice', duration: '3.5 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Little Petra (Siq al-Barid)', description: 'Located 15 minutes north of main Petra; miniature canyon with painted Nabataean frescoes and almost no tourists.', tip: 'Free admission; great sunset viewpoint at the back cliff.' }
    ],
    localFood: [
      { name: 'Bedouin Zarb Feast', description: 'Lamb and whole chickens roasted underground in a sand-buried oven with smoked rice.', priceRange: '$$' }
    ],
    whereToStay: [
      { area: 'Wadi Musa / Petra Gates', vibe: 'Steps from the archaeological park entrance', recommendedHotel: 'Mövenpick Resort Petra', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Walking', detail: 'No motorized vehicles allowed inside the archaeological site', costPerDayUSD: 0 }
    ],
    nearbyDestinations: ['ksamil'],
    travelerReviews: [
      { author: 'Tariq Al-Mansoor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'Stepping out of the darkness of the Siq and seeing the sunlight strike the Treasury gave me full-body chills.' }
    ]
  },

  // NEW ZEALAND
  {
    id: 'queenstown',
    name: 'Queenstown & Milford Sound',
    countryId: 'new-zealand',
    countryName: 'New Zealand',
    countryFlag: '🇳🇿',
    region: 'Otago',
    category: 'Adventure',
    rankingTier: 'iconic',
    rating: 4.9,
    reviewCount: 6100,
    dailyBudgetUSD: 140,
    crowdLevel: 'Moderate',
    popularityScore: 97,
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [-45.0312, 168.6626],
    bestTimeToVisit: 'December to March for hiking & lakes; June to August for skiing',
    recommendedStayDays: 5,
    safetyScore: 9.9,
    gettingThere: 'Direct flights into Queenstown Airport (ZQN); 10 minutes to town center.',
    description: 'The adrenaline capital of the world, nestled beside Lake Wakatipu beneath the jagged Remarkables mountain range, leading into the mystical fiords of Milford Sound.',
    whyVisit: [
      'Cruise beneath Mitre Peak and cascading glacial waterfalls in Milford Sound',
      'The birthplace of commercial bungy jumping (AJ Hackett Bungy at Kawarau Bridge)',
      'Gourmet Central Otago Pinot Noir wine trail in the Gibbston Valley',
      'Skyline Gondola panoramas and exhilarating gravity-fueled luge rides'
    ],
    whyYouMightSkip: [
      'Accommodation prices can be steep in peak summer and ski seasons',
      'The scenic drive to Milford Sound takes 4 hours each way from Queenstown',
      'Fiordland receives high rainfall (though waterfalls are even more spectacular in rain)'
    ],
    topThingsToDo: [
      { id: 'q1', title: 'Milford Sound Nature Cruise', duration: '2 hours', costUSD: 65, image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80' },
      { id: 'q2', title: 'Skyline Queenstown Gondola & Luge', duration: '2.5 hours', costUSD: 42, image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Moke Lake Loop Track', description: 'Peaceful horseshoe-shaped lake hidden behind Ben Lomond, surrounded by rolling tussock mountains and grazing sheep, only 15 minutes from town.', tip: 'Bring a picnic; almost no commercial tourists.' }
    ],
    localFood: [
      { name: 'Fergburger Classic Gourmet Burger', description: 'Legendary oversized prime New Zealand beef burger with lettuce, tomato, red onion, aioli, and tomato relish.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Lake Wakatipu Esplanade', vibe: 'Unobstructed lake and mountain views within walking distance to town', recommendedHotel: 'QT Queenstown or Eichardt’s Private Hotel', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Rental Car / Campervan', detail: 'Best way to explore Glenorchy, Arrowtown, and Wanaka', costPerDayUSD: 65 }
    ],
    nearbyDestinations: ['sydney'],
    travelerReviews: [
      { author: 'Sam Gallagher', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '3 weeks ago', comment: 'Cruising right up beneath Stirling Falls in Milford Sound while fur seals basked on rocks was otherworldly.' }
    ]
  },

  // VIETNAM
  {
    id: 'hoi-an',
    name: 'Hoi An Ancient Town',
    countryId: 'vietnam',
    countryName: 'Vietnam',
    countryFlag: '🇻🇳',
    region: 'Central Vietnam',
    category: 'Cultural',
    rankingTier: 'popular',
    rating: 4.8,
    reviewCount: 5900,
    dailyBudgetUSD: 36,
    crowdLevel: 'Moderate',
    popularityScore: 92,
    heroImage: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [15.8801, 108.3380],
    bestTimeToVisit: 'February to July (dry and sunny)',
    recommendedStayDays: 3,
    safetyScore: 9.2,
    gettingThere: '40-minute taxi or shuttle from Da Nang International Airport (DAD).',
    description: 'An atmospheric UNESCO-preserved spice trade port where mustard-yellow merchant shophouses glow beneath thousands of silk lanterns reflecting in the Thu Bon River.',
    whyVisit: [
      'Lantern-lit twilight pedestrian streets along the river',
      'World-famous custom tailoring: custom suits and silk dresses in 24 hours',
      'Cycle through emerald rice paddies out to An Bang Beach',
      'Iconic 16th-century Japanese Covered Bridge (Chùa Cầu)'
    ],
    whyYouMightSkip: [
      'Central walking streets become packed with tour groups around 6:30 PM - 8:30 PM',
      'Monsoon flooding can occur along the riverbanks in October and November',
      'Bespoke tailoring requires multiple fittings to ensure a good fit'
    ],
    topThingsToDo: [
      { id: 'ha1', title: 'Night Market & Wooden Lantern Boat Ride', duration: '2 hours', costUSD: 6, image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80' },
      { id: 'ha2', title: 'Bicycle Tour Through Tra Que Herb Village', duration: '3 hours', costUSD: 10, image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Cam Kim Island Woodcarving Village', description: 'Cross the bridge south of town into rural island villages where master carpenters hand-carve dragon boats and furniture.', tip: 'Rent a bicycle to explore peaceful bamboo paths.' }
    ],
    localFood: [
      { name: 'Cao Lau Noodles', description: 'Chewy smoked noodles made with water from the ancient thousand-year-old Ba Le well, topped with pork and crispy croutons.', priceRange: '$' },
      { name: 'White Rose Dumplings (Bánh Bao Bánh Vạc)', description: 'Translucent steamed rice paper dumplings filled with spiced minced shrimp and crispy shallots.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Cam Chau / Rice Fields', vibe: 'Serene boutique resorts nestled between old town and beach', recommendedHotel: 'Anantara Hoi An Resort or Mulberry Collection', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'Bicycle & Walking', detail: 'Old town is closed to motorized vehicles during afternoon and evening', costPerDayUSD: 2 }
    ],
    nearbyDestinations: ['bangkok'],
    travelerReviews: [
      { author: 'Linh Nguyen', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '3 weeks ago', comment: 'Renting a bicycle to ride through the rice fields to the beach, then returning for a lantern boat ride, was pure bliss.' }
    ]
  },

  // SOUTH AFRICA
  {
    id: 'cape-town',
    name: 'Cape Town & Table Mountain',
    countryId: 'south-africa',
    countryName: 'South Africa',
    countryFlag: '🇿🇦',
    region: 'Western Cape',
    category: 'Cities',
    rankingTier: 'iconic',
    rating: 4.9,
    reviewCount: 8800,
    dailyBudgetUSD: 70,
    crowdLevel: 'Moderate',
    popularityScore: 98,
    heroImage: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [-33.9249, 18.4241],
    bestTimeToVisit: 'November to March (warm summer sunshine)',
    recommendedStayDays: 5,
    safetyScore: 8.0,
    gettingThere: 'Direct flights into Cape Town International Airport (CPT); 20 minutes to city bowl by Uber/shuttle.',
    description: 'Consistently voted among the world’s most spectacular cities, where flat-topped Table Mountain rises dramatic and sheer above two colliding oceans, white sand beaches, and wine valleys.',
    whyVisit: [
      'Table Mountain Aerial Cableway with 360-degree rotating floor',
      'Swim alongside African penguins at Boulders Beach in Simon’s Town',
      'Drive Chapman’s Peak Drive: one of the greatest coastal roads on Earth',
      'World-class wine tasting in historic Constantia and nearby Stellenbosch'
    ],
    whyYouMightSkip: [
      'Safety precautions necessary after dark; always use Uber rather than walking',
      'The "Cape Doctor" southeasterly wind can blow fiercely during summer',
      'Cable car closes during periods of heavy wind or cloud cover ("tablecloth")'
    ],
    topThingsToDo: [
      { id: 'ct1', title: 'Table Mountain Cable Car Summit Walk', duration: '3 hours', costUSD: 24, image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=600&q=80' },
      { id: 'ct2', title: 'Visit African Penguins at Boulders Beach', duration: '2 hours', costUSD: 10, image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80' },
      { id: 'ct3', title: 'Sunset from Lions Head or Signal Hill', duration: '2.5 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Kirstenbosch Boomslang Canopy Walkway', description: 'Curved elevated timber walkway that winds through tree canopies against the eastern slopes of Table Mountain.', tip: 'Pack a picnic for the Sunday summer sunset concert.' }
    ],
    localFood: [
      { name: 'Cape Seafood Platter & Oysters', description: 'Fresh line fish, grilled crayfish tails, and Saldanha Bay oysters with cold Chenin Blanc.', priceRange: '$$$' }
    ],
    whereToStay: [
      { area: 'Camps Bay & Clifton', vibe: 'Trendy beach strip with glamorous sunset cocktails', recommendedHotel: 'The Twelve Apostles Hotel or The Marly', priceTier: 'Luxury' },
      { area: 'V&A Waterfront', vibe: 'Vibrant harbor hub with security and walking access', recommendedHotel: 'Victoria & Alfred Hotel', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'Uber', detail: 'Safe, fast, trackable, and cheap across the entire Cape peninsula', costPerDayUSD: 14 }
    ],
    nearbyDestinations: ['queenstown'],
    travelerReviews: [
      { author: 'Brandon Cole', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', rating: 5, date: '2 weeks ago', comment: 'Driving Chapman’s Peak at golden hour was a spiritual experience. Cape Town is astonishing.' }
    ]
  },

  // MOROCCO
  {
    id: 'chefchaouen',
    name: 'Chefchaouen (The Blue City)',
    countryId: 'morocco',
    countryName: 'Morocco',
    countryFlag: '🇲🇦',
    region: 'Rif Mountains',
    category: 'Villages',
    rankingTier: 'hidden_gem',
    rating: 4.8,
    reviewCount: 3400,
    dailyBudgetUSD: 48,
    crowdLevel: 'Low',
    popularityScore: 84,
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [35.1688, -5.2684],
    bestTimeToVisit: 'March to May & September to November',
    recommendedStayDays: 2,
    safetyScore: 9.3,
    gettingThere: 'CTM bus from Tangier (2.5 hours) or Fes (4 hours).',
    description: 'An enchanting mountain medina tucked beneath the craggy peaks of the Rif mountains, famous for its labyrinth of alleys painted in every ethereal shade of cobalt and powder blue.',
    whyVisit: [
      'Wander through fairytale all-blue alleys, archways, and mosaic doorways',
      'Far more peaceful and relaxed than the intense medinas of Marrakech or Fes',
      'Hike up to the Spanish Mosque for panoramic sunset views over the glowing blue valley',
      'Handcrafted woolen blankets, woven rugs, and cedarwood crafts'
    ],
    whyYouMightSkip: [
      'No train line connects to Chefchaouen; bus or private taxi required',
      'Hilly stone staircases require comfortable walking shoes',
      'Instagram photo queues can form at the most famous blue door alleys'
    ],
    topThingsToDo: [
      { id: 'ch1', title: 'Photograph the Blue Alleys of the Medina', duration: '3 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80' },
      { id: 'ch2', title: 'Sunset Hike to the Spanish Mosque (Bouzafer)', duration: '1.5 hours', costUSD: 0, image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Ras El Maa Waterfall Springs', description: 'Fresh mountain water springs on the edge of the medina where local Berber women still gather to wash wool rugs and clothing.', tip: 'Enjoy fresh squeezed orange juice at the riverside cafe tables.' }
    ],
    localFood: [
      { name: 'Goat Cheese & Rif Mountain Honey', description: 'Creamy fresh local jben goat cheese drizzled with wild mountain honey on warm khobz flatbread.', priceRange: '$' }
    ],
    whereToStay: [
      { area: 'Upper Medina', vibe: 'Authentic blue-tiled riads with rooftop terraces', recommendedHotel: 'Lina Ryad & Spa or Dar Echchaouen', priceTier: 'Mid-range' }
    ],
    gettingAround: [
      { mode: 'Walking', detail: 'The entire medina is pedestrian-only', costPerDayUSD: 0 }
    ],
    nearbyDestinations: ['albarracin'],
    travelerReviews: [
      { author: 'Fatima Zahra', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'There is a tranquil, peaceful rhythm in Chefchaouen that soothes your soul after Marrakech.' }
    ]
  },

  // CROATIA
  {
    id: 'dubrovnik',
    name: 'Dubrovnik Old Town',
    countryId: 'croatia',
    countryName: 'Croatia',
    countryFlag: '🇭🇷',
    region: 'Dalmatia',
    category: 'Historical Sites',
    rankingTier: 'crowded',
    rating: 4.8,
    reviewCount: 9200,
    dailyBudgetUSD: 110,
    crowdLevel: 'Extremely Crowded',
    popularityScore: 97,
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: [42.6507, 18.0944],
    bestTimeToVisit: 'May to June & September to October (avoid July/August midday)',
    recommendedStayDays: 3,
    safetyScore: 9.7,
    gettingThere: 'Airport shuttle bus from Dubrovnik Airport (DBV) directly to Pile Gate in 30 minutes.',
    description: 'The "Pearl of the Adriatic": an immaculate medieval stone walled city rising out of the turquoise sea, flanked by baroque churches, marble limestone streets, and clifftop swimming bars.',
    whyVisit: [
      'Walk the 2km continuous circuit atop Dubrovnik’s medieval stone walls',
      'Swim off cliff rocks with a cold drink at Buža Bar outside the sea walls',
      'Cable car ride to the peak of Mount Srđ for iconic aerial city panoramas',
      'Kayaking around the fortress walls out to Lokrum Island'
    ],
    whyYouMightSkip: [
      'Cruise ship passenger influx can make the Stradun street extremely packed mid-day',
      'High price for the City Walls walking ticket (€35)',
      'Substantial number of stone steps in residential upper quarters'
    ],
    topThingsToDo: [
      { id: 'db1', title: 'Walk the Ancient City Rampart Walls', duration: '2 hours', costUSD: 38, image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80' },
      { id: 'db2', title: 'Sea Kayaking Sunset Tour to Lokrum Island', duration: '3 hours', costUSD: 35, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' }
    ],
    hiddenSpots: [
      { title: 'Buža Bar Hole-in-the-Wall', description: 'A hidden door through the seaside fortress wall leads directly to cliff steps where you can dive into deep sapphire waters.', tip: 'Arrive at 5:30 PM for sunset drinks over the sea.' }
    ],
    localFood: [
      { name: 'Fresh Adriatic Oysters from Ston', description: 'Plump wild oysters cultivated in the clean mineral waters of Mali Ston bay, served on crushed ice with lemon.', priceRange: '$$' }
    ],
    whereToStay: [
      { area: 'Ploče Gate Coast', vibe: 'Unobstructed views of the Old Town harbor and fortress', recommendedHotel: 'Hotel Excelsior Dubrovnik or Villa Dubrovnik', priceTier: 'Luxury' }
    ],
    gettingAround: [
      { mode: 'Walking', detail: 'The entire Old Town inside the walls is pedestrian-only', costPerDayUSD: 0 }
    ],
    nearbyDestinations: ['ksamil'],
    travelerReviews: [
      { author: 'Ana Markov', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', rating: 5, date: '1 month ago', comment: 'Walking the walls at 8:00 AM before any cruise crowds arrived made me feel like royalty looking down on the Adriatic.' }
    ]
  }
];
