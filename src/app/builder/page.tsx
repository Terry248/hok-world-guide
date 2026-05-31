import { getAllCharacters } from '@/lib/characters';
import { TeamSelectorClient } from '@/components/builder/team-selector-client';
import { SynergyDisplay } from '@/components/builder/synergy-display';
import { BuildPresets } from '@/components/builder/build-presets';
import { SectionHeading } from '@/components/shared/section-heading';
import { Users } from 'lucide-react';

export default function BuilderPage() {
  const characters = getAllCharacters();

  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/characters/kai.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10">
      <div className="mb-8">
        <SectionHeading title="配队模拟器" icon={<Users className="w-6 h-6" />} />
        <p className="text-text-muted mt-2">
          选择4名英雄组成队伍，查看羁绊效果和阵容搭配建议
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <BuildPresets characters={characters} />
          <TeamSelectorClient allCharacters={characters} />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <SynergyDisplay />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
