import { getQuests } from '@/lib/guides';
import { GuideList } from '@/components/guides/guide-list';
import { SectionHeading } from '@/components/shared/section-heading';
import { BookOpen } from 'lucide-react';

export default function QuestsPage() {
  const quests = getQuests();

  return (
    <div>
      <div className="mb-8">
        <SectionHeading title="任务攻略" icon={<BookOpen className="w-6 h-6" />} />
        <p className="text-text-muted mt-2">
          主线任务、支线任务、活动任务的详细攻略
        </p>
      </div>
      <GuideList guides={quests} type="quest" />
    </div>
  );
}
