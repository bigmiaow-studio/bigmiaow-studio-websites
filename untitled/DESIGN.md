---
name: "未定 UNTITLED"
description: "浅白点阵纸面上的蓝黄灵感与作品展示。"
colors:
  paper: "#fafafa"
  ink: "#101828"
  secondary: "#667085"
  yellow: "#ffe329"
  blue: "#2563eb"
  mint: "#ecfdf5"
  border: "#101010"
  white: "#ffffff"
  preview-tint: "#e9efff"
  divider: "#e4e7ec"
typography:
  display:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontSize: "72px"
    fontWeight: 900
    lineHeight: "90px"
    letterSpacing: "-4px"
  display-mobile:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontSize: "40px"
    fontWeight: 900
    lineHeight: "48px"
    letterSpacing: "-2px"
  headline:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: "44px"
    letterSpacing: "-1.5px"
  headline-mobile:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: "36px"
    letterSpacing: "-1.2px"
  title:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "28px"
    letterSpacing: "-0.5px"
  body:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  button:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: "26px"
  label:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "20px"
    letterSpacing: "2px"
rounded:
  material: "16px"
  button: "9px"
  filter: "7px"
  tab: "5px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  gutter: "24px"
  lg: "32px"
  xl: "48px"
  section: "80px"
  section-mobile: "56px"
components:
  button-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "12px 25px"
  preview-tab:
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "2px 13px"
  preview-tab-selected:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
  category-filter:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.filter}"
    padding: "7px 15px"
  category-filter-selected:
    backgroundColor: "{colors.yellow}"
  work-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.material}"
---

# Design System: 未定 UNTITLED

## Overview

**Creative North Star: "点阵纸上的蓝黄拼贴"**

浅白纸面承托超粗标题、蓝黄几何和原创作品。黑边与硬阴影让卡片像可以移动的纸片；少量静态旋转保留手工拼贴的松弛感。

配色、字体、圆角与硬阴影来自用户指定方向。新内容沿用这套材质，作品本身保留各自的构图与光影。

**Key Characteristics:**
- 浅白纸面与蓝黄重点色。
- 超粗无衬线标题与清晰正文。
- 黑色描边、偏移硬阴影与轻微拼贴角度。

## Colors

前置色值为规范；界面颜色与作品内部颜色分别使用。

### Primary
- **明黄**：主要按钮、筛选选中态、标题强调与几何装饰。

### Secondary
- **电光蓝**：标题重点、预览选中态、链接提示与键盘焦点。

### Tertiary
- **浅薄荷**：物件类别入口的底色。

### Neutral
- **纸白 / 纯白**：页面底与卡片、导航表面。
- **墨色 / 黑边**：正文及深色面板使用墨色；描边和硬阴影使用黑边色。
- **说明灰 / 分隔灰**：说明文字与轻分隔线。
- **浅蓝底**：预览和作品画面的承托底色。

## Typography

中英文共用 Geist、Noto Sans SC 与无衬线回退。标题用紧字距和高字重建立识别，正文保持自然行距；字形交给浏览器按语言回退。

- **Display / Display Mobile**：首屏两行主标题，移动端切换到独立字号。
- **Headline / Headline Mobile**：分区标题，次于主标题但仍保持紧凑、醒目。
- **Title**：作品卡标题；主题入口在相近尺寸上加重。
- **Body**：正文与作品说明，次要说明使用说明灰。
- **Button / Label**：按钮字重较高；小节英文标签使用宽字距。

## Layout

版心最大（1200px），常规左右留白（24px），极窄屏改为（20px）。章节采用 section 间距，移动端采用 section-mobile 间距。

桌面灵感区为（1:3）主次分栏，小卡三列；作品目录三列。移动端主次分栏与作品目录改单列，灵感小卡保留两列。平板区间收紧卡片间距与文字尺寸。

预览组合最大宽度（440px）；包括页签与说明的整卡约为（4:3），内部画面区为（16:9）。点阵间距（24px），只在首屏形成纸面纹理。断点的精确范围记录于配套侧文件。

## Elevation & Depth

深度来自黑边、实体偏移阴影和纸片的轻微旋转。通用卡片与按钮采用标准硬阴影；悬停向左上移动并拉长阴影，按下时向右下移动并压短阴影。小标签与装饰使用较短偏移。

**The Hard Edge Rule.** 界面深度保持无模糊硬阴影；作品内部的渐变、光照与材质纹理属于画面内容。

阴影的精确值、状态变化与动效记录于配套侧文件。交互统一短促，减少动态偏好下关闭过渡、入场动画、预览淡入与平滑滚动。

## Shapes

通用表面使用 material 圆角与（2px）黑边。按钮、页签和筛选按尺寸使用较小圆角；深色横幅采用更宽的圆角（桌面 28px，移动 22px）。圆与方是标识、静态装饰及原创画面的重复母题。

## Components

- **黄色按钮**：实色填充、黑边与硬阴影，最小高度（48px）。悬停抬起，按下压实。
- **预览页签**：蓝底白字表示选中；未选中态保持浅底黑边。保留 tab、tabpanel、选中态及方向键、Home、End 操作。
- **类别筛选**：白底为默认态，黄底为选中态；再次点击当前类别恢复全部作品，状态使用 aria-pressed。
- **作品卡**：上方画面、下方文字，以黑线分隔。画面为（16:9），正文内边距（23px 23px 18px），卡片本身不是链接。
- **导航**：白色背景与细底边；文字悬停出现蓝色下划线，移动端保留三项入口。

全部链接与按钮均有蓝色焦点轮廓（3px，外偏移 6px）。页面未实现输入框，不推导额外表单样式。

## Do's and Don'ts

### Do:
- **Do** 沿用已指定的配色、字体、黑边与硬阴影。
- **Do** 保留按钮、页签、筛选的清晰状态和可见键盘焦点。
- **Do** 让原创作品承担画面细节，界面维持统一纸片材质。
- **Do** 保留移动端的单列作品与双列灵感小卡。

### Don't:
- **Don't** 用模糊投影替代界面的硬阴影。
- **Don't** 把作品内部的材质光影扩展为新的界面配色规则。
- **Don't** 给静态展示卡添加未实现的点击暗示。
