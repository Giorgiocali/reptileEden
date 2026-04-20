// Snake Tracker - Service Worker v1.0
const CACHE_NAME = 'reptilEden-v1';
const ASSETS = ['/reptilEden/', '/reptilEden/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request)).catch(() => caches.match('/reptilEden/index.html'))
  );
});

// Background Sync — controlla le scadenze ogni giorno
self.addEventListener('periodicsync', e => {
  if (e.tag === 'check-snake') {
    e.waitUntil(checkDeadlines());
  }
});

async function checkDeadlines() {
  const clients = await self.clients.matchAll();
  if (clients.length > 0) return; // App aperta, non serve notificare qui

  // Leggi i dati dal localStorage via client message non è possibile in SW,
  // ma possiamo usare IndexedDB o Cache API per dati persistenti.
  // Per semplicità, il controllo principale avviene nell'app.
}

// Gestione notifiche push (per future implementazioni con server)
self.addEventListener('push', e => {
  if (!e.data) return;
  const data = e.data.json();
  e.waitUntil(
    self.registration.showNotification(data.title || '🐍 Snake Tracker', {
      body: data.body || '',
      icon: data.icon || '/icon-192.png',
      badge: '/icon-192.png',
      tag: data.tag || 'snake-alert',
      renotify: true,
      actions: [
        { action: 'open', title: '📱 Apri App' },
        { action: 'dismiss', title: 'Ignora' }
      ]
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action === 'dismiss') return;
  e.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clients => {
      if (clients.length > 0) { clients[0].focus(); return; }
      return self.clients.openWindow('/reptilEden/');
    })
  );
});
