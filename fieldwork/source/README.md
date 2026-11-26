# 原场 FIELDWORK

原创技术与服务工作室单页首页。Vite + 原生 JavaScript，无运行时框架依赖，字体与图形资源均随项目提供。

## 本地运行

```sh
npm install
npm run dev
```

以终端显示的本地地址为准。生产构建使用 `npm run build`，生成文件先写入 `dist/`，再导出至上一级 `fieldwork/` 案例目录。构建资源使用相对路径，适配 GitHub Pages 子目录。

## 替换主题

- `src/content.js`：品牌、首屏、七项连接能力、场景、工作阶段和目录内容。
- `src/main.js`：分区标题、介绍、导航与 CTA。
- `src/visuals.js`：原创界面、线路、设备与节点图。
- `src/styles.css`：颜色、排版、材质、响应式和动效变量。

字体采用本地 IBM Plex Sans 与 Noto Sans SC。更换大量文案后，可运行 `python3 scripts/prepare-assets.py` 重新生成字体子集。字体许可证位于 `public/fonts/licenses/`。

## 已实现

七路曲线绘制与信号流动、节点提示、首次屏幕入场、五秒场景轮换与暂停、键盘标签操作、点阵呼吸、等速滚动标签、工作台交叉淡入、移动导航与减少动态效果支持。

CTA 可在本地生成、复制和下载项目简报，不会把内容发送至外部服务。界面中的业务数据与报告均为概念示例。

## 检查

```sh
npm test
npm run build
node scripts/browser-check.mjs
```

浏览器检查默认使用 `http://localhost:5174/`，可通过 `PREVIEW_URL` 指定地址。首次运行需执行 `npx playwright install chromium`。
