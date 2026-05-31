import Link from 'next/link';
import type { Weapon } from '@/types';
import { RarityStars } from '@/components/shared/rarity-stars';
import { Badge } from '@/components/shared/badge';
import { WeaponTypeIcon } from './weapon-type-icon';
import { getWeaponTypeStyle } from '@/lib/weapon-config';
import { cn } from '@/lib/utils';

interface WeaponCardProps {
  weapon: Weapon;
}

export function WeaponCard({ weapon }: WeaponCardProps) {
  const style = getWeaponTypeStyle(weapon.type);
  const isHighRarity = weapon.rarity >= 4;

  return (
    <Link
      href={`/weapons/${weapon.id}`}
      className={cn(
        'group block bg-card rounded-xl border overflow-hidden transition-all duration-300',
        'hover:border-primary/50 hover:shadow-lg',
        isHighRarity && `hover:shadow-lg ${style.glow}`,
        style.borderColor
      )}
    >
      {/* 图标区域 */}
      <div className={cn(
        'relative h-28 flex items-center justify-center bg-gradient-to-br',
        style.gradient
      )}>
        <div className={cn(
          'w-14 h-14 rounded-2xl bg-background/60 backdrop-blur-sm border flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
          style.borderColor
        )}>
          <WeaponTypeIcon type={weapon.type} className={cn('w-7 h-7', style.iconColor)} />
        </div>
        {isHighRarity && (
          <div className="absolute top-2 right-2">
            <span className={cn(
              'text-[10px] px-1.5 py-0.5 rounded-full font-medium',
              weapon.rarity === 5 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
            )}>
              {weapon.rarity}星
            </span>
          </div>
        )}
      </div>

      {/* 信息区域 */}
      <div className="p-3">
        <h3 className="font-semibold text-sm mb-1 truncate group-hover:text-primary transition-colors">
          {weapon.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <RarityStars rarity={weapon.rarity} size="sm" />
          <Badge label={weapon.type} className="text-xs" />
        </div>
        <p className="text-xs text-text-muted mt-2">
          ATK {weapon.baseAtk[0]} → {weapon.baseAtk[1]}
        </p>
      </div>
    </Link>
  );
}
