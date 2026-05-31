import Link from 'next/link';
import Image from 'next/image';
import type { Region } from '@/types';
import { Badge } from '@/components/shared/badge';

interface RegionCardProps {
  region: Region;
}

export function RegionCard({ region }: RegionCardProps) {
  return (
    <Link href={`/maps/${region.id}`} className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="relative h-40 bg-gradient-to-b from-card-hover to-card flex items-center justify-center overflow-hidden">
        {region.coverImage ? (
          <Image
            src={region.coverImage}
            alt={region.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-4xl opacity-30 group-hover:opacity-60 transition-opacity">🗺️</span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold group-hover:text-primary transition-colors">{region.name}</h3>
          {region.locations && region.locations.length > 0 && (
            <Badge label={`${region.locations.length}个地点`} className="text-xs" />
          )}
        </div>
        <p className="text-sm text-text-muted line-clamp-2">{region.description}</p>
      </div>
    </Link>
  );
}
