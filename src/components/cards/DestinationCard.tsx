import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';
import { Destination } from '../../types';
import { BadgeTier } from '../common/BadgeTier';
import { PriceDisplay } from '../common/PriceDisplay';
import { UniversalActions } from '../common/UniversalActions';

interface DestinationCardProps {
  destination: Destination;
  layout?: 'grid' | 'list';
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, layout = 'grid' }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/destinations/${destination.id}`);
  };

  if (layout === 'list') {
    return (
      <div
        onClick={handleCardClick}
        className="group bg-white rounded-2xl border border-stone-200/80 hover:border-brand-300 hover:shadow-elevated transition-all p-4 flex flex-col md:flex-row items-center gap-4 cursor-pointer"
      >
        <div className="relative w-full md:w-48 h-36 shrink-0 rounded-xl overflow-hidden bg-stone-100">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-2 left-2">
            <BadgeTier tier={destination.rankingTier} size="sm" />
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-base leading-none">{destination.countryFlag}</span>
                <span className="text-xs text-stone-500 font-medium">{destination.countryName} • {destination.region}</span>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                <span>{destination.rating.toFixed(1)}</span>
                <span className="text-stone-400 font-normal">({destination.reviewCount})</span>
              </div>
            </div>

            <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-brand-600 transition-colors mb-1.5">
              {destination.name}
            </h3>

            <p className="text-xs text-stone-600 line-clamp-2 mb-3">
              {destination.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-stone-500 flex-wrap">
              <span className="inline-flex items-center gap-1">
                <Users className="w-3 h-3 text-stone-400" />
                Crowd: <strong>{destination.crowdLevel}</strong>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3 text-stone-400" />
                Stay: <strong>{destination.recommendedStayDays} Days</strong>
              </span>
              <span>•</span>
              <span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full text-[11px] font-medium">
                {destination.category}
              </span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between">
            <div className="text-xs text-stone-500">
              <span>Estimated: </span>
              <strong className="text-sm text-stone-900 font-bold">
                <PriceDisplay amountUSD={destination.dailyBudgetUSD} />
              </strong>
              <span> / day</span>
            </div>

            <UniversalActions id={destination.id} name={destination.name} type="destination" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-stone-200/80 hover:border-brand-300 hover:shadow-elevated transition-all overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Hero Image */}
      <div className="relative h-48 w-full overflow-hidden bg-stone-100">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Tier Ranking badge */}
        <div className="absolute top-3 left-3">
          <BadgeTier tier={destination.rankingTier} size="sm" />
        </div>

        {/* Quick actions top-right */}
        <div className="absolute top-3 right-3">
          <UniversalActions id={destination.id} name={destination.name} type="destination" compact />
        </div>

        {/* Bottom bar overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-1.5 text-xs font-semibold bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
            <span>{destination.countryFlag}</span>
            <span>{destination.countryName}</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-400 text-stone-950 rounded-md text-xs font-bold shadow-xs">
            <Star className="w-3 h-3 fill-current" />
            <span>{destination.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Body details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold text-brand-600 uppercase tracking-wide">
              {destination.category}
            </span>
            <span className="text-[11px] text-stone-400 flex items-center gap-1">
              <Users className="w-3 h-3" />
              {destination.crowdLevel}
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-brand-600 transition-colors mb-1">
            {destination.name}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-2 mb-3 leading-relaxed">
            {destination.description}
          </p>
        </div>

        {/* Price and CTA footer */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
          <div>
            <span className="text-stone-400">Est. </span>
            <span className="font-bold text-stone-900 text-sm">
              <PriceDisplay amountUSD={destination.dailyBudgetUSD} />
            </span>
            <span className="text-stone-400">/day</span>
          </div>

          <span className="font-semibold text-brand-600 group-hover:text-brand-700 flex items-center gap-1">
            Details <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
};
