#!/bin/bash
# 同步修改文件到真正 git 仓库
# 用法：bash docs/同步到真正仓库.sh

set -e

SOURCE_DIR="/Users/open/Desktop/项目/王者荣耀/王者荣耀世界攻略站/hok-world-guide"
TARGET_DIR="/Users/open/Library/Application Support/Claude/hok-world-guide"

echo "🔄 开始同步修改文件到真正 git 仓库..."
echo ""

# 检查目录存在
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ 源目录不存在: $SOURCE_DIR"
  exit 1
fi

if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ 目标目录不存在: $TARGET_DIR"
  exit 1
fi

# 创建备份
echo "📦 备份目标目录..."
BACKUP_DIR="$TARGET_DIR-backup-$(date +%Y%m%d-%H%M%S)"
cp -r "$TARGET_DIR" "$BACKUP_DIR"
echo "✅ 备份完成: $BACKUP_DIR"
echo ""

# 同步修改的文件
echo "📝 同步修改的源文件..."

# 布局相关
cp "$SOURCE_DIR/src/components/layout/footer.tsx" "$TARGET_DIR/src/components/layout/footer.tsx"
cp "$SOURCE_DIR/src/app/layout.tsx" "$TARGET_DIR/src/app/layout.tsx"

# 搜索相关
cp "$SOURCE_DIR/src/lib/search.ts" "$TARGET_DIR/src/lib/search.ts"
cp "$SOURCE_DIR/src/components/search/search-results-client.tsx" "$TARGET_DIR/src/components/search/search-results-client.tsx"
cp "$SOURCE_DIR/src/components/search/search-autocomplete.tsx" "$TARGET_DIR/src/components/search/search-autocomplete.tsx"

# 留言墙相关
cp "$SOURCE_DIR/src/app/api/community/route.ts" "$TARGET_DIR/src/app/api/community/route.ts"
cp "$SOURCE_DIR/src/lib/community.ts" "$TARGET_DIR/src/lib/community.ts"
cp "$SOURCE_DIR/src/components/community/message-board.tsx" "$TARGET_DIR/src/components/community/message-board.tsx"

# 页面
cp "$SOURCE_DIR/src/app/about/page.tsx" "$TARGET_DIR/src/app/about/page.tsx"
cp "$SOURCE_DIR/src/app/search/page.tsx" "$TARGET_DIR/src/app/search/page.tsx"
cp "$SOURCE_DIR/src/app/page.tsx" "$TARGET_DIR/src/app/page.tsx"

# 新增页面
cp "$SOURCE_DIR/src/app/privacy/page.tsx" "$TARGET_DIR/src/app/privacy/page.tsx"
cp "$SOURCE_DIR/src/app/disclaimer/page.tsx" "$TARGET_DIR/src/app/disclaimer/page.tsx"
cp "$SOURCE_DIR/src/app/robots.ts" "$TARGET_DIR/src/app/robots.ts"
cp "$SOURCE_DIR/src/app/sitemap.ts" "$TARGET_DIR/src/app/sitemap.ts"

# 站点配置
cp "$SOURCE_DIR/src/lib/site-config.ts" "$TARGET_DIR/src/lib/site-config.ts"

# 公共资源
cp "$SOURCE_DIR/public/ads.txt" "$TARGET_DIR/public/ads.txt"

# 文档
cp "$SOURCE_DIR/PROJECT-STATUS.md" "$TARGET_DIR/PROJECT-STATUS.md"
cp -r "$SOURCE_DIR/docs/"* "$TARGET_DIR/docs/" 2>/dev/null || true

echo "✅ 文件同步完成"
echo ""

# 进入真正仓库
cd "$TARGET_DIR"

# 添加并提交
echo "📝 提交到 git..."
git add .
git commit -m "feat: restore community, add ICP badge, privacy/disclaimer, search messages, sort by hottest, sitemap/robots/ads.txt" || echo "⚠️ 无新变更可提交"

echo ""
echo "🎉 同步完成！"
echo ""
echo "下一步："
echo "  cd \"$TARGET_DIR\""
echo "  git push origin main"
echo ""
