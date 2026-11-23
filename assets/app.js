const DATA_URL = './content/site.sample.json';
const $ = (selector, root=document) => root.querySelector(selector);
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let siteData = null;
let activeFilter = 'all';

function setSiteText(key, value) {
  document.querySelectorAll('[data-site="'+key+'"]').forEach(node => { node.textContent = value; });
}
function statusLabel(status) {
  return ({experiment:'Experiment',building:'Building', 'in-progress':'In progress',showcase:'Featured',parked:'On the shelf'})[status] || 'In progress';
}
function projectCard(project, index) {
  const bg = project.color || '#e9e5d9';
  return `<article class="project-card" tabindex="0" role="button" data-project-id="${escapeHTML(project.id)}" aria-label="Open ${escapeHTML(project.title)} details">
    <div class="card-top"><span class="project-type">${escapeHTML(project.kind || 'PROJECT')}</span><span class="project-status">${escapeHTML(statusLabel(project.status))}</span></div>
    <div class="project-art" style="background:${escapeHTML(bg)}" aria-hidden="true">${escapeHTML(project.symbol || '✳')}</div>
    <h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.summary)}</p>
    <div class="card-bottom"><span>${escapeHTML(project.updated || 'A new idea')}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
  </article>`;
}
function renderProjects() {
  const all = siteData.projects || [];
  const filtered = all.filter(project => activeFilter === 'all' ||
    (activeFilter === 'experiment' && project.status === 'experiment') ||
    (activeFilter === 'building' && project.status === 'building') ||
    (activeFilter === 'in-progress' && ['in-progress','building'].includes(project.status)));
  $('#project-grid').innerHTML = filtered.map(projectCard).join('');
  $('#empty-state').hidden = filtered.length > 0;
  $('#count-all').textContent = String(all.length);
  document.querySelectorAll('[data-filter]').forEach(button => {
    const selected = button.dataset.filter === activeFilter;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}
function renderUpdates() {
  $('#updates-list').innerHTML = (siteData.updates || []).map(update => `<article class="note-item">
    <span class="note-date">${escapeHTML(update.date)}</span><div><h3>${escapeHTML(update.title)}</h3><p>${escapeHTML(update.text)}</p></div>
  </article>`).join('');
}
function renderFeatured() {
  const featured = (siteData.projects || []).filter(project => project.featured);
  $('#featured-grid').innerHTML = featured.map(project => `<article class="showcase-card">
    <span class="showcase-mark" aria-hidden="true">${escapeHTML(project.symbol || '✳')}</span>
    <div><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.summary)}</p><a href="#workbench" data-open-project="${escapeHTML(project.id)}">TAKE A LOOK ↗</a></div>
  </article>`).join('');
}
function openProject(id) {
  const project = (siteData.projects || []).find(item => item.id === id);
  if (!project) return;
  $('#dialog-content').innerHTML = `<div class="dialog-visual" style="background:${escapeHTML(project.color || '#e9e5d9')}" aria-hidden="true">${escapeHTML(project.symbol || '✳')}</div>
    <p class="dialog-meta">${escapeHTML(project.kind || 'PROJECT')} / ${escapeHTML(statusLabel(project.status))} / ${escapeHTML(project.updated || '')}</p>
    <h2 id="dialog-title">${escapeHTML(project.title)}</h2><p class="dialog-description">${escapeHTML(project.description || project.summary)}</p>
    <div class="dialog-note"><strong>What this is:</strong> ${escapeHTML(project.note || 'An idea that is allowed to grow one step at a time.')}</div>`;
  $('#project-dialog').showModal();
}
function wireInteractions() {
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    renderProjects();
  }));
  $('#project-grid').addEventListener('click', event => {
    const card = event.target.closest('[data-project-id]');
    if (card) openProject(card.dataset.projectId);
  });
  $('#project-grid').addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-project-id]')) {
      event.preventDefault(); openProject(event.target.dataset.projectId);
    }
  });
  $('#featured-grid').addEventListener('click', event => {
    const link = event.target.closest('[data-open-project]');
    if (link) { event.preventDefault(); openProject(link.dataset.openProject); }
  });
}
async function init() {
  try {
    const response = await fetch(DATA_URL, {cache:'no-store'});
    if (!response.ok) throw new Error('Sample content could not be loaded.');
    siteData = await response.json();
    if (!siteData.meta || !Array.isArray(siteData.projects) || !Array.isArray(siteData.updates)) {
      throw new Error('The sample content has an unexpected format.');
    }
    setSiteText('name', siteData.meta.name || 'Little Big Lab');
    setSiteText('eyebrow', siteData.meta.eyebrow || '');
    setSiteText('kicker', siteData.meta.kicker || '');
    setSiteText('intro', siteData.meta.intro || '');
    setSiteText('footer', siteData.meta.footer || '');
    document.title = (siteData.meta.name || 'Little Big Lab') + ' — Ideas in progress';
    renderProjects(); renderUpdates(); renderFeatured(); wireInteractions();
  } catch (error) {
    $('#project-grid').innerHTML = '<p class="empty-state">The sample projects could not load. Please refresh the preview.</p>';
    console.error(error);
  }
}
init();
