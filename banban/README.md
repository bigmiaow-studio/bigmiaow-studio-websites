# 伴伴 Banban

[在线预览](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/banban/) · [原始设计简报](PROMPT.md) · [设计体系](DESIGN.md)

一个中文团队协作工具的概念落地页。页面以「他们这样说」为中心，用黄色、白色与藏蓝评价卡片呈现不同团队的故事，搭配粉色装饰、分类标签、邀请体验区和页脚。

品牌「伴伴」、业务定位及示例评价由 Codex 根据简报补充，用户确认按此方向继续；它们不是简报原有的品牌资料或真实客户证言。参考来源是用户提供的结构化设计简报，没有提供外部参考站点或作者信息。

## 查看与开发

本目录的 `index.html`、`assets/` 和 `favicon.svg` 是可直接静态托管的构建结果，使用相对路径，适配 GitHub Pages 的 `/banban/` 子目录。字体和头像需要联网。

开发源码位于 [`source/`](source/)，采用 React、TypeScript、Vite、Tailwind CSS 和基于 Radix primitives 的 shadcn/ui 风格组件（Button、Card、Dialog、Input、Sheet、Tabs）。

```sh
cd banban/source
npm ci
npm run dev
```

重新生成静态页面：

```sh
cd banban/source
npm run build
```

构建结果写入 `banban/`，保留源码与说明文档。构建前如修改了依赖，应同步提交 `package-lock.json`。

## 页面与交互

- 六个示例用户故事，可按创意玩家、小团队、自由职业、远程伙伴筛选。
- 卡片按钮打开完整故事；移动端使用侧边导航菜单。
- 体验表单验证姓名与邮箱，仅保存到当前浏览器的 localStorage，不创建账户、不发送邮件。
- 订阅表单仅演示本地确认状态，不连接邮件服务。
- 提供键盘焦点、跳转主内容入口与减少动态效果支持。

## 素材与生成记录

- 生成工具：Codex。实现时使用了 design-taste-frontend、impeccable 和 Sites 技能；品牌与内容扩展由生成过程提出，经用户确认。
- 字体：Google Fonts 的 Noto Sans SC，通过 CSS 远程加载；项目未重新分发字体文件。
- 六张示例头像来自 Unsplash 图像 CDN；完整 URL 在 `source/src/main.tsx` 的 `photo` 字段及其 URL 拼接逻辑中。未记录原始作品页与摄影师信息，不能将头像与示例身份对应为真实证言。
- 品牌标记与装饰为代码生成的矢量形状；界面图标来自 lucide-react，具体依赖版本见 lockfile。

## 验证状态

本案例入库前已在源码目录执行 `npm ci` 与 `npm run build`，并检查构建页面及其本地资源引用可从子目录静态提供。

原始开发过程中，浏览器已验证桌面布局、类别筛选、完整故事弹窗、体验表单确认，以及手机单列布局和移动菜单；本次入库未重新执行全部浏览器交互验收。

自动视觉检查曾报告 32 项未通过，其中包含整屏分区、卡片重复和 `.wrap` 结构等与当前页面布局不同的规则，也包含之后已修复的装饰遮挡、焦点及链接问题。完整视觉检查未在最后修复后重新运行，不能视为全部通过。本目录没有收录完整浏览器截图。

本案例只收录前端概念实现，没有真实账户、邮件或协作后端。GitHub Pages 的上线状态以仓库发布结果为准。
