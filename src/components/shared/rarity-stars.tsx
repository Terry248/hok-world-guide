import { Star } from 'lucide-react';
import type { Rarity } from '@/types';
import { cn } from '@/lib/utils';

interface RarityStarsProps {
  rarity: Rarity;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-5 h-5' };

export function RarityStars({ rarity, size = 'md', className = '' }: RarityStarsProps) {
  return (
    <div className={cn('flex gap-0.5', className)}>
      {Array.from({ length: rarity }).map((_, i) => (
        <Star key={i} className={cn(sizes[size], 'fill-primary text-primary')} />
      ))}
    </div>
  );
}
