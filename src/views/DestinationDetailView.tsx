import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Star,
  Users,
  Clock,
  ShieldCheck,
  Calendar,
  Compass,
  ArrowRight,
  PlusCircle,
  Bookmark,
  Scale,
  Share2,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  MapPin,
  UtensilsCrossed,
  Hotel,
  Bus,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ALL_DESTINATIONS } from '../data/destinations';
import { ALL_COUNTRIES } from '../data/countries';
import { BadgeTier } from '../components/common/BadgeTier';
import { PriceDisplay } from '../components/common/PriceDisplay';
import { UniversalActions } from '../components/common/UniversalActions';
import { DestinationCard } from '../components/cards/DestinationCard';

export const DestinationDetailView: React.FC = () => {
  const { destination: destId } = useParams<{ destination: string }>();
  const navigate = useNavigate();

  const destination = ALL_DESTINATIONS.find(d => d.id === destId);

  const [activeTab, setActiveTab] = useState<
    'Overview' | 'Things To Do' | 'Food' | 'Stay' | 'Transport' | 'Nearby' | 'Tips'
  >('Overview');

  if (!destination) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900">Destination Not Found</h2>
        <p className="text-stone-500 text-sm">We couldn't locate the destination you requested.</p>
        <button
          onClick={() => navigate('/destinations')}
          className="px-4 py-2 bg-brand-500 text-white rounded-xl text-xs font-semibold hover:bg-brand-600"
        >
          Browse All Destinations
        </button>
      </div>
    );
  }

  const country = ALL_COUNTRIES.find(c => c.id === destination.countryId);
  const nearbyList = ALL_DESTINATIONS.filter(d => destination.nearbyDestinations.includes(d.id));

  const tabs = [
    'Overview',
    'Things To Do',
    'Food',
    'Stay',
    'Transport',
    'Nearby',
    'Tips'
  ] as const;

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Hero Image & Header */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white min-h-[420px] md:min-h-[480px] flex flex-col justify-end p-6 md:p-10 shadow-floating">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover opacity-65 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />

        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <BadgeTier tier={destination.rankingTier} size="md" />
            <Link
              to={`/countries/${destination.countryId}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
            >
              <span>{destination.countryFlag}</span>
              <span>{destination.countryName}</span>
            </Link>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md">
              {destination.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            {destination.name}
          </h1>

          <p className="text-xs md:text-sm text-stone-200 line-clamp-2 md:line-clamp-3 font-light leading-relaxed max-w-3xl">
            {destination.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3 md:gap-6 text-xs text-stone-300 border-t border-white/20">
            <div className="flex items-center gap-1.5 font-bold text-amber-300">
              <Star className="w-4 h-4 fill-current" />
              <span>{destination.rating.toFixed(1)} ({destination.reviewCount} reviews)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-stone-400" />
              <span>Crowds: <strong className="text-white">{destination.crowdLevel}</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>Recommended Stay: <strong className="text-white">{destination.recommendedStayDays} Days</strong></span>
            </div>
            <span>•</span>
            <div>
              <span>Daily Budget: </span>
              <strong className="text-white font-bold"><PriceDisplay amountUSD={destination.dailyBudgetUSD} /> / day</strong>
            </div>
          </div>

          {/* Universal Actions Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <UniversalActions id={destination.id} name={destination.name} type="destination" />
            <button
              onClick={() => navigate(`/map?lat=${destination.coordinates[0]}&lng=${destination.coordinates[1]}&dest=${destination.id}`)}
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors"
            >
              View on World Map 🗺️
            </button>
          </div>
        </div>
      </div>

      {/* 2. Quick Information Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Best Time to Visit</span>
          <p className="text-xs font-bold text-stone-900">{destination.bestTimeToVisit}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Safety Score</span>
          <p className="text-xs font-bold text-emerald-600 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> {destination.safetyScore} / 10
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Recommended Duration</span>
          <p className="text-xs font-bold text-stone-900">{destination.recommendedStayDays} Days Minimum</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Getting There</span>
          <p className="text-xs font-medium text-stone-700 line-clamp-1">{destination.gettingThere}</p>
        </div>
      </div>

      {/* 3. Sticky Sub-navigation Tabs */}
      <div className="sticky top-16 z-20 bg-stone-50/95 backdrop-blur-md py-2 border-b border-stone-200">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Tab Content */}
      <div className="space-y-8">
        {/* OVERVIEW TAB */}
        {activeTab === 'Overview' && (
          <div className="space-y-8">
            {/* Why Visit vs Why You Might Skip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Why Visit */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-stone-100 text-emerald-700">
                  <ThumbsUp className="w-5 h-5" />
                  <h3 className="font-serif text-xl font-bold">Why You Must Visit</h3>
                </div>
                <ul className="space-y-3">
                  {destination.whyVisit.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why You Might Skip */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-stone-100 text-amber-700">
                  <ThumbsDown className="w-5 h-5" />
                  <h3 className="font-serif text-xl font-bold">Why You Might Skip</h3>
                </div>
                <ul className="space-y-3">
                  {destination.whyYouMightSkip.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                      <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hidden Spots Preview */}
            {destination.hiddenSpots.length > 0 && (
              <div className="bg-cyan-950/5 p-6 md:p-8 rounded-3xl border border-cyan-200/60 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💎</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900">
                      Secret Hidden Spots in {destination.name}
                    </h3>
                    <p className="text-xs text-stone-600">Insider locations not found in generic travel brochures</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {destination.hiddenSpots.map((spot, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="font-serif font-bold text-stone-900 text-base">{spot.title}</h4>
                      <p className="text-xs text-stone-600 leading-relaxed font-light">{spot.description}</p>
                      <div className="p-2.5 bg-amber-50 border border-amber-200/80 rounded-xl text-[11px] text-amber-900 font-medium">
                        💡 <strong>Pro Tip:</strong> {spot.tip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Traveler Reviews */}
            {destination.travelerReviews.length > 0 && (
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <h3 className="font-serif text-xl font-bold text-stone-900">Traveler Reviews</h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>{destination.rating.toFixed(1)} / 5.0</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {destination.travelerReviews.map((rev, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <img src={rev.avatar} alt={rev.author} className="w-7 h-7 rounded-full object-cover" />
                          <div>
                            <span className="text-xs font-bold text-stone-900 block">{rev.author}</span>
                            <span className="text-[10px] text-stone-400">{rev.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 text-amber-500">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-stone-700 italic leading-relaxed">"{rev.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* THINGS TO DO TAB */}
        {activeTab === 'Things To Do' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Top Things To Do in {destination.name}</h2>
              <p className="text-xs text-stone-500">Hand-picked iconic sights and experiences with duration and costs</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {destination.topThingsToDo.map(act => (
                <div key={act.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs group flex flex-col justify-between">
                  <div>
                    <div className="h-44 w-full overflow-hidden bg-stone-100">
                      <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-serif font-bold text-base text-stone-900 leading-snug">{act.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-stone-500">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {act.duration}</span>
                        <span>•</span>
                        <span className="font-semibold text-stone-900">
                          {act.costUSD === 0 ? 'Free Entry' : <PriceDisplay amountUSD={act.costUSD} />}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={() => alert(`Added "${act.title}" to quick planning queue.`)}
                      className="w-full py-2 bg-stone-100 hover:bg-brand-50 hover:text-brand-700 text-stone-700 text-xs font-semibold rounded-xl border border-stone-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Add to Itinerary</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOOD TAB */}
        {activeTab === 'Food' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Local Dishes & Dining</h2>
              <p className="text-xs text-stone-500">Iconic culinary flavors authentic to {destination.name}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.localFood.map((dish, idx) => (
                <div key={idx} className="p-5 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-stone-900 text-base">{dish.name}</h4>
                    <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {dish.priceRange}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">{dish.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHERE TO STAY TAB */}
        {activeTab === 'Stay' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Where To Stay in {destination.name}</h2>
              <p className="text-xs text-stone-500">Recommended neighborhoods and verified hotels</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.whereToStay.map((stay, idx) => (
                <div key={idx} className="p-5 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-stone-900 text-base">{stay.area}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                      {stay.priceTier}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed"><strong>Vibe:</strong> {stay.vibe}</p>
                  <p className="text-xs text-brand-700 bg-brand-50 p-2.5 rounded-xl border border-brand-200/80">
                    🏨 <strong>Hotel Recommendation:</strong> {stay.recommendedHotel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRANSPORT TAB */}
        {activeTab === 'Transport' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Getting Around {destination.name}</h2>
              <p className="text-xs text-stone-500">Public transit, walking routes, and typical daily commuting costs</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.gettingAround.map((trans, idx) => (
                <div key={idx} className="p-5 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-stone-900 text-base">{trans.mode}</h4>
                    <span className="text-xs font-bold text-stone-900">
                      ~<PriceDisplay amountUSD={trans.costPerDayUSD} /> / day
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">{trans.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEARBY DESTINATIONS TAB */}
        {activeTab === 'Nearby' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Nearby Day Trips & Excursions</h2>
              <p className="text-xs text-stone-500">Easily combine {destination.name} with these nearby gems</p>
            </div>

            {nearbyList.length === 0 ? (
              <p className="text-stone-500 text-sm">No connected nearby excursions cataloged yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {nearbyList.map(near => (
                  <DestinationCard key={near.id} destination={near} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TIPS TAB */}
        {activeTab === 'Tips' && (
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">Key Tips for Visiting {destination.name}</h2>
            <div className="space-y-3 text-xs text-stone-700 leading-relaxed font-light">
              <p>• <strong>Arrival:</strong> {destination.gettingThere}</p>
              <p>• <strong>Crowd Strategy:</strong> As this is rated <em>{destination.crowdLevel}</em> crowds, visit famous sites before 8:00 AM or after 5:30 PM.</p>
              <p>• <strong>Recommended Duration:</strong> Plan for at least {destination.recommendedStayDays} days to immerse yourself without feeling rushed.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
