importScripts("workbox-v3.4.1/workbox-sw.js");
var CACHE_NAME = "rhenus-cache";

self.addEventListener("message", ({ data }) => {
  if (data === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(url) {
  return fetch(url)
    .then(function(response) {
      // Check if we received a valid response
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return caches.open(CACHE_NAME).then(function(cache) {
        cache.put(url, response.clone());
        return response;
      });
    })
    .catch(function(error) {
      console.error("Request failed:", error);
      // You could return a custom offline 404 page here
    });
}

// Clear cache
self.addEventListener("activate", function(event) {
  event
    .waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames
            .filter(function(cacheName) {
              return true;
            })
            .map(function(cacheName) {
              return caches.delete(cacheName);
            })
        );
      })
    )
    .then(self.clients.claim());
});

self.workbox.precaching.precacheAndRoute([]);
