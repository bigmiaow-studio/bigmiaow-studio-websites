'use strict';
const datasets = {
  outreach: { title:'Good work starts<br>with a conversation.', description:'Good conversations start with a little context. Give every message a personal touch, without starting from scratch.', label:'Outreach', total:'1,284', change:'+18.6%', values:[110,170,145,286,230,154,189], features:[['icon-message','Find the right words','Turn a rough thought into a message that sounds like you.'],['icon-people','Keep the context','Bring the whole conversation into view before you reach out.'],['icon-spark','Make it personal','A thoughtful first draft, with room for your own perspective.'],['icon-flow','Keep things moving','Give every follow-up a home, and every teammate a clear next step.']] },
  automation: { title:'Give everyday work<br>a little momentum.', description:'Give the everyday tasks a little help. Build a rhythm that keeps work moving, while your team makes the decisions that matter.', label:'Automation', total:'1,642', change:'+24.2%', values:[180,240,210,290,265,225,232], features:[['icon-flow','Build your own flow','Connect a trigger to the next step, in a way that fits your team.'],['icon-spark','Start a step ahead','Turn repeat requests into a first draft ready for review.'],['icon-people','Bring people in','Add a human approval wherever the work needs a second look.'],['icon-check','Keep a clear trail','See what ran, what changed, and what needs your attention.']] },
  analytics: { title:'A little clarity for<br>your next decision.', description:'Make sense of what’s happening across your workspace. Find the patterns, ask a question, and give your next decision some context.', label:'Analytics', total:'1,438', change:'+12.8%', values:[155,200,185,248,290,170,190], features:[['icon-chart','See the whole story','Bring your team’s activity into one shared view.'],['icon-message','Ask in your own words','Start with a question. Get an explanation you can work with.'],['icon-spark','Find the useful signal','Spot a change worth a closer look in the daily detail.'],['icon-people','Share a perspective','Give your team the context behind a number, together.']] },
  sync: { title:'Find your team’s<br>shared rhythm.', description:'Keep ideas connected as they move between people and projects. A shared place for the latest thinking, wherever the day takes you.', label:'Sync', total:'1,867', change:'+31.4%', values:[240,270,260,290,300,255,252], features:[['icon-people','Stay on the same page','Keep your team’s latest ideas in a shared, connected space.'],['icon-flow','Connect the loose ends','Bring a conversation, a document, and its next step together.'],['icon-message','Pass the context on','Hand over the thinking behind the task, alongside the task itself.'],['icon-check','Know where things stand','Keep decisions and updates close to the work they belong to.']] }
};
const tabs = [...document.querySelectorAll('[data-tab]')];
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
let currentTab = 'outreach';
let selectedDay = 3;
const bars = document.getElementById('chart-bars');
days.forEach((day,index) => {
  const button=document.createElement('button');
  button.type='button';button.className='bar-button';
  button.innerHTML='<span class="bar-fill"></span><span>'+day.charAt(0)+'</span>';
  button.addEventListener('click',()=>{selectedDay=index;renderChart();});
  bars.appendChild(button);
});
function renderChart(){
  const data=datasets[currentTab];
  document.getElementById('chart-total').textContent=data.total;
  document.getElementById('chart-change').innerHTML=data.change+' <span>this week</span>';
  document.getElementById('chart-dataset').textContent=data.label;
  [...bars.children].forEach((button,index)=>{
    const value=data.values[index];
    button.setAttribute('aria-label',days[index]+': '+value+' interactions');
    button.setAttribute('aria-pressed',String(index===selectedDay));
    button.querySelector('.bar-fill').style.setProperty('--bar-height',(value/300*76)+'%');
    button.title=days[index]+' · '+value+' interactions';
  });
  document.getElementById('chart-output').textContent=days[selectedDay]+' · '+data.values[selectedDay]+' interactions';
}
function selectTab(key){
  if(!Object.hasOwn(datasets,key))return;
  currentTab=key;const data=datasets[key];
  tabs.forEach(tab=>{const selected=tab.dataset.tab===key;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});
  document.getElementById('capability-panel').setAttribute('aria-labelledby','tab-'+key);
  document.getElementById('capability-title').innerHTML=data.title;
  document.getElementById('capability-description').textContent=data.description;
  document.querySelectorAll('.feature').forEach((feature,index)=>{
    feature.querySelector('use').setAttribute('href','#'+data.features[index][0]);
    feature.querySelector('h3').textContent=data.features[index][1];
    feature.querySelector('p').textContent=data.features[index][2];
  });
  renderChart();
}
tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectTab(tab.dataset.tab));
  tab.addEventListener('keydown',event=>{
    let target;
    if(event.key==='ArrowRight')target=(index+1)%tabs.length;
    if(event.key==='ArrowLeft')target=(index+tabs.length-1)%tabs.length;
    if(event.key==='Home')target=0;
    if(event.key==='End')target=tabs.length-1;
    if(target!==undefined){event.preventDefault();selectTab(tabs[target].dataset.tab);tabs[target].focus();}
  });
});
document.querySelectorAll('[data-select-tab]').forEach(link=>link.addEventListener('click',()=>selectTab(link.dataset.selectTab)));
renderChart();

const reviewCard=document.getElementById('review-card');
const toggle=document.getElementById('suggestions-toggle');
const suggestions=document.getElementById('suggestions');
const approveButton=document.getElementById('approve-button');
const checkboxes=[...suggestions.querySelectorAll('input')];
const reviewNote=document.getElementById('review-note');
let approved=false;
toggle.addEventListener('click',()=>{
  const open=toggle.getAttribute('aria-expanded')!=='true';
  toggle.setAttribute('aria-expanded',String(open));suggestions.hidden=!open;
  reviewCard.classList.toggle('is-expanded',open);
});
function updateReviewNote(){
  const count=checkboxes.filter(input=>input.checked).length;
  reviewNote.textContent=count===3?'Your call. Always.':count+' of 3 edits selected.';
  approveButton.disabled=count===0;
  approveButton.setAttribute('aria-label',count===0?'Select an edit to approve':'Approve '+count+' selected edits');
}
checkboxes.forEach(input=>input.addEventListener('change',updateReviewNote));
approveButton.addEventListener('click',()=>{
  approved=!approved;
  reviewCard.classList.toggle('is-approved',approved);
  const count=checkboxes.filter(input=>input.checked).length;
  document.getElementById('review-status').textContent=approved?'Approved':'AI review';
  document.getElementById('review-description').textContent=approved?'Your chosen edits are applied to this demo brief.':'A few thoughtful edits to your project brief.';
  approveButton.querySelector('span').textContent=approved?'Undo':'Approve';
  approveButton.setAttribute('aria-label',approved?'Undo approval':'Approve '+count+' selected edits');
  checkboxes.forEach(input=>{input.disabled=approved;});
  if(approved)reviewNote.textContent=count+' '+(count===1?'edit':'edits')+' approved. Still your call.';
  else updateReviewNote();
});
updateReviewNote();
const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.getElementById('nav-links');
function closeMenu(){menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');navLinks.classList.remove('is-open');}
menuToggle.addEventListener('click',()=>{
  const open=menuToggle.getAttribute('aria-expanded')!=='true';
  menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');navLinks.classList.toggle('is-open',open);
});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){closeMenu();menuToggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.navigation'))closeMenu();});
