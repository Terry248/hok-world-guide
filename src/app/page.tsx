import Link from 'next/link';
import { getFeaturedCharacters } from '@/lib/characters';
import { getGuides, getQuests, getCombatGuides } from '@/lib/guides';
import { getAllRegions } from '@/lib/maps';
import { CharacterCard } from '@/components/characters/character-card';
import { GuideCard } from '@/components/guides/guide-card';
import { SectionHeading } from '@/components/shared/section-heading';
import { SearchInput } from '@/components/shared/search-input';
import { Sword, BookOpen, Map, Users, Shield } from 'lucide-react';

export default function HomePage() {
  const heroes = getFeaturedCharacters(6);
  const latestGuides = [...getGuides(), ...getQuests(), ...getCombatGuides()]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  const regions = getAllRegions();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-card to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-border">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          王者荣耀世界
          <span className="text-primary">攻略站</span>
        </h1>
        <p className="text-text-muted text-lg mb-6 max-w-2xl mx-auto">
          最全角色图鉴、武器大全、地图探索点位、任务流程攻略、配队模拟器
        </p>
        <div className="max-w-md mx-auto">
          <SearchInput placeholder="搜索英雄、武器、攻略..." />
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <QuickLink href="/characters" icon={<Sword />} label="角色图鉴" desc="全角色详细信息" />
        <QuickLink href="/weapons" icon={<Shield />} label="武器大全" desc="装备属性大全" />
        <QuickLink href="/maps" icon={<Map />} label="地图探索" desc="宝箱/收集品路线" />
        <QuickLink href="/builder" icon={<Users />} label="配队模拟" desc="队伍搭配模拟器" />
      </section>

      {/* Featured Heroes */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <SectionHeading title="热门英雄" />
          <Link href="/characters" className="text-sm text-primary hover:text-primary-hover">
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {heroes.map((hero) => (
            <CharacterCard key={hero.id} character={hero} />
          ))}
        </div>
      </section>

      {/* Latest Guides */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <SectionHeading title="最新攻略" />
          <Link href="/quests" className="text-sm text-primary hover:text-primary-hover">
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} type="guide" />
          ))}
        </div>
      </section>

      {/* Regions */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <SectionHeading title="探索区域" />
          <Link href="/maps" className="text-sm text-primary hover:text-primary-hover">
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {regions.map((region) => (
            <Link key={region.id} href={`/maps/${region.id}`} className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all">
              <div className="h-24 bg-gradient-to-b from-card-hover to-card flex items-center justify-center">
                <span className="text-3xl opacity-30 group-hover:opacity-60 transition-opacity">🗺️</span>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors">{region.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function QuickLink({ href, icon, label, desc }: { href: string; icon: React.ReactNode; label: string; desc: string }) {
  return (
    <Link href={href} className="group block bg-card rounded-xl border border-border p-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-center">
      <div className="text-primary mb-2 flex justify-center">{icon}</div>
      <h3 className="font-semibold group-hover:text-primary transition-colors">{label}</h3>
      <p className="text-xs text-text-muted mt-1">{desc}</p>
    </Link>
  );
}
