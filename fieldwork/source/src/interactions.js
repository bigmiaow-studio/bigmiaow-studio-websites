import { RotationClock } from './rotation.js';
import { devices, workbench } from './visuals.js';

export function initInteractions(theme) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  // A single navigation control works with pointer, keyboard, and touch.
  const menuButton = $('.menu-toggle');
  const mobileNav = $('#mobile-nav');
  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '展开导航');
    mobileNav.hidden = true;
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '收起导航' : '展开导航');
    mobileNav.hidden = !open;
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
  });
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
  $('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' }));

  $$('.route').forEach(route => {
    function toggle() {
      const expanded = !route.classList.contains('is-active');
      $$('.route.is-active').forEach(r => { r.classList.remove('is-active'); r.setAttribute('aria-expanded', 'false'); });
      route.classList.toggle('is-active', expanded);
      route.setAttribute('aria-expanded', String(expanded));
    }
    route.addEventListener('click', toggle);
    route.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      if (e.key === 'Escape') { route.classList.remove('is-active'); route.setAttribute('aria-expanded', 'false'); }
    });
    route.addEventListener('pointerleave', () => { route.classList.remove('is-active'); route.setAttribute('aria-expanded', 'false'); });
  });

  // The console enters once, only when its lower edge has reached the viewport.
  const consoleScreen = $('.reveal-screen');
  if (!reducedMotion.matches) {
    consoleScreen.classList.add('will-reveal');
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > .98) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: [0, .99, 1] });
    revealObserver.observe(consoleScreen);
  }
  const networkObserver = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) { $('.network-canvas').classList.add('network-visible'); networkObserver.disconnect(); }
  }, { threshold: .2 });
  networkObserver.observe($('.network-canvas'));

  // Accumulate only visible, unpaused time so leaving the stage resumes exactly.
  const clock = new RotationClock(theme.scenarios.length, 5000);
  const stage = $('#scenario-stage');
  const scenarioSection = $('#scenarios');
  const scenarioTabs = $$('.scenario-tab');
  const pauseButton = $('.carousel-pause');
  let renderedScenario = 0;
  let lastFrame = performance.now();
  let frameId;
  if (reducedMotion.matches) clock.pause('motion');
  stage.setAttribute('role', 'tabpanel');
  stage.setAttribute('aria-labelledby', 'scenario-tab-0');
  scenarioTabs.forEach(tab => tab.setAttribute('aria-controls', 'scenario-stage'));
  $('#scenario-panel').remove();
  function renderScenario(index) {
    const s = theme.scenarios[index];
    const copy = $('#scenario-copy');
    const deviceStage = $('#device-stage');
    copy.innerHTML = `<span class="scenario-label">${s.en}</span><h2 id="scenario-title">${s.title.join('<br>')}</h2><p class="section-description">${s.description}</p><ol class="scenario-steps">${s.steps.map(([a, b], i) => `<li><span>0${i + 1}</span><div><h3>${a}</h3><p>${b}</p></div></li>`).join('')}</ol>`;
    deviceStage.innerHTML = devices(s);
    [copy, deviceStage].forEach(el => {
      el.classList.remove('content-enter');
      void el.offsetWidth;
      el.classList.add('content-enter');
    });
    stage.setAttribute('aria-labelledby', `scenario-tab-${index}`);
    scenarioTabs.forEach((tab, i) => {
      const selected = i === index;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      tab.querySelector('.tab-progress').style.transform = 'scaleX(0)';
    });
    renderedScenario = index;
  }
  function syncProgress() {
    if (renderedScenario !== clock.index) renderScenario(clock.index);
    scenarioTabs[clock.index].querySelector('.tab-progress').style.transform = `scaleX(${clock.progress})`;
  }
  scenarioTabs.forEach((tab, index) => tab.addEventListener('click', () => {
    clock.select(index);
    renderScenario(index);
    syncProgress();
  }));
  scenarioSection.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') clock.pause('hover'); });
  scenarioSection.addEventListener('pointerleave', () => clock.resume('hover'));
  scenarioSection.addEventListener('focusin', e => { if (e.target.matches(':focus-visible')) clock.pause('focus'); });
  scenarioSection.addEventListener('focusout', e => { if (!scenarioSection.contains(e.relatedTarget)) clock.resume('focus'); });
  pauseButton.addEventListener('click', () => {
    const paused = pauseButton.getAttribute('aria-pressed') !== 'true';
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.setAttribute('aria-label', paused ? '继续场景自动轮换' : '暂停场景自动轮换');
    pauseButton.innerHTML = paused ? '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 4 9 6-9 6V4Z" fill="currentColor"/></svg>' : '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5v10M13 5v10" stroke="currentColor" stroke-width="2"/></svg>';
    paused ? clock.pause('manual') : clock.resume('manual');
  });
  const stageObserver = new IntersectionObserver(entries => {
    entries.some(e => e.isIntersecting) ? clock.resume('offscreen') : clock.pause('offscreen');
  }, { threshold: .1 });
  clock.pause('offscreen');
  stageObserver.observe(stage);
  document.addEventListener('visibilitychange', () => { document.hidden ? clock.pause('hidden') : clock.resume('hidden'); lastFrame = performance.now(); });
  reducedMotion.addEventListener('change', e => e.matches ? clock.pause('motion') : clock.resume('motion'));
  function tick(now) {
    clock.advance(now - lastFrame);
    lastFrame = now;
    syncProgress();
    frameId = requestAnimationFrame(tick);
  }
  frameId = requestAnimationFrame(tick);
  window.addEventListener('pagehide', () => cancelAnimationFrame(frameId));
  window.addEventListener('pageshow', e => { if (e.persisted) { lastFrame = performance.now(); frameId = requestAnimationFrame(tick); } });

  // These are presentation boards: preserve the entire desktop composition at
  // every viewport instead of reflowing or cropping its internal interface.
  function scaleWorkbench(frame) { frame.style.setProperty('--ui-scale', frame.clientWidth / 1440); }
  const workbenchObserver = new ResizeObserver(entries => entries.forEach(e => scaleWorkbench(e.target)));
  $$('.workbench').forEach(frame => { scaleWorkbench(frame); workbenchObserver.observe(frame); });
  const phaseTabs = $$('.process-tab');
  phaseTabs.forEach((tab, index) => tab.addEventListener('click', () => {
    if (tab.getAttribute('aria-selected') === 'true') return;
    const phase = theme.phases[index];
    phaseTabs.forEach((t, i) => {
      t.classList.toggle('active', i === index);
      t.setAttribute('aria-selected', String(i === index));
      t.tabIndex = i === index ? 0 : -1;
    });
    const detail = $('#process-detail');
    detail.innerHTML = `<h3>${phase.title}</h3><p>${phase.text}</p><span>0${index + 1} / 04</span>`;
    detail.classList.remove('crossfade-enter');
    void detail.offsetWidth;
    detail.classList.add('crossfade-enter');
    const panel = $('#process-panel');
    panel.setAttribute('aria-labelledby', `phase-tab-${index}`);
    panel.querySelectorAll('.crossfade-exit').forEach(el => { workbenchObserver.unobserve(el); el.remove(); });
    const old = panel.firstElementChild;
    if (old) { old.classList.remove('crossfade-enter'); old.classList.add('crossfade-exit'); }
    panel.insertAdjacentHTML('beforeend', workbench(phase, index));
    scaleWorkbench(panel.lastElementChild);
    workbenchObserver.observe(panel.lastElementChild);
    panel.lastElementChild.classList.add('crossfade-enter');
    if (old) setTimeout(() => { workbenchObserver.unobserve(old); old.remove(); }, reducedMotion.matches ? 0 : 250);
  }));
  // WAI-ARIA automatic activation pattern for both sets of tabs.
  function wireKeyboardTabs(tabs) {
    tabs.forEach((tab, i) => tab.addEventListener('keydown', e => {
      let next;
      if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { e.preventDefault(); tabs[next].focus(); tabs[next].click(); }
    }));
  }
  wireKeyboardTabs(scenarioTabs);
  wireKeyboardTabs(phaseTabs);

  // Calibrate the ticker from its real rendered width to a constant 40px/s.
  function measureTicker() {
    const width = $('.ticker-set').getBoundingClientRect().width;
    $('.ticker-track').style.setProperty('--ticker-duration', `${width / 40}s`);
  }
  document.fonts.ready.then(measureTicker);
  window.addEventListener('resize', measureTicker, { passive: true });

  // Create a useful local deliverable, without pretending a form was sent.
  const startButton = $('#start-project');
  startButton.addEventListener('click', () => {
    const form = $('#project-brief');
    form.hidden = !form.hidden;
    startButton.setAttribute('aria-expanded', String(!form.hidden));
    if (!form.hidden) { form.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'center' }); form.querySelector('input').focus({ preventScroll: true }); }
  });
  let brief = '';
  const form = $('#brief-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const values = new FormData(form);
    const name = String(values.get('name')).trim();
    const goal = String(values.get('goal')).trim();
    if (!name || goal.length < 10) {
      form.elements.goal.setCustomValidity(goal.length < 10 ? '请用至少 10 个字描述你想解决的问题。' : '');
      if (!name) form.elements.name.setCustomValidity('请填写你的名字或团队名称。');
      form.reportValidity();
      return;
    }
    const date = new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    brief = `原场 FIELDWORK · 项目简报\n${date}\n\n团队 / ${name}\n关注领域 / ${values.get('type')}\n\n想要解决的问题\n${goal}\n\n下一次对话，可以一起聊聊：\n1. 目前的工作方式与主要挑战\n2. 希望服务的使用者与关键场景\n3. 期待实现的改变与成功标准\n4. 时间、资源与合作边界\n\n从一次连接，走向共同的可能。\n此简报由你保管，尚未发送给任何人。`;
    $('#brief-output').textContent = brief;
    $('#brief-result').hidden = false;
    $('#brief-result').scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'center' });
  });
  form.addEventListener('input', e => e.target.setCustomValidity?.(''));
  $('#download-brief').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = '原场-FIELDWORK-项目简报.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('#copy-brief').addEventListener('click', async () => {
    const feedback = $('.copy-feedback');
    try { await navigator.clipboard.writeText(brief); feedback.textContent = '已复制，可以开始下一次对话了。'; }
    catch { feedback.textContent = '暂时无法复制，请选择下载项目简报。'; }
  });
}
