import { searchAll } from '@/lib/search';
import { SearchResultsClient } from '@/components/search/search-results-client';
import { SectionHeading } from '@/components/shared/section-heading';
import { Search } from 'lucide-react';

export const metadata = {
  title: '全站搜索',
  description: '搜索角色、武器、地图、攻略等内容',
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() || '';
  const results = query ? searchAll(query) : [];

  const typeCount: Record<string, number> = {};
  results.forEach(r => {
    typeCount[r.type] = (typeCount[r.type] || 0) + 1;
  });

  return (
    <div className="relative">
      {/* 背景图 */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/home-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <SectionHeading title="全站搜索" icon={<Search className="w-6 h-6" />} />
          <p className="text-text-muted mt-2">
            搜索角色、武器、地图区域、攻略文章等全站内容
          </p>
        </div>

        <SearchResultsClient
          initialQuery={query}
          initialResults={results}
          typeCount={typeCount}
        />
      </div>
    </div>
  );
}
