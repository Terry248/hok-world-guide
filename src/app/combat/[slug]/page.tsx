import { getGuideBySlug, getAllSlugs } from '@/lib/guides';
import { notFound } from 'next/navigation';
import { MarkdownRenderer } from '@/components/guides/markdown-renderer';
import { TableOfContents } from '@/components/guides/table-of-contents';
import { Tag } from '@/components/shared/tag';
import { Badge } from '@/components/shared/badge';

export async function generateStaticParams() {
  return getAllSlugs('combat').map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug, 'combat');
  if (!guide) return { title: '攻略不存在' };
  return {
    title: guide.meta.title,
    description: guide.meta.excerpt,
  };
}

export default async function CombatDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug, 'combat');
  if (!guide) notFound();

  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/media_v_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <article className="relative z-10 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge label={guide.meta.category} />
          {guide.meta.tags.map(tag => <Tag key={tag} label={tag} />)}
        </div>
        <h1 className="text-3xl font-bold mb-2">{guide.meta.title}</h1>
        <p className="text-text-muted">{guide.meta.excerpt}</p>
        <div className="flex gap-4 mt-3 text-sm text-text-muted">
          <span>作者：{guide.meta.author}</span>
          <span>更新时间：{guide.meta.date}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="sticky top-20">
            <TableOfContents content={guide.content} />
          </div>
        </aside>
        <div className="lg:col-span-3">
          <MarkdownRenderer content={guide.content} />
        </div>
      </div>
    </article>
    </div>
  );
}
