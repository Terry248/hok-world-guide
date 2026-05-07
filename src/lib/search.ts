import { getAllCharacters, getCharacterById } from './characters';
import { getAllWeapons } from './weapons';
import { getAllRegions } from './maps';
import { getGuides, getQuests, getCombatGuides } from './guides';
import { multiFieldFuzzyMatch } from './fuzzy-search';

export type SearchResultType = '角色' | '武器' | '地图' | '地点' | '攻略';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  tags?: string[];
  score: number;
}

export function searchAll(query: string, limit?: number): SearchResult[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.trim();
  const results: SearchResult[] = [];

  // 1. 搜索角色
  const characters = getAllCharacters();
  for (const c of characters) {
    const detail = getCharacterById(c.id);
    const match = multiFieldFuzzyMatch(q, [
      { text: c.name, weight: 1.5 },
      { text: c.title, weight: 1.0 },
      { text: c.element, weight: 0.6 },
      { text: c.weaponType, weight: 0.6 },
      { text: c.role, weight: 0.6 },
      { text: detail?.lore || '', weight: 0.4 },
      { text: detail?.description || '', weight: 0.5 },
    ]);
    if (match) {
      results.push({
        id: c.id,
        type: '角色',
        title: c.name,
        subtitle: c.title,
        description: `${c.element} · ${c.weaponType} · ${c.role}`,
        href: `/characters/${c.id}`,
        tags: [c.element, c.role],
        score: match.score,
      });
    }
  }

  // 2. 搜索武器
  const weapons = getAllWeapons();
  for (const w of weapons) {
    const match = multiFieldFuzzyMatch(q, [
      { text: w.name, weight: 1.5 },
      { text: w.type, weight: 0.8 },
      { text: w.description || '', weight: 0.6 },
      { text: w.obtainMethod || '', weight: 0.4 },
    ]);
    if (match) {
      results.push({
        id: w.id,
        type: '武器',
        title: w.name,
        subtitle: `${'★'.repeat(w.rarity)} ${w.type}`,
        description: w.description || `${w.type}武器`,
        href: `/weapons/${w.id}`,
        tags: [w.type],
        score: match.score,
      });
    }
  }

  // 3. 搜索地图区域 & 子地点
  const regions = getAllRegions();
  for (const r of regions) {
    const regionMatch = multiFieldFuzzyMatch(q, [
      { text: r.name, weight: 1.5 },
      { text: r.description, weight: 0.6 },
    ]);
    if (regionMatch) {
      results.push({
        id: r.id,
        type: '地图',
        title: r.name,
        description: r.description,
        href: `/maps/${r.id}`,
        score: regionMatch.score,
      });
    }
    // 子地点
    if (r.locations) {
      for (const loc of r.locations) {
        const locMatch = multiFieldFuzzyMatch(q, [
          { text: loc.name, weight: 1.5 },
          { text: loc.description, weight: 0.6 },
          { text: r.name, weight: 0.3 },
        ]);
        if (locMatch) {
          results.push({
            id: loc.id,
            type: '地点',
            title: loc.name,
            subtitle: `所属：${r.name}`,
            description: loc.description,
            href: `/maps/${r.id}`,
            score: locMatch.score * 0.9, // 子地点稍微降权
          });
        }
      }
    }
  }

  // 4. 搜索攻略文章
  const allGuides = [
    ...getGuides().map(g => ({ ...g, type: '攻略' as const, href: `/quests/${g.slug}` })),
    ...getQuests().map(g => ({ ...g, type: '攻略' as const, href: `/quests/${g.slug}` })),
    ...getCombatGuides().map(g => ({ ...g, type: '攻略' as const, href: `/combat/${g.slug}` })),
  ];
  for (const g of allGuides) {
    const match = multiFieldFuzzyMatch(q, [
      { text: g.title, weight: 1.5 },
      { text: g.excerpt, weight: 0.7 },
      { text: g.category, weight: 0.5 },
      ...g.tags.map(tag => ({ text: tag, weight: 0.6 })),
    ]);
    if (match) {
      results.push({
        id: g.slug,
        type: '攻略',
        title: g.title,
        subtitle: g.category,
        description: g.excerpt,
        href: g.href,
        tags: g.tags,
        score: match.score,
      });
    }
  }

  // 按分数降序排序
  results.sort((a, b) => b.score - a.score);

  return limit ? results.slice(0, limit) : results;
}
