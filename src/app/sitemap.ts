import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hokworld.site';

  // 静态页面
  const staticPages = [
    '',
    '/about',
    '/privacy',
    '/disclaimer',
    '/beginner',
    '/characters',
    '/weapons',
    '/maps',
    '/world',
    '/quests',
    '/combat',
    '/builder',
    '/community',
    '/search',
  ];

  const routes = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  return routes;
}
