import Link from 'next/link';
import { SectionHeading } from '@/components/shared/section-heading';
import { BookOpen, Compass, Sword, Users, Zap, Map } from 'lucide-react';

export default function BeginnerPage() {
  return (
    <div className="relative">
      {/* 背景图 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/maps/chunxi-mantan.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10 space-y-12">
      {/* 页面标题 */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">新手指南</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          初入王者世界？这里有你需要知道的一切基础知识
        </p>
      </section>

      {/* 核心机制 */}
      <section>
        <SectionHeading title="核心机制" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-semibold">共鸣系统</h3>
            </div>
            <p className="text-text-muted mb-4">
              游戏的核心玩法。玩家扮演的元流之子可以通过共鸣系统与不同的英雄建立羁绊，
              获得他们的力量和能力，切换不同的战斗风格。
            </p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>共鸣后可以切换为对应英雄的战斗方式</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>每个英雄拥有独特的元素属性和武器类型</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>合理搭配共鸣英雄可以触发元素反应</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Sword size={20} />
              </div>
              <h3 className="text-xl font-semibold">汇流机制</h3>
            </div>
            <p className="text-text-muted mb-4">
              元流之子的专属战斗机制。通过连续命中敌人积累「流」能量，
              能量满后进入汇流状态，大幅提升战斗效率。
            </p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>连续攻击汇集「流」能量，满5层后触发</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>汇流状态减少50%技能冷却时间</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>获得大量生命回复和属性加成</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 元素反应 */}
      <section>
        <SectionHeading title="元素反应系统" />
        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-text-muted mb-6">
            游戏中有9种元素属性，不同元素之间可以产生特殊反应，合理搭配是战斗取胜的关键。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {elements.map((el) => (
              <div key={el.name} className="text-center p-4 rounded-lg bg-background/50 border border-border">
                <div className="text-2xl mb-2">{el.icon}</div>
                <div className="font-medium">{el.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 快速入门 */}
      <section>
        <SectionHeading title="快速入门流程" />
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 bg-card rounded-xl border border-border p-6">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 推荐链接 */}
      <section>
        <SectionHeading title="推荐阅读" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/characters" className="group block bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all">
            <Users className="text-primary mb-3" size={24} />
            <h3 className="font-semibold group-hover:text-primary transition-colors">角色图鉴</h3>
            <p className="text-sm text-text-muted mt-1">查看所有可共鸣英雄的详细信息</p>
          </Link>
          <Link href="/maps" className="group block bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all">
            <Map className="text-primary mb-3" size={24} />
            <h3 className="font-semibold group-hover:text-primary transition-colors">地图探索</h3>
            <p className="text-sm text-text-muted mt-1">了解各区域特点和探索要点</p>
          </Link>
          <Link href="/builder" className="group block bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all">
            <Compass className="text-primary mb-3" size={24} />
            <h3 className="font-semibold group-hover:text-primary transition-colors">配队模拟</h3>
            <p className="text-sm text-text-muted mt-1">尝试不同的共鸣队伍搭配</p>
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}

const elements = [
  { name: '火', icon: '🔥' },
  { name: '水', icon: '💧' },
  { name: '风', icon: '🌪️' },
  { name: '雷', icon: '⚡' },
  { name: '草', icon: '🌿' },
  { name: '冰', icon: '❄️' },
  { name: '岩', icon: '🪨' },
  { name: '光', icon: '✨' },
  { name: '暗', icon: '🌑' },
];

const steps = [
  {
    title: '完成入学考试',
    desc: '游戏开始后，跟随引导完成稷下学院的入学考试，熟悉基本操作和战斗机制。考试地点在春溪漫滩的溯洄营地。'
  },
  {
    title: '解锁共鸣系统',
    desc: '完成主线任务后解锁共鸣系统，可以与其他英雄建立羁绊，获得他们的战斗能力。建议优先解锁星之队成员。'
  },
  {
    title: '探索稷下学院',
    desc: '稷下学院是新手期的主要活动区域，这里有丰富的支线任务和收集品。记得与NPC对话获取任务线索。'
  },
  {
    title: '挑战试炼之地',
    desc: '春溪漫滩的遗迹是初级学子的试炼之地，适合练习战斗技巧和提升角色等级。'
  },
  {
    title: '加入多人玩法',
    desc: '等级提升后可以尝试组队挑战Boss，长城区域的多人副本是不错的选择。'
  }
];
