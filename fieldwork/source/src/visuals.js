export const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.5"/></svg>';
export const diagonalArrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5"/></svg>';
export const logo = '<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M8 28V8h20M8 18h15M18 8v20" stroke="currentColor" stroke-width="3.4"/></svg>';
export const cross = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5v14" stroke="currentColor" stroke-width="1.5"/></svg>';

export function icon(name, size = 20) {
  const paths = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    layers: '<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
    link: '<path d="m10 14 4-4M8 16l-1 1a4.2 4.2 0 0 1-6-6l4-4a4.2 4.2 0 0 1 6 0m2 1 1-1a4.2 4.2 0 0 1 6 6l-4 4a4.2 4.2 0 0 1-6 0" transform="translate(1 0)"/>',
    activity: '<path d="M2 12h5l3-8 4 16 3-8h5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/>',
    box: '<path d="m12 3 9 5v9l-9 5-9-5V8l9-5Zm0 10 9-5M12 13 3 8m9 5v9M7 5.8l9 5"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2m0-16a3 3 0 0 1 0 6m4 10v-2a6 6 0 0 0-3-5"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1 1-3Z"/>',
    bell: '<path d="M5 17h14l-2-3V9A5 5 0 0 0 7 9v5l-2 3Zm5 3h4"/>',
    search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    file: '<path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8m-8 4h6"/>',
    download: '<path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.grid}</svg>`;
}

export function fanDiagram(routes) {
  return `<div class="connection-diagram">
    <div class="diagram-top"><span>ONE ORIGIN. INFINITE CONNECTIONS.</span><span class="live-label"><i></i> 系统已连接</span></div>
    <svg class="fan-svg" viewBox="0 0 760 540" role="group" aria-label="从原场连接到七项系统服务的交互线路图">
      <defs><pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#17242c" opacity=".18"/></pattern></defs>
      <rect x="14" y="25" width="722" height="480" fill="url(#dot-grid)"/>
      <circle class="origin-orbit" cx="112" cy="267" r="78"/>
      <circle class="origin-orbit inner-orbit" cx="112" cy="267" r="57"/>
      <path class="diagram-guide" d="M112 31V189m0 156v158M20 267h14"/>
      ${routes.map((route, i) => {
        const d = `M 152 267 C ${260 + i * 4} 267 ${route.x - 190} ${route.y} ${route.x} ${route.y}`;
        return `<g class="route" tabindex="0" role="button" aria-label="${route.name}：${route.detail}" aria-expanded="false" style="--i:${i}">
          <path class="route-draw" d="${d}" pathLength="1000"/>
          <path class="route-flow" d="${d}" pathLength="1000"/>
          <circle class="route-hit" cx="${route.x}" cy="${route.y}" r="18" fill="transparent"/>
          <circle class="route-node" cx="${route.x}" cy="${route.y}" r="6"/>
          <text class="route-label" x="${route.x + 19}" y="${route.y + 5}">${route.name}</text>
          <text class="route-en" x="${route.x + 19}" y="${route.y + 22}">${route.en}</text>
          <g class="route-tooltip"><rect x="${Math.min(route.x - 20, 450)}" y="${route.y + 34}" width="245" height="34" rx="4"/><text x="${Math.min(route.x - 8, 462)}" y="${route.y + 56}">${route.detail}</text></g>
        </g>`;
      }).join('')}
      <circle class="origin-core" cx="112" cy="267" r="39"/>
      <path class="origin-mark" d="M96 283v-32h32m-32 16h24m-8-16v32"/>
      <text class="origin-caption" x="112" y="373" text-anchor="middle">原场 · 连接的原点</text>
      <text class="diagram-coordinate" x="22" y="529">FW — SYSTEM MAP / 2026</text>
      <path class="diagram-guide" d="M710 520h20m-10-10v20"/>
    </svg>
    <div class="diagram-bottom"><span>从一个原点，到一个协同的整体。</span><span>移动至节点，探索连接 ${cross}</span></div>
  </div>`;
}

const chartPath = 'M0 108 20 112 38 88 57 96 76 82 94 91 114 64 133 71 152 50 171 63 190 42 209 49 228 26 247 34 266 15 285 29 304 12 323 20 344 6';

export function lineChart(extraClass = '') {
  return `<svg class="line-chart ${extraClass}" viewBox="0 0 344 135" preserveAspectRatio="none" aria-label="示意连接活动趋势"><path class="chart-grid" d="M0 30H344M0 65H344M0 100H344"/><path class="chart-area" d="${chartPath}V135H0Z"/><path class="chart-line" d="${chartPath}"/><circle cx="344" cy="6" r="3" class="chart-point"/></svg>`;
}

