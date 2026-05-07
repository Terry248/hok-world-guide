'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'hok-ad-closed';

export function AdSidebar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 每次页面加载（导航/刷新）重置为显示
    setVisible(true);

    const onRouteChange = () => {
      setVisible(true);
    };

    // 监听浏览器前进/后退
    window.addEventListener('popstate', onRouteChange);
    return () => window.removeEventListener('popstate', onRouteChange);
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  if (!visible) return null;

  return (
    <>
      {/* 左侧悬浮广告位 */}
      <aside className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 w-40 z-50 flex-col items-center justify-center animate-in fade-in duration-300">
        <AdSlot label="广告位 A" onClose={handleClose} />
      </aside>
      {/* 右侧悬浮广告位 */}
      <aside className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 w-40 z-50 flex-col items-center justify-center animate-in fade-in duration-300">
        <AdSlot label="广告位 B" onClose={handleClose} />
      </aside>
    </>
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
