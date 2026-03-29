// Version hochzählen, wenn du CSS oder JS änderst!
const CACHE = 'skat-v1.6';

const CACHE_FONTS = 'skat-fonts-v1';

const FONT_FILES = [
  './fonts/playfair-display-v40-latin-700.woff2',
  './fonts/playfair-display-v40-latin-900.woff2',
  './fonts/source-code-pro-v31-latin-regular.woff2',
  './fonts/source-code-pro-v31-latin-600.woff2',
  './icon-192.png',
  './icon-512.png',
];

// Bei Installation: sofort übernehmen, nur Fonts vorab cachen
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_FONTS).then(c => c.addAll(FONT_FILES))
  );
  self.skipWaiting();
});

// Bei Aktivierung: alle alten Core-Caches löschen
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_FONTS)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Fonts + Icons: Cache First
  const isFont = url.pathname.includes('/fonts/') ||
                 url.pathname.endsWith('icon-192.png') ||
                 url.pathname.endsWith('icon-512.png');

  if (isFont) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
    return;
  }

  // HTML, JS, CSS: immer frisch vom Server, nie aus Cache
  e.respondWith(fetch(e.request));
});
