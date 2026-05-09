import { MetadataRoute } from 'next';
import { getAllCharacters } from '@/lib/characters';
import { getAllWeapons } from '@/lib/weapons';
import { getAllRegions } from '@/lib/maps';
import { getGuides, getQuests, getCombatGuides } from '@/lib/guides';

const BASE_URL = 'https://hok-world-guide.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const characters = getAllCharacters().map((c) => ({
    url: `${BASE_URL}/characters/${c.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const weapons = getAllWeapons().map((w) => ({
    url: `${BASE_URL}/weapons/${w.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const regions = getAllRegions().map((r) => ({
    url: `${BASE_URL}/maps/${r.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const guides = [...getGuides(), ...getQuests(), ...getCombatGuides()].map((g) => ({
    url: `${BASE_URL}/quests/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0 },
    { url: `${BASE_URL}/characters`, priority: 0.9 },
    { url: `${BASE_URL}/weapons`, priority: 0.9 },
    { url: `${BASE_URL}/maps`, priority: 0.9 },
    { url: `${BASE_URL}/world`, priority: 0.9 },
    { url: `${BASE_URL}/quests`, priority: 0.8 },
    { url: `${BASE_URL}/combat`, priority: 0.8 },
    { url: `${BASE_URL}/builder`, priority: 0.8 },
    { url: `${BASE_URL}/beginner`, priority: 0.9 },
    { url: `${BASE_URL}/about`, priority: 0.5 },
    { url: `${BASE_URL}/privacy`, priority: 0.5 },
    { url: `${BASE_URL}/disclaimer`, priority: 0.5 },
    { url: `${BASE_URL}/search`, priority: 0.7 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: p.url,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: p.priority,
    })),
    ...characters,
    ...weapons,
    ...regions,
    ...guides,
  ];
}
