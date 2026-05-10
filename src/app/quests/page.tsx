import type { Metadata } from 'next';
import { getQuests } from '@/lib/guides';
import { GuideListClient } from '@/components/guides/guide-list-client';
import { SectionHeading } from '@/components/shared/section-heading';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: '任务攻略',
  description: '王者荣耀世界任务流程攻略，包含主线剧情、支线任务、日常资源获取及世界探索指南',
};

export default function QuestsPage() {
  const quests = getQuests();

  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/news3_bg2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10">
        <div className="mb-8">
          <SectionHeading title="任务攻略" icon={<BookOpen className="w-6 h-6" />} />
          <p className="text-text-muted mt-2">
            主线任务、支线任务、活动任务与探索收集的详细攻略
          </p>
        </div>
        <GuideListClient guides={quests} type="quest" />
      </div>
    </div>
  );
}
