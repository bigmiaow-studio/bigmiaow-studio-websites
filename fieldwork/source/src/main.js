import './styles.css';
import { theme } from './content.js';
import { arrow, diagonalArrow, logo, icon, fanDiagram, systemConsole, devices, validationReport, nodeNetwork, workbench } from './visuals.js';
import { initInteractions } from './interactions.js';

const t = theme;
document.querySelector('#app').innerHTML = `
<a class="skip-link" href="#main">跳转至主要内容</a>
<header class="site-header">
  <nav class="nav-shell wrap" aria-label="主导航">
    <a class="brand" href="#" aria-label="原场 FIELDWORK 首页"><span class="brand-symbol">${logo}</span><span class="brand-name">${t.name}<span>${t.wordmark}</span></span></a>
    <div class="desktop-nav"><a href="#capabilities">我们的能力</a><a href="#scenarios">应用场景</a><a href="#process">工作方式</a><a href="#about">关于原场</a></div>
    <div class="nav-actions"><a class="nav-contact" href="#contact">一起创造下一步 <span>${diagonalArrow}</span></a><button class="menu-toggle" aria-label="展开导航" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
  </nav>
  <div class="mobile-nav" id="mobile-nav" hidden><a href="#capabilities">我们的能力</a><a href="#scenarios">应用场景</a><a href="#process">工作方式</a><a href="#about">关于原场</a><a href="#contact">一起创造下一步</a></div>
</header>
<div class="announcement"><a class="wrap" href="#network"><span><strong>${t.announcement}</strong><span class="announcement-separator"></span>${t.announcementText}</span><span class="announcement-action">阅读洞察 ${arrow}</span></a></div>
<main id="main">
  <section class="hero paper" aria-labelledby="hero-title">
    <div class="hero-grid wrap">
      <div class="hero-copy"><p class="eyebrow"><span class="eyebrow-square"></span> A SYSTEMS-DRIVEN DIGITAL STUDIO</p>
        <h1 id="hero-title">${t.title[0]}<br><span class="highlight">${t.title[1]}</span><span class="hero-period">.</span></h1>
        <p class="hero-description">${t.intro}</p>
        <div class="hero-actions"><a class="button button-dark" href="#capabilities">探索我们的能力 ${diagonalArrow}</a><a class="text-link" href="#process">看看我们如何工作 ${arrow}</a></div>
        <div class="hero-footnote"><span class="small-plus">+</span> 从理解问题，到创造长期价值。</div>
      </div>
      ${fanDiagram(t.routes)}
    </div>
    <div class="hero-keywords wrap">${t.keywords.map(([cn, en], i) => `<div><span class="keyword-number">0${i + 1}</span><strong>${cn}</strong><span class="keyword-en">${en}</span>${i === 2 ? icon('globe', 20) : icon(i === 0 ? 'layers' : 'link', 20)}</div>`).join('')}</div>
  </section>

  <section class="capabilities dark section" id="capabilities" aria-labelledby="capability-title"><div class="wrap">
    <div class="section-topline"><span class="eyebrow">CONNECTED CAPABILITIES</span><span class="section-index">不是能力的叠加，是系统的协同。</span></div>
    <div class="capability-grid"><div class="section-copy"><h2 id="capability-title">把能力连接，<br>把可能实现。</h2><p class="section-description">策略不止于蓝图，技术不止于代码。<br>我们将不同领域的能力，组织成解决问题的合力。</p>
    <div class="capability-list">${t.capabilities.map(([title, desc], i) => `<div><span class="capability-icon">${icon(['layers', 'link', 'grid', 'activity'][i], 20)}</span><div><h3>${title}</h3><p>${desc}</p></div><span class="list-plus">+</span></div>`).join('')}</div>
    <a href="#directory" class="button button-outline-lime">发现完整能力 ${diagonalArrow}</a></div>
    <div class="console-column">${systemConsole()}<div class="media-caption"><span>一个统一的系统视角，连接每一项独立能力。</span><span>ORIGINAL INTERFACE / CONCEPT</span></div><div class="console-quote"><span>“</span><p>让系统协同，<br>让复杂变得清晰。</p></div></div></div>
  </div></section>

  <section class="scenarios dark section" id="scenarios" aria-labelledby="scenario-title"><div class="wrap"><div class="section-topline"><span class="eyebrow">BUILT FOR THE REAL WORLD</span><span class="section-index">连接，发生在每一个真实场景。</span></div>
    <div class="scenario-stage" id="scenario-stage"><div class="scenario-copy" id="scenario-copy"><span class="scenario-label">${t.scenarios[0].en}</span><h2 id="scenario-title">${t.scenarios[0].title.join('<br>')}</h2><p class="section-description">${t.scenarios[0].description}</p><ol class="scenario-steps">${t.scenarios[0].steps.map(([a, b], i) => `<li><span>0${i + 1}</span><div><h3>${a}</h3><p>${b}</p></div></li>`).join('')}</ol></div><div class="device-stage" id="device-stage">${devices(t.scenarios[0])}</div></div>
    <div class="scenario-controls"><div class="scenario-tabs" role="tablist" aria-label="选择应用场景">${t.scenarios.map((s, i) => `<button class="scenario-tab ${i === 0 ? 'active' : ''}" role="tab" id="scenario-tab-${i}" aria-selected="${i === 0}" aria-controls="scenario-panel" tabindex="${i === 0 ? 0 : -1}" data-scenario="${i}"><span class="tab-number">0${i + 1}</span><span>${s.label}<small>${s.en}</small></span>${arrow}<i class="tab-progress"></i></button>`).join('')}</div><button class="carousel-pause" aria-label="暂停场景自动轮换" aria-pressed="false"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5v10M13 5v10" stroke="currentColor" stroke-width="2"/></svg></button></div><div class="sr-only" id="scenario-panel" role="tabpanel" aria-labelledby="scenario-tab-0">空间运营场景</div>
  </div></section>

  <section class="validation paper section" id="validation" aria-labelledby="validation-title"><div class="wrap validation-grid"><div><p class="eyebrow">ENGINEERED FOR CERTAINTY</p><h2 id="validation-title">好的系统，<br>经得起每一次验证。</h2><p class="section-description">确定性不是一句承诺，而是被反复验证的结果。<br>从第一份方案到最后一个接口，我们把质量放进每个环节。</p><div class="validation-specs">${[['功能有边界', '每项需求，都有清晰的验收依据。'], ['运行可观测', '关键链路与状态，始终清晰可见。'], ['交付可接续', '代码、规范与文档，一起交付。'], ['迭代有依据', '用真实反馈，指导下一步优化。']].map(([a, b], i) => `<div><span>0${i + 1}</span><strong>${a}</strong><p>${b}</p></div>`).join('')}</div></div>${validationReport()}</div></section>

  <section class="network dark section" id="network" aria-labelledby="network-title"><div class="wrap"><div class="section-topline"><h2 class="eyebrow" id="network-title">BETTER CONNECTED. BETTER TOGETHER.</h2><span class="section-index">让每一部分，都成为整体的力量。</span></div><div class="network-words">${[['开放', 'OPEN BY DESIGN'], ['连接', 'CONNECTED AT CORE'], ['协同', 'ALIGNED IN ACTION'], ['生长', 'BUILT TO EVOLVE']].map(([a, b]) => `<div><strong>${a}<span>${icon('link', 22)}</span></strong><small>${b}</small></div>`).join('')}</div><div class="network-canvas">${nodeNetwork()}<div class="network-center-label"><span>ONE SYSTEM. SHARED POSSIBILITIES.</span><p>单点有力量，连接有可能。</p></div></div></div><div class="ticker" aria-label="策略、架构、体验、工程、数据、集成、持续演进"><div class="ticker-track">${Array.from({ length: 2 }, (_, n) => `<div class="ticker-set" ${n ? 'aria-hidden="true"' : ''}>${['SYSTEMS THINKING', 'STRATEGY', 'EXPERIENCE', 'ENGINEERING', 'DATA INTELLIGENCE', 'INTEGRATION', 'EVOLUTION'].map(a => `<span>${a}<i>+</i></span>`).join('')}</div>`).join('')}</div></div></section>

  <section class="process dark section" id="process" aria-labelledby="process-title"><div class="wrap"><div class="process-heading"><div><p class="eyebrow">FROM FIRST QUESTION TO WHAT’S NEXT</p><h2 id="process-title">一步一步，<br>把未来做出来。</h2></div><p class="section-description">好的合作，是共享目标，也是透明的过程。<br>我们用清晰的工作方式，让每一环看得见、接得上。</p></div><div class="process-tabs" role="tablist" aria-label="选择工作阶段">${t.phases.map((p, i) => `<button role="tab" id="phase-tab-${i}" class="process-tab ${i === 0 ? 'active' : ''}" aria-selected="${i === 0}" aria-controls="process-panel" tabindex="${i === 0 ? 0 : -1}" data-phase="${i}"><span>0${i + 1}</span>${p.label}${diagonalArrow}</button>`).join('')}</div><div class="process-detail" id="process-detail"><h3>${t.phases[0].title}</h3><p>${t.phases[0].text}</p><span>01 / 04</span></div><div id="process-panel" role="tabpanel" aria-labelledby="phase-tab-0">${workbench(t.phases[0], 0)}</div><div class="media-caption"><span>透明、协同、可接续。让工作本身，也成为好的体验。</span><span>FIELDWORK WORKSPACE / CONCEPT</span></div></div></section>

  <section class="directory paper section" id="directory" aria-labelledby="directory-title"><div class="wrap"><div class="directory-heading"><div><p class="eyebrow">EXPLORE FIELDWORK</p><h2 id="directory-title">从这里，继续探索。</h2></div><p>找到你关心的那一环。<br>也许，就是下一次连接的起点。</p></div><div class="directory-grid">${t.directory.map(d => `<a href="${d.href}" class="directory-item"><span class="directory-en">${d.en}</span><h3>${d.title}</h3><p>${d.description}</p><span class="directory-arrow">${arrow}</span></a>`).join('')}</div></div></section>

  <section class="contact" id="contact" aria-labelledby="contact-title"><div class="wrap"><div class="contact-top"><p class="eyebrow">YOUR NEXT CHAPTER STARTS WITH A CONNECTION.</p><span>${logo}</span></div><div class="contact-main"><h2 id="contact-title">下一个可能，<br>从一次对话开始。</h2><div class="contact-action"><p>带着一个问题，或一个还未成形的想法。<br>我们一起，找到值得出发的方向。</p><div class="contact-buttons"><button class="button button-dark" id="start-project" aria-expanded="false" aria-controls="project-brief">梳理我的项目 ${diagonalArrow}</button><a class="button button-outline-dark" href="#process">了解合作方式 ${arrow}</a></div></div></div>
    <div class="project-brief" id="project-brief" hidden><div class="brief-intro"><h3>把你的想法，向前推进一步。</h3><p>简单描述你正在思考的事，生成一份可带走的项目简报。</p></div><form id="brief-form"><div class="form-row"><label>如何称呼你<input name="name" autocomplete="name" maxlength="60" placeholder="你的名字或团队名称" required></label><label>你想连接的领域<select name="type"><option>策略与系统设计</option><option>产品与数字体验</option><option>技术与工程实践</option><option>数据与连接能力</option><option>先一起聊聊方向</option></select></label></div><label>你想解决什么问题？<textarea name="goal" rows="3" minlength="10" maxlength="2000" required placeholder="说说目前的情况、期待的改变，或想探索的可能（至少 10 个字）"></textarea></label><div class="brief-submit"><small>你的想法由你保管。生成的简报可下载或复制，用于下一次沟通。</small><button class="button button-dark" type="submit">生成项目简报 ${icon('file', 18)}</button></div></form><div class="brief-result" id="brief-result" hidden aria-live="polite"><h3>想法已经有了清晰的起点。</h3><pre id="brief-output"></pre><div><button class="button button-dark" id="download-brief">下载项目简报 ${icon('download', 18)}</button><button class="button button-outline-dark" id="copy-brief">复制内容</button><span class="copy-feedback" role="status"></span></div></div></div>
  </div></section>
</main>
<footer class="footer dark" id="about"><div class="wrap"><div class="footer-top"><div class="footer-about"><a class="brand footer-brand" href="#">${logo}<span class="brand-name">${t.name}<span>${t.wordmark}</span></span></a><p>连接策略、技术与数字体验。<br>从一个原点，走向共同的可能。</p></div><div class="footer-nav"><div><h3>探索原场</h3><a href="#capabilities">我们的能力</a><a href="#scenarios">应用场景</a><a href="#process">工作方式</a></div><div><h3>保持连接</h3><a href="#validation">质量与验证</a><a href="#directory">完整能力目录</a><a href="#contact">开启下一步</a></div><div class="footer-note"><span class="eyebrow">INDEPENDENT MINDS.<br>CONNECTED THINKING.</span><p>独立思考，连接创造。</p><span class="footer-clock"><i></i> 立足当下，面向未来。</span></div></div></div><div class="footer-wordmark" aria-label="FIELDWORK">${t.wordmark}</div><div class="footer-bottom"><span>© ${new Date().getFullYear()} 原场 FIELDWORK. 原创概念工作室。</span><span>THOUGHTFULLY CONNECTED.</span><button id="back-to-top">回到顶部 ${diagonalArrow}</button></div></div></footer>
`;

initInteractions(t);
