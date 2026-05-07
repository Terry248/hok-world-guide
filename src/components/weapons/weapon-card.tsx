import Link from 'next/link';
import type { Weapon } from '@/types';
import { RarityStars } from '@/components/shared/rarity-stars';
import { Badge } from '@/components/shared/badge';

interface WeaponCardProps {
  weapon: Weapon;
}

export function WeaponCard({ weapon }: WeaponCardProps) {
  return (
    <Link href={`/weapons/${weapon.id}`} className="group block bg-card rounded-xl border border-border p-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="text-3xl mb-3 opacity-50 group-hover:opacity-80 transition-opacity">⚔️</div>
      <h3 className="font-semibold text-sm mb-1">{weapon.name}</h3>
      <div className="flex items-center justify-between mt-2">
        <RarityStars rarity={weapon.rarity} size="sm" />
        <Badge label={weapon.type} className="text-xs" />
      </div>
      <p className="text-xs text-text-muted mt-2">ATK {weapon.baseAtk[0]} → {weapon.baseAtk[1]}</p>
    </Link>
  );
}
