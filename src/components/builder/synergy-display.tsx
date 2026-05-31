'use client';

import Image from 'next/image';
import { useTeamStore } from '@/stores/team-store';
import { ElementIcon } from '@/components/shared/element-icon';
import { Badge } from '@/components/shared/badge';
import { Zap, Shield, Users, Star, Flame, Snowflake, Wind, Sun, Moon, Sprout } from 'lucide-react';
import type { Element } from '@/types';

// 羁绊定义
const BONDS = {
  starTeam: {
    name: '星之队羁绊',
    members: ['char-dongfangyao', 'char-xishi', 'char-sunbin', 'char-mengya', 'char-lubanmaster'],
    levels: [
      { count: 2, effect: '星之队成员攻击力+10%' },
      { count: 3, effect: '星之队成员攻击力+15%，技能冷却-10%' },
      { count: 4, effect: '星之队成员攻击力+20%，技能冷却-15%，获得星辰护盾' },
      { count: 5, effect: '星之队全员觉醒：攻击力+30%，技能冷却-20%，星辰护盾强化' },
    ],
    icon: <Star className="w-4 h-4" />,
  },
  greatWall: {
    name: '长城守卫军',
    members: ['char-huamulan', 'char-kai'],
    levels: [
      { count: 2, effect: '长城守卫军防御力+20%，受到伤害-10%' },
    ],
    icon: <Shield className="w-4 h-4" />,
  },
  jixia: {
    name: '稷下学院',
    members: ['char-yuanliu', 'char-lengchun'],
    levels: [
      { count: 2, effect: '稷下学院成员元素精通+40' },
    ],
    icon: <Users className="w-4 h-4" />,
  },
};

// 元素共鸣定义
const ELEMENT_SYNERGIES: Record<string, { name: string; effect: string; icon: React.ReactNode; minCount: number }> = {
  '火': { name: '烈焰共鸣', effect: '全队攻击力+15%', icon: <Flame className="w-4 h-4" />, minCount: 2 },
  '冰': { name: '冰霜共鸣', effect: '全队暴击率+10%', icon: <Snowflake className="w-4 h-4" />, minCount: 2 },
  '雷': { name: '雷霆共鸣', effect: '全队技能伤害+15%', icon: <Zap className="w-4 h-4" />, minCount: 2 },
  '风': { name: '疾风共鸣', effect: '全队移动速度+15%', icon: <Wind className="w-4 h-4" />, minCount: 2 },
  '光': { name: '圣光共鸣', effect: '全队治疗效果+20%', icon: <Sun className="w-4 h-4" />, minCount: 2 },
  '暗': { name: '暗影共鸣', effect: '全队暴击伤害+20%', icon: <Moon className="w-4 h-4" />, minCount: 2 },
  '草': { name: '生机共鸣', effect: '全队生命恢复+15%', icon: <Sprout className="w-4 h-4" />, minCount: 2 },
};

function isElement(value: string): value is Element {
  return value in ELEMENT_SYNERGIES;
}

