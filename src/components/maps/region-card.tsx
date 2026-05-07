import Link from 'next/link';
import type { Region } from '@/types';
import { Badge } from '@/components/shared/badge';

interface RegionCardProps {
  region: Region;
}

export function RegionCard({ region }: RegionCardProps) {
  return (
    <Link href={`/maps/${region.id}`} className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="h-40 bg-gradient-to-b from-card-hover to-card flex items-center justify-center">
        <span className="text-4xl opacity-30 group-hover:opacity-60 transition-opacity">🗺️</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{region.name}</h3>
        <p className="text-sm text-text-muted line-clamp-2">{region.description}</p>
      </div>
    </Link>
  );
}
