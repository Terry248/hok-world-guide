'use client';

import { useTeamStore } from '@/stores/team-store';
import { ElementIcon } from '@/components/shared/element-icon';
import { Badge } from '@/components/shared/badge';
import { Shield, Swords, Heart, Zap, Timer } from 'lucide-react';

export function SynergyDisplay() {
  const { team } = useTeamStore();
  const members = team.filter((m): m is NonNullable<typeof m> => m !== null);

  if (members.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-4 text-center text-text-muted text-sm">
        选择英雄后显示队伍羁绊效果
      </div>
    );
  }

  // Calculate synergies
  const elements = members.map(m => m.element);
  const roles = members.map(m => m.role);
  const uniqueElements = [...new Set(elements)];
  const uniqueRoles = [...new Set(roles)];

  const synergies: { name: string; description: string; active: boolean }[] = [];

  // Element synergies
  if (elements.filter(e => e === '雷').length >= 2) {
    synergies.push({ name: '雷霆共鸣', description: '全队雷元素伤害+20%', active: true });
  }
  if (elements.filter(e => e === '火').length >= 2) {
    synergies.push({ name: '烈焰交织', description: '全队火元素伤害+20%', active: true });
  }
  if (uniqueElements.length >= 3) {
    synergies.push({ name: '元素多样', description: '全队元素精通+30', active: true });
  }

  // Role synergies
  if (roles.includes('输出') && roles.includes('辅助') && roles.includes('治疗')) {
    synergies.push({ name: '完整阵容', description: '标准战阵，全属性+5%', active: true });
  }
  if (roles.filter(r => r === '输出').length >= 2) {
    synergies.push({ name: '双核输出', description: '主C攻击力+10%', active: true });
  }

  return (
    <div className="space-y-3">
      {synergies.length > 0 ? (
        synergies.map((syn, i) => (
          <div key={i} className="bg-card rounded-lg p-3 border border-primary/30">
            <span className="text-primary font-medium text-sm">{syn.name}</span>
            <p className="text-xs text-text-muted mt-1">{syn.description}</p>
          </div>
        ))
      ) : (
        <div className="text-center text-text-muted text-sm py-4">
          尝试不同组合解锁羁绊效果
        </div>
      )}

      {/* Team Stats Summary */}
      <div className="mt-4 border-t border-border pt-4">
        <h4 className="font-medium mb-2">队伍属性概览</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {members.map((m) => (
            <div key={m!.id} className="flex items-center gap-2 bg-background p-2 rounded">
              <ElementIcon element={m!.element} size={14} />
              <span className="text-xs">{m!.name}</span>
              <Badge label={m!.role} className="ml-auto text-xs" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
