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
        'relative h-36 overflow-hidden flex items-center justify-center',
        'bg-gradient-to-br from-slate-800 to-slate-900'
      )}>
        {/* 武器图片 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={weapon.icon}
            alt={weapon.name}
            className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        {/* 渐变蒙层 */}
        <div className={cn(
          'absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'
        )} />
        {/* 底部类型标签 */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
          <WeaponTypeIcon type={weapon.type} className={cn('w-4 h-4', style.iconColor)} />
          <span className="text-xs text-white/80 font-medium">{weapon.type}</span>
        </div>
        {/* 稀有度标签 */}
        <div className="absolute top-2 right-2">
          <span className={cn(
            'text-[10px] px-1.5 py-0.5 rounded-full font-medium',
            weapon.rarity >= 5 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              : weapon.rarity >= 3 ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
              : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
          )}>
            {weapon.rarity}星
          </span>
        </div>
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
