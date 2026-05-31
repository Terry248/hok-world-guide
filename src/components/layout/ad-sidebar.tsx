'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { IS_DOMESTIC } from '@/lib/site-config';
import { CURRENT_AD_PLATFORM, HAS_REAL_ADS, GDT_CONFIG } from '@/lib/ad-config';

type GdtWindow = Window & {
  GDT?: {
    NATIVE?: {
      renderAd?: (options: { placementId: string; containerId: string; layoutType: number }) => void;
    };
  };
};

/**
 * 广告侧边栏 — 支持多平台切换
 *
 * 海外版：Google AdSense (adsbygoogle.js)
 * 国内版：腾讯优量汇 / 百度联盟
 *
 * 真实广告接入前显示占位符，拿到广告位ID后自动切换
 */
export function AdSidebar() {
  const pathname = usePathname();
  const [dismissedPath, setDismissedPath] = useState<string | null>(null);
  const visible = dismissedPath !== pathname;

  if (!visible) return null;

  return (
    <>
      {/* 桌面端：两侧悬浮广告位 */}
      <aside className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 w-[160px] z-50 flex-col items-center justify-center animate-in fade-in duration-300">
        <AdSlot position="sidebarLeft" size={{ w: 160, h: 600 }} onClose={() => setDismissedPath(pathname)} />
      </aside>
      <aside className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 w-[160px] z-50 flex-col items-center justify-center animate-in fade-in duration-300">
        <AdSlot position="sidebarRight" size={{ w: 160, h: 600 }} onClose={() => setDismissedPath(pathname)} />
      </aside>

      {/* 移动端/平板：底部固定广告栏 */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-t border-border/50 px-4 py-2">
        <div className="flex gap-3 max-w-lg mx-auto">
          <MobileAdSlot position="mobileBanner" onClose={() => setDismissedPath(pathname)} />
        </div>
      </div>
      {/* 移动端底部占位，防止内容被广告遮挡 */}
      <div className="xl:hidden h-[72px]" />
    </>
  );
}

// ============================================================
// 广告位组件（自动根据平台渲染真实广告或占位符）
// ============================================================
function AdSlot({
  position,
  size,
  onClose,
}: {
  position: string;
  size: { w: number; h: number };
  onClose: () => void;
}) {
  const containerRef = useGdtAd(position);

  // 如果已接入真实广告，渲染对应平台广告
  if (HAS_REAL_ADS) {
    return (
      <div
        ref={containerRef}
        style={{ width: size.w, minHeight: size.h }}
        className="relative"
      >
        {IS_DOMESTIC ? (
          // 腾讯优量汇广告容器（由 useEffect 注入）
          null
        ) : (
          // Google AdSense
          <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: size.w, height: size.h }}
            data-ad-client="ca-pub-4441684825498793"
            data-ad-slot={position}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        )}
        <CloseButton onClose={onClose} />
      </div>
    );
  }

  // 未接入真实广告：显示占位符
  return (
    <div
      className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-3 text-center group/ad"
      style={{ width: size.w, minHeight: size.h }}
    >
      <CloseButton onClose={onClose} />
      <p className="text-[10px] text-text-muted mb-2 uppercase tracking-wider">广告</p>
      <div className="flex-1 bg-card-hover rounded-lg flex items-center justify-center border border-dashed border-border min-h-[120px]">
        <div className="text-center space-y-1">
          <p className="text-xs text-text-muted">{position}</p>
          <p className="text-[10px] text-text-muted/60">
            {CURRENT_AD_PLATFORM === 'gdt' ? '腾讯优量汇' : 'AdSense'}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 移动端广告位
// ============================================================
function MobileAdSlot({ position, onClose }: { position: string; onClose: () => void }) {
  const containerRef = useGdtAd(position);

  if (HAS_REAL_ADS) {
    return (
      <div className="relative flex-1">
        {IS_DOMESTIC ? (
          <div ref={containerRef} className="w-full h-[60px] bg-card/50" />
        ) : (
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-4441684825498793"
            data-ad-slot={position}
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          />
        )}
      </div>
    );
  }

  return (
    <div className="relative flex-1 bg-card-hover/80 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 flex items-center gap-3 group/ad">
      <CloseButton onClose={onClose} small />
      <div className="flex-shrink-0 w-10 h-10 bg-card-hover rounded-md flex items-center justify-center border border-dashed border-border">
        <span className="text-lg opacity-30">📢</span>
      </div>
      <div className="min-w-0">
        <p className="text-[10px] text-text-muted uppercase tracking-wider">广告</p>
        <p className="text-xs text-text-muted truncate">
          {CURRENT_AD_PLATFORM === 'gdt' ? '腾讯优量汇' : 'AdSense'}
        </p>
      </div>
    </div>
  );
}

function useGdtAd(position: string) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!IS_DOMESTIC || !HAS_REAL_ADS) return;
    if (!containerRef.current) return;

    const placementId = GDT_CONFIG.placements[position];
    if (!placementId) return;

    const container = containerRef.current;
    container.innerHTML = '';
    const adDiv = document.createElement('div');
    adDiv.id = `gdt-${position}`;
    container.appendChild(adDiv);

    const renderAd = () => {
      const gdt = (window as GdtWindow).GDT;
      gdt?.NATIVE?.renderAd?.({
        placementId,
        containerId: adDiv.id,
        layoutType: 1,
      });
    };

    if ((window as GdtWindow).GDT?.NATIVE?.renderAd) {
      renderAd();
      return;
    }

    const script = document.createElement('script');
    script.src = '//qzs.gdtimg.com/native/native_render_v2.js';
    script.async = true;
    script.onload = renderAd;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [position]);

  return containerRef;
}

// ============================================================
// 关闭按钮
// ============================================================
function CloseButton({ onClose, small = false }: { onClose: () => void; small?: boolean }) {
  return (
    <button
      onClick={onClose}
      className={`absolute -top-2 -right-2 ${small ? 'w-4 h-4' : 'w-5 h-5'} bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover/ad:opacity-100 transition-opacity z-10 shadow-md`}
      title="关闭广告"
    >
      <X size={small ? 10 : 12} />
    </button>
  );
}
