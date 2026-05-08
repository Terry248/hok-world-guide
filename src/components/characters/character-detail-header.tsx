import type { Character } from '@/types';
import { ElementIcon } from '@/components/shared/element-icon';
import { RarityStars } from '@/components/shared/rarity-stars';
import { Badge } from '@/components/shared/badge';
import { CharacterAvatarLightbox } from './character-avatar-lightbox';

interface CharacterDetailHeaderProps {
  character: Character;
}

export function CharacterDetailHeader({ character }: CharacterDetailHeaderProps) {
  return (
    <div className="relative bg-gradient-to-r from-card to-card-hover rounded-xl p-6 mb-8 border border-border overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Avatar - 点击打开全身像灯箱 */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl bg-background/50 flex items-center justify-center text-6xl border border-border flex-shrink-0 overflow-hidden">
          {character.avatar ? (
            <CharacterAvatarLightbox 
              src={character.avatar} 
              alt={character.name}
            />
          ) : (
            <span>🎭</span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start mb-2">
            <h1 className="text-2xl md:text-3xl font-bold">{character.name}</h1>
            <ElementIcon element={character.element} size={24} />
          </div>
          <p className="text-text-muted text-lg mb-3">{character.title}</p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
            <RarityStars rarity={character.rarity} size="md" />
            <Badge label={character.role} />
            <Badge label={character.weaponType + '器'} />
            <Badge label={character.element + '元素'} />
          </div>
          {character.description && (
            <p className="text-text-muted mt-2 max-w-2xl">{character.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
