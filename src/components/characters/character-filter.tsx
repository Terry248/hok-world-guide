'use client';

import { useState, useMemo } from 'react';
import type { Character, Element, CharacterRole } from '@/types';
import { ELEMENTS, ROLES } from '@/lib/constants';
import { SearchInput } from '@/components/shared/search-input';
import { CharacterGrid } from './character-grid';

interface CharacterFilterProps {
  initialCharacters: Character[];
}

export function CharacterFilter({ initialCharacters }: CharacterFilterProps) {
  const [search, setSearch] = useState('');
  const [element, setElement] = useState<Element | '全部'>('全部');
  const [role, setRole] = useState<CharacterRole | '全部'>('全部');

  const filtered = useMemo(() => {
    return initialCharacters.filter((c) => {
      const matchSearch = !search || c.name.includes(search) || c.title.includes(search);
      const matchElement = element === '全部' || c.element === element;
      const matchRole = role === '全部' || c.role === role;
      return matchSearch && matchElement && matchRole;
    });
  }, [initialCharacters, search, element, role]);

  return (
    <div>
      {/* Filters */}
      <div className="space-y-4 mb-6">
        <SearchInput placeholder="搜索角色名或称号..." onSearch={setSearch} />

        {/* Element Filter */}
        <div>
          <span className="text-sm text-text-muted mb-2 block">元素</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setElement('全部')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${element === '全部' ? 'bg-primary text-background font-medium' : 'bg-card text-text-muted hover:text-foreground'}`}
            >
              全部
            </button>
            {ELEMENTS.map((e) => (
              <button
                key={e}
                onClick={() => setElement(e)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${element === e ? 'bg-primary text-background font-medium' : 'bg-card text-text-muted hover:text-foreground'}`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Role Filter */}
        <div>
          <span className="text-sm text-text-muted mb-2 block">职业</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setRole('全部')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${role === '全部' ? 'bg-secondary text-white font-medium' : 'bg-card text-text-muted hover:text-foreground'}`}
            >
              全部
            </button>
            {ROLES.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${role === r ? 'bg-secondary text-white font-medium' : 'bg-card text-text-muted hover:text-foreground'}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <p className="text-text-muted text-sm mb-4">
        共 {filtered.length} 名角色
      </p>
      {filtered.length > 0 ? (
        <CharacterGrid characters={filtered} />
      ) : (
        <div className="text-center py-12 text-text-muted">
          没有找到匹配的角色
        </div>
      )}
    </div>
  );
}
