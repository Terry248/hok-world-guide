#!/bin/bash
# 王者荣耀世界攻略站 - 一键部署脚本
# 使用方法: 上传此脚本到服务器后执行 bash 一键部署.sh

set -e

echo "🚀 开始部署王者荣耀世界攻略站..."

# 配置
PROJECT_DIR="/var/www/hok-world-guide"
BACKUP_DIR="/var/www/hok-world-guide-backup-$(date +%Y%m%d-%H%M%S)"
SERVER_IP="110.40.181.128"

echo "📦 1. 备份当前版本..."
if [ -d "$PROJECT_DIR" ]; then
  sudo cp -r "$PROJECT_DIR" "$BACKUP_DIR"
  echo "✅ 备份完成: $BACKUP_DIR"
fi

echo "📦 2. 安装依赖..."
cd "$PROJECT_DIR"
npm install --production

echo "🔨 3. 构建项目..."
npm run build

echo "🔄 4. 重启服务..."
pm2 restart hok-world-guide || pm2 start ecosystem.config.js

echo "✅ 部署完成！"
echo ""
echo "🌐 访问地址:"
echo "  - 国内版: https://hokworld.site"
echo "  - IP直接访问: http://$SERVER_IP"
echo ""
echo "📊 检查状态:"
echo "  pm2 status"
echo "  pm2 logs hok-world-guide"
