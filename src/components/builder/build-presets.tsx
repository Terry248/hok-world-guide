'use client';

import { useTeamStore } from '@/stores/team-store';
import type { Character } from '@/types';
import { Zap, Shield, Flame } from 'lucide-react';

const PRESETS = [
  {
    name: '星之队羁绊',
    ids: ['char-dongfangyao', 'char-xishi', 'char-sunbin', 'char-mengya'],
    desc: '激活星之队全队羁绊效果',
    icon: <Zap className="w-4 h-4" />,
  },
  {
    name: '北方阵线',
    ids: ['char-huamulan', 'char-kai', 'char-wangzhaojun', 'char-jialuo'],
    desc: '来自王者大陆北方的英雄集结',
    icon: <Shield className="w-4 h-4" />,
  },
  {
    name: '元素反应队',
    ids: ['char-yuanliu', 'char-mengya', 'char-wangzhaojun', 'char-dongfangyao'],
    desc: '多元素触发连锁反应',
    icon: <Flame className="w-4 h-4" />,
  },
];

export function BuildPresets({ characters }: { characters: Character[] }) {
  const { loadPreset } = useTeamStore();

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-sm text-text-muted">预设阵容</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {PRESETS.map((preset) => {
          const chars = preset.ids
            .map(id => characters.find(c => c.id === id))
            .filter(Boolean) as Character[];
          
          return (
            <button
              key={preset.name}
              onClick={() => loadPreset(chars)}
              className="bg-card border border-border rounded-lg p-3 text-left hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-primary">{preset.icon}</span>
                <p className="font-medium text-sm">{preset.name}</p>
              </div>
              <p className="text-xs text-text-muted mt-1">{preset.desc}</p>
              <p className="text-xs text-text-muted/60 mt-1">
                {chars.map(c => c.name).join(' · ')}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
