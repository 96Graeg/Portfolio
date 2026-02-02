const CACHE_NAME = 'graeg-portfolio-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/logo2.png',
  // Tutaj możesz dodać inne zasoby, np. biblioteki JS jeśli masz je lokalnie
];

// Instalacja Service Workera
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Pobieranie zasobów (serwowanie z cache, jeśli offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
