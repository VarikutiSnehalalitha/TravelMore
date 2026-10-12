import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';
import { Country } from '../../types';
import { PriceDisplay } from '../common/PriceDisplay';
import { UniversalActions } from '../common/UniversalActions';

interface CountryCardProps {
  country: Country;
  layout?: 'grid' | 'horizontal';
}

export const CountryCard: React.FC<CountryCardProps> = ({ country, layout = 'grid' }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/countries/${country.id}`);
  };

  if (layout === 'horizontal') {
    return (
      <div
        onClick={handleCardClick}
        className="group bg-white rounded-2xl border border-stone-200/80 hover:border-brand-300 hover:shadow-elevated transition-all overflow-hidden flex flex-col md:flex-row cursor-pointer"
      >
        <div className="relative md:w-64 h-48 md:h-auto shrink-0 overflow-hidden">
          <img
            src={country.heroImage}
            alt={country.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-semibold shadow-xs flex items-center gap-1.5">
            <span className="text-base leading-none">{country.flag}</span>
            <span>{country.continent}</span>
          </div>
          <div className="absolute top-3 right-3">
            <UniversalActions id={country.id} name={country.name} type="country" compact />
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-brand-600 transition-colors">
                {country.name}
              </h3>
              <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-900 rounded-lg text-xs font-bold border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>{country.overallScore.toFixed(1)}</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 mb-3 flex items-center gap-2">
              <span>Capital: <strong>{country.capital}</strong></span>
              <span>•</span>
              <span>Currency: <strong>{country.currency.code}</strong></span>
            </p>

            <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
              {country.overview}
            </p>
          </div>

          <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
            <div className="text-xs text-stone-500">
              <span>From </span>
              <strong className="text-sm text-stone-900 font-bold">
                <PriceDisplay amountUSD={country.dailyBudgetUSD} />
              </strong>
              <span> / day</span>
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold text-brand-600 group-hover:translate-x-0.5 transition-transform">
              <span>Explore Country</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
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
      {/* Image container */}
      <div className="relative h-52 w-full overflow-hidden bg-stone-100">
        <img
          src={country.heroImage}
          alt={country.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Flag & Continent badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-semibold shadow-xs flex items-center gap-1.5 text-stone-800">
          <span className="text-base leading-none">{country.flag}</span>
          <span>{country.name}</span>
        </div>

        {/* Quick action overlay */}
        <div className="absolute top-3 right-3">
          <UniversalActions id={country.id} name={country.name} type="country" compact />
        </div>

        {/* Bottom image stats */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-1.5 text-xs font-medium bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
            <Calendar className="w-3 h-3 text-stone-300" />
            <span>Best: {country.bestMonths.slice(0, 3).join(', ')}</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-400 text-stone-950 rounded-md text-xs font-bold shadow-xs">
            <Star className="w-3 h-3 fill-current" />
            <span>{country.overallScore.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Content body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">{country.continent}</span>
            <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Safety {country.safetyScore}
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-brand-600 transition-colors mb-1.5">
            {country.name}
          </h3>

          <div className="flex flex-wrap gap-1 mb-3">
            {country.bestFor.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
          <div>
            <span className="text-stone-400">Daily from </span>
            <span className="font-bold text-stone-900 text-sm">
              <PriceDisplay amountUSD={country.dailyBudgetUSD} />
            </span>
          </div>

          <span className="font-semibold text-brand-600 group-hover:text-brand-700 flex items-center gap-1">
            Overview <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
};
