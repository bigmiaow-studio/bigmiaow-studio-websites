# 原场 FIELDWORK

[在线预览](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/fieldwork/) · [原始设计简报](PROMPT.md) · [设计体系](DESIGN.md) · [开发源码](source/)

一个中文技术与服务工作室的概念首页，以「冷灰纤维纸面 × 墨黑工程排版 × 酸橙功能标记 × 扇形线路与点阵信息图」组织策略、系统、产品体验与工程交付内容。

来源为用户直接提供的结构化设计简报，没有外部参考站点、参考图或作者信息。品牌「原场 FIELDWORK」、业务文案、设备与界面内容由 Codex 根据简报创作，均为概念展示；指标、验证报告和工作台记录不是实际客户或业绩资料。

## 查看与开发

本目录的 `index.html`、`assets/`、`fonts/`、`favicon.svg` 和 `paper-fiber.png` 构成完整静态页面，使用相对资源路径，适配 GitHub Pages 的 `/fieldwork/` 子目录。页面字体、图板与纹理均为本地资源，运行时不依赖外链 CDN。请通过 HTTP 服务打开页面，避免浏览器对 `file://` 模块脚本的限制。

```sh
# 在仓库根目录启动静态服务，再打开 http://localhost:8080/fieldwork/
python3 -m http.server 8080
```

开发源码采用 Vite 与原生 HTML、CSS、JavaScript，无运行时框架依赖：

```sh
cd fieldwork/source
npm ci
npm run dev
```

重新生成静态页面及运行检查：

```sh
cd fieldwork/source
npm test
npm run build
```

构建先生成 `source/dist/`，再把页面和本地资源导出至 `fieldwork/`，保留开发源码、文档及截图。字体子集可通过 `python3 scripts/prepare-assets.py` 重新生成。

## 页面与交互

- **纸面首屏**：吸顶导航、酸橙公告条、双行荧光笔标题、七路曲线绘制与沿线信号。节点支持悬停、触摸与键盘提示。
- **能力展示**：四条细线摘要与原创 16:9 系统控制台；演示屏首次进入时上移淡入。
- **场景舞台**：空间运营、现场协同、资产管理和服务触点联动三台设备；五秒轮换，悬停、键盘阅读及手动控制可暂停。
- **验证与连接**：3:2 报告、点阵节点错峰点亮与呼吸、40px/s 连续滚动标签。
- **工作方式**：四阶段标签切换说明与 16:10 原创工作台，使用交叉淡入；工作台整体缩放，避免窄屏裁切。
- **目录与收尾**：六项主题入口、酸橙 CTA、超大字标页脚，以及可生成、复制和下载的项目简报。

项目简报只在当前页面生成，不会提交到服务器，也不发送邮件。手机端采用单列和中央设备展示，包含移动导航、键盘操作和减少动态效果支持。

## 素材与生成记录

- 生成工具：Codex。主题、版式与交互依据保存在 [PROMPT.md](PROMPT.md) 的用户简报中。
- 图板、设备、图标与连接图：使用原创 SVG 和 HTML/CSS 绘制，源代码位于 `source/src/visuals.js`，无外部照片或截图拼贴。
- 纸面纤维：确定性程序绘制，最大 alpha 为 10/255，约 4%；生成记录位于 [paper-fiber.png.json](paper-fiber.png.json)，生成器位于 `source/scripts/prepare-assets.py`。
- 字体：本地 IBM Plex Sans 与 Noto Sans SC，来自 Google Fonts；[字体目录](fonts/) 附两种字体的 SIL Open Font License。随项目保留用于页面文案的字体子集，其他字符可回退至系统字体。
- 截图：入库检查使用 Playwright Chromium 实际渲染，保存于 [shots/](shots/)；它们是页面渲染结果，没有经过图片生成或重绘。

## 验证状态

本次入库执行 `npm ci`、`npm test` 与生产构建，并以仓库 HTTP 服务下的 `/fieldwork/` 页面运行浏览器检查，验证相对资源路径、资源返回状态、运行时错误、五秒轮换、悬停暂停、节点提示、工作阶段切换、键盘操作和简报下载。

响应式检查覆盖 360、390、768、1024、1920px，另有 1440px 桌面截图；检查页面无横向溢出、工作台完整展示、中央设备内容不被底部导航遮挡，以及减少动态效果设置。截图记录包含桌面首屏、完整页面和 390px 手机首屏。

复查这些浏览器行为时，先在仓库根目录启动静态服务，再运行：

```sh
cd fieldwork/source
PREVIEW_URL=http://localhost:8080/fieldwork/ node scripts/browser-check.mjs
```

首次执行浏览器检查需运行 `npx playwright install chromium`。上述为实际执行的功能与布局检查，不代表已经完成独立的 WCAG 全项审计或各品牌真机测试。
