import { getCharacterById, getCharacterIds, getAllCharacters } from '@/lib/characters';
import { notFound } from 'next/navigation';
import { CharacterDetailHeader } from '@/components/characters/character-detail-header';
import { SkillList } from '@/components/characters/skill-list';
import { ConstellationList } from '@/components/characters/constellation-list';
import { BuildRecommendation } from '@/components/characters/build-recommendation';
import { MarkdownRenderer } from '@/components/guides/markdown-renderer';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollText } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto">
      <CharacterDetailHeader character={hero} />
      <SkillList skills={hero.skills} />
      <ConstellationList constellations={hero.constellations} />
      <BuildRecommendation character={hero} allCharacters={allChars} />

      <section className="mt-8">
        <SectionHeading title="背景故事" icon={<ScrollText className="w-5 h-5" />} />
        <div className="bg-card rounded-lg border border-border p-6">
          <p className="text-text-muted leading-relaxed">{hero.lore}</p>
        </div>
      </section>
    </div>
  );
}
