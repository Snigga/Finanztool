self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Minimaler Fetch-Handler, damit Chrome die PWA-Prüfung besteht
  event.respondWith(fetch(event.request));
});