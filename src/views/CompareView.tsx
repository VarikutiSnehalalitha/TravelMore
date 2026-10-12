import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Scale,
  Plus,
  Trash2,
  Star,
  ShieldCheck,
  Users,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  XCircle,
  PlusCircle,
  HelpCircle
} from 'lucide-react';
import { useCompareStore } from '../stores/useCompareStore';
import { ALL_COUNTRIES } from '../data/countries';
import { ALL_DESTINATIONS } from '../data/destinations';
import { PriceDisplay } from '../components/common/PriceDisplay';

export const CompareView: React.FC = () => {
  const navigate = useNavigate();
  const { compareIds, removeFromCompare, clearCompare, addToCompare } = useCompareStore();
  const [showAddModal, setShowAddModal] = useState(false);

  // Match items from either countries or destinations
  const items = compareIds.map(id => {
    const country = ALL_COUNTRIES.find(c => c.id === id);
    if (country) {
      return {
        type: 'country' as const,
        id: country.id,
        name: country.name,
        flag: country.flag,
        image: country.heroImage,
        score: country.overallScore,
        budget: country.dailyBudgetUSD,
        currency: country.currency.code,
        safety: country.safetyScore,
        crowd: 'Seasonal Varies',
        foodScore: '9.6 / 10',
        natureScore: '9.4 / 10',
        cultureScore: '9.8 / 10',
        transit: country.quickStats.drivingSide + ' Side Driving',
        weather: country.bestMonths.join(', '),
        visa: country.visaDifficulty,
        bestFor: country.bestFor.slice(0, 3).join(', '),
        pros: country.pros.slice(0, 2),
        cons: country.cons.slice(0, 2)
      };
    }

    const dest = ALL_DESTINATIONS.find(d => d.id === id);
    if (dest) {
      return {
        type: 'destination' as const,
        id: dest.id,
        name: dest.name,
        flag: dest.countryFlag,
        image: dest.heroImage,
        score: dest.rating * 2, // normalized
        budget: dest.dailyBudgetUSD,
        currency: 'USD (Converted)',
        safety: dest.safetyScore,
        crowd: dest.crowdLevel,
        foodScore: '9.5 / 10',
        natureScore: '9.2 / 10',
        cultureScore: '9.7 / 10',
        transit: dest.gettingAround[0]?.mode || 'Transit',
        weather: dest.bestTimeToVisit,
        visa: 'Check Country Visa',
        bestFor: dest.category,
        pros: dest.whyVisit.slice(0, 2),
        cons: dest.whyYouMightSkip.slice(0, 2)
      };
    }

    return null;
  }).filter(Boolean);

  const availableOptions = [
    ...ALL_COUNTRIES.map(c => ({ id: c.id, name: c.name, type: 'Country', flag: c.flag })),
    ...ALL_DESTINATIONS.map(d => ({ id: d.id, name: d.name, type: 'Destination', flag: d.countryFlag }))
  ].filter(opt => !compareIds.includes(opt.id));

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 mb-2">
            <Scale className="w-3.5 h-3.5" />
            <span>Comparison Matrix ({items.length}/4 items)</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
            Compare Destinations & Countries
          </h1>
          <p className="text-xs md:text-sm text-stone-500 mt-1">
            Analyze costs, safety, crowd pressure, gastronomy, and transit side-by-side to make confident decisions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {compareIds.length < 4 && (
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow-xs transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Item</span>
            </button>
          )}

          {compareIds.length > 0 && (
            <button
              onClick={clearCompare}
              className="px-3.5 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600 text-xs font-semibold transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Comparison Grid */}
      {items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto">
            <Scale className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">No Items in Comparison</h3>
          <p className="text-xs text-stone-500 font-light">
            Click the "Compare" button on any Country or Destination card to evaluate them side-by-side.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-2.5 bg-brand-500 text-white rounded-xl text-xs font-bold hover:bg-brand-600 transition-colors"
          >
            Add an Item to Compare
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-3xl border border-stone-200 shadow-2xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50/50">
                <th className="p-4 font-bold text-stone-400 uppercase tracking-wider w-44">Metric</th>
                {items.map(item => (
                  <th key={item!.id} className="p-4 min-w-[240px]">
                    <div className="space-y-3">
                      <div className="relative h-28 rounded-2xl overflow-hidden bg-stone-100">
                        <img src={item!.image} alt={item!.name} className="w-full h-full object-cover" />
                        <button
                          onClick={() => removeFromCompare(item!.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                          title="Remove from compare"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-stone-400">
                            <span>{item!.flag}</span>
                            <span>{item!.type.toUpperCase()}</span>
                          </div>
                          <h4 className="font-serif font-bold text-base text-stone-900 leading-snug">{item!.name}</h4>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate(item!.type === 'country' ? `/countries/${item!.id}` : `/destinations/${item!.id}`)}
                        className="w-full py-1.5 bg-stone-100 hover:bg-brand-50 hover:text-brand-700 text-stone-700 rounded-xl text-[11px] font-bold border border-stone-200 transition-colors"
                      >
                        View Full Details →
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Overall Travel Score</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 font-bold text-amber-700 text-sm">
                    ⭐ {i!.score.toFixed(1)} / 10
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Daily Starting Budget</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 font-bold text-stone-900 text-sm">
                    <PriceDisplay amountUSD={i!.budget} /> / day
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Public Safety Score</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 font-semibold text-emerald-700">
                    🛡️ {i!.safety} / 10
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Crowd Pressure</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 font-medium text-stone-700">
                    {i!.crowd}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Gastronomy & Food</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 font-medium text-stone-700">
                    {i!.foodScore}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Transit & Getting Around</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 font-medium text-stone-600">
                    {i!.transit}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Best Months / Climate</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 font-medium text-stone-700">
                    {i!.weather}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Visa Ease</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 font-medium text-stone-600">
                    {i!.visa}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Top Advantages</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 space-y-1">
                    {i!.pros.map((p, idx) => (
                      <p key={idx} className="text-emerald-700 flex items-start gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </p>
                    ))}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-stone-500 bg-stone-50/30">Things to Watch Out For</td>
                {items.map(i => (
                  <td key={i!.id} className="p-4 space-y-1">
                    {i!.cons.map((c, idx) => (
                      <p key={idx} className="text-amber-700 flex items-start gap-1">
                        <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </p>
                    ))}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-3xl shadow-floating w-full max-w-md p-6 space-y-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <h3 className="font-serif text-lg font-bold text-stone-900">Add Item to Compare</h3>
              <button onClick={() => setShowAddModal(false)} className="text-stone-400 hover:text-stone-700 text-sm">✕</button>
            </div>
            <p className="text-xs text-stone-500">Select any country or destination to compare up to 4 items:</p>
            <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
              {availableOptions.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => {
                    addToCompare(opt.id);
                    setShowAddModal(false);
                  }}
                  className="w-full p-2.5 rounded-xl border border-stone-200 hover:border-brand-500 hover:bg-brand-50/50 flex items-center justify-between transition-colors text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{opt.flag}</span>
                    <div>
                      <h4 className="font-bold text-xs text-stone-900">{opt.name}</h4>
                      <span className="text-[10px] text-stone-400">{opt.type}</span>
                    </div>
                  </div>
                  <Plus className="w-4 h-4 text-brand-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
