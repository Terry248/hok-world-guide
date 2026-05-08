'use client';

import { useState } from 'react';
import { X, Download } from 'lucide-react';

interface CharacterAvatarLightboxProps {
  src: string;
  alt: string;
}

export function CharacterAvatarLightbox({ src, alt }: CharacterAvatarLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 可点击的头像 */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full h-full rounded-xl overflow-hidden cursor-zoom-in hover:ring-2 hover:ring-primary/50 transition-all"
        title="点击查看完整全身像"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </button>

      {/* 灯箱模态框 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* 关闭按钮 */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* 提示文字 */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>右键点击图片可保存到本地</span>
          </div>

          {/* 大图 */}
          <img
            src={src}
            alt={alt}
            className="max-w-[95vw] max-h-[90vh] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => {
              // 允许右键菜单，让用户保存
            }}
          />

          {/* 底部提示 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">
            点击空白处关闭
          </div>
        </div>
      )}
    </>
  );
}
