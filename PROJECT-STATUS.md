# 王者荣耀世界攻略站 — 项目进度总览

**最后更新:** 2026-05-09 16:33  
**项目路径:** `~/Library/Application Support/Claude/hok-world-guide`  
**技术栈:** Next.js 16.2.5 + React 19.2.4 + Tailwind CSS v4 + TypeScript  
**总文件数:** 121个源码文件 + 38个公共资源

---

## 📊 Git 提交历史（最近20条）

```
f77a8bd feat: 角色详情页头像点击灯箱查看全身像 + 角色图鉴背景改为王昭君 + 本地补全缩略图
20fa84f perf: 角色卡片使用400x225缩略图，单张从228KB降至14KB，大幅提升列表页加载速度
9abbfc0 optimize: 压缩全站背景图，总计从2.8MB降至380KB
ed3e832 fix: 修复macOS垃圾文件导致的404 + Nginx gzip压缩 + 图片优化部署
7232e7d docs: 更新项目进度和部署文档
a8368ad fix: 修复构建问题，移除Google Fonts依赖
2e53f1e docs: 项目进度总览文档 PROJECT-STATUS.md
905cdcf chore: 添加桌面备份同步规则到 AGENTS.md
4eee0f6 feat: 稷下留言墙 - 玩家交流板块
5b8857a feat: 武器大全添加类型图标与渐变配色展示
abea4dd fix: 全局检查修复数据不一致与联动缺失
e7f36b0 feat: 世界观角色出身地添加角色全身像图片
89ac0ff feat: 王者大陆世界观页面
7dac526 新手指南重构：删除基础操作速查，4个选项卡整合内容，扩大点击区域
11b94f2 feat: 新手指南全面重写，整合官网新人专区内容
a9548f8 feat: 丰富攻略内容 + 修复长安城404 + 分类筛选
55ad34a feat: 全站搜索 + 预选下拉 + 模糊搜索
29cd72e feat: 完善地图区域数据、背景图和配队模拟器
bfa22d4 feat: 添加全局悬浮广告位，支持关闭与导航重置
f68808b feat: 王者荣耀世界攻略网站完整数据录入
```

---

## ✅ 已完成功能

### 1. 基础架构
- [x] Next.js App Router 项目结构
- [x] Tailwind CSS v4 样式系统（暗色主题）
- [x] 全局布局（Header + Footer + 背景图）
- [x] 响应式设计（移动端适配）
- [x] 全局背景图 + 暗色遮罩（`boxShadow: inset 0 0 0 2000px rgba(0,0,0,0.5)`）

### 2. 导航与搜索
- [x] 顶部导航栏（10个入口）
- [x] 全站搜索（服务端 `searchAll()` + 客户端自动完成）
- [x] 模糊搜索（Levenshtein + 拼音 + 多字段加权）
- [x] 搜索 API 路由 `/api/search`
- [x] 搜索结果分类筛选（角色/武器/地图/地点/攻略/世界观）

### 3. 首页 (`/`)
- [x] Hero 区域 + 搜索框
- [x] 7个快捷链接卡片（角色/武器/地图/配队/新手/世界观/留言墙）
- [x] 热门英雄展示（6个）
- [x] 最新攻略（3篇）
- [x] 地图探索区域（5个）

### 4. 角色图鉴 (`/characters`)
- [x] 11位官方角色数据
- [x] 角色卡片（脸部居中展示 `aspect-[4/3] object-cover object-top`）
- [x] **角色缩略图**（400x225，单张14KB，列表页加载飞快）
- [x] 元素/武器类型/稀有度筛选
- [x] 角色详情页（背景图 + 技能/命座/出装/背景故事）
- [x] **头像点击灯箱**（查看完整全身像 + 右键保存到本地）
- [x] 世界观出身地关联（10位角色有映射）
- [x] 配队推荐（ recommendedTeams ）

