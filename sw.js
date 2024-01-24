// currently not in use
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('your-app-cache').then((cache) => {
            return cache.addAll([
                '/', // Cache the root URL
                '/index.html', // Cache the index.html file
                // Add more files or paths to be cached as needed
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
