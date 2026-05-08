import Link from 'next/link';
import type { Character } from '@/types';
import { RarityStars } from '@/components/shared/rarity-stars';
import { ElementIcon } from '@/components/shared/element-icon';
import { Badge } from '@/components/shared/badge';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={`/characters/${character.id}`} className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-slide-up">
      <div className="aspect-[4/3] bg-gradient-to-b from-card-hover to-card flex items-center justify-center overflow-hidden">
        {character.avatar ? (
          <img 
            src={character.avatar.replace('/images/characters/', '/images/characters/thumbs/')} 
            alt={character.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">🎭</div>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <ElementIcon element={character.element} size={16} />
          <h3 className="font-semibold text-sm truncate">{character.name}</h3>
        </div>
        <p className="text-xs text-text-muted truncate mb-2">{character.title}</p>
        <div className="flex items-center justify-between">
          <RarityStars rarity={character.rarity} size="sm" />
          <Badge label={character.role} className="text-xs" />
        </div>
      </div>
    </Link>
  );
}