**角色列表:**
| 角色 | 元素 | 武器 | 出身地 |
|------|------|------|--------|
| 元流之子 | 光 | 剑 | 逐鹿·稷下学院 |
| 东方曜 | 雷 | 剑 | 逐鹿·稷下学院 |
| 西施 | 草 | 法杖 | 逐鹿·稷下学院 |
| 孙膑 | 风 | 法杖 | 逐鹿·稷下学院 |
| 蒙犽 | 火 | 弓 | 逐鹿·稷下学院 |
| 鲁班大师 | 雷 | 锤 | 逐鹿·稷下学院 |
| 冷春 | 暗 | 剑 | 逐鹿·稷下学院 |
| 花木兰 | 火 | 剑 | 河洛·长城 |
| 铠 | 冰 | 剑 | 河洛·长城 |
| 王昭君 | 冰 | 法杖 | 北荒·狼旗 |
| 伽罗 | 风 | 弓 | 云中漠地·千窟城 |

### 5. 武器大全 (`/weapons`)
- [x] 24件武器数据
- [x] 类型图标 + 渐变配色展示（9种武器类型）
- [x] 类型筛选 + 搜索
- [x] 武器详情页（属性/精炼效果/获取方式）

### 6. 地图探索 (`/maps`)
- [x] 5大探索区域
- [x] 区域卡片（封面图 + 地点数量）
- [x] 区域详情页（宝箱/传送点/收集品/子地点）
- [x] 14个子地点（图片 + 描述）
- [x] 世界观位置提示（"位于王者大陆「逐鹿」区域"）

**区域列表:**
| 区域 | 子地点数 | 宝箱 | 传送点 |
|------|---------|------|--------|
| 稷下群山 | 4 | 8 | 4 |
| 织梦原野 | 3 | 6 | 3 |
| 春溪漫滩 | 2 | 6 | 3 |
| 云落远山 | 3 | 6 | 3 |
| 地下世界 | 2 | 8 | 3 |

### 7. 世界观 (`/world`)
- [x] 王者大陆9大区域总览
- [x] 3个选项卡（九个大区/角色出身地/十二奇迹）
- [x] 角色出身地卡片（全身像 + 出身地标签）
- [x] 官方地图外链
- [x] 数据从 `pvp.qq.com` 王者大陆地图提取

### 8. 任务攻略 (`/quests`)
- [x] 6篇攻略文章
- [x] 分类筛选（主线/支线/日常/探索/角色）
- [x] Markdown 渲染

### 9. 战斗攻略 (`/combat`)
- [x] 4篇攻略文章
- [x] Boss攻略/战斗机制/角色养成分类

### 10. 配队模拟器 (`/builder`)
- [x] 4人队伍选择
- [x] 3套预设阵容（星之队/北方阵线/元素反应队）
- [x] 羁绊效果计算（星之队/长城守卫军/稷下学院）
- [x] 7种元素共鸣
- [x] 队伍构成分析与建议

### 11. 新手指南 (`/beginner`)
- [x] 4个选项卡（核心玩法/探索世界/角色养成/常见问题）
- [x] 整合官网19个游戏术语
- [x] 11位英雄官方称号
- [x] FAQ 常见问题

### 12. 稷下留言墙 (`/community`) ⭐ 最新
- [x] 服务端 JSON 文件存储
- [x] API 路由（GET/POST/PATCH）
- [x] 四大分类（建议反馈/游戏心得/求助提问/闲聊吹水）
- [x] 发布留言 + 点赞
- [x] 分类筛选
- [x] 5条预置示例留言
- [x] 时间格式化（刚刚/分钟前/小时前/天前）

### 13. 法律合规页面（AdSense必需）
- [x] 隐私政策 (`/privacy`) — 包含Cookie、数据收集、广告说明
- [x] 免责声明 (`/disclaimer`) — 非官方声明、知识产权、使用风险

### 14. SEO优化
- [x] `robots.txt` — 允许爬虫访问，指向sitemap
- [x] `sitemap.xml` — 动态生成，包含60+页面URL

