import { SectionHeading } from '@/components/shared/section-heading';
import { Info } from 'lucide-react';

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
            包含角色图鉴、武器大全、地图探索点位、任务流程攻略、战斗攻略和配队模拟器等功能。
          </p>
          <p>
            本站为玩家自制攻略站，与游戏官方无关。所有数据来源于玩家社区贡献和游戏内实测。
          </p>
          <h3 className="text-foreground font-semibold">如何贡献内容</h3>
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
