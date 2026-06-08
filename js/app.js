/* =====================================================
   KavyaLok — Main Application JavaScript
   Features: Dark/Light Mode, Search, Filters,
   Bookmarks, Favorites, Reading Progress,
   Font Size Control, Typewriter, Particles,
   Animations, Share, Copy, Toast, Modal
   ===================================================== */

'use strict';

// ─────────────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────────────
const State = {
  theme:       localStorage.getItem('kl_theme')     || 'dark',
  fontSize:    parseInt(localStorage.getItem('kl_fontSize')) || 16,
  bookmarks:   JSON.parse(localStorage.getItem('kl_bookmarks') || '[]'),
  favorites:   JSON.parse(localStorage.getItem('kl_favorites') || '[]'),
  searchQuery: '',
  activeFilters: { lang: 'all', type: 'all', cat: 'all' },
};

// ─────────────────────────────────────────────────────
//  THEME
// ─────────────────────────────────────────────────────
function initTheme() {
  document.documentElement.setAttribute('data-theme', State.theme);
  updateThemeBtn();
}

function toggleTheme() {
  State.theme = State.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('kl_theme', State.theme);
  document.documentElement.setAttribute('data-theme', State.theme);
  updateThemeBtn();
}

function updateThemeBtn() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.innerHTML = State.theme === 'dark' ? '☀️' : '🌙';
  btn.title = State.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

// ─────────────────────────────────────────────────────
//  FONT SIZE
// ─────────────────────────────────────────────────────
function initFontSize() {
  applyFontSize(State.fontSize);
}

function applyFontSize(size) {
  State.fontSize = Math.min(24, Math.max(12, size));
  localStorage.setItem('kl_fontSize', State.fontSize);
  const readingBody = document.querySelector('.reading-body');
  if (readingBody) readingBody.style.fontSize = State.fontSize + 'px';
}

function increaseFontSize() { applyFontSize(State.fontSize + 2); }
function decreaseFontSize() { applyFontSize(State.fontSize - 2); }

// ─────────────────────────────────────────────────────
//  BOOKMARKS & FAVORITES
// ─────────────────────────────────────────────────────
function isBookmarked(id)  { return State.bookmarks.includes(id); }
function isFavorited(id)   { return State.favorites.includes(id); }

function toggleBookmark(id) {
  const idx = State.bookmarks.indexOf(id);
  if (idx === -1) {
    State.bookmarks.push(id);
    showToast('Bookmarked! 🔖', 'success');
  } else {
    State.bookmarks.splice(idx, 1);
    showToast('Bookmark removed', 'info');
  }
  localStorage.setItem('kl_bookmarks', JSON.stringify(State.bookmarks));
  document.querySelectorAll(`[data-bookmark="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', State.bookmarks.includes(id));
  });
}

function toggleFavorite(id) {
  const idx = State.favorites.indexOf(id);
  if (idx === -1) {
    State.favorites.push(id);
    showToast('Added to favourites ❤️', 'success');
  } else {
    State.favorites.splice(idx, 1);
    showToast('Removed from favourites', 'info');
  }
  localStorage.setItem('kl_favorites', JSON.stringify(State.favorites));
  document.querySelectorAll(`[data-favorite="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', State.favorites.includes(id));
  });
}

// ─────────────────────────────────────────────────────
//  NAVBAR
// ─────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
  }

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === 'index.html' && href === './') || href.includes(path)) {
      a.classList.add('active');
    }
  });
}

// ─────────────────────────────────────────────────────
//  TOAST NOTIFICATIONS
// ─────────────────────────────────────────────────────
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✅', info: 'ℹ️', error: '❌' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icons[type] || '📢'}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ─────────────────────────────────────────────────────
//  COPY TEXT
// ─────────────────────────────────────────────────────
function copyText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard! 📋', 'success'));
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    showToast('Copied to clipboard! 📋', 'success');
  }
}

