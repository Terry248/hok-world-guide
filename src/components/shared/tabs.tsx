'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  children: React.ReactNode[];
  defaultTab?: string;
}

export function Tabs({ tabs, children, defaultTab }: TabsProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);
  const activeIndex = tabs.findIndex(t => t.id === active);

  return (
    <div className="space-y-6">
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 border-b border-border pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
              active === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-text-muted hover:text-foreground hover:border-border'
            )}
          >
            {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="animate-fade-in">
        {children[activeIndex] || children[0]}
      </div>
    </div>
  );
}
