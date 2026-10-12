import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, Bookmark, Share2, Sparkles } from 'lucide-react';
import { TRAVEL_GUIDES } from '../data/guides';
import { ALL_DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/cards/DestinationCard';

export const GuideDetailView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const guide = TRAVEL_GUIDES.find(g => g.slug === slug);

  if (!guide) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900">Guide Not Found</h2>
        <p className="text-stone-500 text-sm">We couldn't locate this article.</p>
        <button
          onClick={() => navigate('/guides')}
          className="px-4 py-2 bg-brand-500 text-white rounded-xl text-xs font-semibold hover:bg-brand-600"
        >
          Return to Guides Hub
        </button>
      </div>
    );
  }

  const relatedDests = ALL_DESTINATIONS.filter(d => guide.relatedDestinationIds.includes(d.id));

  return (
    <article className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Return link */}
      <div>
        <button
          onClick={() => navigate('/guides')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Editorial Guides</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="space-y-4 text-center md:text-left">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 uppercase tracking-wider inline-block">
          {guide.category}
        </span>

        <h1 className="font-serif text-3xl md:text-5xl font-black text-stone-900 leading-tight">
          {guide.title}
        </h1>

        <p className="text-sm md:text-lg text-stone-600 font-light leading-relaxed">
          {guide.subtitle}
        </p>

        {/* Byline */}
        <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={guide.author.avatar} alt={guide.author.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-stone-200" />
            <div className="text-left">
              <p className="text-xs font-bold text-stone-900">{guide.author.name}</p>
              <p className="text-[11px] text-stone-500">{guide.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {guide.publishDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {guide.readingTimeMin} min read</span>
          </div>
        </div>
      </div>

      {/* Hero photo */}
      <div className="relative rounded-3xl overflow-hidden h-[360px] md:h-[460px] shadow-floating">
        <img src={guide.heroImage} alt={guide.title} className="w-full h-full object-cover" />
      </div>

      {/* Main Grid: TOC + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents sticky */}
        <div className="lg:col-span-1">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 sticky top-24 space-y-3">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
              Contents
            </span>
            <nav className="space-y-2">
              {guide.tableOfContents.map(toc => (
                <a
                  key={toc.id}
                  href={`#${toc.id}`}
                  className="block text-xs text-stone-600 hover:text-brand-600 transition-colors leading-snug"
                >
                  {toc.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Article Body */}
        <div className="lg:col-span-3 space-y-8 font-light text-stone-800 leading-relaxed text-sm md:text-base">
          {guide.contentSections.map(sec => (
            <section key={sec.id} id={sec.id} className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                {sec.heading}
              </h2>

              {sec.paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.image && (
                <div className="my-6 space-y-2">
                  <div className="rounded-2xl overflow-hidden h-72">
                    <img src={sec.image} alt={sec.heading} className="w-full h-full object-cover" />
                  </div>
                  {sec.imageCaption && (
                    <p className="text-[11px] text-stone-400 italic text-center">
                      {sec.imageCaption}
                    </p>
                  )}
                </div>
              )}

              {sec.proTip && (
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 text-xs text-amber-900 space-y-1">
                  <span className="font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Insider Field Tip
                  </span>
                  <p>{sec.proTip}</p>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Embedded Related Destinations */}
      {relatedDests.length > 0 && (
        <div className="pt-8 border-t border-stone-200 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            Featured Destinations Mentioned in this Story
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedDests.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
