import Link from 'next/link';
import { Sword } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <Sword className="w-16 h-16 text-primary mb-6 opacity-50" />
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">页面未找到</h2>
      <p className="text-text-muted mb-8">你要找的内容可能已被移动或删除</p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-background rounded-lg font-medium hover:bg-primary-hover transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}
