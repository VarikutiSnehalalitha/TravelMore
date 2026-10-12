import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { TravelGuide } from '../../types';

interface GuideCardProps {
  guide: TravelGuide;
  featured?: boolean;
}

export const GuideCard: React.FC<GuideCardProps> = ({ guide, featured = false }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/guides/${guide.slug}`);
  };

  if (featured) {
    return (
      <div
        onClick={handleCardClick}
        className="group relative rounded-3xl overflow-hidden border border-stone-200/80 hover:shadow-floating transition-all cursor-pointer bg-stone-900 text-white min-h-[420px] flex flex-col justify-end p-8 md:p-12"
      >
        <img
          src={guide.heroImage}
          alt={guide.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500 text-white uppercase tracking-wider">
              {guide.category}
            </span>
            <span className="text-xs text-stone-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {guide.readingTimeMin} min read
            </span>
          </div>

          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-3 leading-tight group-hover:text-brand-300 transition-colors">
            {guide.title}
          </h2>

          <p className="text-stone-300 text-sm md:text-base line-clamp-2 mb-6 font-light">
            {guide.subtitle}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div className="flex items-center gap-3">
              <img src={guide.author.avatar} alt={guide.author.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-white/50" />
              <div>
                <p className="text-xs font-semibold text-white">{guide.author.name}</p>
                <p className="text-[11px] text-stone-400">{guide.author.role}</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 group-hover:translate-x-1 transition-transform">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4" />
            </span>
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
      <div className="relative h-48 w-full overflow-hidden bg-stone-100">
        <img
          src={guide.heroImage}
          alt={guide.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-semibold text-stone-800 shadow-xs">
          {guide.category}
        </div>
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-xs flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{guide.readingTimeMin} min</span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug">
            {guide.title}
          </h3>
          <p className="text-xs text-stone-500 line-clamp-2 mb-4 leading-relaxed">
            {guide.subtitle}
          </p>
        </div>

        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={guide.author.avatar} alt={guide.author.name} className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs font-medium text-stone-600">{guide.author.name}</span>
          </div>

          <span className="text-xs font-semibold text-brand-600 flex items-center gap-1">
            Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
};
