import type { Character } from '@/types';
import { CharacterCard } from './character-card';

interface CharacterGridProps {
  characters: Character[];
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {characters.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </div>
  );
}
