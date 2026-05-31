'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sword } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2 text-text-muted hover:text-foreground"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-lg z-40 animate-slide-up">
          <nav className="flex flex-col p-4 gap-1">
            {SITE_CONFIG.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-text-muted hover:text-foreground hover:bg-card transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
