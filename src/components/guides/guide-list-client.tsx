'use client';

import { useState } from 'react';
import type { GuideMeta } from '@/types';
import { GuideCard } from './guide-card';
import { cn } from '@/lib/utils';

interface GuideListClientProps {
  guides: GuideMeta[];
  type?: 'quest' | 'combat' | 'guide';
}

export function GuideListClient({ guides, type = 'guide' }: GuideListClientProps) {
  const categories = Array.from(new Set(guides.map(g => g.category))).sort();
  const [activeCategory, setActiveCategory] = useState<string>('全部');

  const filtered = activeCategory === '全部'
    ? guides
    : guides.filter(g => g.category === activeCategory);

  if (guides.length === 0) {
    return <div className="text-center py-12 text-text-muted">暂无攻略文章</div>;
  }

  return (
    <div className="space-y-6">
      {/* 分类筛选 */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('全部')}
            className={cn(
              'px-3 py-1.5 rounded-full text-sm transition-colors border',
              activeCategory === '全部'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card text-text-muted border-border hover:border-primary/50'
            )}
          >
            全部 ({guides.length})
          </button>
          {categories.map(cat => {
            const count = guides.filter(g => g.category === cat).length;
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-sm transition-colors border',
                  active
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-text-muted border-border hover:border-primary/50'
                )}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* 统计 */}
      <p className="text-sm text-text-muted">
        共 {filtered.length} 篇攻略
        {activeCategory !== '全部' && `（${activeCategory}）`}
      </p>

      {/* 列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((g) => (
          <GuideCard key={g.slug} guide={g} type={type} />
        ))}
      </div>
    </div>
  );
}
