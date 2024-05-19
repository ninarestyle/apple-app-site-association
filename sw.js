// sw.js
self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('apple-app-site-association')) {
      event.respondWith(
        fetch(event.request).then(function(response) {
          const newHeaders = new Headers(response.headers);
          newHeaders.set('Content-Type', 'application/json');
          const moddedResponse = new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
          });
          return moddedResponse;
        })
      );
    }
  });
  