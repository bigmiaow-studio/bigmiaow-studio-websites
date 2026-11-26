# BigMiaow Studio Websites

[English](README.md) · **简体中文**

从各个来源收集的**提示词驱动的网站设计复刻案例集**。本仓库将参考来源、实际使用的提示词和生成的网站放在一起，便于浏览、学习、比较与再次尝试。

每个案例按主题放在独立子目录中。具体的项目介绍、原始提示词、运行方式、素材说明和验证状态，记录在该案例的 README 中。

## 收录内容

- **来源与参考**：参考网页、设计案例、文章、截图，或直接提供的设计需求；有来源链接或作者信息时一并保留。
- **生成提示词**：实际使用的提示词原文，以及视觉方向、布局、交互和交付要求等关键约束。
- **网站实现**：可运行的页面、样式、交互代码及所需素材。
- **结果记录**：已有的截图、已完成的检查和仍待验证的部分，区分设计要求与实际完成情况。

## 案例目录

| 案例 | 设计与实现 | 项目说明与提示词 | 在线预览 | 页面源码 |
| --- | --- | --- | --- | --- |
| Aperture | 协作式 AI 工作空间官网；手撕纸洞拼贴、古典雕塑、纯白社论排版与天蓝重点色；支持完全离线运行。 | [查看 README](aperture/README.md) | [打开 Aperture](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/aperture/) | [index.html](aperture/index.html) |
| 伴伴 Banban | 中文团队协作概念落地页；黄色、白色与藏蓝评价墙，支持分类筛选、故事弹窗和移动菜单。 | [查看 README](banban/README.md) | [打开伴伴](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/banban/) | [index.html](banban/index.html) |
| 原场 Fieldwork | 技术与服务工作室首页；冷灰纤维纸面、墨黑工程排版与酸橙功能标记，包含扇形线路、场景轮换、原创控制台和点阵网络。 | [查看 README](fieldwork/README.md) | [打开原场](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/fieldwork/) | [index.html](fieldwork/index.html) |

## 查看页面

点击案例目录中的 **在线预览** 即可打开已发布的网页。如需本地运行：

1. 下载或克隆本仓库。
2. 进入感兴趣的案例目录，阅读其中的 README。
3. 对于无需构建的静态案例，直接在浏览器中打开该目录的 `index.html`，并保留其素材目录结构。

各案例可以使用不同的技术栈，是否需要安装依赖、构建或联网，以各自的 README 为准。当前 Aperture 案例无需安装依赖或启动服务器。

**在线预览：**GitHub Pages 从 `master` 分支的根目录发布网站，各案例通过主题目录访问，例如 `/aperture/`。**页面源码** 链接用于在 GitHub 查看实现文件。

## 目录结构

```text
bigmiaow-studio-websites/
├── README.md               # 英文说明（默认展示）
├── README.zh-CN.md         # 中文说明
├── aperture/              # 离线协作式 AI 工作空间
├── banban/                # 团队协作故事页面及开发源码
└── fieldwork/             # 系统工作室首页及开发源码
    ├── README.md          # 项目、素材与验证说明
    ├── PROMPT.md          # 原始设计提示词
    ├── index.html         # 静态页面
    ├── assets/            # 构建生成的脚本和样式
    ├── fonts/             # 本地字体及授权文件
    ├── shots/             # 浏览器截图
    └── source/            # 开发源码、测试与构建工具
```

## 新增案例的记录方式

1. 使用主题名称创建独立目录，例如 `aperture/`。
2. 在目录内保存网站文件及运行所需资源。
3. 在案例 README 中记录项目介绍、参考来源、原始提示词、运行方式、素材说明和验证状态。
4. 在 `README.md` 和 `README.zh-CN.md` 的案例目录中分别加入入口。

来源、作者或生成工具未记录时，如实标记，不补写推测信息。只有确实完成的浏览器检查或截图才记为已完成；需要替换的演示数据也应明确说明。素材附带的来源与授权文件随案例一同保留。