### 15. 其他页面
- [x] 关于页 (`/about`) — 已完善，含功能介绍和法律链接
- [x] 404 页面
- [x] 全站搜索页 (`/search`)

---

## 📁 关键目录结构

```
├── public/images/
│   ├── characters/          # 11张角色全身像 (1920x900)
│   ├── maps/                # 5张区域封面 + 14张子地点图
│   └── weapons/             # (暂无官方武器图片)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── search/route.ts
│   │   │   └── community/route.ts
│   │   ├── characters/
│   │   ├── weapons/
│   │   ├── maps/
│   │   ├── quests/
│   │   ├── combat/
│   │   ├── builder/
│   │   ├── beginner/
│   │   ├── world/
│   │   ├── community/
│   │   ├── search/
│   │   ├── about/
│   │   └── page.tsx
│   ├── components/
│   │   ├── characters/
│   │   ├── weapons/
│   │   ├── maps/
│   │   ├── guides/
│   │   ├── builder/
│   │   ├── search/
│   │   ├── community/
│   │   ├── layout/
│   │   └── shared/
│   ├── data/
│   │   ├── characters/      # 11个角色详情 JSON
│   │   ├── weapons/         # 24件武器 JSON
│   │   ├── maps/            # 5个区域详情 JSON
│   │   ├── world/           # 王者大陆世界观 JSON
│   │   ├── community/       # 留言数据 JSON
│   │   ├── quests/          # 任务攻略 Markdown
│   │   └── combat/          # 战斗攻略 Markdown
│   ├── lib/
│   │   ├── characters.ts
│   │   ├── weapons.ts
│   │   ├── maps.ts
│   │   ├── guides.ts
│   │   ├── search.ts
│   │   ├── world.ts
│   │   ├── community.ts
│   │   ├── fuzzy-search.ts
│   │   ├── weapon-config.ts
│   │   └── constants.ts
│   └── types/index.ts
```

---

## 🔧 待办事项 / 下一步计划

### 国内版部署（hokworld.site）
- [x] 购买腾讯云服务器（4核4G3M，79元/年）
- [x] 服务器环境配置（Node.js 22 + PM2 + Nginx）
- [x] 代码上传服务器（`/var/www/hok-world-guide/`）
- [x] 构建并启动（67个页面全部生成，PM2守护）
- [x] Nginx反向代理（80→3000，gzip压缩）
- [x] 图片压缩（背景图2.8MB→380KB，角色图1.6MB→228KB）
- [x] 缩略图生成（11张400x225缩略图，卡片使用）
- [x] 修复404（清理macOS `._*` 垃圾文件）
- [x] 域名实名认证通过（2026-05-09）
- [x] 购买域名 `hokworld.site`
- [x] 域名解析到服务器
- [x] 申请SSL证书（HTTPS）
- [x] ICP备案提交（2026-05-09，等待审核）
- [x] 留言墙隐藏（备案合规）
- [ ] ⏳ ICP备案通过（预计7-15个工作日）
- [ ] ⏳ 腾讯优量汇申请（等备案）

### 海外版部署（hok-world-guide.vercel.app）
- [x] GitHub仓库创建（Terry248/hok-world-guide）
- [x] Vercel自动部署
- [x] Google AdSense申请（2026-05-09，等待审核）
- [x] AdSense代码部署（ca-pub-4441684825498793）
- [x] 隐私政策/免责声明/完善关于页
- [x] SEO优化（robots.txt + sitemap.xml）
- [ ] ⏳ Google AdSense审核通过（预计1-14天）
- [ ] ⏳ 创建广告单元并展示

### 功能优化
- [ ] **官方武器图片获取** — 目前用类型图标代替，需从官网抓取
- [ ] **搜索索引纳入留言墙** — 让搜索也能找到留言内容
- [ ] **角色技能图标** — 每个技能的专属图标
- [ ] **命座图标** — 6个命座的视觉展示
- [ ] **留言墙回复功能** — 支持楼中楼回复
- [ ] **留言墙排序** — 按热度/最新排序
- [ ] **武器对比工具** — 并排对比两件武器属性
- [ ] **角色评分系统** — 玩家可以对角色打分
- [ ] **攻略文章评论** — 每篇攻略下可留言讨论

