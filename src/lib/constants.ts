import type { Element, CharacterRole, WeaponType, Rarity } from '@/types';

export const ELEMENTS: Element[] = ['火', '水', '风', '雷', '草', '冰', '岩', '光', '暗'];

export const ELEMENT_COLORS: Record<Element, string> = {
  '火': 'text-red-500',
  '水': 'text-blue-500',
  '风': 'text-green-500',
  '雷': 'text-purple-500',
  '草': 'text-emerald-500',
  '冰': 'text-cyan-500',
  '岩': 'text-amber-500',
  '光': 'text-yellow-400',
  '暗': 'text-gray-400',
};

export const ROLES: CharacterRole[] = ['输出', '辅助', '坦克', '治疗', '控制'];

export const WEAPON_TYPES: WeaponType[] = ['剑', '弓', '法杖', '枪', '锤', '盾', '双刀'];

export const RARITIES: Rarity[] = [1, 2, 3, 4, 5];

export const CHEST_TYPES = ['普通', '精致', '珍贵', '华丽'] as const;

export const QUEST_TYPES = ['主线', '支线', '活动', '隐藏'] as const;

export const SITE_CONFIG = {
  title: '王者荣耀世界攻略站',
  description: '最全王者荣耀世界游戏攻略',
  nav: [
    { label: '首页', href: '/' },
    { label: '新手指南', href: '/beginner' },
    { label: '角色图鉴', href: '/characters' },
    { label: '武器大全', href: '/weapons' },
    { label: '地图探索', href: '/maps' },
    { label: '世界观', href: '/world' },
    { label: '任务攻略', href: '/quests' },
    { label: '战斗攻略', href: '/combat' },
    { label: '配队模拟', href: '/builder' },
  ],
};
