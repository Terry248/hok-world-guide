import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AdSidebar } from "@/components/layout/ad-sidebar";
import { FEATURES, IS_DOMESTIC } from "@/lib/site-config";
import { GDT_CONFIG } from "@/lib/ad-config";

export const metadata: Metadata = {
  title: {
    default: "王者荣耀世界攻略站 - 角色图鉴 | 地图探索 | 任务攻略",
    template: "%s | 王者荣耀世界攻略站",
  },
  description: "最全王者荣耀世界游戏攻略，包含角色图鉴、武器大全、地图探索点位、任务流程攻略、配队模拟器、留言墙",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <head>
        {/* Google AdSense — 仅海外版加载 */}
        {FEATURES.ads && !IS_DOMESTIC && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4441684825498793"
            crossOrigin="anonymous"
          />
        )}

        {/* 腾讯优量汇 — 仅国内版加载（有appId时） */}
        {FEATURES.ads && IS_DOMESTIC && GDT_CONFIG.appId && (
          <script
            async
            src="https://qzs.gdtimg.com/native/native_render_v2.js"
            data-appid={GDT_CONFIG.appId}
          />
        )}
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <AdSidebar />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