function browserBar(url) {
  return `<div class="browser-bar"><div class="browser-dots"><i></i><i></i><i></i></div><span>${url}</span>${icon('globe', 12)}</div>`;
}

export function systemConsole() {
  const points = [[110, 90], [218, 36], [336, 67], [386, 157], [295, 212], [173, 211], [64, 170], [219, 132]];
  return `<div class="console browser-frame reveal-screen" aria-label="原场系统控制台原创演示界面">
    ${browserBar('workspace.fieldwork / system-overview')}
    <div class="console-inner"><aside class="console-nav"><div class="console-brand">${logo}</div>${['grid', 'layers', 'activity', 'box', 'users'].map((n, i) => `<span class="${i === 0 ? 'active' : ''}">${icon(n, 16)}</span>`).join('')}<span class="nav-bottom">${icon('settings', 16)}</span></aside>
    <div class="console-main"><header class="console-header"><span>系统全景 <small>/ SYSTEM OVERVIEW</small></span><span>${icon('bell', 14)}<b class="avatar">F</b></span></header>
      <div class="console-title"><div><span class="screen-eyebrow">FIELDWORK CONNECT</span><h4>每一个节点，尽在掌握。</h4></div><span class="screen-status"><i></i> 运行正常</span></div>
      <div class="console-metrics"><div><span>已连接节点</span><strong>128<small>个</small></strong><em>所有节点保持同步</em></div><div><span>系统可用性</span><strong>99.98<small>%</small></strong><em>过去 30 天</em></div><div><span>今日协同事件</span><strong>2,406<small>次</small></strong><em>跨系统自动流转</em></div></div>
      <div class="console-panels"><div class="topology-panel"><div class="panel-label">连接拓扑<span>LIVE ${icon('activity', 11)}</span></div><svg viewBox="0 0 440 245" aria-label="系统拓扑示意"><defs><pattern id="console-dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="#fff" opacity=".12"/></pattern></defs><rect width="440" height="245" fill="url(#console-dots)"/><path d="M110 90 218 36 336 67 386 157 295 212 173 211 64 170 110 90 219 132 218 36M219 132 336 67M219 132 386 157M219 132 295 212M219 132 173 211M219 132 64 170" class="topology-lines"/>${points.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i === 7 ? 14 : 5}" class="${i === 7 ? 'topology-origin' : 'topology-point'}"/>${i === 7 ? `<path d="M214 137v-10h10m-10 5h8m-3-5v10" stroke="#17242c" stroke-width="1.5" fill="none"/>` : ''}`).join('')}<text x="110" y="72">空间服务</text><text x="218" y="21">数据平台</text><text x="340" y="49">边缘设备</text><text x="319" y="237">业务系统</text><text x="173" y="237">运营平台</text><text x="40" y="194">用户触点</text><text x="246" y="137">FIELDWORK</text></svg></div>
      <div class="events-panel"><div class="panel-label">连接活动<span>近 24 小时</span></div>${lineChart()}<div class="chart-axis"><span>00:00</span><span>12:00</span><span>24:00</span></div><div class="event-row"><i></i><span>数据管道同步完成</span><small>刚刚</small></div><div class="event-row"><i></i><span>设备状态已更新</span><small>2 分钟前</small></div></div></div>
      <div class="console-bottom"><span><i></i> ALL SYSTEMS CONNECTED</span><span>演示工作空间 · 示例数据</span></div>
    </div></div></div>`;
}

function bars(values, className = '') {
  return `<div class="bar-chart ${className}" aria-hidden="true">${values.map((v, i) => `<i style="height:${v}%;--bar-i:${i}"></i>`).join('')}</div>`;
}

function phone(scenario, position) {
  const side = position !== 'center';
  return `<div class="phone phone-${position}" ${side ? 'aria-hidden="true"' : ''}>
    <div class="phone-hardware"><div class="phone-status"><span>9:41</span><div class="phone-island"></div><span class="phone-signal"><b></b><b></b><b></b><i></i></span></div>
    <div class="phone-content"><div class="phone-topline"><span>${logo} FIELDWORK</span>${icon('bell', 18)}</div><div class="phone-location">${scenario.entity}${icon('chevron', 13)}</div>
    ${position === 'left' ? `<h4>今日工作</h4><p class="phone-muted">连接现场，让每一步清晰。</p><div class="phone-day"><strong>24<small>项任务</small></strong><span>今日待办</span></div><div class="phone-section-label">任务列表 <span>查看全部</span></div>${scenario.tasks.map((t, i) => `<div class="phone-task">${icon(i === 0 ? 'activity' : i === 1 ? 'layers' : 'check', 18)}<div><b>${t}</b><span>${i === 0 ? '进行中' : '已同步到工作空间'}</span></div>${icon('chevron', 13)}</div>`).join('')}<div class="phone-note">${icon('link', 17)} 团队与现场，保持同步。</div>` : position === 'right' ? `<h4>服务，与人连接。</h4><p class="phone-muted">每一个需求，都值得被回应。</p><div class="service-illustration"><div class="orbit-circle"></div><div class="service-logo">${logo}</div><span class="orbit-point p1"></span><span class="orbit-point p2"></span><span class="orbit-point p3"></span></div><div class="phone-section-label">常用服务</div><div class="phone-service-grid">${[['box', '设备支持'], ['users', '访客服务'], ['layers', '空间预约'], ['file', '我的申请']].map(([n, t]) => `<div>${icon(n, 23)}<span>${t}</span></div>`).join('')}</div>` : `<h4>${scenario.screen}</h4><p class="phone-muted">你好，每一次连接都在发生。</p><div class="phone-score"><span>${scenario.unit}</span><strong>${scenario.metric}<small>${scenario.metric === '86' ? '/ 100' : ''}</small></strong><div><i></i> ${scenario.notification}</div></div><div class="phone-section-label">${scenario.sub}<strong>${scenario.value}</strong></div>${bars(scenario.chart)}<div class="phone-chart-axis"><span>08:00</span><span>12:00</span><span>18:00</span></div><div class="phone-section-label tasks-label">正在发生 <span>全部动态</span></div>${scenario.tasks.slice(0, 2).map((t, i) => `<div class="phone-task">${icon(i ? 'check' : 'activity', 17)}<div><b>${t}</b><span>${i ? '刚刚完成' : '实时更新中'}</span></div></div>`).join('')}`}
    </div><div class="phone-bottom-nav">${[['grid', '总览'], ['layers', '空间'], ['activity', '动态'], ['users', '我的']].map(([n, t], i) => `<span class="${i === 0 ? 'selected' : ''}">${icon(n, 17)}<small>${t}</small></span>`).join('')}</div><div class="phone-home-line"></div></div></div>`;
}

export function devices(scenario) {
  return `<div class="devices-rail">${phone(scenario, 'left')}${phone(scenario, 'center')}${phone(scenario, 'right')}</div><span class="device-caption">FIELDWORK MOBILE · 场景概念演示</span>`;
}

export function validationReport() {
  return `<div class="report-board"><div class="report-strip"><span>${logo} FIELDWORK / VERIFICATION</span><span>FW–V.2026</span></div><div class="report-body"><div class="report-title"><div><span class="report-kicker">SYSTEM VERIFICATION REPORT</span><h4>以验证，建立确定性。</h4></div><span class="report-seal">${icon('check', 20)}<span>验证通过</span></span></div><div class="report-meta"><span>项目 / 原场连接系统</span><span>类型 / 集成验收示例</span></div><table><thead><tr><th>验证维度</th><th>测试方式</th><th>状态</th></tr></thead><tbody>${[['功能完整性', '端到端场景核验'], ['系统稳定性', '持续负载与容错测试'], ['数据一致性', '跨系统链路追溯'], ['使用可达性', '多设备与无障碍检查']].map(([a, b]) => `<tr><td>${a}</td><td>${b}</td><td><span class="report-pass">${icon('check', 12)} PASS</span></td></tr>`).join('')}</tbody></table><div class="report-footer"><span>不是一次运行成功，而是每次都能可靠运行。</span><span>概念报告 · 示例内容</span></div></div></div>`;
}

export function nodeNetwork() {
  // A deterministic, locally generated point matrix; no external images are used.
  const cols = 57, rows = 20;
  let dots = '';
  let active = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 58 + c * 20, y = 48 + r * 20;
      const center = Math.sin(c * .095) * 4 + 9;
      const wave = Math.abs(r - center);
      const isActive = wave < 1.1 || (c > 17 && c < 43 && Math.abs(r - (18 - c * .22)) < .75) || ((c * 13 + r * 7) % 107 === 0);
      const opacity = .13 + Math.max(0, 1 - wave / 9) * .23;
      dots += `<circle cx="${x}" cy="${y}" r="${isActive ? 2.4 : 1.5}" class="${isActive ? 'network-dot active-dot' : 'network-dot'}" style="--dot-delay:${(active % 24) * 80}ms;${isActive ? '' : `opacity:${opacity}`}"/>`;
      if (isActive) active++;
    }
  }
  return `<svg class="network-svg" viewBox="0 0 1240 540" role="img" aria-label="连接策略、工程、数据与体验的点阵网络"><path class="network-axis" d="M30 245h1180M620 12v460"/>${dots}<g class="network-hub"><circle cx="618" cy="228" r="37"/><path d="M603 243v-30h30m-30 15h23m-8-15v30"/></g><text class="network-annotation" x="60" y="510">A CONNECTED SYSTEM IS MORE THAN THE SUM OF ITS PARTS.</text><text class="network-annotation" x="1180" y="510" text-anchor="end">FIELDWORK CONNECT</text></svg>`;
}

export function workbench(phase, index) {
  return `<div class="workbench browser-frame"><div class="workbench-canvas">${browserBar('workspace.fieldwork / project / connected-future')}<div class="workbench-inner"><aside class="workbench-sidebar"><div class="wb-brand">${logo}<strong>原场工作空间</strong></div><div class="workspace-select"><span class="workspace-avatar">F</span><div>连接未来计划<small>团队工作空间</small></div>${icon('chevron', 13)}</div><div class="sidebar-label">工作空间</div>${[['grid', '项目总览'], ['layers', '业务地图'], ['file', '项目文档'], ['activity', '验证记录'], ['users', '团队协作']].map(([n, t], i) => `<div class="sidebar-item ${i === index % 5 ? 'active' : ''}">${icon(n, 17)}<span>${t}</span>${i === 0 ? '<small>04</small>' : ''}</div>`).join('')}<div class="sidebar-project"><span class="sidebar-label">当前里程碑</span><div><i></i>${phase.label}</div><small>让每一个环节，都有清晰的下一步。</small></div><div class="wb-profile"><b>FW</b><span>原场项目团队<small>共同构建，持续向前</small></span>${icon('settings', 16)}</div></aside><div class="workbench-main"><div class="wb-topbar"><span>工作空间 <i>/</i> 连接未来计划 <i>/</i> ${phase.board}</span><span>${icon('search', 17)}${icon('bell', 17)}<b class="wb-profile-dot">FW</b></span></div><div class="wb-page"><div class="wb-heading"><div><span class="screen-eyebrow">CONNECTED FUTURE / ${phase.status}</span><h4>${phase.board}<span>进行中</span></h4><p>把共识转化为行动，让每一步都清晰可见。</p></div><div class="wb-members"><b>林</b><b>陈</b><b>周</b><span>项目团队</span></div></div><div class="wb-subnav"><span class="active">概览</span><span>里程碑</span><span>任务看板</span><span>项目资料</span><span class="wb-date">最近更新 · 今天 10:24</span></div><div class="wb-stat-row"><div><span>当前阶段</span><strong>${phase.label}</strong><small>PHASE 0${index + 1} / 04</small></div><div><span>核心任务</span><strong>04<small>项</small></strong><small>目标明确 · 持续推进</small></div><div><span>协作成员</span><strong>06<small>人</small></strong><small>跨领域团队共同参与</small></div><div><span>信息同步</span><strong class="wb-sync">${icon('link', 25)}已连接</strong><small>所有变更，保持同频</small></div></div><div class="wb-main-grid"><div class="wb-task-panel"><div class="wb-panel-heading"><strong>关键行动</strong><span>按优先级排列</span></div><table><thead><tr><th>任务名称</th><th>负责人</th><th>进度</th><th>状态</th></tr></thead><tbody>${phase.tasks.map((t, i) => `<tr><td><span class="task-check ${i === 0 ? 'complete' : ''}">${i === 0 ? icon('check', 12) : ''}</span>${t}</td><td><b class="task-member">${['林', '陈', '周', '原'][i]}</b></td><td><div class="task-progress"><i style="width:${phase.progress[i]}%"></i></div><small>${phase.progress[i]}%</small></td><td><span class="task-state">${i === 0 ? '已完成' : '进行中'}</span></td></tr>`).join('')}</tbody></table><div class="wb-task-note">${icon('check', 16)} 共识、行动与反馈，在同一个地方连接。</div></div><div class="wb-activity"><div class="wb-panel-heading"><strong>项目动态</strong>${icon('activity', 17)}</div>${[['项目团队', '更新了当前阶段的行动计划', '10:24'], ['体验设计', '补充了关键场景的验证记录', '09:42'], ['产品工程', '同步了系统连接的最新状态', '昨天']].map(([a, b, c]) => `<div class="wb-timeline"><i></i><div><b>${a}</b><p>${b}</p><small>${c}</small></div></div>`).join('')}<div class="wb-connected">${icon('link', 19)}<div>让协作，真实发生。<small>CONNECTED BY FIELDWORK</small></div></div></div></div><div class="wb-bottom"><span><i></i> 连接未来计划 · 所有更改已同步</span><span>原创概念界面 · 示例数据</span></div></div></div></div></div></div>`;
}
