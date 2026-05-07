'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

export function AdSidebar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  // 路由变化时重新显示广告
  useEffect(() => {
    setVisible(true);
  }, [pathname]);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* 桌面端：两侧悬浮广告位 */}
      <aside className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 w-40 z-50 flex-col items-center justify-center animate-in fade-in duration-300">
        <AdSlot label="广告位 A" onClose={handleClose} />
      </aside>
      <aside className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 w-40 z-50 flex-col items-center justify-center animate-in fade-in duration-300">
        <AdSlot label="广告位 B" onClose={handleClose} />
      </aside>

      {/* 移动端/平板：底部固定广告栏 */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-t border-border/50 px-4 py-2">
        <div className="flex gap-3 max-w-lg mx-auto">
          <MobileAdSlot label="广告位 A" onClose={handleClose} />
          <MobileAdSlot label="广告位 B" onClose={handleClose} />
        </div>
      </div>
      {/* 移动端底部占位，防止内容被广告遮挡 */}
      <div className="xl:hidden h-[88px]" />
    </>
  );
}

function MobileAdSlot({ label, onClose }: { label: string; onClose: () => void }) {
  return (
    <div className="relative flex-1 bg-card-hover/80 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 flex items-center gap-3 group/ad">
      <button
        onClick={onClose}
        className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-[10px] opacity-0 group-hover/ad:opacity-100 transition-opacity z-10 shadow-md"
        title="关闭广告"
      >
        <X size={10} />
      </button>
      <div className="flex-shrink-0 w-12 h-12 bg-card-hover rounded-md flex items-center justify-center border border-dashed border-border">
        <span className="text-lg opacity-30">📢</span>
      </div>
      <div className="min-w-0">
        <p className="text-[10px] text-text-muted uppercase tracking-wider">广告</p>
        <p className="text-xs text-text-muted truncate">{label}</p>
      </div>
    </div>
  );
}

function AdSlot({ label, onClose }: { label: string; onClose: () => void }) {
  return (
    <div className="relative w-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-3 text-center group/ad">
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover/ad:opacity-100 transition-opacity z-10 shadow-md"
        title="关闭广告"
      >
        <X size={12} />
      </button>
      <p className="text-[10px] text-text-muted mb-2 uppercase tracking-wider">广告</p>
      <div className="aspect-[3/4] bg-card-hover rounded-lg flex items-center justify-center border border-dashed border-border">
        <p className="text-xs text-text-muted">{label}</p>
      </div>
    </div>
  );
}
