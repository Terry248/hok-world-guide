import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AdSidebar } from "@/components/layout/ad-sidebar";

export const metadata: Metadata = {
  title: {
    default: "王者荣耀世界攻略站 - 角色图鉴 | 地图探索 | 任务攻略",
    template: "%s | 王者荣耀世界攻略站",
  },
  description: "最全王者荣耀世界游戏攻略，包含角色图鉴、武器大全、地图探索点位、任务流程攻略、配队模拟器",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className="font-sans min-h-screen flex flex-col"
      >
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
