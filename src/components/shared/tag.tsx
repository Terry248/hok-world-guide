import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
}

const variants = {
  default: 'bg-border text-text-muted',
  primary: 'bg-primary/20 text-primary',
  secondary: 'bg-secondary/20 text-secondary',
  success: 'bg-success/20 text-success',
  danger: 'bg-danger/20 text-danger',
};

export function Tag({ label, variant = 'default', className = '' }: TagProps) {
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', variants[variant], className)}>
      {label}
    </span>
  );
}
