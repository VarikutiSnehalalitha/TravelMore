import { TravelGuide } from '../types';

export const TRAVEL_GUIDES: TravelGuide[] = [
  {
    slug: 'two-weeks-in-japan-first-timers',
    title: 'The Golden Route & Beyond: Two Weeks in Japan for First-Timers',
    subtitle: 'From neon high-rises in Shinjuku to ancient moss gardens in Kyoto, here is the quintessential 14-day itinerary balancing bullet trains, ramen counters, and mountain onsens.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    category: 'First-Time Traveler',
    author: {
      name: 'Kenji Takahashi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      role: 'Tokyo Senior Editor & Photojournalist'
    },
    publishDate: 'October 2026',
    readingTimeMin: 9,
    countryId: 'japan',
    tableOfContents: [
      { id: 'arrival-tokyo', title: 'Days 1-5: The Energy of Tokyo' },
      { id: 'fuji-hakone', title: 'Days 6-7: Mt. Fuji & Traditional Ryokan' },
      { id: 'cultural-kyoto', title: 'Days 8-11: Temples & Bamboo in Kyoto' },
      { id: 'foodie-osaka', title: 'Days 12-14: Street Food Capital of Osaka' }
    ],
    contentSections: [
      {
        id: 'arrival-tokyo',
        heading: 'Days 1-5: The Energy of Tokyo',
        paragraphs: [
          'Arriving into Tokyo can feel like landing in the future. The juxtaposition of quiet cedar shrine courtyards nestled beside pulsating neon crossings is intoxicating.',
          'Start in Asakusa at Senso-ji temple at dawn before crowds gather, then contrast the tranquility with the sheer kinetic pulse of Shibuya Crossing and Shinjuku’s alleyway yakitori bars in Omoide Yokocho.',
          'Dedicate an afternoon to the low-rise shitamachi neighborhood of Yanaka, where retro coffee shops and cat-themed bakeries give a glimpse of old Tokyo before the Olympic transformation.'
        ],
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
        imageCaption: 'The glittering evening skyline of Shinjuku, Tokyo.',
        proTip: 'Download a digital Suica card straight to your mobile wallet before flying to skip all subway ticket vending queues.'
      },
      {
        id: 'fuji-hakone',
        heading: 'Days 6-7: Mt. Fuji & Traditional Ryokan Onsen',
        paragraphs: [
          'Board the Romancecar express train from Shinjuku down to Hakone. Here, the landscape transitions rapidly from concrete high-rises to lush volcanic cedar forests.',
          'Stay at an authentic ryokan with private cedarwood hot spring baths (onsen) fed by natural volcanic springs. Savor an elaborate 10-course seasonal Kaiseki dinner served directly to your tatami suite.'
        ],
        image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1000&q=80',
        imageCaption: 'Mount Fuji reflected in the calm waters of Lake Ashi.',
        proTip: 'If you have visible tattoos, book a ryokan with a private kashikiri (reservable) onsen bath to avoid communal bath restrictions.'
      },
      {
        id: 'cultural-kyoto',
        heading: 'Days 8-11: Temples, Shrines & Bamboo in Kyoto',
        paragraphs: [
          'Hop aboard the Tokaido Shinkansen bullet train at Shin-Fuji station and watch the countryside blur past at 285 km/h as you enter Kyoto.',
          'Kyoto is a living museum. Walk the 10,000 crimson torii gates of Fushimi Inari Taisha at 6:30 AM when silence reigns over the mountain slopes. Spend your afternoons wandering through stone-paved Gion preservation alleys, keeping an eye out for geiko and maiko.'
        ],
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
        imageCaption: 'Traditional wooden machiya houses along the historic streets of Higashiyama, Kyoto.',
        proTip: 'Rent an e-bike to explore the northern temples of Daitoku-ji and Kinkaku-ji; cycling is faster and far more scenic than crowded buses.'
      },
      {
        id: 'foodie-osaka',
        heading: 'Days 12-14: Street Food Capital of Osaka',
        paragraphs: [
          'Just a 15-minute bullet train hop south lies Osaka, famous for the motto "Kuidaore" (eat until you drop).',
          'Explore Dotonbori beneath glowing giant mechanical crabs and the iconic Glico Running Man. Slurp piping hot takoyaki octopus balls blistered on cast-iron grills and crunchy skewered kushikatsu in Shinsekai.'
        ],
        image: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1000&q=80',
        imageCaption: 'The glowing canals and neon signboards of Dotonbori, Osaka.'
      }
    ],
    relatedDestinationIds: ['tokyo', 'kyoto', 'shirakawa-go'],
    tags: ['Japan', 'Itinerary', 'First-Time', 'Bullet Train', 'Food']
  },
  {
    slug: 'europe-underrated-alternatives',
    title: 'Skip the Crowds: 6 Underrated European Alternatives to Famous Hotspots',
    subtitle: 'Tired of elbow-to-elbow crowds and inflated prices? Swap Santorini for Ksamil, Switzerland for Slovenia, and the Amalfi Coast for Albarracín.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    category: 'Hidden Gems',
    author: {
      name: 'Sofia Vane',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'European Discovery Editor'
    },
    publishDate: 'September 2026',
    readingTimeMin: 7,
    countryId: 'slovenia',
    tableOfContents: [
      { id: 'albania-vs-greece', title: 'Albanian Riviera instead of Greek Islands' },
      { id: 'slovenia-vs-switzerland', title: 'Lake Bohinj & Soča instead of Swiss Alps' },
      { id: 'albarracin-vs-amalfi', title: 'Albarracín instead of Packed Italian Cliffs' }
    ],
    contentSections: [
      {
        id: 'albania-vs-greece',
        heading: '1. The Albanian Riviera (Ksamil) instead of Overcrowded Cyclades',
        paragraphs: [
          'While Santorini and Mykonos grapple with bumper-to-bumper cruise crowds and €30 cocktails, just a short 30-minute ferry ride north of Corfu lies Ksamil and the southern Albanian Riviera.',
          'Here, translucent Ionian waters lap against white sandy coves and offshore islets. Enjoy fresh grilled whole sea bass and carafe wine overlooking the sea for under €15.'
        ],
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
        imageCaption: 'Crystal-clear turquoise waters along the Albanian Riviera at Ksamil.',
        proTip: 'Visit in June or September when sea temperatures are warm, restaurants are peaceful, and lodging rates drop below €40/night.'
      },
      {
        id: 'slovenia-vs-switzerland',
        heading: '2. Lake Bohinj & The Julian Alps instead of Pricey Switzerland',
        paragraphs: [
          'Switzerland’s alpine beauty is undisputed, but Slovenia packs the same dramatic jagged granite peaks, crystal emerald rivers, and fairytale church towers into a compact, pocket-friendly paradise.',
          'Row wooden boats across Lake Bled, raft the world’s most intense emerald water along the Soča River, and explore car-free Ljubljana.'
        ],
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
        imageCaption: 'Lake Bled surrounded by the Julian Alps at sunrise.',
        proTip: 'Lake Bohinj is only 25 minutes past Lake Bled and has virtually zero commercial tourist buses.'
      },
      {
        id: 'albarracin-vs-amalfi',
        heading: '3. Medieval Albarracín instead of Italy’s Congested Cliffs',
        paragraphs: [
          'Perched dramatically on a rock curve above a river gorge in eastern Spain, Albarracín’s pink stone buildings and Moorish defensive walls offer medieval romance without the tourist bus gridlock of the Amalfi Coast.',
          'At night, warm street lanterns cast golden shadows across the stone arches, making it feel like a film set where you are the only spectator.'
        ],
        image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1000&q=80',
        imageCaption: 'The pink-walled medieval fortress city of Albarracín, Spain.'
      }
    ],
    relatedDestinationIds: ['ksamil', 'lake-bled', 'albarracin'],
    tags: ['Europe', 'Hidden Gems', 'Underrated', 'Budget', 'Solo Travel']
  },
  {
    slug: 'ultimate-food-guide-peru',
    title: 'From Ceviche to Nikkei: Why Peru is the Culinary Capital of the Americas',
    subtitle: 'An insider guide to navigating Lima’s world-ranking restaurants, vibrant Andean markets, and mouthwatering Amazonian superfoods.',
    heroImage: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=1600&q=80',
    category: 'Food Guides',
    author: {
      name: 'Gabriel Morales',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      role: 'Gastronomy Writer & Culinary Tour Host'
    },
    publishDate: 'August 2026',
    readingTimeMin: 8,
    countryId: 'peru',
    tableOfContents: [
      { id: 'ceviche-anatomy', title: 'The Anatomy of True Leche de Tigre' },
      { id: 'lima-fine-dining', title: 'Booking Central & Maido in Lima' },
      { id: 'cusco-high-altitude', title: 'High-Altitude Ingredients of the Sacred Valley' }
    ],
    contentSections: [
      {
        id: 'ceviche-anatomy',
        heading: 'The Anatomy of True Leche de Tigre',
        paragraphs: [
          'Peruvian ceviche is completely unlike versions found in other parts of the world. Fresh Corvina or sea bass is flash-cured for less than 60 seconds in freshly squeezed Key lime juice seasoned with red onion, cilantro, and fiery rocoto chili.',
          'The resulting milky marinade, known as leche de tigre (tiger’s milk), is drank directly from the glass like an invigorating elixir.'
        ],
        image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=1000&q=80',
        imageCaption: 'Fresh sea bass ceviche served with cancha corn and glazed sweet potato in Lima.',
        proTip: 'Locals eat ceviche exclusively for lunch; if a restaurant serves ceviche late at night, the fish is likely not fresh off the morning fishing boats.'
      },
      {
        id: 'lima-fine-dining',
        heading: 'Navigating Lima’s World-Ranking Gastronomy',
        paragraphs: [
          'Lima is the only city in the world to host multiple restaurants frequently ranked in the World’s 50 Best Top 10. Central (by Virgilio Martínez) takes diners on an elevation tasting menu from 20 meters below sea level to 4,000 meters in the high Andes.',
          'Meanwhile, Maido champions Nikkei cuisine—the century-old fusion of Japanese technique with Peruvian biodiversity.'
        ],
        image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1000&q=80',
        imageCaption: 'Wok-charred Lomo Saltado in Miraflores, Lima.'
      }
    ],
    relatedDestinationIds: ['machu-picchu', 'cusco'],
    tags: ['Peru', 'Food', 'Culinary', 'Fine Dining', 'South America']
  }
];
