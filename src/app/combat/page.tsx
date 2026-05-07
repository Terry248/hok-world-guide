import { getCombatGuides } from '@/lib/guides';
import { GuideListClient } from '@/components/guides/guide-list-client';
import { SectionHeading } from '@/components/shared/section-heading';
import { Swords } from 'lucide-react';

export default function CombatPage() {
  const guides = getCombatGuides();

  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/media_v_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10">
        <div className="mb-8">
          <SectionHeading title="战斗攻略" icon={<Swords className="w-6 h-6" />} />
          <p className="text-text-muted mt-2">
            元素反应机制、角色培养、Boss打法与阵容搭配攻略
          </p>
        </div>
        <GuideListClient guides={guides} type="combat" />
      </div>
    </div>
  );
}
