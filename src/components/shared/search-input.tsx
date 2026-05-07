'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export function SearchInput({ placeholder = '搜索...', onSearch, className = '' }: SearchInputProps) {
  const [value, setValue] = useState('');

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch?.(e.target.value);
        }}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
