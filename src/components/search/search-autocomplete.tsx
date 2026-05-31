'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { SearchResult } from '@/lib/search';
import { Search, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const typeColors: Record<string, string> = {
  '世界观': 'text-cyan-400',
  '留言': 'text-pink-400',
  '角色': 'text-blue-400',
  '武器': 'text-amber-400',
  '地图': 'text-green-400',
  '地点': 'text-emerald-400',
  '攻略': 'text-purple-400',
};

interface SearchAutocompleteProps {
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  autoFocus?: boolean;
}

export function SearchAutocomplete({
  placeholder = '搜索角色、武器、地图、攻略、留言...',
  className = '',
  size = 'md',
  autoFocus = false,
}: SearchAutocompleteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'pl-9 pr-8 py-1.5 text-sm',
    md: 'pl-10 pr-10 py-2',
    lg: 'pl-12 pr-12 py-3 text-base',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5 left-2.5',
    md: 'w-4 h-4 left-3',
    lg: 'w-5 h-5 left-3.5',
  };

  // 实时搜索建议（通过 API）
  useEffect(() => {
    if (query.trim().length === 0) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=8`);
        const data = await res.json();
        const results: SearchResult[] = data.results || [];
        setSuggestions(results);
        setHighlightIndex(results.length > 0 ? 0 : -1);
        setOpen(results.length > 0);
      } catch {
        setSuggestions([]);
        setOpen(false);
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [query]);

  // 点击外部关闭
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = useCallback((result: SearchResult) => {
    router.push(result.href);
    setOpen(false);
    setQuery('');
  }, [router]);

  const handleSubmit = () => {
    if (highlightIndex >= 0 && suggestions[highlightIndex]) {
      handleSelect(suggestions[highlightIndex]);
    } else if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && e.key !== 'Enter') return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightIndex(prev => (prev + 1) % suggestions.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
        break;
      case 'Enter':
        e.preventDefault();
        handleSubmit();
        break;
      case 'Escape':
        setOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <Search className={cn('absolute top-1/2 -translate-y-1/2 text-text-muted pointer-events-none', iconSizes[size])} />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => query.trim() && suggestions.length > 0 && setOpen(true)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={cn(
          'w-full bg-card border border-border rounded-lg text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors',
          sizeClasses[size]
        )}
      />
      {query && (
        <button
          type="button"
          onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* 预选下拉 */}
      {open && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-card border border-border rounded-xl shadow-xl shadow-black/20 overflow-hidden z-50">
          <div className="max-h-80 overflow-y-auto py-1">
            {suggestions.map((result, index) => (
              <button
                key={`${result.type}-${result.id}-${index}`}
                onClick={() => handleSelect(result)}
                onMouseEnter={() => setHighlightIndex(index)}
                className={cn(
                  'w-full px-4 py-2.5 text-left flex items-center gap-3 transition-colors',
                  index === highlightIndex ? 'bg-primary/10' : 'hover:bg-card-hover'
                )}
              >
                <span className={cn('text-xs font-medium flex-shrink-0 w-10 text-center', typeColors[result.type] || 'text-text-muted')}>
                  {result.type}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{result.title}</p>
                  {result.subtitle && (
                    <p className="text-xs text-text-muted truncate">{result.subtitle}</p>
                  )}
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-text-muted/40 flex-shrink-0" />
              </button>
            ))}
          </div>
          {query.trim() && (
            <div className="border-t border-border px-4 py-2 bg-card-hover">
              <button
                onClick={() => {
                  router.push(`/search?q=${encodeURIComponent(query.trim())}`);
                  setOpen(false);
                }}
                className="text-xs text-primary hover:text-primary-hover flex items-center gap-1"
              >
                <Search className="w-3 h-3" />
                查看 "{query}" 的全部搜索结果
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
