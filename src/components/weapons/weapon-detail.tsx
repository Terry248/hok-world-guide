import type { Weapon } from '@/types';
import { RarityStars } from '@/components/shared/rarity-stars';
import { Badge } from '@/components/shared/badge';
import { SectionHeading } from '@/components/shared/section-heading';
import { Sword } from 'lucide-react';
import { WeaponTypeIcon } from './weapon-type-icon';
import { getWeaponTypeStyle } from '@/lib/weapon-config';
import { cn } from '@/lib/utils';

interface WeaponDetailProps {
  weapon: Weapon;
}

export function WeaponDetail({ weapon }: WeaponDetailProps) {
  const style = getWeaponTypeStyle(weapon.type);
  const isHighRarity = weapon.rarity >= 4;

  return (
    <div className="space-y-6">
      {/* 主卡片 */}
      <div className={cn(
        'bg-card rounded-xl border p-6',
        style.borderColor,
        isHighRarity && 'ring-1 ring-inset'
      )}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* 图标 */}
          <div className={cn(
            'w-28 h-28 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br',
            style.gradient,
            isHighRarity && `ring-1 ${style.borderColor}`
          )}>
            <div className={cn(
              'w-16 h-16 rounded-xl bg-background/60 backdrop-blur-sm border flex items-center justify-center',
              style.borderColor
            )}>
              <WeaponTypeIcon type={weapon.type} className={cn('w-9 h-9', style.iconColor)} />
            </div>
          </div>

          {/* 信息 */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1">{weapon.name}</h1>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <RarityStars rarity={weapon.rarity} size="md" />
              <Badge label={weapon.type} />
              {weapon.obtainMethod && (
                <span className="text-xs text-text-muted">{weapon.obtainMethod}</span>
              )}
            </div>

            {weapon.description && (
              <p className="text-sm text-text-muted mb-4">{weapon.description}</p>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-background/50 rounded-lg p-3 border border-border">
                <span className="text-text-muted text-xs">基础攻击</span>
                <p className="font-bold text-primary">{weapon.baseAtk[0]} → {weapon.baseAtk[1]}</p>
              </div>
              {weapon.subStat && (
                <div className="bg-background/50 rounded-lg p-3 border border-border">
                  <span className="text-text-muted text-xs">{weapon.subStat.name}</span>
                  <p className="font-bold">{weapon.subStat.values[0]}% → {weapon.subStat.values[1]}%</p>
                </div>
              )}
              <div className="bg-background/50 rounded-lg p-3 border border-border">
                <span className="text-text-muted text-xs">武器类型</span>
                <p className="font-bold flex items-center gap-1">
                  <WeaponTypeIcon type={weapon.type} className={cn('w-3.5 h-3.5', style.iconColor)} />
                  {weapon.type}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Passive */}
        {weapon.passive && (
          <div className="mt-6 border-t border-border pt-4">
            <SectionHeading title={weapon.passive.name} icon={<Sword className="w-5 h-5" />} />
            <p className="text-text-muted text-sm">{weapon.passive.description}</p>
            <div className="mt-3">
              <span className="text-xs text-text-muted">精炼效果：</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {weapon.passive.refineEffects.map((e, i) => (
                  <span key={i} className="text-xs bg-background px-2 py-1 rounded border border-border">
                    {i + 1}阶: {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
