import './style.css';

const inspirations = [
  { title: '让颜色先说话', description: '蓝与黄的相遇，\n让简单的形状有了情绪。', art: 'color-play', imageAlt: '蓝色圆形与黄色条纹的撞色练习', tag: '色彩观察' },
  { title: '纸张的第二种表情', description: '折叠、叠加与留白，\n纸也有自己的立体语言。', art: 'paper-rhythm', imageAlt: '折叠的白纸与蓝黄纸片', tag: '纸上实验' },
  { title: '不完美的圆', description: '一点偏移，一点不规则，\n让几何多一点人情味。', art: 'circle-study', imageAlt: '不规则的蓝黄圆形叠印', tag: '图形练习' },
  { title: '触摸一种可能', description: '从粗粝到光滑，\n材料的对话从指尖开始。', art: 'blue-vase', imageAlt: '钴蓝陶瓷花器的表面与曲线', tag: '材料线索' },
  { title: '日常的微小秩序', description: '把普通物件重新摆放，\n试着找到新的平衡。', art: 'balance', imageAlt: '黄色球体在蓝色拱门上保持平衡', tag: '物件观察' },
  { title: '影子也是设计', description: '让光穿过，停留片刻，\n形状之外还有另一层故事。', art: 'still-life', imageAlt: '蓝黄静物投下有趣的影子', tag: '光影笔记' },
];

const works = [
  { title: '形状之间', description: '圆与方的自由对话，在重叠与留白中，\n寻找画面的另一种平衡。', art: 'form-study', category: 'poster', meta: '几何构成 · 视觉实验' },
  { title: '一抹蓝的日常', description: '把一段柔和的曲线留在桌面，\n让平凡的时刻，多一点色彩。', art: 'blue-vase', category: 'object', meta: '陶瓷 · 器物探索' },
  { title: '色彩游乐场', description: '当明黄遇见电光蓝，\n给直觉一点自由发挥的空间。', art: 'color-play', category: 'poster', meta: '色彩练习 · 平面设计' },
  { title: '刚好，保持平衡', description: '一个球体，一道拱门，\n在轻与重之间找到刚刚好的位置。', art: 'balance', category: 'object', meta: '几何物件 · 形态研究' },
  { title: '纸上的节奏', description: '重复不是单调，而是韵律。\n用最简单的线条，叠出新的秩序。', art: 'paper-rhythm', category: 'poster', meta: '纸张拼贴 · 构成练习' },
  { title: '光停下来的地方', description: '换一个角度，让光参与创作。\n记录物件与影子相处的片刻。', art: 'still-life', category: 'object', meta: '静物构成 · 光影实验' },
];

const categoryNames = { poster: '海报设计', object: '物件实验' };

document.querySelector('#inspiration-grid').innerHTML = inspirations.map((item, index) => `
  <article class="inspiration-card material inspiration-card-${index + 1}">
    <div class="inspiration-image"><img src="./art/${item.art}.svg" alt="${item.imageAlt}" loading="lazy" width="400" height="260" /><span class="observation-tag">${item.tag}</span></div>
    <div class="inspiration-copy"><h3>${item.title}</h3><p>${item.description.replace('\n', '<br />')}</p></div>
  </article>
`).join('');

const gallery = document.querySelector('#works-grid');
let activeCategory = null;

function renderWorks(category = null) {
  activeCategory = category;
  const visibleWorks = works.filter(work => !category || work.category === category);
  gallery.innerHTML = visibleWorks.map(work => `
    <article class="work-card material">
      <div class="work-image"><img src="./art/${work.art}.svg" alt="${work.title}：${work.description.replace('\n', '')}" loading="lazy" width="800" height="450" /><span class="work-image-label">${work.category === 'poster' ? 'GRAPHIC' : 'OBJECT'}</span></div>
      <div class="work-copy"><h3>${work.title}</h3><p>${work.description.replace('\n', '<br />')}</p><div class="work-meta"><span class="work-category"><span aria-hidden="true">${work.category === 'poster' ? '▧' : '◇'}</span>${categoryNames[work.category]}</span><span>${work.meta}</span></div></div>
    </article>
  `).join('');
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  });
  document.querySelector('#collection-status').innerHTML = category
    ? `正在展示 ${visibleWorks.length} 件${categoryNames[category]} · 再点一次类别，看看全部作品<span aria-hidden="true">✳</span>`
    : '暂时收集到这里，好点子还在继续<span aria-hidden="true">✳</span>';
}

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => renderWorks(activeCategory === button.dataset.filter ? null : button.dataset.filter));
});

document.querySelectorAll('[data-category]').forEach(link => {
  link.addEventListener('click', () => renderWorks(link.dataset.category));
});

const previews = {
  poster: { image: './art/hero-poster.svg', alt: '蓝黄圆形与大字交错的原创几何海报，放在错层纸片上', caption: '圆与方之间，总有新的可能。' },
  object: { image: './art/blue-vase.svg', alt: '钴蓝陶瓷花器与黄色球体组成的原创静物，光线投下柔和阴影', caption: '把一点好奇，变成可以触摸的日常。' },
};

const tabs = [...document.querySelectorAll('[data-preview]')];
const panel = document.querySelector('#preview-panel');
const previewImage = document.querySelector('#preview-image');
const previewCaption = document.querySelector('#preview-description span:last-child');
let currentPreview = 'poster';

function selectPreview(tab, focus = false) {
  const type = tab.dataset.preview;
  if (type === currentPreview) return;
  currentPreview = type;
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  const preview = previews[type];
  previewImage.src = preview.image;
  previewImage.alt = preview.alt;
  previewCaption.textContent = preview.caption;
  panel.setAttribute('aria-labelledby', tab.id);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, easing: 'ease-out' });
  }
  if (focus) tab.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectPreview(tab));
  tab.addEventListener('keydown', event => {
    let nextIndex;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) { event.preventDefault(); selectPreview(tabs[nextIndex], true); }
  });
});

renderWorks();

const objectImage = new Image();
objectImage.src = previews.object.image;
