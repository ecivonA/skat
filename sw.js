// Version hochzählen, wenn du CSS oder JS änderst!
const CACHE = 'skat-v1.4'; 

const FILES = [
  './',
  './index.html',
  './style.css',
  './lang.js',
  './calc.js',
  './ui.js',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './fonts/playfair-display-v40-latin-700.woff2',
  './fonts/playfair-display-v40-latin-900.woff2',
  './fonts/source-code-pro-v31-latin-regular.woff2',
  './fonts/source-code-pro-v31-latin-600.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Prüfen, ob es die Hauptseite, das Skript oder das CSS ist
  const isCore = url.pathname.endsWith('.html') || 
                 url.pathname.endsWith('/') || 
                 url.pathname.endsWith('style.css') ||
                 url.pathname.endsWith('lang.js') || 
                 url.pathname.endsWith('calc.js') || 
                 url.pathname.endsWith('ui.js') || 
                 url.pathname.endsWith('app.js') || 
                 url.pathname.endsWith('manifest.json');

  if (isCore) {
    // NETWORK FIRST: Bei Logik-Änderungen immer versuchen, das Neueste zu laden
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // CACHE FIRST: Für Fonts und Icons (die ändern sich eh nie)
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});