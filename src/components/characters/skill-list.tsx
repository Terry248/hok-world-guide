import type { Skill } from '@/types';
import { SectionHeading } from '@/components/shared/section-heading';
import { Zap } from 'lucide-react';

interface SkillListProps {
  skills: Skill[];
}

export function SkillList({ skills }: SkillListProps) {
  return (
    <section className="mb-8">
      <SectionHeading title="技能" icon={<Zap className="w-5 h-5" />} />
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i} className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-primary font-bold text-sm">{skill.type}</span>
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">{skill.description}</p>
            {skill.multipliers && (
              <div className="mt-2 flex gap-2 flex-wrap">
                {skill.multipliers.map((m, j) => (
                  <span key={j} className="text-xs bg-background px-2 py-1 rounded text-text-muted">
                    {m}x
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
