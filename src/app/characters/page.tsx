import { getAllCharacters } from '@/lib/characters';
import { CharacterFilter } from '@/components/characters/character-filter';
import { SectionHeading } from '@/components/shared/section-heading';
import { Sword } from 'lucide-react';

export default function CharactersPage() {
  const characters = getAllCharacters();

  return (
    <div>
      <div className="mb-8">
        <SectionHeading title="角色图鉴" icon={<Sword className="w-6 h-6" />} />
        <p className="text-text-muted mt-2">
          共 {characters.length} 名角色，点击卡片查看详情
        </p>
      </div>
      <CharacterFilter initialCharacters={characters} />
    </div>
  );
}
