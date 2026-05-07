import { getAllCharacters } from '@/lib/characters';
import { CharacterFilter } from '@/components/characters/character-filter';
import { SectionHeading } from '@/components/shared/section-heading';
import { Sword } from 'lucide-react';

export default function CharactersPage() {
  const characters = getAllCharacters();

  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/characters/dongfang-yao.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10">
      <div className="mb-8">
        <SectionHeading title="角色图鉴" icon={<Sword className="w-6 h-6" />} />
        <p className="text-text-muted mt-2">
          共 {characters.length} 名角色，点击卡片查看详情
        </p>
      </div>
      <CharacterFilter initialCharacters={characters} />
      </div>
    </div>
  );
}
