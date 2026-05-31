import Link from 'next/link';
import type { GuideMeta } from '@/types';
import { Tag } from '@/components/shared/tag';
import { Badge } from '@/components/shared/badge';

interface GuideCardProps {
  guide: GuideMeta;
  type?: 'quest' | 'combat' | 'guide';
}

export function GuideCard({ guide, type = 'guide' }: GuideCardProps) {
  const typeMap = { quest: '/quests', combat: '/combat', guide: '/guides' };
  return (
    <Link href={`${typeMap[type]}/${guide.slug}`} className="group block bg-card rounded-xl border border-border p-4 hover:border-primary/50 transition-all hover:shadow-lg">
      <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">{guide.title}</h3>
      <p className="text-sm text-text-muted line-clamp-2 mb-3">{guide.excerpt}</p>
      <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
        <Badge label={guide.category} />
        {(guide.tags || []).slice(0, 3).map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
        <span className="ml-auto">{guide.date}</span>
      </div>
    </Link>
  );
}
