import type { Constellation } from '@/types';
import { SectionHeading } from '@/components/shared/section-heading';
import { Star } from 'lucide-react';

interface ConstellationListProps {
  constellations: Constellation[];
}

export function ConstellationList({ constellations }: ConstellationListProps) {
  return (
    <section className="mb-8">
      <SectionHeading title="命座" icon={<Star className="w-5 h-5" />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {constellations.map((c) => (
          <div key={c.level} className="bg-card rounded-lg p-3 border border-border flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              {c.level}
            </div>
            <div>
              <h4 className="font-medium text-sm">{c.name}</h4>
              <p className="text-text-muted text-xs mt-1">{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
