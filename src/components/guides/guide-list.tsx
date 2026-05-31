import type { GuideMeta } from '@/types';
import { GuideCard } from './guide-card';

interface GuideListProps {
  guides: GuideMeta[];
  type?: 'quest' | 'combat' | 'guide';
}

export function GuideList({ guides, type = 'guide' }: GuideListProps) {
  if (guides.length === 0) {
    return <div className="text-center py-12 text-text-muted">暂无攻略文章</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {guides.map((g) => (
        <GuideCard key={g.slug} guide={g} type={type} />
      ))}
    </div>
  );
}
