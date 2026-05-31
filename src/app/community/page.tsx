import { MessageBoard } from '@/components/community/message-board';
import { SectionHeading } from '@/components/shared/section-heading';
import { MessageSquare } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="relative">
      {/* 背景图 */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/maps/jixia-xueyuan.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.55)',
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <SectionHeading title="稷下留言墙" icon={<MessageSquare className="w-6 h-6" />} />
          <p className="text-text-muted mt-2">
            畅所欲言，留下你的只言片语——建议反馈、游戏心得、求助提问、闲聊吹水
          </p>
        </div>
        <MessageBoard />
      </div>
    </div>
  );
}
