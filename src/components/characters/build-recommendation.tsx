import type { Character, CharacterDetail } from '@/types';
import { SectionHeading } from '@/components/shared/section-heading';
import { Package, Users } from 'lucide-react';
import Link from 'next/link';

interface BuildRecommendationProps {
  character: CharacterDetail;
  allCharacters: Character[];
}

function CharacterNameById({ id, allCharacters }: { id: string; allCharacters: Character[] }) {
  const char = allCharacters.find(c => c.id === id);
  return char ? char.name : id;
}

export function BuildRecommendation({ character, allCharacters }: BuildRecommendationProps) {
  return (
    <div className="space-y-6">
      {/* Weapons */}
      <section>
        <SectionHeading title="推荐武器" icon={<Package className="w-5 h-5" />} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {character.recommendedWeapons.map((wpId, i) => (
            <div key={wpId} className="bg-card rounded-lg p-3 border border-border">
              <span className="text-xs text-text-muted">
                {i === 0 ? '⭐ 专属' : `T${i + 1}`}
              </span>
              <p className="font-medium text-sm mt-1">{wpId}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teams */}
      <section>
        <SectionHeading title="推荐配队" icon={<Users className="w-5 h-5" />} />
        <div className="space-y-3">
          {character.recommendedTeams.map((team, i) => (
            <div key={i} className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-text-muted mb-2">方案 {i + 1}</p>
              <div className="flex flex-wrap gap-3">
                {team.map((memberId) => (
                  <Link
                    key={memberId}
                    href={`/characters/${memberId}`}
                    className="bg-background px-3 py-2 rounded-lg text-sm hover:border-primary transition-colors border border-transparent"
                  >
                    <CharacterNameById id={memberId} allCharacters={allCharacters} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section>
        <SectionHeading title="突破材料" icon={<Package className="w-5 h-5" />} />
        <div className="flex flex-wrap gap-3">
          {character.ascensionMaterials.map((m, i) => (
            <div key={i} className="bg-card rounded-lg px-4 py-2 border border-border">
              <span className="text-sm">{m.name}</span>
              <span className="text-primary font-bold ml-2">×{m.count}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
