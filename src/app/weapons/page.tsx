import { getAllWeapons } from '@/lib/weapons';
import { SectionHeading } from '@/components/shared/section-heading';
import { Shield } from 'lucide-react';
import { WeaponFilter } from '@/components/weapons/weapon-filter';

export default function WeaponsPage() {
  const weapons = getAllWeapons();

  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/media_tu_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10">
      <div className="mb-8">
        <SectionHeading title="武器大全" icon={<Shield className="w-6 h-6" />} />
        <p className="text-text-muted mt-2">
          共 {weapons.length} 件武器，按类型分类
        </p>
      </div>
      <WeaponFilter initialWeapons={weapons} />
      </div>
    </div>
  );
}
