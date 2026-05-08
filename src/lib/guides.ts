import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { GuideMeta } from '@/types';

function getGuidesDir(type: 'quests' | 'combat' | 'guides') {
  return path.join(process.cwd(), 'src/data', type);
}

function parseGuides(dir: string): GuideMeta[] {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('._'));
  return files.map(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(content);
    return data as GuideMeta;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getQuests(): GuideMeta[] {
  return parseGuides(getGuidesDir('quests'));
}

export function getCombatGuides(): GuideMeta[] {
  return parseGuides(getGuidesDir('combat'));
}

export function getGuides(): GuideMeta[] {
  return parseGuides(getGuidesDir('guides'));
}

export function getGuideBySlug(slug: string, type: 'quests' | 'combat' | 'guides'): { meta: GuideMeta; content: string } | null {
  const dir = getGuidesDir(type);
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('._'));
  const file = files.find(f => {
    const { data } = matter(fs.readFileSync(path.join(dir, f), 'utf-8'));
    return (data as GuideMeta).slug === slug;
  });
  if (!file) return null;
  const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
  const { data, content } = matter(raw);
  return { meta: data as GuideMeta, content };
}

export function getAllSlugs(type: 'quests' | 'combat' | 'guides'): string[] {
  return parseGuides(getGuidesDir(type)).map(g => g.slug).filter((slug): slug is string => typeof slug === 'string' && slug.length > 0);
}
