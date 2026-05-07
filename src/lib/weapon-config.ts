import type { WeaponType } from '@/types';

export const WEAPON_TYPE_STYLES: Record<WeaponType, {
  gradient: string;
  iconColor: string;
  borderColor: string;
  glow: string;
}> = {
  '剑': { gradient: 'from-blue-500/10 to-slate-500/5', iconColor: 'text-blue-400', borderColor: 'border-blue-500/20', glow: 'shadow-blue-500/10' },
  '弓': { gradient: 'from-emerald-500/10 to-green-500/5', iconColor: 'text-emerald-400', borderColor: 'border-emerald-500/20', glow: 'shadow-emerald-500/10' },
  '法杖': { gradient: 'from-purple-500/10 to-indigo-500/5', iconColor: 'text-purple-400', borderColor: 'border-purple-500/20', glow: 'shadow-purple-500/10' },
  '枪': { gradient: 'from-amber-500/10 to-yellow-500/5', iconColor: 'text-amber-400', borderColor: 'border-amber-500/20', glow: 'shadow-amber-500/10' },
  '锤': { gradient: 'from-red-500/10 to-orange-500/5', iconColor: 'text-red-400', borderColor: 'border-red-500/20', glow: 'shadow-red-500/10' },
  '盾': { gradient: 'from-cyan-500/10 to-teal-500/5', iconColor: 'text-cyan-400', borderColor: 'border-cyan-500/20', glow: 'shadow-cyan-500/10' },
  '双刀': { gradient: 'from-rose-500/10 to-pink-500/5', iconColor: 'text-rose-400', borderColor: 'border-rose-500/20', glow: 'shadow-rose-500/10' },
  '轮': { gradient: 'from-violet-500/10 to-fuchsia-500/5', iconColor: 'text-violet-400', borderColor: 'border-violet-500/20', glow: 'shadow-violet-500/10' },
  '斧': { gradient: 'from-orange-500/10 to-amber-500/5', iconColor: 'text-orange-400', borderColor: 'border-orange-500/20', glow: 'shadow-orange-500/10' },
};

export function getWeaponTypeStyle(type: WeaponType) {
  return WEAPON_TYPE_STYLES[type] || WEAPON_TYPE_STYLES['剑'];
}
