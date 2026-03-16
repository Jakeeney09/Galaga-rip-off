const CACHE_NAME = 'star-raid-3d-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './manifest.webmanifest',
  './service-worker.js',
  './src/main.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/models/ship2.mtl',
  './assets/models/ship2.obj',
  './assets/models/ship6.mtl',
  './assets/models/ship6.obj',
  './assets/models/ship7.mtl',
  './assets/models/ship7.obj',
  './assets/models/ship8.mtl',
  './assets/models/ship8.obj',
  './assets/models/tie-fighter.mtl',
  './assets/models/tie-fighter.obj'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
