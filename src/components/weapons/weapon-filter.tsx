'use client';

import { useState, useMemo } from 'react';
import type { Weapon, WeaponType } from '@/types';
import { WEAPON_TYPES } from '@/lib/constants';
import { WeaponList } from './weapon-list';
import { SearchInput } from '@/components/shared/search-input';

interface WeaponFilterProps {
  initialWeapons: Weapon[];
}

export function WeaponFilter({ initialWeapons }: WeaponFilterProps) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState<WeaponType | '全部'>('全部');

  const filtered = useMemo(() => {
    return initialWeapons.filter((w) => {
      const matchSearch = !search || w.name.includes(search);
      const matchType = type === '全部' || w.type === type;
      return matchSearch && matchType;
    });
  }, [initialWeapons, search, type]);

  return (
    <div>
      <div className="space-y-4 mb-6">
        <SearchInput placeholder="搜索武器名..." onSearch={setSearch} />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setType('全部')}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${type === '全部' ? 'bg-primary text-background font-medium' : 'bg-card text-text-muted hover:text-foreground'}`}
          >
            全部
          </button>
          {WEAPON_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${type === t ? 'bg-primary text-background font-medium' : 'bg-card text-text-muted hover:text-foreground'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="text-text-muted text-sm mb-4">共 {filtered.length} 件武器</p>
      {filtered.length > 0 ? (
        <WeaponList weapons={filtered} />
      ) : (
        <div className="text-center py-12 text-text-muted">没有找到匹配的武器</div>
      )}
    </div>
  );
}
