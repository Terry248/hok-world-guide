import type { Weapon } from '@/types';
import { WeaponCard } from './weapon-card';

interface WeaponListProps {
  weapons: Weapon[];
}

export function WeaponList({ weapons }: WeaponListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {weapons.map((w) => (
        <WeaponCard key={w.id} weapon={w} />
      ))}
    </div>
  );
}
