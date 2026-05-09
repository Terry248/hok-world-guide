import { SectionHeading } from '@/components/shared/section-heading';
import { Info, Users, BookOpen, Map, Sword, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: '关于本站',
  description: '了解王者荣耀世界攻略站的使命、功能和内容',
};

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
          <div className="bg-card rounded-xl border border-border p-6 space-y-6 text-text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">王者荣耀世界攻略站</strong> 是一个专注于《王者荣耀世界》游戏的玩家自制攻略网站。
              我们致力于为玩家提供全面、准确、实用的游戏攻略信息，帮助玩家更好地探索王者大陆。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-card-hover rounded-lg p-4">
                <Sword className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-foreground font-medium mb-1">角色图鉴</h4>
                  <p className="text-sm">11位官方角色的详细信息、技能解析、配装推荐</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card-hover rounded-lg p-4">
                <Map className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-foreground font-medium mb-1">地图探索</h4>
                  <p className="text-sm">5大区域、14个子地点的探索指南，宝箱与收集品</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card-hover rounded-lg p-4">
                <BookOpen className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-foreground font-medium mb-1">攻略内容</h4>
                  <p className="text-sm">任务攻略、战斗技巧、新手指南、角色培养</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card-hover rounded-lg p-4">
                <Globe className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-foreground font-medium mb-1">世界观</h4>
                  <p className="text-sm">王者大陆九大区域、角色出身地、十二奇迹</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="text-foreground font-semibold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                内容来源与声明
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>本站为<strong>玩家自制攻略站</strong>，与游戏官方无关</li>
                <li>所有数据来源于玩家社区贡献、游戏内实测和官方公开资料</li>
                <li>游戏相关图片版权归属于腾讯游戏及 respective 所有者</li>
                <li>如发现内容有误或侵权，请联系我们及时修正</li>
              </ul>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="text-foreground font-semibold mb-3">如何贡献内容</h3>
              <p className="mb-3">
                如果你发现数据有误或想要添加新的攻略内容，欢迎通过以下方式贡献：
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>提交新的攻略文章（Markdown 格式）</li>
                <li>修正角色/武器数据错误</li>
                <li>补充地图收集品信息</li>
                <li>分享你的配队方案</li>
              </ul>
            </div>

            <div className="border-t border-border pt-4 flex flex-wrap gap-4 text-sm">
              <Link href="/privacy" className="text-primary hover:underline">
                隐私政策
              </Link>
              <Link href="/disclaimer" className="text-primary hover:underline">
                免责声明
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
