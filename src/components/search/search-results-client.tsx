'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { SearchResult } from '@/lib/search';
import { Search, User, Sword, Map, MapPin, FileText } from 'lucide-react';
import { SearchAutocomplete } from './search-autocomplete';
import { cn } from '@/lib/utils';

const typeIcons: Record<string, React.ReactNode> = {
  '角色': <User className="w-4 h-4" />,
  '武器': <Sword className="w-4 h-4" />,
  '地图': <Map className="w-4 h-4" />,
  '地点': <MapPin className="w-4 h-4" />,
  '攻略': <FileText className="w-4 h-4" />,
};

const typeColors: Record<string, string> = {
  '角色': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  '武器': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  '地图': 'bg-green-500/20 text-green-400 border-green-500/30',
  '地点': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  '攻略': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

interface Props {
  initialQuery: string;
  initialResults: SearchResult[];
  typeCount: Record<string, number>;
}

export function SearchResultsClient({ initialQuery, initialResults, typeCount }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>('全部');

  const filters = ['全部', ...Object.keys(typeCount).sort()];

  const filtered = activeFilter === '全部'
    ? initialResults
    : initialResults.filter(r => r.type === activeFilter);

  return (
    <div className="space-y-6">
      {/* 搜索框（带预选） */}
      <SearchAutocomplete placeholder="输入关键词搜索..." size="lg" autoFocus />

      {/* 无搜索词提示 */}
      {!initialQuery && (
        <div className="text-center py-12 text-text-muted">
          <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>输入关键词开始搜索</p>
          <p className="text-sm mt-1 opacity-60">支持搜索角色名、武器、地图区域、攻略标题等</p>
        </div>
      )}

      {/* 有搜索词但无结果 */}
      {initialQuery && initialResults.length === 0 && (
        <div className="text-center py-12 text-text-muted">
          <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>未找到与 "{initialQuery}" 相关的内容</p>
          <p className="text-sm mt-1 opacity-60">尝试使用其他关键词</p>
        </div>
      )}

      {/* 筛选标签 + 结果 */}
      {initialResults.length > 0 && (
        <>
          {/* 筛选 */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => {
              const count = filter === '全部'
                ? initialResults.length
                : typeCount[filter] || 0;
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-sm transition-colors border',
                    active
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card text-text-muted border-border hover:border-primary/50'
                  )}
                >
                  {filter} ({count})
                </button>
              );
            })}
          </div>

          {/* 结果数量 */}
          <p className="text-sm text-text-muted">
            共找到 {filtered.length} 条结果
            {activeFilter !== '全部' && `（${activeFilter}）`}
          </p>

          {/* 结果列表 */}
          <div className="space-y-3">
            {filtered.map((result) => (
              <Link
                key={`${result.type}-${result.id}`}
                href={result.href}
                className="block bg-card rounded-xl border border-border p-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-3">
                  {/* 类型标签 */}
                  <div className={cn(
                    'flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border',
                    typeColors[result.type] || 'bg-card border-border'
                  )}>
                    {typeIcons[result.type] || <Search className="w-4 h-4" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold truncate">{result.title}</h3>
                      <span className={cn(
                        'text-xs px-1.5 py-0.5 rounded border flex-shrink-0',
                        typeColors[result.type] || 'bg-card border-border'
                      )}>
                        {result.type}
                      </span>
                    </div>
                    {result.subtitle && (
                      <p className="text-xs text-text-muted mb-1">{result.subtitle}</p>
                    )}
                    <p className="text-sm text-text-muted line-clamp-2">{result.description}</p>
                    {result.tags && result.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {result.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-background text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
