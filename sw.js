const cacheName = 'closure-next-cache-v1';
const offlineFallbackPage = "offline.html";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Install event listener
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/contact',
        '/contact.html',
        '/contribute',
        '/contribute.html',
        '/faq',
        '/faq.html',
        '/history',
        '/history.html',
        '/showcase',
        '/showcase.html',
        '/404',
        '/404.html',
        '/robots.txt',
        '/sitemap.xml',
        '/assets/image/Closure Next.png',
        '/assets/img/android-chrome-192x192.png',
        '/assets/img/android-chrome-512x512.png',
        '/assets/img/apple-touch-icon.png',
        '/assets/img/favicon-16x16.png',
        '/assets/img/favicon-32x32.png',
        '/assets/img/favicon.ico',
        '/assets/img/site.webmanifest',
        '/assets/scripts/functions.js',
        '/assets/scripts/list-posts.js',
        '/assets/scripts/serviceworker.js',
        '/assets/styles.css',
        '/blog',
        '/blog/index.html',
        '/policies/accessibility',
        '/policies/accessibility.html',
        '/policies/bot',
        '/policies/bot.html',
        '/policies/brand',
        '/policies/brand.html',
        '/policies/cc-by-4.0',
        '/policies/cc-by-4.0.html',
        '/policies/contact',
        '/policies/contact.html',
        '/policies/contribution',
        '/policies/contribution.html',
        '/policies/cookies',
        '/policies/cookies.html',
        '/policies/data',
        '/policies/data.html',
        '/policies/ethical',
        '/policies/ethical.html',
        '/policies/governance',
        '/policies/governance.html',
        '/policies',
        '/policies/index.html',
        '/policies/legal',
        '/policies/legal.html',
        '/policies/licensing',
        '/policies/licensing.html',
        '/policies/manifesto',
        '/policies/manifesto.html',
        '/policies/privacy',
        '/policies/privacy.html',
        '/policies/protection',
        '/policies/protection.html',
        '/policies/service',
        '/policies/service.html',
        '/policies/support',
        '/policies/support.html',
        '/policies/terms',
        '/policies/terms.html',
        '/policies/update',
        '/policies/update.html',
        '/offline',
        '/offline.html',
        offlineFallbackPage,
      ]);
    })
  );
});

// Fetch event listener with network-first strategy and offline fallback
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const preloadResp = await event.preloadResponse;
          if (preloadResp) {
            return preloadResp;
          }
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          const cache = await caches.open(cacheName);
          const cachedResp = await cache.match(offlineFallbackPage);
          return cachedResp;
        }
      })()
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  }
});

// Skip waiting for new service worker version
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Workbox setup for navigation preload and stale-while-revalidate
if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: cacheName
  })
);
