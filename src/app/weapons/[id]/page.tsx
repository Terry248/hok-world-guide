import { getWeaponById, getWeaponIds } from '@/lib/weapons';
import { notFound } from 'next/navigation';
import { WeaponDetail } from '@/components/weapons/weapon-detail';

export async function generateStaticParams() {
  return getWeaponIds().map(id => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const weapon = getWeaponById(id);
  if (!weapon) return { title: '武器不存在' };
  return {
    title: weapon.name,
    description: `${weapon.name} 属性详情 - ${weapon.type} ${weapon.rarity}星`,
  };
}

export default async function WeaponDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const weapon = getWeaponById(id);
  if (!weapon) notFound();

  return (
    <div className="max-w-3xl mx-auto">
      <WeaponDetail weapon={weapon} />
    </div>
  );
}
