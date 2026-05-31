'use client';

import { useEffect, useMemo, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('');

  const headings = useMemo(() => {
    const regex = /^(#{1,3})\s+(.+)$/gm;
    const items: TOCItem[] = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text.replace(/\s+/g, '-').toLowerCase();
      items.push({ id, text, level });
    }
    return items;
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="bg-card rounded-xl border border-border p-4">
      <h3 className="font-semibold text-sm mb-3 text-text-muted uppercase tracking-wide">目录</h3>
      <ul className="space-y-1">
        {headings.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              id={item.id}
              className={`block py-1 text-sm rounded transition-colors ${
                item.level === 1 ? 'pl-0' : item.level === 2 ? 'pl-4' : 'pl-8'
              } ${
                activeId === item.id
                  ? 'text-primary font-medium'
                  : 'text-text-muted hover:text-foreground'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
