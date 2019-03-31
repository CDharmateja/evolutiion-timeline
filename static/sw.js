/* eslint-disable */
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
//   workbox.routing.registerRoute(
//     '/',
//     new workbox.strategies.CacheFirst({
//       cacheName: 'evolution-cache',
//     })
//   );
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }


// latest cache name
const staticCacheName = 'evolution-1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then((cache) => {
        // cache static assets
        return cache.addAll([
          '/'
        ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(
      // If request is already cached, then return the response from cache
      // Else fetch the request, put it in cache and return response
      caches.match(event.request, {
        ignoreSearch: true
      }).then((response) => {
        return response || fetch(event.request)
          .then((resp) => {
            const responseClone = resp.clone();

            caches.open(staticCacheName).then((cache) => {
              cache.put(event.request, responseClone);
            });

            return resp;
          });
      }).catch((error) => {
        console.log(error);
      })
    );
  }
});

// Delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('evolution-') &&
            cacheName != staticCacheName;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});