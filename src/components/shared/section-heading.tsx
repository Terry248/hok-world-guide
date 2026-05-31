import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

export function SectionHeading({ title, icon, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={cn('text-xl font-bold text-primary flex items-center gap-2 mb-4', className)}>
      {icon}
      {title}
      <div className="flex-1 h-px bg-border ml-2" />
    </h2>
  );
}
