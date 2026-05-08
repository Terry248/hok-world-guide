<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# 项目维护规则

## 🔁 桌面备份同步（强制）

**每次更新代码后，必须同步到桌面备份文件夹。**

### 同步内容（两部分都要做）

**1. 完整项目源码（hok-world-guide/）**
```bash
rsync -av --delete \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.git' \
  --exclude='._*' \
  ~/Library/Application\ Support/Claude/hok-world-guide/ \
  ~/Desktop/王者荣耀世界攻略站/hok-world-guide/
```

**2. 中文分类文件夹（页面代码/组件代码/数据文件等）**
```bash
# 页面代码
mkdir -p ~/Desktop/王者荣耀世界攻略站/页面代码/{世界观,留言墙,搜索,全站搜索}
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/首页/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/world/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/世界观/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/community/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/留言墙/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/search/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/搜索/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/characters/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/角色图鉴/列表页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/characters/\[id\]/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/角色图鉴/详情页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/weapons/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/武器大全/列表页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/weapons/\[id\]/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/武器大全/详情页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/maps/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/地图探索/列表页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/maps/\[region\]/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/地图探索/区域详情页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/quests/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/任务攻略/列表页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/quests/\[slug\]/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/任务攻略/详情页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/combat/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/战斗攻略/列表页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/combat/\[slug\]/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/战斗攻略/详情页.tsx
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/builder/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/配队模拟/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/beginner/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/新手指南/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/about/page.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/关于/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/layout.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/布局与样式/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/globals.css ~/Desktop/王者荣耀世界攻略站/页面代码/布局与样式/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/app/not-found.tsx ~/Desktop/王者荣耀世界攻略站/页面代码/布局与样式/

# 组件代码
mkdir -p ~/Desktop/王者荣耀世界攻略站/组件代码/{社区组件,搜索组件}
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/components/community/*.tsx ~/Desktop/王者荣耀世界攻略站/组件代码/社区组件/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/components/search/*.tsx ~/Desktop/王者荣耀世界攻略站/组件代码/搜索组件/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/components/characters/*.tsx ~/Desktop/王者荣耀世界攻略站/组件代码/角色组件/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/components/weapons/*.tsx ~/Desktop/王者荣耀世界攻略站/组件代码/武器组件/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/components/maps/*.tsx ~/Desktop/王者荣耀世界攻略站/组件代码/地图组件/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/components/builder/*.tsx ~/Desktop/王者荣耀世界攻略站/组件代码/配队组件/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/components/guides/*.tsx ~/Desktop/王者荣耀世界攻略站/组件代码/攻略组件/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/components/layout/*.tsx ~/Desktop/王者荣耀世界攻略站/组件代码/布局组件/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/components/shared/*.tsx ~/Desktop/王者荣耀世界攻略站/组件代码/通用组件/

# 数据文件
mkdir -p ~/Desktop/王者荣耀世界攻略站/数据文件/{世界观数据,留言数据}
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/data/world/*.json ~/Desktop/王者荣耀世界攻略站/数据文件/世界观数据/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/data/community/*.json ~/Desktop/王者荣耀世界攻略站/数据文件/留言数据/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/data/characters/*.json ~/Desktop/王者荣耀世界攻略站/数据文件/角色数据/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/data/weapons/*.json ~/Desktop/王者荣耀世界攻略站/数据文件/武器数据/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/data/maps/*.json ~/Desktop/王者荣耀世界攻略站/数据文件/地图数据/
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/data/quests/*.md ~/Desktop/王者荣耀世界攻略站/数据文件/攻略文章/任务攻略/ 2>/dev/null || true
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/data/combat/*.md ~/Desktop/王者荣耀世界攻略站/数据文件/攻略文章/战斗攻略/ 2>/dev/null || true

# 工具函数
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/lib/*.ts ~/Desktop/王者荣耀世界攻略站/工具函数/

# 类型定义
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/types/*.ts ~/Desktop/王者荣耀世界攻略站/类型定义/

# 状态管理
cp ~/Library/Application\ Support/Claude/hok-world-guide/src/stores/*.ts ~/Desktop/王者荣耀世界攻略站/状态管理/

# 项目配置
cp ~/Library/Application\ Support/Claude/hok-world-guide/package.json ~/Desktop/王者荣耀世界攻略站/项目配置/
cp ~/Library/Application\ Support/Claude/hok-world-guide/tsconfig.json ~/Desktop/王者荣耀世界攻略站/项目配置/
cp ~/Library/Application\ Support/Claude/hok-world-guide/next.config.ts ~/Desktop/王者荣耀世界攻略站/项目配置/
cp ~/Library/Application\ Support/Claude/hok-world-guide/postcss.config.mjs ~/Desktop/王者荣耀世界攻略站/项目配置/
cp ~/Library/Application\ Support/Claude/hok-world-guide/eslint.config.mjs ~/Desktop/王者荣耀世界攻略站/项目配置/
cp ~/Library/Application\ Support/Claude/hok-world-guide/.gitignore ~/Desktop/王者荣耀世界攻略站/项目配置/

# 项目说明
cp ~/Library/Application\ Support/Claude/hok-world-guide/PROJECT-STATUS.md ~/Desktop/王者荣耀世界攻略站/项目说明/
```

### 触发时机
- ✅ 每次 `git commit` 之后
- ✅ 每次修改 PROJECT-STATUS.md 之后
- ✅ 每次会话结束前（如果有代码改动）

### 桌面备份路径
- 完整项目：`~/Desktop/王者荣耀世界攻略站/hok-world-guide/`
- 中文分类：`~/Desktop/王者荣耀世界攻略站/{页面代码,组件代码,数据文件,工具函数,类型定义,状态管理,项目配置,项目说明}/`

**最后同步时间：** 2026-05-08 13:41
