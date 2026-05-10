import type { Metadata } from 'next';
import { getAllRegions } from '@/lib/maps';
import { RegionCard } from '@/components/maps/region-card';
import { SectionHeading } from '@/components/shared/section-heading';
import { Map } from 'lucide-react';

export const metadata: Metadata = {
  title: '地图探索',
  description: '王者荣耀世界五大区域地图探索指南，包含宝箱位置、传送点、收集品分布及子区域详细介绍',
};

export default function MapsPage() {
  const regions = getAllRegions();

  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/maps/jixia-xueyuan.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10">
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
    </div>
  );
}
