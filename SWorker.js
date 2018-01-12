self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        // cache.add('/');
        // cache.add('/index.html');
        // cache.add('/src/js/app.js');
        cache.addAll([
          '/',
          '/index.html',
          '/pages/basic-grid.html',
          '/pages/full-width.html',
          '/pages/gallery.html',
          '/pages/sidebar-left.html',
          '/pages/sidebar-right.html',
          '/pages/Slider1.html',
          '/layout/scripts/jquery.backtotop.js',
          '/layout/scripts/jquery.min.js',
          '/layout/scripts/jquery.mobilemenu.js',
          '/layout/styles/flexbox.css',
          '/layout/styles/fontawesome-4.6.3.min.css',
          '/layout/styles/framework.css',
          '/layout/styles/layout.css',

        //  '/src/js/app.js',
        //  '/src/css/app.css',
        //  '/src/images/4.gif',
        //  '/src/images/raja.mp3',
        //  'https://fonts.googleapis.com/css?family=Raleway:400,700'
        ]);
      })
  );
});
self.addEventListener('fetch', function(){


});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});
