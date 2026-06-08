// Merges admin-published content from localStorage into the static data arrays.
// Loaded after poems.js / stories.js / shayari.js and before app.js.
(function () {
  function load(key) {
    try { return JSON.parse(localStorage.getItem(key) || '[]'); }
    catch (e) { return []; }
  }
  if (typeof POEMS   !== 'undefined') load('kl_admin_poems').forEach(function(p)  { POEMS.push(p); });
  if (typeof STORIES !== 'undefined') load('kl_admin_stories').forEach(function(s) { STORIES.push(s); });
  if (typeof SHAYARI !== 'undefined') load('kl_admin_shayari').forEach(function(sh){ SHAYARI.push(sh); });
})();
