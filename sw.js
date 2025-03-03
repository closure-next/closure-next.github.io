const cacheName = 'closure-next-cache-v1'; 

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
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
