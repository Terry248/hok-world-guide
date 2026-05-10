import { notFound } from 'next/navigation';
import { MessageBoard } from '@/components/community/message-board';
import { SectionHeading } from '@/components/shared/section-heading';
import { MessageSquare } from 'lucide-react';
import { FEATURES } from '@/lib/site-config';

export const metadata = {
  title: '留言墙',
  description: '王者荣耀世界玩家交流社区，分享攻略心得、配队思路、探索发现',
};

export default function CommunityPage() {
  // 国内版备案期间隐藏留言墙
  if (!FEATURES.community) {
    notFound();
  }
  return (
    <div className="relative">
      {/* Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/media_tu_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-8">
        <SectionHeading
          title="留言墙"
          icon={<MessageSquare />}
        />

        <MessageBoard />
      </div>
    </div>
  );
}
