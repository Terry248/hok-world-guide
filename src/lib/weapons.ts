import fs from 'fs';
import path from 'path';
import type { Weapon } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'src/data/weapons');

export function getAllWeapons(): Weapon[] {
  const data = fs.readFileSync(path.join(DATA_DIR, 'index.json'), 'utf-8');
  return JSON.parse(data);
}

export function getWeaponById(id: string): Weapon | null {
  const all = getAllWeapons();
  return all.find(w => w.id === id) || null;
}

export function getWeaponsByType(type: string): Weapon[] {
  return getAllWeapons().filter(w => w.type === type);
}

export function getWeaponIds(): string[] {
  return getAllWeapons().map(w => w.id);
}

export function getFeaturedWeapons(count: number = 6): Weapon[] {
  return getAllWeapons().filter(w => w.rarity >= 4).slice(0, count);
}
