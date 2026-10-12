import React from 'react';
import { RankingTier } from '../../types';

interface BadgeTierProps {
  tier: RankingTier;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const BadgeTier: React.FC<BadgeTierProps> = ({ tier, size = 'md', showLabel = true }) => {
  const config = {
    hidden_gem: {
      label: 'Hidden Gem',
      icon: '💎',
      bg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      dot: 'bg-cyan-500'
    },
    underrated: {
      label: 'Underrated',
      icon: '🟢',
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dot: 'bg-emerald-500'
    },
    emerging: {
      label: 'Emerging',
      icon: '🟡',
      bg: 'bg-amber-50 text-amber-800 border-amber-200',
      dot: 'bg-amber-500'
    },
    popular: {
      label: 'Popular',
      icon: '🔴',
      bg: 'bg-rose-50 text-rose-800 border-rose-200',
      dot: 'bg-rose-500'
    },
    iconic: {
      label: 'Iconic',
      icon: '👑',
      bg: 'bg-yellow-50 text-yellow-900 border-yellow-300 font-semibold',
      dot: 'bg-yellow-500'
    },
    crowded: {
      label: 'Crowded',
      icon: '⚠️',
      bg: 'bg-orange-50 text-orange-800 border-orange-200',
      dot: 'bg-orange-500'
    }
  }[tier] || {
    label: tier,
    icon: '📍',
    bg: 'bg-stone-50 text-stone-700 border-stone-200',
    dot: 'bg-stone-400'
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2'
  }[size];

  return (
    <span className={`inline-flex items-center rounded-full border shadow-xs ${config.bg} ${sizeClasses} font-medium tracking-wide transition-colors`}>
      <span className="text-xs leading-none">{config.icon}</span>
      {showLabel && <span>{config.label}</span>}
    </span>
  );
};
