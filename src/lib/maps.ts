import fs from 'fs';
import path from 'path';
import type { Region, RegionDetail } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'src/data/maps');

export function getAllRegions(): Region[] {
  const data = fs.readFileSync(path.join(DATA_DIR, 'regions.json'), 'utf-8');
  return JSON.parse(data);
}

export function getRegionById(id: string): RegionDetail | null {
  const filePath = path.join(DATA_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function getRegionIds(): string[] {
  return getAllRegions().map(r => r.id);
}
