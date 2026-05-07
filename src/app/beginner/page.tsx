import Link from 'next/link';
import { SectionHeading } from '@/components/shared/section-heading';
import {
  BookOpen, Compass, Sword, Users, Zap, Map, Shield,
  ChevronRight, Star, Lightbulb, HelpCircle, Target,
  Clock, Gem, Trophy, Heart, Mouse, Keyboard,
  ScrollText, Sparkles, Home, MessageCircle, Fish,
  Eye, Dna, GraduationCap, Mountain, Anchor
} from 'lucide-react';

export default function BeginnerPage() {
  return (
    <div className="relative">
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

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">新手指南</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            初入王者世界？这里有官方整理的完整入门知识，助你快速上手
          </p>
        </section>

        {/* 基础操作速查 */}
        <section>
          <SectionHeading title="基础操作速查" icon={<Keyboard className="w-5 h-5" />} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickCard icon={<Mouse className="w-5 h-5" />} title="移动与交互">
              <ul className="space-y-1.5 text-sm text-text-muted">
                <li>WASD / 左摇杆 — 角色移动</li>
                <li>空格 / A键 — 跳跃（可二段跳）</li>
                <li>Shift — 闪避（有无敌帧）</li>
                <li>F — 互动/采集/对话</li>
                <li>长按元素视野 — 发现隐藏物品</li>
              </ul>
            </QuickCard>
            <QuickCard icon={<Sword className="w-5 h-5" />} title="战斗操作">
              <ul className="space-y-1.5 text-sm text-text-muted">
                <li>鼠标左键 / □键 — 普通攻击</li>
                <li>鼠标右键 / △键 — 重击/蓄力</li>
                <li>E / R1 — 战技（元素技能）</li>
                <li>Q / L1+R1 — 终结技（大招）</li>
                <li>数字键1-4 — 切换共鸣英雄</li>
              </ul>
            </QuickCard>
            <QuickCard icon={<Map className="w-5 h-5" />} title="界面导航">
              <ul className="space-y-1.5 text-sm text-text-muted">
                <li>M — 打开大地图</li>
                <li>J — 任务日志</li>
                <li>B — 背包/装备</li>
                <li>C — 角色/共鸣面板</li>
                <li>Esc — 系统菜单</li>
              </ul>
            </QuickCard>
          </div>
        </section>

        {/* 核心系统详解 */}
        <section>
          <SectionHeading title="核心系统详解" icon={<Zap className="w-5 h-5" />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-semibold">共鸣系统</h3>
              </div>
              <p className="text-text-muted mb-4 text-sm leading-relaxed">
                通过操控万变之流，将自己与对应的英雄联系起来，再现英雄所拥有的强大力量与战斗特性。
                战斗中可自由切换共鸣英雄，灵活应对不同敌人。
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-background/50 rounded-lg p-3 border border-border">
                  <div className="text-primary font-medium mb-1">共鸣切换</div>
                  <div className="text-text-muted">数字键1-4快速切换</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-border">
                  <div className="text-primary font-medium mb-1">独立能量</div>
                  <div className="text-text-muted">每个英雄拥有独立的技能能量</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-border">
                  <div className="text-primary font-medium mb-1">装备继承</div>
                  <div className="text-text-muted">武器/铭文属性全英雄共享</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-border">
                  <div className="text-primary font-medium mb-1">幻化外观</div>
                  <div className="text-text-muted">激活幻化可变为英雄形象</div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Dna size={20} />
                </div>
                <h3 className="text-xl font-semibold">流与流脉</h3>
              </div>
              <p className="text-text-muted mb-4 text-sm leading-relaxed">
                「流」是所有生命最基本的组成部分，也是各种力量赖以存在的源头。每个生命体内都有独一无二的流。
                通过提升和切换流脉，可以激活共鸣不同的技能特性和构筑。
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-border">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">1</div>
                  <div className="text-sm text-text-muted">收集赋神令 → 激活流脉节点</div>
                </div>
                <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-border">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">2</div>
                  <div className="text-sm text-text-muted">切换流脉 → 改变共鸣技能特性</div>
                </div>
                <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-border">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">3</div>
                  <div className="text-sm text-text-muted">不同流脉构筑 → 适配不同战斗场景</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 战斗机制 */}
        <section>
          <SectionHeading title="战斗机制" icon={<Sword className="w-5 h-5" />} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-3 text-red-400">
                <Target className="w-5 h-5" />
                <h4 className="font-semibold">破势</h4>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                部分敌人存在架势条，通过连续攻击将其清零后即可「破势」。敌人被破势后会进入虚弱状态，此时对其造成的伤害大幅提升。重击和终结技对架势的削减效果最明显。
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-3 text-purple-400">
                <Sparkles className="w-5 h-5" />
                <h4 className="font-semibold">御流百艺</h4>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                主角操纵「流」对世界中的一些道具或能力进行驱使。通过御流百艺可以使用投掷能力、使用钓具钓鱼、骑乘坐具等。这是大世界探索和解谜的核心能力。
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-3 text-cyan-400">
                <Eye className="w-5 h-5" />
                <h4 className="font-semibold">元流感应</h4>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                通过元流之环感应周边流的变动，实现追踪脚印和气息等功能。在大世界探索中，元流感应可以帮助你发现隐藏的宝箱、任务线索和可采集资源。
              </p>
            </div>
          </div>
        </section>

        {/* 元素反应系统 */}
        <section>
          <SectionHeading title="元素反应系统" icon={<Gem className="w-5 h-5" />} />
          <div className="bg-card rounded-xl border border-border p-6">
            <p className="text-text-muted mb-6">
              游戏中有7种核心元素，不同元素之间相互作用产生强力反应，是战斗的核心策略。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {elements.map((el) => (
                <div key={el.name} className="text-center p-3 rounded-lg bg-background/50 border border-border hover:border-primary/30 transition-colors">
                  <div className="text-2xl mb-1">{el.icon}</div>
                  <div className="font-medium text-sm">{el.name}</div>
                  <div className="text-xs text-text-muted mt-0.5">{el.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {reactions.map((r) => (
                <div key={r.name} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border">
                  <div className="text-lg">{r.combo}</div>
                  <div className="text-sm">
                    <div className="font-medium">{r.name}</div>
                    <div className="text-text-muted text-xs">{r.effect}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/combat/elemental-reactions" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-hover">
                查看完整元素反应解析 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 大世界探索系统 */}
        <section>
          <SectionHeading title="大世界探索" icon={<Mountain className="w-5 h-5" />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-3 text-green-400">
                <Compass className="w-5 h-5" />
                <h4 className="font-semibold">逍遥游</h4>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                完整的大世界探索收纳系统。随着不同区域探索度的提高，可以获得各类奖励。探索度通过解锁传送点、开启宝箱、完成收集等方式提升。
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-3 text-blue-400">
                <Anchor className="w-5 h-5" />
                <h4 className="font-semibold">潜流激发</h4>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                通过潜流激发可以强化主角的机动能力，如耐力上限、滑翔距离、潜水能力等。消耗在大世界中收集的赋神令进行激活和升级。
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-3 text-orange-400">
                <Fish className="w-5 h-5" />
                <h4 className="font-semibold">唤灵</h4>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                玩家能够使用手环获取怪物的「流」，唤灵则是复现怪物的特殊能力。在大世界中击败特定怪物后，有机会获得其唤灵能力，在战斗中使用。
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-3 text-pink-400">
                <MessageCircle className="w-5 h-5" />
                <h4 className="font-semibold">语印</h4>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                属于玩家间的社交功能，使用后能够在地图上留言。其他玩家经过时可以看到你的留言，是探索和互助的重要方式。
              </p>
            </div>
          </div>
        </section>

        {/* 养成系统 */}
        <section>
          <SectionHeading title="养成系统" icon={<GraduationCap className="w-5 h-5" />} />
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Sword className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">凝武升级</h4>
                  <p className="text-xs text-text-muted mt-1">提升共鸣的基础攻击力，消耗武器素材</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Dna className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">流脉升级</h4>
                  <p className="text-xs text-text-muted mt-1">激活和升级流脉节点，改变技能特性</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">铭文升级</h4>
                  <p className="text-xs text-text-muted mt-1">装配铭文获得额外属性加成</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
                  <ScrollText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">英雄录</h4>
                  <p className="text-xs text-text-muted mt-1">记录英雄故事与记忆，完成获得奖励</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">居所</h4>
                  <p className="text-xs text-text-muted mt-1">自由装修、打造家具，营地等级提升可扩建</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 flex-shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">朝闻道</h4>
                  <p className="text-xs text-text-muted mt-1">元流经验主要来源，完成每日/每周任务</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 新手角色推荐 */}
        <section>
          <SectionHeading title="新手角色推荐" icon={<Star className="w-5 h-5" />} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedChars.map((c) => (
              <Link
                key={c.id}
                href={`/characters/${c.id}`}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="relative h-36 bg-gradient-to-br from-background to-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">{c.emoji}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">{c.tier}</span>
                      <span className="text-xs text-white/80">{c.element}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{c.name}</h3>
                  <p className="text-xs text-text-muted mt-1">{c.title} · {c.role}</p>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed">{c.reason}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 前期资源规划 */}
        <section>
          <SectionHeading title="前期资源规划" icon={<Clock className="w-5 h-5" />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                每日必做（朝闻道）
              </h3>
              <div className="space-y-3">
                {dailyTasks.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.important ? 'bg-primary text-primary-foreground' : 'bg-card-hover text-text-muted'}`}>
                      {i + 1}
                    </div>
                    <div className="text-sm">
                      <span className={t.important ? 'font-medium' : ''}>{t.name}</span>
                      <span className="text-text-muted"> — {t.reward}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                资源使用优先级
              </h3>
              <div className="space-y-3">
                {resourcePriority.map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-lg flex-shrink-0 border border-border">
                      {r.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{r.name}</div>
                      <div className="text-xs text-text-muted">{r.tip}</div>
                    </div>
                    <div className={`text-xs px-2 py-0.5 rounded-full border ${r.priority === '优先' ? 'bg-green-500/10 text-green-400 border-green-500/20' : r.priority === '重要' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-text-muted/10 text-text-muted border-text-muted/20'}`}>
                      {r.priority}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 地图探索入门 */}
        <section>
          <SectionHeading title="地图探索入门" icon={<Compass className="w-5 h-5" />} />
          <div className="bg-card rounded-xl border border-border p-6">
            <p className="text-text-muted mb-6">
              王者大陆分为五大区域，建议按以下顺序解锁，循序渐进提升实力。
            </p>
            <div className="space-y-3">
              {regionOrder.map((r, i) => (
                <div key={r.name} className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{r.name}</h4>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-card-hover text-text-muted">推荐等级 {r.level}</span>
                    </div>
                    <p className="text-sm text-text-muted mt-0.5">{r.desc}</p>
                  </div>
                  <Link href={`/maps/${r.id}`} className="text-xs text-primary hover:text-primary-hover flex items-center gap-0.5 flex-shrink-0">
                    查看 <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
              <div className="flex items-start gap-2 text-sm">
                <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-text-muted">
                  <span className="text-amber-400 font-medium">探索技巧：</span>
                  每到一个新区域，优先解锁所有传送点。使用元流感应可以发现隐藏宝箱和资源点，部分收集品只在特定时间段出现。逍遥游系统会记录你的探索进度，完成度越高奖励越丰厚。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 战斗入门技巧 */}
        <section>
          <SectionHeading title="战斗入门技巧" icon={<Sword className="w-5 h-5" />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                闪避与无敌帧
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                闪避动作中有约0.3秒无敌帧，可以规避任何伤害。看到敌人攻击前摇（红圈/发光）时立即闪避，不要贪刀。连续闪避会消耗体力，注意节奏。
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-red-400" />
                破势机制
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                精英敌人和Boss都有架势条，连续攻击可削减架势。架势清零后敌人进入破势状态，此时攻击伤害大幅提升。优先使用重击和终结技快速破势。
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                元素反应触发
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                先给敌人挂上一种元素（如用水打湿），再用另一种元素攻击触发反应（如火打蒸发）。队伍中建议携带2-3种不同元素的角色，灵活切换共鸣。
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" />
                回复与续航
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                战斗中可通过技能、道具和元素反应（绽放）回复生命。非战斗状态下靠近传送点会自动回血。背包中常备回复料理，不要舍不得用。
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link href="/combat" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-hover">
              查看更多战斗攻略 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionHeading title="常见问题" icon={<HelpCircle className="w-5 h-5" />} />
          <div className="bg-card rounded-xl border border-border divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 推荐阅读 */}
        <section>
          <SectionHeading title="推荐阅读" icon={<BookOpen className="w-5 h-5" />} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/characters" className="group block bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-all">
              <Users className="text-primary mb-3" size={24} />
              <h3 className="font-semibold group-hover:text-primary transition-colors">角色图鉴</h3>
              <p className="text-sm text-text-muted mt-1">全角色技能与定位一览</p>
            </Link>
            <Link href="/maps" className="group block bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-all">
              <Map className="text-primary mb-3" size={24} />
              <h3 className="font-semibold group-hover:text-primary transition-colors">地图探索</h3>
              <p className="text-sm text-text-muted mt-1">宝箱、传送点、收集品位置</p>
            </Link>
            <Link href="/combat/elemental-reactions" className="group block bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-all">
              <Zap className="text-primary mb-3" size={24} />
              <h3 className="font-semibold group-hover:text-primary transition-colors">元素反应</h3>
              <p className="text-sm text-text-muted mt-1">7种元素反应详解与配队</p>
            </Link>
            <Link href="/builder" className="group block bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-all">
              <Compass className="text-primary mb-3" size={24} />
              <h3 className="font-semibold group-hover:text-primary transition-colors">配队模拟</h3>
              <p className="text-sm text-text-muted mt-1">尝试不同的队伍搭配</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function QuickCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center gap-2 mb-3 text-primary">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>
      {children}
    </div>
  );
}

const elements = [
  { name: '火', icon: '🔥', desc: '燃烧' },
  { name: '水', icon: '💧', desc: '蒸发' },
  { name: '雷', icon: '⚡', desc: '感电' },
  { name: '草', icon: '🌿', desc: '绽放' },
  { name: '冰', icon: '❄️', desc: '冻结' },
  { name: '岩', icon: '🪨', desc: '结晶' },
  { name: '光', icon: '✨', desc: '光耀' },
];

const reactions = [
  { combo: '🔥+💧', name: '蒸发', effect: '单次伤害翻倍，爆发核心' },
  { combo: '⚡+✨', name: '光耀', effect: '范围连锁伤害，清怪利器' },
  { combo: '⚡+❄️', name: '超导', effect: '减防30%，破甲辅助' },
  { combo: '💧+❄️', name: '冻结', effect: '控制3秒，创造输出窗口' },
  { combo: '🌿+💧', name: '绽放', effect: '生成治疗区域，持续回血' },
  { combo: '🪨+任意', name: '结晶', effect: '生成元素护盾，吸收伤害' },
];

const recommendedChars = [
  {
    id: 'char-yuanliu',
    name: '元流之子',
    tier: '必练',
    element: '光',
    title: '原初之流',
    role: '主角 · 光元素输出',
    emoji: '✨',
    reason: '故事主角，光元素泛用性强，前期最稳定的输出核心。与任何元素都能配合触发反应。',
  },
  {
    id: 'char-dongfangyao',
    name: '东方曜',
    tier: '强烈推荐',
    element: '雷',
    title: '星辰之子',
    role: '星之队 · 雷元素主C',
    emoji: '⚡',
    reason: '输出天花板，技能倍率高。光耀反应（光+雷）是前期最强群攻手段。',
  },
  {
    id: 'char-xishi',
    name: '西施',
    tier: '推荐',
    element: '草',
    title: '幻纱之灵',
    role: '星之队 · 草元素辅助',
    emoji: '🌿',
    reason: '元素精通Buff + 挂草辅助，燃烧和绽放反应的核心触发器，队伍增伤必备。',
  },
];

const dailyTasks = [
  { name: '每日委托 × 4', reward: '经验、古币、声望', important: true },
  { name: '元素试炼', reward: '突破材料、武器素材', important: true },
  { name: '野外Boss讨伐', reward: '角色突破材料', important: false },
  { name: '地图探索', reward: '宝箱、收集品', important: false },
  { name: '食材采集与烹饪', reward: '战斗Buff道具', important: false },
];

const resourcePriority = [
  { name: '古币', icon: '🪙', tip: '优先用于角色和武器突破', priority: '优先' },
  { name: '突破材料', icon: '💎', tip: '角色突破解锁天赋上限', priority: '优先' },
  { name: '武器强化', icon: '⚔️', tip: '强化到当前等级上限', priority: '重要' },
  { name: '铭文', icon: '📿', tip: '前期主词条正确即可', priority: '重要' },
  { name: '烹饪食材', icon: '🍖', tip: '常备回复料理', priority: '次要' },
  { name: '外观/时装', icon: '👗', tip: '不影响战力，后期再考虑', priority: '次要' },
];

const regionOrder = [
  {
    id: 'region-jixia',
    name: '稷下群山',
    level: '1-15',
    desc: '新手起步区域，稷下学院是主要据点。机关解谜为主，推荐优先解锁观星群山传送点。',
  },
  {
    id: 'region-fengyun',
    name: '织梦原野',
    level: '10-25',
    desc: '开阔的田园区域，丰云野有大量隐藏宝箱在地下和树丛中。推荐携带火元素角色开路。',
  },
  {
    id: 'region-chunxi',
    name: '春溪漫滩',
    level: '15-30',
    desc: '水域众多，水下有隐藏通道。部分区域需完成入学考核后进入，推荐冰元素冻结水面。',
  },
  {
    id: 'region-shuangyun',
    name: '云落远山',
    level: '25-40',
    desc: '高山地形，需要攀爬和滑翔。霜云镇的风暴区域需特定装备抵抗，建议组队探索。',
  },
  {
    id: 'region-dixia',
    name: '地下世界',
    level: '35-50',
    desc: '迷宫式地图，视野受限。天柱墟的青铜巨兽是最大挑战，建议带高防御角色。',
  },
];

const faqs = [
  {
    q: '前期应该优先培养哪个角色？',
    a: '优先集中资源培养元流之子（主角）和东方曜。元流之子光元素泛用性强，东方曜输出天花板。不要平均培养，1个强力主C比4个半吊子角色好用得多。',
  },
  {
    q: '共鸣英雄怎么获得？',
    a: '随着主线剧情推进会自动解锁部分英雄（如东方曜、西施）。其他英雄需要通过完成特定支线任务、探索区域或参与活动获得。查看角色图鉴可了解每个英雄的获取方式。',
  },
  {
    q: '体力不够用了怎么办？',
    a: '体力会自然恢复（每6分钟1点）。前期建议把体力优先用于角色突破材料副本和武器强化材料副本。不要浪费在低级副本上，等波流境界提升后再刷收益更高。',
  },
  {
    q: '怎么快速提升战斗力？',
    a: '战斗力主要由元流等级、凝武等级、铭文品质和技能等级决定。前期快速提升的优先级是：凝武升级 > 流脉激活 > 技能升级 > 铭文。铭文前期凑套装效果即可，不必追求完美副词条。',
  },
  {
    q: '找不到某个宝箱/收集品怎么办？',
    a: '使用元流感应（长按元素感应键）可以发现隐藏物品。部分收集品只在特定时间段出现（白天/夜晚），可通过传送点快速切换时间。地图上可以放置标记提醒自己回头再来。',
  },
  {
    q: '组队玩法有什么奖励？',
    a: '组队挑战Boss时，所有队员都能获得完整掉落，且部分高难Boss必须组队才能挑战。建议加入活跃的公会或好友列表，方便随时组队。',
  },
];