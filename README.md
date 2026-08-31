# MRG Playground · 我的游乐场

个人网页项目合集，通过一个炫酷的导航首页统一入口，由 GitHub Pages 托管。

访问地址：**https://www.mrg123.com** （或 `mrg123.github.io`）

## 项目清单

| 项目 | 路径 | 类型 | 说明 |
|---|---|---|---|
| 🏠 导航首页 | `/` | 门户 | 明亮浅色海报网格，纯静态 HTML/CSS，无 JavaScript |
| 🌺 冒险的女孩 | `/adventure-girl/` | 游戏 | 3D 暗夜迷宫冒险，100 关 |
| 🛷 赛博雪橇 2077 | `/cyber-sleigh-2077/` | 游戏 | 赛博朋克风跑酷，收集礼物躲避防火墙 |
| 🐱 雪糕猫 | `/xuegao-cat/` | 创意 | 手绘马卡龙风猫咪生成器 |
| 🎨 Draw Now 绘画 | `/draw-now/` | 应用 | 绘画应用官方落地页 |
| 🧭 MediaNav 导航 | `/nav/` | 工具 | 个人网站导航系统 |

## 目录规范

**每个项目独立一个子目录**，根目录只保留站点级文件（导航首页、favicon、SEO、广告、域名等）。新增项目 = 新建一个子目录 + 在导航首页的 `PROJECTS` 数组登记一条，不要在根目录堆项目文件。

## 目录结构

```
mrg123.github.io/
├── index.html               # 导航首页（项目发射台）
├── favicon.ico              # 站点图标
├── CNAME                    # 自定义域名 www.mrg123.com
├── ads.txt                  # Google AdSense
├── robots.txt / sitemap.xml # SEO
├── .gitignore
├── adventure-girl/          # 3D 迷宫游戏（含 three.min.js）
├── cyber-sleigh-2077/       # 赛博雪橇游戏
├── xuegao-cat/              # 雪糕猫生成器
├── draw-now/                # Draw Now 落地页
└── nav/                     # MediaNav 导航系统
```

## 如何新增一个项目

1. 把项目文件放进一个新目录（例如 `my-game/`）。
2. 打开根目录 `index.html`，复制一个已有的 `<a class="card">…</a>` 区块到末尾并修改内容：

```html
<a class="card" href="/my-game/">
  <div class="poster" style="background:linear-gradient(160deg, #ede5f8, #d9c9f1)">
    <div class="p-head">
      <span class="p-num">07</span>
      <span class="p-name">我的新游戏</span>
    </div>
    <span class="p-emoji">🎮</span>
    <span class="p-desc">一句话介绍这个项目。</span>
    <span class="p-arrow">→</span>
  </div>
</a>
```

> 外链请加 `target="_blank" rel="noopener"`。

3. （可选）在 `sitemap.xml` 里补一条 `<url>`。
4. 提交推送即可，导航首页会自动显示新卡片。

## 部署

仓库默认分支为 `Home`，GitHub Pages 指向该分支根目录。推送后自动发布。
