'use client';

import { useTeamStore } from '@/stores/team-store';
import type { Character } from '@/types';
import { ElementIcon } from '@/components/shared/element-icon';
import { X, Plus } from 'lucide-react';

export function TeamSelectorClient({ allCharacters }: { allCharacters: Character[] }) {
  const { team, setMember, clearTeam, search, setSearch, pickerOpen, setPickerOpen } = useTeamStore();

  const filtered = allCharacters.filter(c =>
    !search || c.name.includes(search) || c.title.includes(search)
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-3">
        {team.map((member, index) => (
          <div key={index} className="relative bg-card rounded-xl border-2 border-border p-3 text-center min-h-[100px] flex flex-col items-center justify-center">
            {member ? (
              <>
                <div className="text-2xl mb-1">🎭</div>
                <p className="font-medium text-sm">{member.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  <ElementIcon element={member.element} size={14} />
                  <span className="text-xs text-text-muted">{member.role}</span>
                </div>
                <button
                  onClick={() => setMember(index, null)}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-danger text-white flex items-center justify-center text-xs hover:bg-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </>
            ) : (
              <div className="text-text-muted text-xs">
                <Plus className="w-5 h-5 mx-auto mb-1" />
                空位
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="搜索英雄..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPickerOpen(true); }}
          onFocus={() => setPickerOpen(true)}
          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary"
        />
        {pickerOpen && filtered.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-xl max-h-60 overflow-y-auto z-50">
            {filtered.map((char) => (
              <button
                key={char.id}
                onClick={() => {
                  const emptyIndex = team.findIndex(m => m === null);
                  if (emptyIndex >= 0) {
                    setMember(emptyIndex, char);
                  }
                  setSearch('');
                  setPickerOpen(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-card-hover flex items-center gap-2"
              >
                <ElementIcon element={char.element} size={16} />
                <span>{char.name}</span>
                <span className="text-xs text-text-muted ml-auto">{char.role}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <button onClick={clearTeam} className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:bg-card-hover transition-colors">
        清空队伍
      </button>
    </div>
  );
}