### 低优先级
- [ ] **RSS 订阅** — 攻略更新推送
- [ ] **分享功能** — 生成分享卡片
- [ ] **夜间模式切换** — 当前只有暗色主题
- [ ] **多语言支持** — 英文版
- [ ] **PWA 支持** — 离线浏览

---

## 🚀 部署说明

### 开发环境
```bash
cd ~/Library/Application\ Support/Claude/hok-world-guide
npm run dev        # 启动开发服务器 localhost:3000
```

### 生产部署
```bash
npm run build      # 构建（当前因 Google Fonts 报错，需手动处理）
npm run start      # 启动生产服务器
```

**构建状态:** ✅ 已修复（2026-05-08）
- 移除了 `next/font/google` 依赖（国内网络下载失败）
- 改用系统字体栈
- 修复了 `fuzzy-search.ts` 中重复属性名的 TS 错误
- 本地构建通过，67个页面全部正常生成

### 服务器部署状态 ✅ 已完成
- ✅ 腾讯云轻量服务器已购买（4核4G3M，79元/年）
- ✅ 服务器IP：`110.40.181.128`（IPv4） / `2402:4e00:c030:7600:bad6:572c:26a0:0`（IPv6）
- ✅ Node.js 22 + npm 10.9.7 已安装
- ✅ PM2 全局安装，进程守护已配置
- ✅ Nginx 反向代理（80→3000，gzip压缩，静态缓存）
- ✅ 代码已部署到 `/var/www/hok-world-guide/`
- ✅ 构建成功（67个页面：14静态 + 37 SSG + 2 API + 1动态页）
- ✅ 网站可通过 `http://110.40.181.128/` 访问
- ✅ 图片压缩（jpegoptim + pngquant）
- ✅ 角色缩略图（11张400x225）

**部署路径:** `/var/www/hok-world-guide/`
**运行方式:** `next start` + PM2 守护进程 + Nginx 反向代理
**留言墙数据:** `src/data/community/messages.json`（需服务器写入权限）
**图片资源:** `public/images/`（部署时已一并上传）

### 待办事项（下一步）
- ⏳ 域名实名认证审核中
- ⏳ 购买域名（推荐 `hokworld.world`）
- ⏳ 域名解析到服务器
- ⏳ ICP备案（网站名称：游戏学习笔记）
- ⏳ 申请SSL证书（HTTPS）
- ⏳ 接入广告联盟

---

## 📦 数据来源

| 内容 | 来源 |
|------|------|
| 角色数据/描述 | `https://world.qq.com/web202603/index.html` |
| 角色全身像 | `https://game.gtimg.cn/images/world/web202603/heros/{id}/bg.jpg` |
| 区域封面图 | `https://game.gtimg.cn/images/world/ngrhomeimage/videos/maps/cover{N}.jpg` |
| 子地点图片 | `https://game.gtimg.cn/images/world/ngrhomeimage/maps/pc/map{N}_{M}.jpg` |
| 王者大陆世界观 | `https://pvp.qq.com/act/a20260320map/index.html` |
| 新手指南术语 | `https://world.qq.com/cp/a20260410xsgl/` |

---

## 📝 关键设计决策记录

1. **图片策略:** 角色卡片用 `aspect-[4/3] object-cover object-top` 展示脸部，详情页用全身像做背景
2. **搜索架构:** 服务端 `searchAll()` 初始加载 + `/api/search` 自动完成，避免客户端使用 `fs`
3. **世界观定位:** 王者大陆地图作为背景参考，重点突出「逐鹿·稷下学院」是游戏主舞台
4. **留言墙存储:** 服务端 JSON 文件，适合小流量场景；流量大了需迁移到数据库
5. **武器展示:** 官网无武器图片，用 Lucide 类型图标 + 渐变配色作为替代方案
