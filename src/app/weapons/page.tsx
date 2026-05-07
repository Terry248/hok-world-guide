import { getAllWeapons } from '@/lib/weapons';
import { SectionHeading } from '@/components/shared/section-heading';
import { Shield } from 'lucide-react';
import { WeaponFilter } from '@/components/weapons/weapon-filter';

export default function WeaponsPage() {
  const weapons = getAllWeapons();

  return (
    <div>
      <div className="mb-8">
        <SectionHeading title="武器大全" icon={<Shield className="w-6 h-6" />} />
        <p className="text-text-muted mt-2">
          共 {weapons.length} 件武器，按类型分类
        </p>
      </div>
      <WeaponFilter initialWeapons={weapons} />
    </div>
  );
}