export function SynergyDisplay() {
  const { team } = useTeamStore();
  const members = team.filter((m): m is NonNullable<typeof m> => m !== null);

  if (members.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-6 text-center text-text-muted text-sm">
        <Users className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p>选择英雄后显示队伍羁绊效果</p>
        <p className="text-xs mt-1 opacity-60">推荐选择4名英雄组成完整队伍</p>
      </div>
    );
  }

  // 计算羁绊
  const activeBonds: { name: string; effect: string; icon: React.ReactNode; level: number; maxLevel: number }[] = [];
  
  Object.values(BONDS).forEach(bond => {
    const count = members.filter(m => bond.members.includes(m.id)).length;
    if (count >= 2) {
      const levelIndex = Math.min(count - 2, bond.levels.length - 1);
      activeBonds.push({
        name: bond.name,
        effect: bond.levels[levelIndex].effect,
        icon: bond.icon,
        level: count,
        maxLevel: bond.members.length,
      });
    }
  });

  // 计算元素共鸣
  const elementCounts: Record<string, number> = {};
  members.forEach(m => {
    elementCounts[m.element] = (elementCounts[m.element] || 0) + 1;
  });

  const activeElements = Object.entries(elementCounts)
    .filter(([element, count]) => count >= (ELEMENT_SYNERGIES[element]?.minCount || 99))
    .map(([element, count]) => ({
      element,
      count,
      ...ELEMENT_SYNERGIES[element],
    }));

  // 角色定位分析
  const roleCounts: Record<string, number> = {};
  members.forEach(m => {
    roleCounts[m.role] = (roleCounts[m.role] || 0) + 1;
  });

  // 生成建议
  const suggestions: string[] = [];
  if (members.length < 4) {
    suggestions.push(`还需选择 ${4 - members.length} 名英雄组成完整队伍`);
  }
  if (!roleCounts['辅助']) {
    suggestions.push('缺少辅助角色，建议添加一名辅助提升生存能力');
  }
  if (!roleCounts['输出'] && members.length >= 2) {
    suggestions.push('缺少输出核心，建议添加输出型角色');
  }
  if (members.length >= 3 && Object.keys(elementCounts).length >= 3) {
    suggestions.push('元素类型丰富，可以触发多种元素反应');
  }
  const starCount = members.filter(m => BONDS.starTeam.members.includes(m.id)).length;
  if (starCount >= 2 && starCount < 4) {
    suggestions.push(`再添加 ${4 - starCount} 名星之队成员可激活更强羁绊`);
  }

  return (
    <div className="space-y-4">
      {/* 羁绊效果 */}
      {activeBonds.length > 0 && (
        <div>
          <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            队伍羁绊
          </h4>
          <div className="space-y-2">
            {activeBonds.map((bond, i) => (
              <div key={i} className="bg-card rounded-lg p-3 border border-primary/30">
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium text-sm flex items-center gap-1.5">
                    {bond.icon}
                    {bond.name}
                  </span>
                  <span className="text-xs text-primary/60">
                    {bond.level}/{bond.maxLevel}
                  </span>
                </div>
                <p className="text-xs text-text-muted mt-1">{bond.effect}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 元素共鸣 */}
      {activeElements.length > 0 && (
        <div>
          <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            元素共鸣
          </h4>
          <div className="space-y-2">
            {activeElements.map((el, i) => (
              <div key={i} className="bg-card rounded-lg p-3 border border-border">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm flex items-center gap-1.5">
                    {isElement(el.element) && <ElementIcon element={el.element} size={14} />}
                    {el.name}
                  </span>
                  <span className="text-xs text-text-muted">
                    {el.count}名
                  </span>
                </div>
                <p className="text-xs text-text-muted mt-1">{el.effect}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 队伍构成 */}
      <div>
        <h4 className="font-medium text-sm mb-2">队伍构成</h4>
        <div className="flex flex-wrap gap-2">
          {Object.entries(roleCounts).map(([role, count]) => (
            <Badge key={role} label={`${role} x${count}`} />
          ))}
        </div>
      </div>

      {/* 搭配建议 */}
      {suggestions.length > 0 && (
        <div className="border-t border-border pt-4">
          <h4 className="font-medium text-sm mb-2 text-primary">搭配建议</h4>
          <ul className="space-y-1.5">
            {suggestions.map((s, i) => (
              <li key={i} className="text-xs text-text-muted flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 当前英雄 */}
      <div className="border-t border-border pt-4">
        <h4 className="font-medium text-sm mb-2">当前阵容</h4>
        <div className="space-y-1.5">
          {members.map((m) => (
            <div key={m.id} className="flex items-center gap-2 bg-background p-2 rounded">
              <Image src={m.avatar} alt={m.name} width={32} height={32} className="w-8 h-8 rounded object-cover object-[center_15%]" />
              <span className="text-sm">{m.name}</span>
              <ElementIcon element={m.element} size={12} />
              <Badge label={m.role} className="ml-auto text-xs" />
            </div>
          ))}
          {members.length < 4 && Array.from({ length: 4 - members.length }).map((_, i) => (
            <div key={`empty-${i}`} className="flex items-center gap-2 bg-background/50 p-2 rounded text-text-muted/40">
              <div className="w-8 h-8 rounded bg-border flex items-center justify-center text-xs">?</div>
              <span className="text-sm">空位</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
