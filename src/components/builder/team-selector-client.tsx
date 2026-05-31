'use client';

import Image from 'next/image';
import { useTeamStore } from '@/stores/team-store';
import type { Character } from '@/types';
import { ElementIcon } from '@/components/shared/element-icon';
import { X, Plus, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function TeamSelectorClient({ allCharacters }: { allCharacters: Character[] }) {
  const { team, setMember, clearTeam } = useTeamStore();
  const [search, setSearch] = useState('');
  const [pickerIndex, setPickerIndex] = useState<number | null>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const filtered = allCharacters.filter(c =>
    !search || c.name.includes(search) || c.title.includes(search)
  );

  // 点击外部关闭选择器
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setPickerIndex(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-4">
      {/* 队伍格子 */}
      <div className="grid grid-cols-4 gap-3">
        {team.map((member, index) => (
          <div 
            key={index} 
            onClick={() => setPickerIndex(index)}
            className="relative bg-card rounded-xl border-2 border-border overflow-hidden cursor-pointer hover:border-primary transition-colors"
            style={{ aspectRatio: '3/4' }}
          >
            {member ? (
              <>
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="25vw"
                  className="w-full h-full object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="font-medium text-sm text-white truncate">{member.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <ElementIcon element={member.element} size={12} />
                    <span className="text-xs text-white/80">{member.role}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setMember(index, null); }}
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center text-xs hover:bg-red-500 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-text-muted">
                <Plus className="w-8 h-8 mb-1 opacity-50" />
                <span className="text-xs">点击选择</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 角色选择器 */}
      {pickerIndex !== null && (
        <div ref={pickerRef} className="bg-card rounded-xl border border-border p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">选择第{pickerIndex + 1}位英雄</h3>
            <button 
              onClick={() => setPickerIndex(null)}
              className="text-text-muted hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="搜索英雄..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary"
              autoFocus
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-64 overflow-y-auto">
            {filtered.map((char) => (
              <button
                key={char.id}
                onClick={() => {
                  setMember(pickerIndex, char);
                  setPickerIndex(null);
                  setSearch('');
                }}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-card-hover border border-transparent hover:border-border transition-colors text-left"
              >
                <Image
                  src={char.avatar}
                  alt={char.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg object-cover object-[center_15%] flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{char.name}</p>
                  <div className="flex items-center gap-1">
                    <ElementIcon element={char.element} size={10} />
                    <span className="text-xs text-text-muted">{char.role}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {team.some(m => m !== null) && (
        <button 
          onClick={clearTeam} 
          className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:bg-card-hover transition-colors"
        >
          清空队伍
        </button>
      )}
    </div>
  );
}
