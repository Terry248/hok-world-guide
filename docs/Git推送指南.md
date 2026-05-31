# Git 推送指南（Vercel 自动部署）

> Vercel 与 GitHub 已关联，推送代码后会自动构建部署海外版

## 当前 Git 仓库状态

```bash
cd ./王者荣耀世界攻略站/hok-world-guide
git status
```

## 推送步骤

### 1. 添加所有修改
```bash
git add .
```

### 2. 提交（使用英文提交信息）
```bash
git commit -m "feat: restore community board, add ICP badge, privacy/disclaimer pages, sitemap/robots/ads.txt"
```

### 3. 推送到 GitHub
```bash
git push origin main
```

### 4. 查看 Vercel 部署状态
- 打开 https://vercel.com/dashboard
- 找到 hok-world-guide 项目
- 等待构建完成（约 1-2 分钟）

### 5. 验证海外版
```bash
curl -I https://hok-world-guide.vercel.app/
```

---

## 常见问题

### SSL 错误（SSL_ERROR_SYSCALL）
如果 `git push` 失败：
```bash
# 重试几次
git push origin main

# 或者尝试 HTTP 方式
git remote set-url origin https://github.com/Terry248/hok-world-guide.git
```

### 网络超时
```bash
# 增加缓冲区大小
git config --global http.postBuffer 524288000
```
