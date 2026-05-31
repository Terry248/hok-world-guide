import type { RegionDetail, ChestType } from '@/types';
import { SectionHeading } from '@/components/shared/section-heading';
import { Badge } from '@/components/shared/badge';
import { MapPin, Gem, Package, Mountain, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RegionDetailContentProps {
  region: RegionDetail;
}

const chestColors: Record<ChestType, string> = {
  '普通': 'text-gray-400',
  '精致': 'text-green-400',
  '珍贵': 'text-blue-400',
  '华丽': 'text-amber-400',
};

export function RegionDetailContent({ region }: RegionDetailContentProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h1 className="text-2xl font-bold mb-2">{region.name}</h1>
        <p className="text-text-muted">{region.description}</p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Badge label={`地点 × ${region.locations.length}`} />
          <Badge label={`宝箱 × ${region.chests.length}`} />
          <Badge label={`传送点 × ${region.waypoints.length}`} />
          <Badge label={`收集品 × ${region.collectibles.length}`} />
        </div>
      </div>

      {/* 世界观关联 */}
      <div className="bg-card rounded-xl border border-primary/20 p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Globe className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium text-sm">王者大陆位置</h3>
          <p className="text-sm text-text-muted mt-1">
            {region.name}位于王者大陆<strong>「逐鹿」</strong>区域，属于稷下学院周边地带。
            在<a href="/world" className="text-primary hover:underline">世界观</a>中可查看王者大陆全貌。
          </p>
        </div>
      </div>

      {/* Locations */}
      <section>
        <SectionHeading title="区域地点" icon={<Mountain className="w-5 h-5" />} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {region.locations.map((loc) => (
            <div key={loc.id} className="bg-card rounded-xl border border-border overflow-hidden group">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{loc.name}</h3>
                <p className="text-sm text-text-muted">{loc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waypoints */}
      <section>
        <SectionHeading title="传送点" icon={<MapPin className="w-5 h-5" />} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {region.waypoints.map((wp) => (
            <div key={wp.id} className="bg-card rounded-lg p-3 border border-border">
              <p className="font-medium text-sm">{wp.name}</p>
              <p className="text-xs text-text-muted">{wp.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chests */}
      <section>
        <SectionHeading title="宝箱" icon={<Gem className="w-5 h-5" />} />
        <div className="space-y-3">
          {region.chests.map((chest) => (
            <div key={chest.id} className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-1">
                <span className={cn('font-bold text-sm', chestColors[chest.type])}>
                  {chest.type}宝箱
                </span>
              </div>
              <p className="text-sm text-text-muted">{chest.location}</p>
              {chest.puzzle && (
                <div className="mt-2 text-xs bg-background p-2 rounded">
                  <span className="text-text-muted">解谜提示：</span>{chest.puzzle}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Collectibles */}
      <section>
        <SectionHeading title="收集品" icon={<Package className="w-5 h-5" />} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {region.collectibles.map((c, i) => (
            <div key={i} className="bg-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm">{c.name}</p>
                <span className="text-primary font-bold">×{c.count}</span>
              </div>
              <ul className="text-xs text-text-muted mt-1 space-y-0.5">
                {c.locations.map((loc, j) => (
                  <li key={j}>• {loc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
