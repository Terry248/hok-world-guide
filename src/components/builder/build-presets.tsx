'use client';

import { useTeamStore } from '@/stores/team-store';

const PRESETS = [
  {
    name: '感电爆发队',
    ids: ['char-001', 'char-002', 'char-004', 'char-006'],
  },
  {
    name: '纯雷速通队',
    ids: ['char-001', 'char-007', 'char-004', 'char-006'],
  },
  {
    name: '双核控制队',
    ids: ['char-005', 'char-002', 'char-003', 'char-006'],
  },
];

export function BuildPresets({ characters }: { characters: any[] }) {
  const { loadPreset } = useTeamStore();

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-sm text-text-muted">预设阵容</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            onClick={() => {
              const chars = preset.ids
                .map(id => characters.find(c => c.id === id))
                .filter(Boolean);
              loadPreset(chars);
            }}
            className="bg-card border border-border rounded-lg p-3 text-left hover:border-primary transition-colors"
          >
            <p className="font-medium text-sm">{preset.name}</p>
            <p className="text-xs text-text-muted mt-1">
              {preset.ids.map(id => characters.find(c => c.id === id)?.name).filter(Boolean).join(' · ')}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
