import { getCharacterById, getCharacterIds, getAllCharacters } from '@/lib/characters';
import { getCharacterOrigin } from '@/lib/world';
import { notFound } from 'next/navigation';
import { CharacterDetailHeader } from '@/components/characters/character-detail-header';
import { SkillList } from '@/components/characters/skill-list';
import { ConstellationList } from '@/components/characters/constellation-list';
import { BuildRecommendation } from '@/components/characters/build-recommendation';
import { MarkdownRenderer } from '@/components/guides/markdown-renderer';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollText, MapPin } from 'lucide-react';

export async function generateStaticParams() {
  return getCharacterIds().map(id => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const hero = getCharacterById(id);
  if (!hero) return { title: '角色不存在' };
  return {
    title: `${hero.name} - ${hero.title}`,
    description: `${hero.name}技能详解、出装推荐、命座解析`,
  };
}

export default async function CharacterDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const hero = getCharacterById(id);
  if (!hero) notFound();

  const allChars = getAllCharacters();

  return (
    <div className="relative">
      {/* 背景图 */}
      {hero.avatar && (
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${hero.avatar})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
          }}
        />
      )}
      <div className="relative z-10 max-w-4xl mx-auto">
        <CharacterDetailHeader character={hero} />
        <SkillList skills={hero.skills} />
        <ConstellationList constellations={hero.constellations} />
        <BuildRecommendation character={hero} allCharacters={allChars} />

        {/* 出身地 */}
        {(() => {
          const origin = getCharacterOrigin(hero.name);
          if (!origin) return null;
          return (
            <section className="mt-8">
              <div className="bg-card rounded-lg border border-border p-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <span className="text-text-muted">王者大陆出身地：</span>
                  <span className="font-medium">{origin.region} · {origin.city}</span>
                  <a
                    href="/world"
                    className="ml-2 text-xs text-primary hover:text-primary-hover"
                  >
                    查看世界观地图 →
                  </a>
                </div>
              </div>
            </section>
          );
        })()}

        <section className="mt-8">
          <SectionHeading title="背景故事" icon={<ScrollText className="w-5 h-5" />} />
          <div className="bg-card rounded-lg border border-border p-6">
            <p className="text-text-muted leading-relaxed">{hero.lore}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
