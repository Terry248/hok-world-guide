'use client';

import type { WeaponType } from '@/types';
import {
  Sword, Target, Sparkles, Crosshair, Hammer, Shield, Swords, CircleDot, Axe,
} from 'lucide-react';

const ICON_MAP: Record<WeaponType, React.ComponentType<{ className?: string }>> = {
  '剑': Sword,
  '弓': Target,
  '法杖': Sparkles,
  '枪': Crosshair,
  '锤': Hammer,
  '盾': Shield,
  '双刀': Swords,
  '轮': CircleDot,
  '斧': Axe,
};

export function WeaponTypeIcon({ type, className = 'w-6 h-6' }: { type: WeaponType; className?: string }) {
  const Icon = ICON_MAP[type] || Sword;
  return <Icon className={className} />;
}
