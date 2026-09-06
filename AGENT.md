# AGENT.md · MRG Playground 站点维护手册

> 本站点由 AI 维护和管理。本文件是 AI 代理的操作依据——修改任何页面前先读本文件，改动后遵守「变更清单」同步更新相关文件。

站点：\*\*<https://www.mrg123.com**（GitHub> Pages，仓库默认分支 `Home`，推送后自动发布）

## 项目登记表

| #  | 项目            | 路径                      | 分类  | 说明                                                            |
| -- | ------------- | ----------------------- | --- | ------------------------------------------------------------- |
| —  | 导航首页          | `/`                     | 门户  | 明亮浅色海报网格，纯静态 HTML/CSS，无 JavaScript                            |
| 01 | 冒险的女孩         | `/adventure-girl/`      | 游戏  | 3D 暗夜迷宫冒险，100 关（含 three.min.js）                               |
| 02 | 赛博雪橇 2077     | `/cyber-sleigh-2077/`   | 游戏  | 赛博朋克风跑酷，收集礼物躲避防火墙                                             |
| 03 | 雪糕猫           | `/xuegao-cat/`          | 创意  | 手绘马卡龙风猫咪生成器                                                   |
| 04 | Draw Now 绘画   | `/draw-now/`            | 创意  | 专业绘画应用落地页                                                     |
| 05 | MediaNav 导航   | `/nav/`                 | 工具  | 个人网站导航系统                                                      |
| 06 | 世纪回响          | `/century-timeline/`    | 研究  | 自然灾害 × 金融危机：1926 ⇄ 2026 双轨时间线                                 |
| —  | Melomancy App | `/Melomancy App/`       | 建设中 | iOS AI 音乐应用，目前仅有法务文档（privacy / terms），**暂无导航卡片**，未来完成后再单独做介绍页 |
| —  | 企业官网模板        | `/enterprise-template/` | 本地  | 通信 / 物流企业可复用单页模板。**已在 `.gitignore`（`/enterprise-template`）：不部署、无导航卡片、不入 sitemap**，仅作本地开发素材 |

## 硬约束（必须遵守）

1. **相对路径**：所有资源引用一律用相对路径（`nav/` 而非 `/nav/`），保证本地 `file://` 直接打开可用。
2. **自包含**：子项目尽量不依赖外部资源；导航首页无 JS、无外部图片。
3. **目录纪律**：每个项目一个子目录，根目录只放站点级文件（首页、favicon、CNAME、ads.txt、robots.txt、sitemap.xml、本手册）。
4. **设计语言**：导航首页卡片 SVG 采用「墨色线稿 + 金色点缀」风格，配 `draw`（描边动画）/ `fade`（淡入）/ `speed`（虚线流动）class；含悬停微交互与 `prefers-reduced-motion` 降级。
5. **卡片分类标签**（`p-tag`）只能从既有类别中选：游戏 / 创意 / 工具 / 研究。
6. **git 忽略项目不入公开引用**：凡 `.gitignore` 中的本地目录（如 `enterprise-template/`），不得出现在 `index.html` 卡片、`sitemap.xml` 或 meta 描述中——否则线上出现死链。
7. 外链必须加 `target="_blank" rel="noopener"`。

## 变更清单（改一处须联动）

| 改动        | 须同步                                                       |
| --------- | --------------------------------------------------------- |
| 新增 / 删除项目 | `index.html` 卡片区、本文件登记表、`sitemap.xml`                     |
| 新增卡片      | 补一条 `.card:nth-child(N) { --d: …s }` 入场动画延迟               |
| 修改首页 meta | `index.html` 的 title / description / keywords / og 四处保持一致 |

## 新增项目流程

1. 项目文件放入新子目录（如 `my-game/`）。
2. 打开根目录 `index.html`，复制一张已有 `<a class="card">…</a>` 到末尾并修改：

```html
<a class="card" href="my-game/">
  <div class="poster" style="background:linear-gradient(160deg, #ede5f8, #d9c9f1)">
    <div class="p-head">
      <div class="p-row">
        <span class="p-num">08</span>
        <span class="p-name">我的新项目</span>
      </div>
      <span class="p-tag">游戏</span>
    </div>
    <svg class="p-art" viewBox="0 0 80 80" role="img" aria-label="我的新项目">
      <!-- 墨色线稿 + 金色点缀：class="draw" 描边动画 / class="fade" 淡入 -->
    </svg>
    <span class="p-desc">一句话介绍这个项目。</span>
    <span class="p-arrow" aria-hidden="true">→</span>
  </div>
</a>
```

1. 在 `sitemap.xml` 补一条 `<url>`。
2. 更新本文件登记表。
3. 提交推送（分支 `Home`），GitHub Pages 自动发布。

## 验证要点（每次改动后自检）

* HTML 标签闭合无误、卡片链接目标目录存在

* 所有站内链接为相对路径（`file://` 打开可跳转）

* 新卡片有 `--d` 动画延迟；`p-tag` 类别合法

* `sitemap.xml` 与实际卡片一一对应

