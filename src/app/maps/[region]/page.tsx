import { getRegionById, getRegionIds } from '@/lib/maps';
import { notFound } from 'next/navigation';
import { RegionDetailContent } from '@/components/maps/region-detail-content';

export async function generateStaticParams() {
  return getRegionIds().map(id => ({ region: id }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const data = getRegionById(region);
  if (!data) return { title: '区域不存在' };
  return { title: data.name, description: data.description };
}

export default async function RegionDetailPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const data = getRegionById(region);
  if (!data) notFound();

  // 区域背景图映射
  const regionBgMap: Record<string, string> = {
    'region-jixia': '/images/maps/jixia-xueyuan.jpg',
    'region-fengyun': '/images/maps/fengyun-ye.jpg',
    'region-chunxi': '/images/maps/chunxi-mantan.jpg',
    'region-shuangyun': '/images/maps/shuangyun-zhen.jpg',
    'region-dixia': '/images/maps/dixia-shijie.jpg',
  };
  const bgImage = regionBgMap[region] || '/images/maps/jixia-xueyuan.jpg';

  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        <RegionDetailContent region={data} />
      </div>
    </div>
  );
}
