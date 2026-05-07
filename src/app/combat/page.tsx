import { getCombatGuides } from '@/lib/guides';
import { GuideList } from '@/components/guides/guide-list';
import { SectionHeading } from '@/components/shared/section-heading';
import { Swords } from 'lucide-react';

export default function CombatPage() {
  const guides = getCombatGuides();

  return (
    <div>
      <div className="mb-8">
        <SectionHeading title="战斗攻略" icon={<Swords className="w-6 h-6" />} />
        <p className="text-text-muted mt-2">
          Boss打法、副本通关技巧、阵容搭配攻略
        </p>
      </div>
      <GuideList guides={guides} type="combat" />
    </div>
  );
}
