'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aa2a5fd74c25022ef3b02711e8f50e25",
"assets/AssetManifest.bin.json": "f096bca4f4d4fec98321a66f52c10197",
"assets/AssetManifest.json": "378d17716fc595946df6c1adb21a80ce",
"assets/assets/images/fb%2520cover%2520and%2520pp-02.jpg": "8b840ef1a7f0700922a45416f61c6215",
"assets/assets/images/fb%2520cover%2520and%2520pp-03.jpg": "ce60338a60999e230a457642898216cf",
"assets/assets/images/fb%2520cover%2520and%2520pp-2-03.jpg": "48cb5e438315b7498311eae0f1945a6e",
"assets/assets/images/g0.png": "6e0f5f283550c5f12dc7d9348311328a",
"assets/assets/images/g1.png": "42479b140eec4c112afc0135e40f6c55",
"assets/assets/images/g10.png": "a713132193b0d6e62d73e82c710d1bcd",
"assets/assets/images/g11.png": "ddfd5aee1b506920e6b439646ba62314",
"assets/assets/images/g12.png": "31df6d01083434e010a2a3d9c9cc25de",
"assets/assets/images/g13.png": "a0a4874032ba9ca377729bc66f6c39d7",
"assets/assets/images/g14.png": "f9cc98de95d4f0a23daccb2e114a0739",
"assets/assets/images/g15.png": "8e559fe71f5e9b8449d07220482de2ee",
"assets/assets/images/g2.png": "390809a9a2440599619fc961cb839728",
"assets/assets/images/g3.png": "43f105418788eee60785bc68b72b9424",
"assets/assets/images/g4.png": "6f6845ee668425ed90977a314e53ee84",
"assets/assets/images/g5.png": "a073c1f1f7db64c284f8691cee4706ce",
"assets/assets/images/g6.png": "be3e4fffae51b91ba948380c214a7439",
"assets/assets/images/g7.png": "10703b548994d2116ae36d137f1d3010",
"assets/assets/images/g8.png": "246ec13cf1c05eb267c7fc38455880d6",
"assets/assets/images/g9.png": "171aada9f471794416784b5cfe7ebe1d",
"assets/assets/images/LOGOS-01.png": "667d94ab71bffebf357259b99f9b3477",
"assets/assets/images/LOGOS-02.png": "aaea3a09a9da0de9da419d90a95baa5b",
"assets/assets/images/LOGOS-03.png": "8c4dd4213345f27b979da7516ff958f2",
"assets/assets/images/LOGOS-04.png": "069707677c2192afcef5d99c4c9df0af",
"assets/assets/images/logo_final.png": "8c4dd4213345f27b979da7516ff958f2",
"assets/assets/images/Website-10.jpg": "e474182881146a82d13708f39618dfd2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "84cfed7217b187b6d6cfb2bf7244dcaf",
"assets/NOTICES": "65208fc440d45df47b3fada5799ff576",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "630c0246bfae8c28f2b50e7ae3d964d5",
"canvaskit/canvaskit.wasm": "dce026672c583772838e4d2e1628f255",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "14b500e4ddcb3c5f46d1af587d15165b",
"canvaskit/chromium/canvaskit.wasm": "c6d9da7c7123272fbd22bc0fcaa2ad4f",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "7e15fdd687fd9b4bf57b5e626c3ebddb",
"canvaskit/skwasm.wasm": "721dc41c7f0b803182f1ab5b860ad6e5",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "997034d1a53f5a96123660a4c08cfb4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "658eea9e7660814f2587af8f1b500cae",
"/": "658eea9e7660814f2587af8f1b500cae",
"main.dart.js": "53d43bd749fd8dab9aff010c187077b6",
"manifest.json": "2c8379c65d9ecb632927c6fc595ced9d",
"version.json": "f17f10678b62196c38d1fc8b582e90d0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
