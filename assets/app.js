const CONTENT_URL = './content/site.json';
const DEFAULT_CONTENT = {
  meta:{brand:'NEXUS',eyebrow:"A DIGITAL SPACE FOR WHAT'S NEXT",kicker:'Ideas are only the beginning.',headline:'Make room|for possibility.',intro:'A flexible canvas for curiosity, experiments and things worth sharing. Always evolving. Never finished.',primaryLabel:'Explore the space',primaryHref:'#discover',secondaryLabel:'How it works',secondaryHref:'#about',collectionTitle:'Explore the unknown.',collectionIntro:'A few starting points. The next one could come from you.',signalTitle:'Stay curious.|Stay in motion.',aboutTitle:'A website that grows with its ideas.',aboutText:'NEXUS is a content-first digital canvas. Its visual identity can change, its content lives in one approachable file, and its future can be shaped with AI-assisted workflows.',footer:'An evolving digital canvas · Made to be remade.'},
  features:[
    {icon:'✳',title:'Ideas & imagination',description:'A home for concepts, questions and sparks that deserve room to grow.',tag:'THINK'},
    {icon:'⌘',title:'Experiments',description:'Small prototypes, playful explorations and lessons discovered along the way.',tag:'MAKE'},
    {icon:'◎',title:'Discoveries',description:'Useful things collected, connected and made easier to explore.',tag:'EXPLORE'}
  ],
  signals:[{label:'Curiosity over convention',value:'MINDSET / 01'},{label:'Clarity over complexity',value:'DESIGN / 02'},{label:'Progress over perfection',value:'MOTION / 03'}],
  theme:'aurora'
};
let siteContent = structuredClone(DEFAULT_CONTENT);
const $ = (selector, root=document) => root.querySelector(selector);
const setText = (key,value) => {const node=$('[data-site="'+key+'"]');if(node)node.textContent=value;};
function applyContent(data){
  siteContent=data;
  const m=data.meta||{};
  Object.entries(m).forEach(([key,value])=>{if(typeof value==='string'&&['brand','eyebrow','kicker','intro','collectionTitle','collectionIntro','aboutTitle','aboutText','footer'].includes(key))setText(key,value);});
  const headline=$('[data-site="headline"]');if(headline)headline.innerHTML=(m.headline||'').split('|').map((part,i)=>i?'<span class="gradient-text">'+escapeHTML(part)+'</span>':escapeHTML(part)).join('<br>');
  const signalTitle=$('[data-site="signalTitle"]');if(signalTitle)signalTitle.innerHTML=(m.signalTitle||'').split('|').map((part,i)=>i?'<span class="gradient-text">'+escapeHTML(part)+'</span>':escapeHTML(part)).join('<br>');
  document.querySelectorAll('[data-site-link]').forEach(a=>{const key=a.dataset.siteLink;a.textContent=(m[key+'Label']||'Explore')+' '+(key==='primary'?'↗':'↓');a.href=m[key+'Href']||'#';});
  $('#feature-grid').innerHTML=(data.features||[]).map((item,i)=>'<article class="feature-card"><span class="feature-index">0'+(i+1)+' / '+escapeHTML(item.tag||'FEATURE')+'</span><span class="feature-arrow">↗</span><div class="feature-icon">'+escapeHTML(item.icon||'✳')+'</div><h3>'+escapeHTML(item.title||'Untitled')+'</h3><p>'+escapeHTML(item.description||'')+'</p></article>').join('');
  $('#signal-list').innerHTML=(data.signals||[]).map(item=>'<div class="signal-row"><span>'+escapeHTML(item.label||'')+'</span><span>'+escapeHTML(item.value||'')+'</span></div>').join('');
  if(data.theme) setTheme(data.theme);
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function setTheme(theme){const allowed=['aurora','monolith','playground','terminal'];const safe=allowed.includes(theme)?theme:'aurora';document.body.dataset.theme=safe;$('#theme-select').value=safe;try{localStorage.setItem('nexus-theme',safe);}catch{}}
async function loadContent(){try{const response=await fetch(CONTENT_URL,{cache:'no-store'});if(!response.ok)throw Error('Content file unavailable');const data=await response.json();applyContent(data);}catch(error){applyContent(DEFAULT_CONTENT);console.info('Using built-in starter content.',error);}}
$('#theme-select').addEventListener('change',event=>setTheme(event.target.value));
try{const saved=localStorage.getItem('nexus-theme');if(saved)setTheme(saved);}catch{}
const studio=$('#studio');
$('#studio-open').addEventListener('click',()=>studio.showModal());
$('#export-content').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(siteContent,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='site.json';a.click();URL.revokeObjectURL(url);$('#studio-status').textContent='Exported site.json. Commit it to content/site.json to publish your changes.';});
$('#import-content').addEventListener('change',async event=>{const file=event.target.files?.[0];if(!file)return;try{const data=JSON.parse(await file.text());if(!data.meta||!Array.isArray(data.features)||!Array.isArray(data.signals))throw Error('This does not look like a NEXUS content file.');siteContent=data;applyContent(data);$('#studio-status').textContent='Draft imported into this browser. Export it when ready to publish.';}catch(error){$('#studio-status').textContent='Could not import: '+error.message;}event.target.value='';});
$('#copy-ai-prompt').addEventListener('click',async()=>{const prompt='You are helping maintain the NEXUS website. Edit only the content JSON, not HTML/CSS/JavaScript. Keep the site generic: never add personal data, birthdays, school details, private photos, addresses or identifying details. Preserve the schema keys meta, features, signals, theme. Return the complete valid JSON file and a short change summary. Current content:\n'+JSON.stringify(siteContent,null,2);try{await navigator.clipboard.writeText(prompt);$('#studio-status').textContent='AI update prompt copied. Paste it into a new or existing ChatGPT conversation.';}catch{$('#studio-status').textContent='Clipboard unavailable. Export the JSON and provide it to ChatGPT with the editing guide.';}});
loadContent();