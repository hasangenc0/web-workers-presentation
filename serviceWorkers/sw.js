const cacheKey = 'cache-v1'
self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
  event.waitUntil(
    caches.open(cacheKey).then(cache => cache.add('./leopard.jpg'))
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  if (url.origin == location.origin && url.pathname == '/lion.jpg') {
    e.respondWith(caches.match('/leopard.jpg'));
  }
})
