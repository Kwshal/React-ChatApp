self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('fetch', function(event) {
  // Optionally add caching logic here
});