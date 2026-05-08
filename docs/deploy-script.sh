#!/bin/bash
# 王者荣耀世界攻略站 - 服务器部署脚本
# 用法: ssh root@服务器IP < deploy-script.sh

set -e

echo "========================================"
echo "  王者荣耀世界攻略站 - 自动部署脚本"
echo "========================================"

# 1. 更新系统并安装依赖
echo "[1/7] 更新系统并安装依赖..."
apt-get update -y
apt-get install -y curl git nginx certbot python3-certbot-nginx

# 2. 安装 Node.js (v22 LTS)
echo "[2/7] 安装 Node.js..."
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs

# 3. 安装 PM2
echo "[3/7] 安装 PM2..."
npm install -g pm2

# 4. 创建应用目录
echo "[4/7] 创建应用目录..."
mkdir -p /var/www/hok-world-guide
cd /var/www/hok-world-guide

# 5. 克隆/上传代码（这里需要手动上传代码包后解压）
echo "[5/7] 准备代码..."
echo "  请将项目代码上传到 /var/www/hok-world-guide/"
echo "  或使用 git clone 拉取代码"

# 6. 安装依赖并构建
echo "[6/7] 安装依赖并构建..."
# npm install
# npm run build

# 7. 配置 PM2 启动
echo "[7/7] 配置 PM2..."
cat > /var/www/hok-world-guide/ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'hok-world-guide',
    cwd: '/var/www/hok-world-guide',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '1G',
    error_file: '/var/log/hok-world-guide/err.log',
    out_file: '/var/log/hok-world-guide/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    restart_delay: 3000
  }]
};
EOF

mkdir -p /var/log/hok-world-guide

echo ""
echo "========================================"
echo "  基础环境安装完成！"
echo "========================================"
echo ""
echo "下一步："
echo "  1. 将项目代码上传到 /var/www/hok-world-guide/"
echo "  2. 运行: cd /var/www/hok-world-guide && npm install"
echo "  3. 运行: npm run build"
echo "  4. 运行: pm2 start ecosystem.config.js"
echo "  5. 配置 Nginx 反向代理到 localhost:3000"
echo ""
echo "SSL证书:"
echo "  certbot --nginx -d 你的域名.com"