// ─────────────────────────────────────────────────────
//  SHARE
// ─────────────────────────────────────────────────────
function shareContent(title, text) {
  if (navigator.share) {
    navigator.share({ title, text, url: location.href });
  } else {
    copyText(`${title}\n\n${text}\n\n${location.href}`);
    showToast('Link copied for sharing! 🔗', 'success');
  }
}

// ─────────────────────────────────────────────────────
//  READING PROGRESS BAR
// ─────────────────────────────────────────────────────
function initReadingProgress() {
  let bar = document.getElementById('readingProgressBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'readingProgressBar';
    bar.className = 'reading-progress-bar';
    document.body.prepend(bar);
  }

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ─────────────────────────────────────────────────────
//  TYPEWRITER EFFECT
// ─────────────────────────────────────────────────────
function initTypewriter(el, words, speed = 80, pause = 2200) {
  if (!el) return;
  let wIdx = 0, cIdx = 0, deleting = false;

  function type() {
    const word = words[wIdx];
    el.textContent = deleting ? word.slice(0, cIdx--) : word.slice(0, cIdx++);

    if (!deleting && cIdx > word.length) {
      deleting = true;
      setTimeout(type, pause);
      return;
    }
    if (deleting && cIdx < 0) {
      deleting = false;
      wIdx = (wIdx + 1) % words.length;
      cIdx = 0;
    }
    setTimeout(type, deleting ? speed / 2 : speed);
  }
  type();
}

// ─────────────────────────────────────────────────────
//  FLOATING PARTICLES
// ─────────────────────────────────────────────────────
function initParticles(containerId = 'heroParticles', count = 22) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const chars = ['✦', '✧', '◈', '❋', '✿', '॰', '।', '★'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.textContent = chars[Math.floor(Math.random() * chars.length)];
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: auto; height: auto;
      background: transparent;
      color: rgba(212,175,55,${0.15 + Math.random() * 0.35});
      font-size: ${8 + Math.random() * 12}px;
      animation-duration: ${12 + Math.random() * 20}s;
      animation-delay: ${Math.random() * 12}s;
    `;
    container.appendChild(p);
  }
}

// ─────────────────────────────────────────────────────
//  SCROLL ANIMATIONS (Intersection Observer)
// ─────────────────────────────────────────────────────
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ─────────────────────────────────────────────────────
//  SEARCH
// ─────────────────────────────────────────────────────
function initSearch(inputId, onSearch) {
  const input = document.getElementById(inputId);
  if (!input) return;

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      State.searchQuery = input.value.trim().toLowerCase();
      onSearch(State.searchQuery);
    }, 280);
  });

  // Clear on Escape
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { input.value = ''; State.searchQuery = ''; onSearch(''); }
  });
}

// ─────────────────────────────────────────────────────
//  FILTER TABS
// ─────────────────────────────────────────────────────
function initFilterTabs(containerId, onChange) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      onChange(tab.dataset.filter, tab.dataset.filterType || 'lang');
    });
  });
}

// ─────────────────────────────────────────────────────
//  READING MODAL
// ─────────────────────────────────────────────────────
function openModal(data) {
  let overlay = document.getElementById('readingModal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'readingModal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-content" id="modalContent">
        <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
        <div class="reading-progress-modal"></div>
        <div id="modalInner"></div>
      </div>`;
    document.body.appendChild(overlay);

    document.getElementById('modalClose').addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  const isHindi = data.language === 'hindi';
  const inner = document.getElementById('modalInner');

  inner.innerHTML = `
    <div class="lang-badge ${isHindi ? 'lang-hi' : 'lang-en'} poem-card-lang mb-2">
      ${isHindi ? '🇮🇳 Hindi' : '🇬🇧 English'}
    </div>
    <h2 class="reading-title ${isHindi ? 'hindi' : ''}">${data.title}</h2>
    <div class="reading-meta">
      <span>✍️ ${data.author}</span>
      <span>🏷️ ${data.category}</span>
      ${data.readingTime ? `<span>⏱️ ${data.readingTime}</span>` : ''}
      ${data.moral ? `<span>💡 ${data.moral}</span>` : ''}
    </div>
    <div class="reading-body ${isHindi ? 'hindi' : ''}" id="readingBodyText"
         style="font-size:${State.fontSize}px">
      ${(data.content || data.lines || '').replace(/\n/g, '<br>')}
    </div>
    <div class="reading-controls">
      <div class="font-controls">
        <button class="font-btn" onclick="decreaseFontSize()" title="Decrease font size">A−</button>
        <button class="font-btn" onclick="increaseFontSize()" title="Increase font size">A+</button>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="toggleBookmark('${data.id}')"
              data-bookmark="${data.id}" ${isBookmarked(data.id) ? 'style="color:var(--gold-main)"' : ''}>
        🔖 Bookmark
      </button>
      <button class="btn btn-ghost btn-sm" onclick="toggleFavorite('${data.id}')"
              data-favorite="${data.id}" ${isFavorited(data.id) ? 'style="color:#e11d48"' : ''}>
        ❤️ Favourite
      </button>
      <button class="btn btn-ghost btn-sm"
              onclick="copyText(document.getElementById('readingBodyText').innerText)">
        📋 Copy
      </button>
      <button class="btn btn-ghost btn-sm"
              onclick="shareContent('${data.title}', document.getElementById('readingBodyText').innerText.slice(0,200))">
        📤 Share
      </button>
    </div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('readingModal');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ─────────────────────────────────────────────────────
//  CARD RENDERERS
// ─────────────────────────────────────────────────────
function renderPoemCard(poem) {
  const isHindi = poem.language === 'hindi';
  const excerpt = poem.excerpt || poem.content.slice(0, 120) + '…';
  const bookmarked = isBookmarked(poem.id);
  const favorited = isFavorited(poem.id);

  return `
  <div class="poem-card animate-in" onclick="openModal(${JSON.stringify(poem).replace(/"/g, '&quot;')})">
    ${poem.trending ? '<div class="trending-badge">🔥 Trending</div>' : ''}
    <div class="poem-card-lang ${isHindi ? 'lang-hi' : 'lang-en'}">
      ${isHindi ? '🇮🇳 Hindi' : '🇬🇧 English'}
    </div>
    <h3 class="poem-card-title ${isHindi ? 'hindi' : ''}">${poem.title}</h3>
    <div class="poem-card-author">✍️ ${poem.author}</div>
    <p class="poem-card-excerpt ${isHindi ? 'hindi' : ''}">${excerpt}</p>
    <div class="poem-card-footer">
      <div class="poem-card-meta">
        <span class="meta-item">⏱️ ${poem.readingTime}</span>
        <span class="cat-badge">${poem.category}</span>
      </div>
      <div class="poem-card-actions" onclick="event.stopPropagation()">
        <button class="action-btn ${bookmarked ? 'active' : ''}"
                data-bookmark="${poem.id}"
                onclick="toggleBookmark('${poem.id}')" title="Bookmark">🔖</button>
        <button class="action-btn ${favorited ? 'active' : ''}"
                data-favorite="${poem.id}"
                onclick="toggleFavorite('${poem.id}')" title="Favourite">❤️</button>
      </div>
    </div>
  </div>`;
}

function renderStoryCard(story) {
  const isHindi = story.language === 'hindi';
  const coverEmojis = { 'Inspirational Stories':'🌟','Moral Stories':'⚖️','Historical Stories':'🏛️',
    'Horror Stories':'👻','Romantic Stories':'💕','Mystery Stories':'🔍','Adventure Stories':'🗺️',
    'Social Stories':'👥','Village Stories':'🌾','Success Stories':'🏆' };
  const emoji = coverEmojis[story.category] || '📖';

  return `
  <div class="story-card animate-in" onclick="openModal(${JSON.stringify(story).replace(/"/g, '&quot;')})">
    <div class="story-card-cover">
      <div class="story-card-cover-bg">${emoji}</div>
      <div class="story-card-cover-overlay"></div>
      <div class="story-card-cover-tag">
        <span class="poem-card-lang ${isHindi ? 'lang-hi' : 'lang-en'}">
          ${isHindi ? '🇮🇳 Hindi' : '🇬🇧 English'}
        </span>
      </div>
      ${story.trending ? '<div class="trending-badge">🔥 Trending</div>' : ''}
    </div>
    <div class="story-card-body">
      <h3 class="story-card-title ${isHindi ? 'hindi' : ''}">${story.title}</h3>
      <p class="story-card-summary ${isHindi ? 'hindi' : ''}">${story.summary}</p>
      <div class="poem-card-footer">
        <div class="poem-card-meta">
          <span class="meta-item">⏱️ ${story.readingTime}</span>
          <span class="cat-badge">${story.category}</span>
        </div>
        <div class="poem-card-actions" onclick="event.stopPropagation()">
          <button class="action-btn ${isBookmarked(story.id) ? 'active' : ''}"
                  data-bookmark="${story.id}"
                  onclick="toggleBookmark('${story.id}')" title="Bookmark">🔖</button>
          <button class="action-btn ${isFavorited(story.id) ? 'active' : ''}"
                  data-favorite="${story.id}"
                  onclick="toggleFavorite('${story.id}')" title="Favourite">❤️</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderShayariCard(sh) {
  const isHindi = sh.lang === 'hindi';
  const lines = sh.lines.replace(/\n/g, '<br>');

  return `
  <div class="shayari-card animate-in" onclick="openModal(${JSON.stringify({
    id: sh.id, title: sh.cat, author: sh.author,
    language: sh.lang, category: sh.cat, content: sh.lines, readingTime: '~1 min'
  }).replace(/"/g, '&quot;')})">
    <p class="shayari-text ${isHindi ? '' : 'english'}">${lines}</p>
    <div class="shayari-divider"></div>
    <div class="shayari-author">— ${sh.author}</div>
    <div class="shayari-cat">${sh.cat}</div>
    <div style="margin-top:12px;display:flex;gap:6px;justify-content:center" onclick="event.stopPropagation()">
      <button class="action-btn ${isBookmarked(sh.id) ? 'active' : ''}"
              data-bookmark="${sh.id}"
              onclick="toggleBookmark('${sh.id}')" title="Bookmark">🔖</button>
      <button class="action-btn ${isFavorited(sh.id) ? 'active' : ''}"
              data-favorite="${sh.id}"
              onclick="toggleFavorite('${sh.id}')" title="Favourite">❤️</button>
      <button class="action-btn"
              onclick="copyText(${JSON.stringify(sh.lines)})" title="Copy">📋</button>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────
//  FILTER + SEARCH HELPER
// ─────────────────────────────────────────────────────
function filterItems(items, query, filters) {
  return items.filter(item => {
    const lang = item.language || item.lang || '';
    const cat  = item.category || item.cat || '';
    const text = (item.title || '') + ' ' + (item.author || '') + ' ' + (item.content || item.lines || '') + ' ' + cat;

    if (filters.lang !== 'all' && lang !== filters.lang) return false;
    if (filters.cat  !== 'all' && cat  !== filters.cat)  return false;
    if (query && !text.toLowerCase().includes(query))    return false;
    return true;
  });
}

// ─────────────────────────────────────────────────────
//  DAILY QUOTE
// ─────────────────────────────────────────────────────
const DAILY_QUOTES = [
  { text: "कविता वो आईना है जिसमें आत्मा अपना चेहरा देखती है।", author: "राजेंद्र प्रसाद शर्मा", lang:"hindi" },
  { text: "Poetry is the journal of a sea animal living on land, wanting to fly in the air.", author: "Carl Sandburg", lang:"english" },
  { text: "शब्द तलवार से ज़्यादा तेज़ होते हैं — और दिल से ज़्यादा गहरे।", author: "राजेंद्र प्रसाद शर्मा", lang:"hindi" },
  { text: "A poem begins in delight and ends in wisdom.", author: "Robert Frost", lang:"english" },
  { text: "कहानी वो पुल है जो दो दिलों को जोड़ती है।", author: "राजेंद्र प्रसाद शर्मा", lang:"hindi" },
  { text: "Literature is the art of discovering something extraordinary about ordinary people.", author: "Boris Pasternak", lang:"english" },
  { text: "जो दिल को छू जाए वही असली कविता है।", author: "राजेंद्र प्रसाद शर्मा", lang:"hindi" },
];

function renderDailyQuote(el) {
  if (!el) return;
  const today = new Date().getDate();
  const q = DAILY_QUOTES[today % DAILY_QUOTES.length];
  const isHindi = q.lang === 'hindi';
  el.querySelector('.quote-text').className   = `quote-text ${isHindi ? 'hindi' : ''}`;
  el.querySelector('.quote-text').textContent  = q.text;
  el.querySelector('.quote-attribution').textContent = `— ${q.author}`;
}

// ─────────────────────────────────────────────────────
//  RANDOM QUOTE GENERATOR
// ─────────────────────────────────────────────────────
function randomQuote() {
  const idx = Math.floor(Math.random() * DAILY_QUOTES.length);
  const q = DAILY_QUOTES[idx];
  const isHindi = q.lang === 'hindi';
  const el = document.getElementById('quoteWidget');
  if (!el) return;
  const qtEl = el.querySelector('.quote-text');
  const atEl = el.querySelector('.quote-attribution');
  qtEl.style.opacity = '0';
  setTimeout(() => {
    qtEl.className = `quote-text ${isHindi ? 'hindi' : ''}`;
    qtEl.textContent = q.text;
    atEl.textContent = `— ${q.author}`;
    qtEl.style.opacity = '1';
    qtEl.style.transition = 'opacity 0.5s';
  }, 250);
}

// ─────────────────────────────────────────────────────
//  NEWSLETTER FORM (frontend-only)
// ─────────────────────────────────────────────────────
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (email) {
      showToast(`Subscribed! 🎉 Welcome to KavyaLok, ${email.split('@')[0]}`, 'success');
      form.reset();
    }
  });
}

// ─────────────────────────────────────────────────────
//  CONTACT FORM (frontend-only)
// ─────────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Message sent! We\'ll get back to you soon. 📬', 'success');
    form.reset();
  });
}

// ─────────────────────────────────────────────────────
//  SMOOTH COUNTER ANIMATION
// ─────────────────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || '');
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// ─────────────────────────────────────────────────────
//  INIT ALL ON DOM READY
// ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFontSize();
  initNavbar();
  initReadingProgress();
  initScrollAnimations();
  initParticles();
  initNewsletter();
  initContactForm();
  renderDailyQuote(document.getElementById('quoteWidget'));

  // Theme toggle button
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Random quote button
  const randomBtn = document.getElementById('randomQuoteBtn');
  if (randomBtn) randomBtn.addEventListener('click', randomQuote);

  // Counter animation trigger (via IntersectionObserver)
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); statsObserver.disconnect(); }
    });
    statsObserver.observe(statsSection);
  }

  // Typewriter
  const twEl = document.querySelector('.typewriter');
  if (twEl) {
    const words = twEl.dataset.words ? twEl.dataset.words.split('|') : ['Kavya', 'Shayari', 'Kahaniyaan'];
    initTypewriter(twEl, words);
  }
});

// Expose globally
window.openModal       = openModal;
window.closeModal      = closeModal;
window.toggleBookmark  = toggleBookmark;
window.toggleFavorite  = toggleFavorite;
window.toggleTheme     = toggleTheme;
window.randomQuote     = randomQuote;
window.copyText        = copyText;
window.shareContent    = shareContent;
window.increaseFontSize = increaseFontSize;
window.decreaseFontSize = decreaseFontSize;
window.filterItems     = filterItems;
window.renderPoemCard  = renderPoemCard;
window.renderStoryCard = renderStoryCard;
window.renderShayariCard = renderShayariCard;
window.initSearch      = initSearch;
window.initFilterTabs  = initFilterTabs;
window.initTypewriter  = initTypewriter;
window.initScrollAnimations = initScrollAnimations;
window.showToast       = showToast;
window.State           = State;

