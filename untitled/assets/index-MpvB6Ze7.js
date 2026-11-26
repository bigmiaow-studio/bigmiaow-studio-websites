(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const y=[{title:"让颜色先说话",description:`蓝与黄的相遇，
让简单的形状有了情绪。`,art:"color-play",imageAlt:"蓝色圆形与黄色条纹的撞色练习",tag:"色彩观察"},{title:"纸张的第二种表情",description:`折叠、叠加与留白，
纸也有自己的立体语言。`,art:"paper-rhythm",imageAlt:"折叠的白纸与蓝黄纸片",tag:"纸上实验"},{title:"不完美的圆",description:`一点偏移，一点不规则，
让几何多一点人情味。`,art:"circle-study",imageAlt:"不规则的蓝黄圆形叠印",tag:"图形练习"},{title:"触摸一种可能",description:`从粗粝到光滑，
材料的对话从指尖开始。`,art:"blue-vase",imageAlt:"钴蓝陶瓷花器的表面与曲线",tag:"材料线索"},{title:"日常的微小秩序",description:`把普通物件重新摆放，
试着找到新的平衡。`,art:"balance",imageAlt:"黄色球体在蓝色拱门上保持平衡",tag:"物件观察"},{title:"影子也是设计",description:`让光穿过，停留片刻，
形状之外还有另一层故事。`,art:"still-life",imageAlt:"蓝黄静物投下有趣的影子",tag:"光影笔记"}],h=[{title:"形状之间",description:`圆与方的自由对话，在重叠与留白中，
寻找画面的另一种平衡。`,art:"form-study",category:"poster",meta:"几何构成 · 视觉实验"},{title:"一抹蓝的日常",description:`把一段柔和的曲线留在桌面，
让平凡的时刻，多一点色彩。`,art:"blue-vase",category:"object",meta:"陶瓷 · 器物探索"},{title:"色彩游乐场",description:`当明黄遇见电光蓝，
给直觉一点自由发挥的空间。`,art:"color-play",category:"poster",meta:"色彩练习 · 平面设计"},{title:"刚好，保持平衡",description:`一个球体，一道拱门，
在轻与重之间找到刚刚好的位置。`,art:"balance",category:"object",meta:"几何物件 · 形态研究"},{title:"纸上的节奏",description:`重复不是单调，而是韵律。
用最简单的线条，叠出新的秩序。`,art:"paper-rhythm",category:"poster",meta:"纸张拼贴 · 构成练习"},{title:"光停下来的地方",description:`换一个角度，让光参与创作。
记录物件与影子相处的片刻。`,art:"still-life",category:"object",meta:"静物构成 · 光影实验"}],l={poster:"海报设计",object:"物件实验"};document.querySelector("#inspiration-grid").innerHTML=y.map((e,a)=>`
  <article class="inspiration-card material inspiration-card-${a+1}">
    <div class="inspiration-image"><img src="./art/${e.art}.svg" alt="${e.imageAlt}" loading="lazy" width="400" height="260" /><span class="observation-tag">${e.tag}</span></div>
    <div class="inspiration-copy"><h3>${e.title}</h3><p>${e.description.replace(`
`,"<br />")}</p></div>
  </article>
`).join("");const v=document.querySelector("#works-grid");let m=null;function c(e=null){m=e;const a=h.filter(t=>!e||t.category===e);v.innerHTML=a.map(t=>`
    <article class="work-card material">
      <div class="work-image"><img src="./art/${t.art}.svg" alt="${t.title}：${t.description.replace(`
`,"")}" loading="lazy" width="800" height="450" /><span class="work-image-label">${t.category==="poster"?"GRAPHIC":"OBJECT"}</span></div>
      <div class="work-copy"><h3>${t.title}</h3><p>${t.description.replace(`
`,"<br />")}</p><div class="work-meta"><span class="work-category"><span aria-hidden="true">${t.category==="poster"?"▧":"◇"}</span>${l[t.category]}</span><span>${t.meta}</span></div></div>
    </article>
  `).join(""),document.querySelectorAll("[data-filter]").forEach(t=>{t.setAttribute("aria-pressed",String(t.dataset.filter===e))}),document.querySelector("#collection-status").innerHTML=e?`正在展示 ${a.length} 件${l[e]} · 再点一次类别，看看全部作品<span aria-hidden="true">✳</span>`:'暂时收集到这里，好点子还在继续<span aria-hidden="true">✳</span>'}document.querySelectorAll("[data-filter]").forEach(e=>{e.addEventListener("click",()=>c(m===e.dataset.filter?null:e.dataset.filter))});document.querySelectorAll("[data-category]").forEach(e=>{e.addEventListener("click",()=>c(e.dataset.category))});const f={poster:{image:"./art/hero-poster.svg",alt:"蓝黄圆形与大字交错的原创几何海报，放在错层纸片上",caption:"圆与方之间，总有新的可能。"},object:{image:"./art/blue-vase.svg",alt:"钴蓝陶瓷花器与黄色球体组成的原创静物，光线投下柔和阴影",caption:"把一点好奇，变成可以触摸的日常。"}},s=[...document.querySelectorAll("[data-preview]")],d=document.querySelector("#preview-panel"),p=document.querySelector("#preview-image"),w=document.querySelector("#preview-description span:last-child");let u="poster";function g(e,a=!1){const t=e.dataset.preview;if(t===u)return;u=t,s.forEach(r=>{const i=r===e;r.setAttribute("aria-selected",String(i)),r.tabIndex=i?0:-1});const n=f[t];p.src=n.image,p.alt=n.alt,w.textContent=n.caption,d.setAttribute("aria-labelledby",e.id),window.matchMedia("(prefers-reduced-motion: reduce)").matches||d.animate([{opacity:0},{opacity:1}],{duration:180,easing:"ease-out"}),a&&e.focus()}s.forEach((e,a)=>{e.addEventListener("click",()=>g(e)),e.addEventListener("keydown",t=>{let n;(t.key==="ArrowRight"||t.key==="ArrowLeft")&&(n=(a+1)%s.length),t.key==="Home"&&(n=0),t.key==="End"&&(n=s.length-1),n!==void 0&&(t.preventDefault(),g(s[n],!0))})});c();const b=new Image;b.src=f.object.image;
