import fs from 'fs';
import path from 'path';
import type { Character, CharacterDetail } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'src/data/characters');

export function getAllCharacters(): Character[] {
  const data = fs.readFileSync(path.join(DATA_DIR, 'index.json'), 'utf-8');
  return JSON.parse(data);
}

export function getCharacterById(id: string): CharacterDetail | null {
  const filePath = path.join(DATA_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function getCharacterIds(): string[] {
  return getAllCharacters().map(c => c.id);
}

export function getFeaturedCharacters(count: number = 6): Character[] {
  return getAllCharacters().slice(0, count);
}
