import Link from 'next/link';
import { getWorldData, getCharacterOrigin } from '@/lib/world';
import { SectionHeading } from '@/components/shared/section-heading';
import { Tabs } from '@/components/shared/tabs';
import { Globe, MapPin, Star, Landmark, ExternalLink, ChevronRight, Sparkles, Compass } from 'lucide-react';

export default function WorldPage() {
  const world = getWorldData();

  return (
    <div className="relative">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/maps/jixia-xueyuan.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.55)',
        }}
      />
      <div className="relative z-10 space-y-10">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">王者大陆世界观</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            《王者荣耀世界》的故事发生在王者大陆的「逐鹿」区域——稷下学院及周边。
            了解这片大陆的全貌，有助于理解游戏中的世界观与角色背景。
          </p>
        </section>

        {/* 游戏定位 */}
        <section className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">《王者荣耀世界》在王者大陆中的位置</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                王者荣耀世界当前可探索的区域位于王者大陆<strong>东北部「逐鹿」区域</strong>，
                核心舞台是<strong>稷下学院</strong>——由墨子大师的机关和庄周的梦境所守护的学术圣地。
                稷下学院周边还包括玄雍城、南荒等地区，构成了游戏前期的主要探索范围。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">大陆区域：逐鹿</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">核心城市：稷下学院</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">奇迹：云蚕</span>
              </div>
            </div>
          </div>
        </section>

        <Tabs
          tabs={[
            { id: 'regions', label: '九个大区', icon: <Globe className="w-4 h-4" /> },
            { id: 'heroes', label: '角色出身地', icon: <Star className="w-4 h-4" /> },
            { id: 'miracles', label: '十二奇迹', icon: <Sparkles className="w-4 h-4" /> },
          ]}
        >
          {/* === 九个大区 === */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {world.regions.map((region) => (
                <div
                  key={region.id}
                  className={`bg-card rounded-xl border overflow-hidden ${region.isGameWorld ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border'}`}
                >
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      {region.icon && (
                        <img src={region.icon} alt={region.name} className="w-10 h-10 object-contain" />
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{region.name}</h3>
                          {region.isGameWorld && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">游戏主舞台</span>
                          )}
                        </div>
                        <span className="text-xs text-text-muted">{region.position}</span>
                      </div>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed mb-3">{region.description}</p>
                    <div className="space-y-2">
                      {region.cities.map((city) => (
                        <div key={city.name} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">{city.name}</span>
                            {city.subtitle && <span className="text-text-muted text-xs ml-1">· {city.subtitle}</span>}
                            {city.heroes.length > 0 && (
                              <span className="text-text-muted text-xs ml-1">
                                （{city.heroes.slice(0, 3).map(h => h.name).join('、')}
                                {city.heroes.length > 3 ? `等${city.heroes.length}位英雄` : ''}）
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {region.miracle && (
                      <div className="mt-3 p-2 rounded-lg bg-amber-500/5 border border-amber-500/10 text-xs text-amber-400/80">
                        <Sparkles className="w-3 h-3 inline mr-1" />
                        奇迹：{region.miracle.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === 角色出身地 === */}
          <div className="space-y-6">
            <p className="text-sm text-text-muted">
              以下是目前在《王者荣耀世界》中登场的角色，及其在王者大陆世界观中的出身地。
              两个游戏共享同一世界观，角色背景故事一脉相承。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {worldCharacters.map((char) => {
                const origin = getCharacterOrigin(char.name);
                return (
                  <Link
                    key={char.id}
                    href={`/characters/${char.id}`}
                    className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={char.image}
                        alt={char.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {origin && (
                        <div className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full bg-primary/80 text-primary-foreground border border-primary/30">
                          {origin.region} · {origin.city}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{char.name}</h3>
                      <p className="text-xs text-text-muted">{char.title}</p>
                      {origin && (
                        <div className="mt-2 text-xs text-text-muted flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          出身地：{origin.region} · {origin.city}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* === 十二奇迹 === */}
          <div className="space-y-6">
            <p className="text-sm text-text-muted">
              「十二奇迹」是王者大陆世界观中的核心设定，是神明时代留下的超自然造物。
              在《王者荣耀世界》中，稷下学院的「云蚕」奇迹将是玩家接触的第一个奇迹。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {world.miracles.map((m) => (
                <div key={m.name} className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <h3 className="font-semibold">{m.name}</h3>
                  </div>
                  <p className="text-sm text-text-muted">{m.desc}</p>
                  {m.region && (
                    <div className="mt-2 text-xs text-primary">所属区域：{m.region}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Tabs>

        {/* 外链 */}
        <section className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Landmark className="w-5 h-5 text-primary" />
                探索完整的王者大陆
              </h3>
              <p className="text-sm text-text-muted mt-1">
                官方提供了一张可交互的王者大陆地图，你可以缩放、点击不同区域，查看城市详情和英雄关联。
              </p>
            </div>
            <a
              href={world.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              打开官方地图 <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

const worldCharacters = [
  { id: 'char-yuanliu', name: '元流之子', title: '原初之流 · 主角', image: '/images/characters/yuanliu.jpg' },
  { id: 'char-dongfangyao', name: '东方曜', title: '星辰之子 · 雷元素主C', image: '/images/characters/dongfang-yao.jpg' },
  { id: 'char-xishi', name: '西施', title: '幻纱之灵 · 草元素辅助', image: '/images/characters/xishi.jpg' },
  { id: 'char-sunbin', name: '孙膑', title: '逆流之时 · 风元素辅助', image: '/images/characters/sunbin.jpg' },
  { id: 'char-mengya', name: '蒙犽', title: '烈炮小子 · 火元素输出', image: '/images/characters/meng-ya.jpg' },
  { id: 'char-lubandashi', name: '鲁班大师', title: '神匠 · 岩元素辅助', image: '/images/characters/luban-master.jpg' },
  { id: 'char-lengchun', name: '冷春', title: '绯瞳刃舞 · 暗元素输出', image: '/images/characters/lengchun.jpg' },
  { id: 'char-huamulan', name: '花木兰', title: '传说之刃 · 火元素主C', image: '/images/characters/huamulan.jpg' },
  { id: 'char-kai', name: '铠', title: '破灭刃锋 · 冰元素主C', image: '/images/characters/kai.jpg' },
  { id: 'char-wangzhaojun', name: '王昭君', title: '冰雪之华 · 冰元素辅助', image: '/images/characters/wang-zhaojun.jpg' },
  { id: 'char-jialuo', name: '伽罗', title: '破魔之箭 · 光元素输出', image: '/images/characters/jialuo.jpg' },
];
