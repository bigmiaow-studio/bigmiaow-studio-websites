# 原始设计简报

下文仅去除了传输中的 Markdown 转义和空格实体，保留原始字段内容，包括未解析的 `[object Object]`。

```text
# Design brief
Page type: **landing**.
Material language: **flat**.
Voice: Tone: playful · Headings: Sentence case · CTA verbs: [object Object], [object Object], [object Object].
## Tokens
```

```ts
export const tokens = {
  colors: ['#e4e4e4', '#030303', '#45556c', '#ffffff', '#0f172b', '#62748e', '#fdc700', '#ffdf20', '#90a1b9', '#1d293d', '#636363', '#cad5e2', '#ff637e', '#006045'],
  fonts: ['[object Object]'],
  radii: ['4', '8', '12', '16', '28'],
  shadows: ['rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(0, 0, 0) 2px 2px 0px 0px', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'],
};
```

```text
## Sections
- testimonial — heading: "他们这样说"
- footer
## Library

Use shadcn/ui components (Button, Card, Dialog, Input, Sheet, Tabs). Pair with Tailwind.
```

## 补充确认

生成过程中，Codex 询问是否以「伴伴」团队协作工具为品牌与业务方向，并使用明确标注的示例评价。用户答复：「按此方向继续」。
