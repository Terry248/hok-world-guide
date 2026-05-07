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

  return (
    <div className="max-w-4xl mx-auto">
      <RegionDetailContent region={data} />
    </div>
  );
}
