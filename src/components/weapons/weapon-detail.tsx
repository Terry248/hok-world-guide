import type { Weapon } from '@/types';
import { RarityStars } from '@/components/shared/rarity-stars';
import { Badge } from '@/components/shared/badge';
import { SectionHeading } from '@/components/shared/section-heading';
import { Sword } from 'lucide-react';

interface WeaponDetailProps {
  weapon: Weapon;
}

export function WeaponDetail({ weapon }: WeaponDetailProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-24 h-24 rounded-xl bg-background/50 flex items-center justify-center text-5xl flex-shrink-0">
          ⚔️
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-1">{weapon.name}</h1>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <RarityStars rarity={weapon.rarity} size="md" />
            <Badge label={weapon.type} />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-text-muted">基础攻击</span>
              <p className="font-bold text-primary">{weapon.baseAtk[0]} → {weapon.baseAtk[1]}</p>
            </div>
            {weapon.subStat && (
              <div>
                <span className="text-text-muted">{weapon.subStat.name}</span>
                <p className="font-bold">{weapon.subStat.values[0]}% → {weapon.subStat.values[1]}%</p>
              </div>
            )}
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
                <span key={i} className="text-xs bg-background px-2 py-1 rounded">{e}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
