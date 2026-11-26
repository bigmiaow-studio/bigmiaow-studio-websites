# BigMiaow Studio Websites

[中文](#中文) · [English](#english)

## 中文

从各个来源收集的**提示词驱动的网站设计复刻案例集**。本仓库将参考来源、实际使用的提示词和生成的网站放在一起，便于浏览、学习、比较与再次尝试。

每个案例按主题放在独立子目录中。具体的项目介绍、原始提示词、运行方式、素材说明和验证状态，记录在该案例的 README 中。

### 收录内容

- **来源与参考**：参考网页、设计案例、文章、截图，或直接提供的设计需求；有来源链接或作者信息时一并保留。
- **生成提示词**：实际使用的提示词原文，以及视觉方向、布局、交互和交付要求等关键约束。
- **网站实现**：可运行的页面、样式、交互代码及所需素材。
- **结果记录**：已有的截图、已完成的检查和仍待验证的部分，区分设计要求与实际完成情况。

### 案例目录

| 案例 | 设计与实现 | 项目说明与提示词 | 页面源码 |
| --- | --- | --- | --- |
| Aperture | 协作式 AI 工作空间官网；手撕纸洞拼贴、古典雕塑、纯白社论排版与天蓝重点色；支持完全离线运行。 | [查看 README](aperture/README.md) | [index.html](aperture/index.html) |

### 查看页面

1. 下载或克隆本仓库。
2. 进入感兴趣的案例目录，阅读其中的 README。
3. 对于无需构建的静态案例，直接在浏览器中打开该目录的 `index.html`，并保留其素材目录结构。

各案例可以使用不同的技术栈，是否需要安装依赖、构建或联网，以各自的 README 为准。当前 Aperture 案例无需安装依赖或启动服务器。

**在线预览状态：**本仓库尚未启用 GitHub Pages。上表中的 HTML 链接在 GitHub 中展示源码，不是已发布的网页预览。

### 目录结构

```text
bigmiaow-studio-websites/
├── README.md               # 仓库说明（中文 / English）
└── aperture/
    ├── README.md           # 项目介绍、生成提示词、资源与验证说明
    ├── index.html
    ├── styles.css
    ├── app.js
    └── assets/             # 字体、图片及其来源或授权记录
```

### 新增案例的记录方式

1. 使用主题名称创建独立目录，例如 `aperture/`。
2. 在目录内保存网站文件及运行所需资源。
3. 在案例 README 中记录项目介绍、参考来源、原始提示词、运行方式、素材说明和验证状态。
4. 在本页的中英文案例目录中加入入口。

来源、作者或生成工具未记录时，如实标记，不补写推测信息。只有确实完成的浏览器检查或截图才记为已完成；需要替换的演示数据也应明确说明。素材附带的来源与授权文件随案例一同保留。

## English

A collection of **prompt-driven website design recreation case studies** gathered from various sources. This repository keeps references, the prompts actually used, and the resulting websites together so they can be explored, studied, compared, and tried again.

Each case lives in its own theme-named directory. Its README documents the project, original prompt, setup instructions, assets, and verification status.

### What is collected

- **Sources and references:** websites, design examples, articles, screenshots, or a supplied design brief, with source links and author information when available.
- **Generation prompts:** the actual prompt text and key constraints covering visual direction, layout, interactions, and deliverables.
- **Website implementations:** runnable pages, styles, interaction code, and required assets.
- **Results:** available screenshots, completed checks, and outstanding verification, distinguishing requested behavior from what has been verified.

### Case library

| Case | Design and implementation | Project notes and prompt | HTML source |
| --- | --- | --- | --- |
| Aperture | A collaborative AI workspace website featuring torn-paper collages, classical sculptures, white editorial typography, and a sky-blue accent; fully usable offline. | [Read the README](aperture/README.md) | [index.html](aperture/index.html) |

### View a website

1. Download or clone this repository.
2. Open the case directory and read its README.
3. For static cases that require no build, open the case's `index.html` in a browser while keeping its asset directory structure intact.

Cases may use different stacks. Follow each case's README for dependencies, build steps, and network requirements. The current Aperture case needs no dependency installation or local server.

**Online preview status:** GitHub Pages is not currently enabled for this repository. The HTML links above show source code on GitHub; they are not published website previews.

### Repository structure

```text
bigmiaow-studio-websites/
├── README.md               # Repository overview in Chinese and English
└── aperture/
    ├── README.md           # Project, prompt, assets, and verification notes
    ├── index.html
    ├── styles.css
    ├── app.js
    └── assets/             # Fonts, images, and source or license records
```

### Adding a case

1. Create a separate directory named after its theme, such as `aperture/`.
2. Include the website files and the resources needed to run it.
3. Document the project, reference sources, original prompt, setup, assets, and verification status in the case README.
4. Add an entry to both the Chinese and English case tables on this page.

If a source, author, or generation tool was not recorded, say so rather than guessing. Mark browser checks and screenshots as complete only when they have actually been produced, and identify illustrative data that needs replacing. Keep asset source records and accompanying license files with each case.
