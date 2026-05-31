import { Flame, Droplets, Wind, Zap, Leaf, Snowflake, Mountain, Sun, Moon } from 'lucide-react';
import type { Element } from '@/types';
import { ELEMENT_COLORS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<Element, React.ComponentType<{ className?: string }>> = {
  '火': Flame,
  '水': Droplets,
  '风': Wind,
  '雷': Zap,
  '草': Leaf,
  '冰': Snowflake,
  '岩': Mountain,
  '光': Sun,
  '暗': Moon,
};

const sizeClasses: Record<number, string> = {
  12: 'w-3 h-3',
  14: 'w-3.5 h-3.5',
  16: 'w-4 h-4',
  20: 'w-5 h-5',
  24: 'w-6 h-6',
};

interface ElementIconProps {
  element: Element;
  size?: number;
  className?: string;
}

export function ElementIcon({ element, size = 20, className = '' }: ElementIconProps) {
  const Icon = iconMap[element];
  const colorClass = ELEMENT_COLORS[element];
  const sizeClass = sizeClasses[size] || 'w-5 h-5';
  return <Icon className={cn(colorClass, sizeClass, className)} />;
}
