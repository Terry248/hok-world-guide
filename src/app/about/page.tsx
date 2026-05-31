import { SectionHeading } from '@/components/shared/section-heading';
import { Info, Shield, Mail, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/home-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <div>
          <SectionHeading title="关于本站" icon={<Info className="w-6 h-6" />} />
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">王者荣耀世界攻略站</strong> 是一个为玩家提供游戏攻略信息的网站。
              包含角色图鉴、武器大全、地图探索点位、任务流程攻略、战斗攻略、配队模拟器、留言墙和王者大陆世界观等功能。
            </p>
            <p>
              本站为玩家自制攻略站，与游戏官方无关。所有数据来源于玩家社区贡献和游戏内实测。
            </p>

            <h3 className="text-foreground font-semibold flex items-center gap-2 mt-6">
              <Shield className="w-4 h-4" />
              备案信息
            </h3>
            <p>
              本网站已完成中华人民共和国工业和信息化部 ICP 备案。
            </p>
            <p>
              <a 
                href="https://beian.miit.gov.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                赣ICP备2026010150号
              </a>
            </p>

            <h3 className="text-foreground font-semibold flex items-center gap-2 mt-6">
              <Mail className="w-4 h-4" />
              联系我们
            </h3>
            <p>
              如有任何问题或建议，欢迎通过 <Link href="/community" className="text-primary hover:underline">留言墙</Link> 与我们联系。
            </p>

            <h3 className="text-foreground font-semibold flex items-center gap-2 mt-6">
              <Globe className="w-4 h-4" />
              相关链接
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="text-primary hover:underline">隐私政策</Link>
              <Link href="/disclaimer" className="text-primary hover:underline">免责声明</Link>
            </div>

            <h3 className="text-foreground font-semibold mt-6">如何贡献内容</h3>
            <p>
              如果你发现数据有误或想要添加新的攻略内容，欢迎通过以下方式贡献：
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>提交新的攻略文章（Markdown 格式）</li>
              <li>修正角色/武器数据错误</li>
              <li>补充地图收集品信息</li>
              <li>分享你的配队方案</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
