# BigMiaow Studio Websites

**English** · [简体中文](README.zh-CN.md)

A collection of **prompt-driven website design recreation case studies** gathered from various sources. This repository keeps references, the prompts actually used, and the resulting websites together so they can be explored, studied, compared, and tried again.

Each case lives in its own theme-named directory. Its README documents the project, original prompt, setup instructions, assets, and verification status.

## What is collected

- **Sources and references:** websites, design examples, articles, screenshots, or a supplied design brief, with source links and author information when available.
- **Generation prompts:** the actual prompt text and key constraints covering visual direction, layout, interactions, and deliverables.
- **Website implementations:** runnable pages, styles, interaction code, and required assets.
- **Results:** available screenshots, completed checks, and outstanding verification, distinguishing requested behavior from what has been verified.

## Case library

| Case | Design and implementation | Project notes and prompt | Live demo | HTML source |
| --- | --- | --- | --- | --- |
| Aperture | A collaborative AI workspace website featuring torn-paper collages, classical sculptures, white editorial typography, and a sky-blue accent; fully usable offline. | [Read the README](aperture/README.md) | [Open Aperture](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/aperture/) | [index.html](aperture/index.html) |
| Banban | A playful Chinese collaboration concept page with a yellow, white and navy testimonial wall, category filters and story dialogs. | [Read the README](banban/README.md) | [Open Banban](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/banban/) | [index.html](banban/index.html) |
| Fieldwork | A Chinese technology and services studio website with cool-gray fiber paper, ink-black engineering typography, lime signals, animated fan-out connections, and original interface demonstrations. | [Read the README](fieldwork/README.md) | [Open Fieldwork](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/fieldwork/) | [index.html](fieldwork/index.html) |
| Untitled 未定 | A neutral inspiration and portfolio page with white dot-grid paper, yellow and electric-blue collages, bold typography and hard black shadows; includes switchable artwork previews and category filters. | [Read the README](untitled/README.md) | [Open Untitled](https://bigmiaow-studio.github.io/bigmiaow-studio-websites/untitled/) | [index.html](untitled/index.html) |

## View a website

Click **Live demo** in the case library to open the published website. To run a case locally:

1. Download or clone this repository.
2. Open the case directory and read its README.
3. For static cases that require no build, open the case's `index.html` in a browser while keeping its asset directory structure intact.

Cases may use different stacks. Follow each case's README for dependencies, build steps, and network requirements. The current Aperture case needs no dependency installation or local server.

**Online previews:** GitHub Pages publishes this repository from the root of `master`. Each case is available under its theme directory, such as `/aperture/`. The **HTML source** links open the implementation files on GitHub.

## Repository structure

```text
bigmiaow-studio-websites/
├── README.md               # English overview (default)
├── README.zh-CN.md         # Simplified Chinese overview
├── aperture/              # Offline collaborative AI workspace
├── banban/                # Collaboration stories and editable source
├── untitled/              # Inspiration portfolio, prompt, source and screenshots
└── fieldwork/             # Connected systems studio and editable source
    ├── README.md          # Project, assets, and verification notes
    ├── PROMPT.md          # Original design prompt
    ├── index.html         # Published static page
    ├── assets/            # Generated JavaScript and CSS
    ├── fonts/             # Local fonts and licenses
    ├── shots/             # Browser captures
    └── source/            # Development source, tests, and build tools
```

## Adding a case

1. Create a separate directory named after its theme, such as `aperture/`.
2. Include the website files and the resources needed to run it.
3. Document the project, reference sources, original prompt, setup, assets, and verification status in the case README.
4. Add an entry to the case tables in both `README.md` and `README.zh-CN.md`.

If a source, author, or generation tool was not recorded, say so rather than guessing. Mark browser checks and screenshots as complete only when they have actually been produced, and identify illustrative data that needs replacing. Keep asset source records and accompanying license files with each case.
