# 未定 UNTITLED

[在线预览](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/untitled/) · [原始设计简报](PROMPT.md) · [设计体系](DESIGN.md) · [桌面截图](screenshots/desktop.jpg) · [移动截图](screenshots/mobile.jpg)

一个中性的中文灵感与作品展示首页，采用「浅白点阵纸面 × 明黄与电光蓝 × 超粗无衬线标题 × 黑边硬阴影拼贴」。从居中作品预览，经双色主题入口、静态灵感板，进入可筛选的作品目录。

参考来源为用户提供的完整结构化设计简报，没有提供外部参考站点或作者信息。用户授权自主起名，Codex 补充品牌「未定 UNTITLED」、文案与原创示例作品；这些内容不代表真实品牌、艺术家或客户项目。

## 查看与开发

本目录的 `index.html`、`assets/`、`art/` 和 `favicon.svg` 为可直接静态托管的构建结果，使用相对资源路径，适配 GitHub Pages 的 `/untitled/` 子目录。字体通过 Google Fonts 联网加载，断网时回退至系统无衬线字体。

可以在仓库根目录启动静态服务器，访问 `http://localhost:8000/untitled/`：

```sh
python3 -m http.server 8000
```

开发源码位于 [`source/`](source/)，采用原生 HTML、CSS、JavaScript 与 Vite：

```sh
cd untitled/source
npm ci
npm run dev
```

重新生成静态页面：

```sh
cd untitled/source
npm run build
```

构建结果自动导出到 `untitled/`，保留源码、提示词、截图与说明文件。依赖版本由 `source/package-lock.json` 锁定。

## 页面与交互

- 首屏可切换「海报 / 物件」预览，同步画面与说明，180ms 淡入，支持左右方向键、Home、End。
- 黄色与薄荷主题入口定位到目录，并筛选对应类别。
- 灵感板包含一张黑底精选卡与六张静态材料观察卡，不包含用户评价。
- 六件原创示例作品按「海报设计 / 物件实验」筛选；再次点击选中类别恢复全部。
- 桌面三列目录；768px 以下目录单列、灵感小卡两列，保留点阵与硬阴影材质。
- 提供键盘焦点、跳过导航、屏幕阅读器状态与减少动态效果支持；无登录、付费或后台流程。

## 素材与生成记录

- 生成工具：Codex。图形通过 SVG 代码原创绘制，没有使用第三方作品、图库照片或图像生成工具。
- 八张画面位于 `art/`，原始 SVG 同时保留在 `source/public/art/`；三张物件静物以渐变、光影和细微纹理表现材质。
- 品牌图形与 favicon 同样为代码生成的矢量形状。
- Geist 与 Noto Sans SC 通过 Google Fonts 的公开样式接口加载，未在仓库重新分发字体文件。
- 原始用户简报完整保留在 [PROMPT.md](PROMPT.md)，设计规则见 [DESIGN.md](DESIGN.md)。

## 验证状态

原始实现已通过生产构建及浏览器检查：预览鼠标与键盘切换、两类筛选与恢复全部、移动主题入口定位；320、390、768、1024、1440px 检查未见横向溢出或破图。所收录的完整截图来自原始实现，尺寸为桌面 1440×3683、移动 390×5504。

入库时重新安装锁定依赖并构建，复核 `/untitled/` 子目录下的资源加载、预览与筛选交互。GitHub Pages 的正式可用状态以仓库发布结果为准。
