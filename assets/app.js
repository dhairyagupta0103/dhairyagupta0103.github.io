const PORTFOLIO_URL = './portfolio/portfolio.json';
const $ = (selector, root=document) => root.querySelector(selector);
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let projects = [];
let activeFilter = 'all';

function statusLabel() {
  return 'Selected release';
}

function projectCard(project) {
  return '<article class="project-card" tabindex="0" role="button" data-project-id="' + escapeHTML(project.id) + '" aria-label="Open ' + escapeHTML(project.title) + ' details">' +
    '<div class="card-top"><span class="project-type">' + escapeHTML(project.category.toUpperCase()) + '</span><span class="project-status">v' + escapeHTML(project.version) + '</span></div>' +
    '<div class="project-art" aria-hidden="true">✦</div>' +
    '<h3>' + escapeHTML(project.title) + '</h3><p>' + escapeHTML(project.summary) + '</p>' +
    '<div class="card-bottom"><span>Selected release ' + escapeHTML(project.version) + '</span><span class="card-arrow" aria-hidden="true">↗</span></div>' +
    '</article>';
}

function renderProjects() {
  const filtered = projects.filter(project => activeFilter === 'all' || project.featured);
  $('#project-grid').innerHTML = filtered.map(projectCard).join('');
  $('#empty-state').hidden = filtered.length > 0;
  $('#count-all').textContent = String(projects.length);
  document.querySelectorAll('[data-filter]').forEach(button => {
    const selected = button.dataset.filter === activeFilter;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function renderFeatured() {
  const featured = projects.filter(project => project.featured);
  $('#featured-grid').innerHTML = featured.map(project =>
    '<article class="showcase-card"><span class="showcase-mark" aria-hidden="true">✦</span><div><h3>' +
    escapeHTML(project.title) + '</h3><p>' + escapeHTML(project.summary) +
    '</p><a href="#workbench" data-open-project="' + escapeHTML(project.id) + '">VIEW RELEASE ↗</a></div></article>'
  ).join('');
  const section = $('#showcase');
  if (section) section.hidden = featured.length === 0;
}

function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  const launchUrl = './projects/' + encodeURIComponent(project.id) + '/';
  $('#dialog-content').innerHTML =
    '<div class="dialog-visual" aria-hidden="true">✦</div>' +
    '<p class="dialog-meta">' + escapeHTML(project.category) + ' / ' + statusLabel() + ' / VERSION ' + escapeHTML(project.version) + '</p>' +
    '<h2 id="dialog-title">' + escapeHTML(project.title) + '</h2>' +
    '<p class="dialog-description">' + escapeHTML(project.summary) + '</p>' +
    '<div class="dialog-note"><strong>Selected release:</strong> ' + escapeHTML(project.version) + '</div>' +
    '<p><a class="button button-dark" href="' + escapeHTML(launchUrl) + '" target="_blank" rel="noopener noreferrer">Launch project ↗</a></p>';
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
      event.preventDefault();
      openProject(event.target.dataset.projectId);
    }
  });
  $('#featured-grid').addEventListener('click', event => {
    const link = event.target.closest('[data-open-project]');
    if (link) {
      event.preventDefault();
      openProject(link.dataset.openProject);
    }
  });
}

async function init() {
  try {
    const response = await fetch(PORTFOLIO_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error('Portfolio selection could not be loaded.');
    const manifest = await response.json();
    if (!manifest || manifest.schema_version !== 1 || !Array.isArray(manifest.projects)) {
      throw new Error('Portfolio selection has an unexpected format.');
    }
    projects = manifest.projects.map(item => ({
      id: item.project_id,
      title: item.title,
      summary: item.summary,
      category: item.category,
      version: item.version,
      featured: item.featured === true
    }));
    renderProjects();
    renderFeatured();
    wireInteractions();
  } catch (error) {
    $('#project-grid').innerHTML = '<p class="empty-state">The portfolio could not load. Please refresh the page.</p>';
    console.error(error);
  }
}

init();
