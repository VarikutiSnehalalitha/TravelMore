import { Trip } from '../types';

export const SAMPLE_TRIPS: Trip[] = [
  {
    id: 'trip-japan-odyssey',
    title: 'Japan Cultural Discovery & Shinkansen Trail',
    destinationNames: ['Tokyo', 'Kyoto', 'Shirakawa-go'],
    countryIds: ['japan'],
    startDate: '2027-04-10',
    endDate: '2027-04-20',
    totalDays: 10,
    travelers: { adults: 2, children: 0 },
    travelStyle: 'Mid-range',
    interests: ['Culture', 'Food', 'History', 'Nature'],
    totalBudgetUSD: 2400,
    status: 'Upcoming',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    bookings: [
      { id: 'b1', type: 'flight', title: 'ANA Flight 108 Tokyo Haneda', provider: 'All Nippon Airways', confirmationCode: 'NH-849201', date: '2027-04-10', costUSD: 850, status: 'Confirmed' },
      { id: 'b2', type: 'hotel', title: 'Park Hotel Tokyo (Shiodome)', provider: 'Direct Booking', confirmationCode: 'PHT-38910', date: '2027-04-10', costUSD: 600, status: 'Confirmed' },
      { id: 'b3', type: 'train', title: 'JR Tokaido Shinkansen (Tokyo to Kyoto)', provider: 'SmartEX', confirmationCode: 'JR-55018', date: '2027-04-15', costUSD: 190, status: 'Confirmed' }
    ],
    notes: 'Remember to pick up physical pocket Wi-Fi at Haneda Airport terminal 3 counter.',
    itinerary: [
      {
        dayNumber: 1,
        date: '2027-04-10',
        title: 'Arrival in Tokyo & Shinjuku Nightscape',
        activities: [
          { id: 'a1', title: 'Arrive at Tokyo Haneda & Pick Up IC Cards', timeSlot: 'morning', time: '10:00 AM', location: 'Haneda Airport Terminal 3', costUSD: 15, duration: '1 hour', travelTime: '30 mins via Keikyu Line', category: 'Transit' },
          { id: 'a2', title: 'Check In to Shinjuku Hotel & Unpack', timeSlot: 'afternoon', time: '02:00 PM', location: 'Shinjuku Center', costUSD: 0, duration: '2 hours', travelTime: '15 mins walking', category: 'Lodging' },
          { id: 'a3', title: 'Sunset Views from Tokyo Metropolitan Government Building', timeSlot: 'evening', time: '05:30 PM', location: 'Nishi-Shinjuku 45F Observation Deck', costUSD: 0, duration: '1.5 hours', travelTime: '10 mins walking', category: 'Sightseeing' },
          { id: 'a4', title: 'Yakitori & Craft Beer in Omoide Yokocho', timeSlot: 'evening', time: '07:30 PM', location: 'Memory Lane, Shinjuku', costUSD: 28, duration: '2 hours', travelTime: '5 mins walking', category: 'Dining' }
        ]
      },
      {
        dayNumber: 2,
        date: '2027-04-11',
        title: 'Historic Asakusa & Digital Art',
        activities: [
          { id: 'a5', title: 'Senso-ji Temple & Nakamise-dori Morning Stroll', timeSlot: 'morning', time: '08:30 AM', location: 'Asakusa', costUSD: 0, duration: '2.5 hours', travelTime: '25 mins via Ginza Line', category: 'Culture' },
          { id: 'a6', title: 'Fresh Tempura Lunch at Daikokuya', timeSlot: 'afternoon', time: '12:30 PM', location: 'Asakusa', costUSD: 22, duration: '1 hour', travelTime: '5 mins walking', category: 'Dining' },
          { id: 'a7', title: 'teamLab Borderless Digital Art Museum Exploration', timeSlot: 'afternoon', time: '03:00 PM', location: 'Azabudai Hills', costUSD: 32, duration: '3 hours', travelTime: '20 mins via subway', category: 'Art' },
          { id: 'a8', title: 'Ramen Dinner at Rokurinsha Tsukemen', timeSlot: 'evening', time: '07:30 PM', location: 'Tokyo Station Ramen Street', costUSD: 14, duration: '1 hour', travelTime: '15 mins subway', category: 'Dining' }
        ]
      },
      {
        dayNumber: 3,
        date: '2027-04-12',
        title: 'Shibuya Scramble & Meiji Shrine',
        activities: [
          { id: 'a9', title: 'Meiji Jingu Shrine & Yoyogi Cedar Forest Walk', timeSlot: 'morning', time: '09:00 AM', location: 'Harajuku', costUSD: 0, duration: '2 hours', travelTime: '10 mins via JR Yamanote Line', category: 'Culture' },
          { id: 'a10', title: 'Explore Takeshita Street & Omotesando Architecture', timeSlot: 'afternoon', time: '11:30 AM', location: 'Harajuku', costUSD: 10, duration: '2 hours', travelTime: '5 mins walking', category: 'Shopping' },
          { id: 'a11', title: 'Cross Shibuya Scramble & Shibuya Sky Observatory', timeSlot: 'afternoon', time: '04:30 PM', location: 'Shibuya Scramble Square 47F', costUSD: 18, duration: '2.5 hours', travelTime: '10 mins walking', category: 'Sightseeing' },
          { id: 'a12', title: 'Wagyu Yakiniku Dinner at Han No Daidokoro', timeSlot: 'evening', time: '07:30 PM', location: 'Dogenzaka, Shibuya', costUSD: 55, duration: '2 hours', travelTime: '5 mins walking', category: 'Dining' }
        ]
      }
    ]
  },
  {
    id: 'trip-amalfi-rome',
    title: 'Italian Riviera & Roman Heritage Escapes',
    destinationNames: ['Rome', 'Amalfi Coast'],
    countryIds: ['italy'],
    startDate: '2027-05-14',
    endDate: '2027-05-21',
    totalDays: 7,
    travelers: { adults: 2, children: 0 },
    travelStyle: 'Couple',
    interests: ['Food', 'History', 'Beaches', 'Architecture'],
    totalBudgetUSD: 2800,
    status: 'Planning',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    bookings: [
      { id: 'b4', type: 'flight', title: 'Delta Flight 231 to Rome Fiumicino', provider: 'Delta', confirmationCode: 'DL-72019', date: '2027-05-14', costUSD: 920, status: 'Pending' }
    ],
    notes: 'Bring comfortable rubber-soled walking shoes for Roman cobblestones and cliff stairs.',
    itinerary: [
      {
        dayNumber: 1,
        date: '2027-05-14',
        title: 'Arrival in Rome & Trastevere Evenings',
        activities: [
          { id: 'ar1', title: 'Check in to boutique hotel in Trastevere', timeSlot: 'morning', time: '11:30 AM', location: 'Trastevere, Rome', costUSD: 0, duration: '1 hour', travelTime: '35 mins from FCO', category: 'Lodging' },
          { id: 'ar2', title: 'Afternoon walk past the Pantheon and Piazza Navona', timeSlot: 'afternoon', time: '03:00 PM', location: 'Centro Storico', costUSD: 5, duration: '3 hours', travelTime: '15 mins walking', category: 'Sightseeing' },
          { id: 'ar3', title: 'Authentic Cacio e Pepe Dinner at Da Enzo al 29', timeSlot: 'evening', time: '08:00 PM', location: 'Trastevere', costUSD: 35, duration: '2 hours', travelTime: '10 mins walking', category: 'Dining' }
        ]
      }
    ]
  }
];
