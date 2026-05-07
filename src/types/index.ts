export type Element = '火' | '水' | '风' | '雷' | '草' | '冰' | '岩' | '光' | '暗';
export type WeaponType = '剑' | '弓' | '法杖' | '枪' | '锤' | '盾' | '双刀' | '轮' | '斧';
export type CharacterRole = '输出' | '辅助' | '坦克' | '治疗' | '控制';
export type Rarity = 1 | 2 | 3 | 4 | 5;
export type QuestType = '主线' | '支线' | '活动' | '隐藏';
export type ChestType = '普通' | '精致' | '珍贵' | '华丽';

export interface Character {
  id: string;
  name: string;
  title: string;
  element: Element;
  weaponType: WeaponType;
  rarity: Rarity;
  role: CharacterRole;
  avatar: string;
}

export interface CharacterDetail extends Character {
  stats: Record<string, number>;
  skills: Skill[];
  constellations: Constellation[];
  recommendedWeapons: string[];
  recommendedTeams: string[][];
  ascensionMaterials: Material[];
  lore: string;
}

export interface Skill {
  name: string;
  type: '普攻' | '战技' | '终结技' | '天赋' | '秘技';
  description: string;
  multipliers?: number[];
}

export interface Constellation {
  level: number;
  name: string;
  description: string;
}

export interface Material {
  name: string;
  count: number;
}

export interface Weapon {
  id: string;
  name: string;
  type: WeaponType;
  rarity: Rarity;
  baseAtk: [number, number];
  subStat?: { name: string; values: [number, number] };
  passive?: { name: string; description: string; refineEffects: string[] };
  icon: string;
  description?: string;
  obtainMethod?: string;
}

export interface Region {
  id: string;
  name: string;
  description: string;
  coverImage: string;
}

export interface RegionDetail {
  id: string;
  name: string;
  description: string;
  chests: Chest[];
  waypoints: Waypoint[];
  collectibles: Collectible[];
}

export interface Chest {
  id: string;
  type: ChestType;
  location: string;
  puzzle?: string;
}

export interface Waypoint {
  id: string;
  name: string;
  location: string;
}

export interface Collectible {
  name: string;
  count: number;
  locations: string[];
}

export interface GuideMeta {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  coverImage?: string;
  excerpt: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  nav: { label: string; href: string }[];
}
