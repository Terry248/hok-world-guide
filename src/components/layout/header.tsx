import Link from 'next/link';
import { Sword, Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { MobileNav } from './mobile-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors">
            <Sword className="w-6 h-6" />
            <span className="font-bold text-lg hidden sm:inline">{SITE_CONFIG.title}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {SITE_CONFIG.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm text-text-muted hover:text-foreground hover:bg-card-hover transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
