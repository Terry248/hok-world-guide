import { getAllRegions } from '@/lib/maps';
import { RegionCard } from '@/components/maps/region-card';
import { SectionHeading } from '@/components/shared/section-heading';
import { Map } from 'lucide-react';

export default function MapsPage() {
  const regions = getAllRegions();

  return (
    <div>
      <div className="mb-8">
        <SectionHeading title="地图探索" icon={<Map className="w-6 h-6" />} />
        <p className="text-text-muted mt-2">
          共 {regions.length} 个探索区域，包含宝箱、传送点和收集品信息
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {regions.map((region) => (
          <RegionCard key={region.id} region={region} />
        ))}
      </div>
    </div>
  );
}
