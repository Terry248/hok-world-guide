<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# 项目维护规则

## 🔁 桌面备份同步（强制）

**每次更新代码后，必须同步到桌面备份文件夹。**

```bash
rsync -av --delete \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.git' \
  ~/Library/Application\ Support/Claude/hok-world-guide/ \
  ~/Desktop/王者荣耀世界攻略站/hok-world-guide/
```

**触发时机：**
- ✅ 每次 `git commit` 之后
- ✅ 每次修改 PROJECT-STATUS.md 之后
- ✅ 每次会话结束前（如果有代码改动）

**桌面备份路径：** `~/Desktop/王者荣耀世界攻略站/hok-world-guide/`

**最后同步时间：** 2026-05-08 05:28
