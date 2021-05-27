'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "088534dfd07a597904488e86401c3f23",
"assets/assets/fonts/UTM_Neo_Sans_Intel/UTM_Neo_Sans_Intel.ttf": "7874262d5a69fef8030d8b7a0d664fc0",
"assets/assets/fonts/UTM_Neo_Sans_Intel/UTM_Neo_Sans_IntelBold.ttf": "c10457f27eaa25ebe23dbf91e6ee017f",
"assets/assets/fonts/UTM_Neo_Sans_Intel/UTM_Neo_Sans_IntelBold_Italic.ttf": "dcdb537314932519c165e0ce1b4237f0",
"assets/assets/fonts/UTM_Neo_Sans_Intel/UTM_Neo_Sans_Intel_Italic.ttf": "d3923fe952cd942d7c975d3aadbdfb52",
"assets/assets/icons/ic_bagde_1.png": "7e7fbfbaf7aaac71688d8bcce431b3f0",
"assets/assets/icons/ic_bagde_2.png": "a6a96bc1a929a6eddca408f97ca33672",
"assets/assets/icons/ic_bagde_3.png": "71860b9deae78cb9f072d010ac66d9d8",
"assets/assets/icons/ic_booking.svg": "97bcd288e58d3a6e782a9fe29d616ac5",
"assets/assets/icons/ic_booking_active.svg": "31b087f594781521619e25114c18e8d6",
"assets/assets/icons/ic_doc.svg": "6314783d6822777477cd75c798748628",
"assets/assets/icons/ic_doc_active.svg": "f5aba3e729a27f3aed14adceb03c351e",
"assets/assets/icons/ic_fingerprint.png": "e272a696d42e62655589e0860484cdd6",
"assets/assets/icons/ic_home.svg": "2c4a5edd20155250a838b1c6f3b772c1",
"assets/assets/icons/ic_home_active.svg": "07a456964411cf3efcbafc211d83be8d",
"assets/assets/icons/ic_noti.svg": "8b2e7ed2e4392c401ec58c19a309b84d",
"assets/assets/icons/ic_noti_active.svg": "5eb5b62508756a9dcffdeeb85c799963",
"assets/assets/icons/ic_user.svg": "140bfcff84a154ec3db19fc3de89e10e",
"assets/assets/icons/ic_user_active.svg": "a85c09d51dda9e1f27e0ceb97ccfec2e",
"assets/assets/images/avatar.jpg": "ae40ee1b6e06ca96a2bbb9504e1bef51",
"assets/assets/images/bg_appbar_profile.png": "85470646578afd602fff2b82e829bcd9",
"assets/assets/images/bg_walkthrought_1.png": "2a973365ac36c264e9c73c0334e3ed0a",
"assets/assets/images/bg_walkthrought_2.png": "90c87e0ee0a95f8c76e21d282be53bca",
"assets/assets/images/bg_walkthrought_3.png": "c4678c48ebd7226c321a7385ca9c77ad",
"assets/assets/images/bg_wallthrought.png": "820fe7cce31d2b9950a6cd0214447780",
"assets/assets/images/bg_wallthroughts.png": "646775acaa921eef008650b3b12591ff",
"assets/assets/images/slpash_screen.png": "bbb84fa33d060ddb9553d4aa473bd7b6",
"assets/assets/logo/logo.svg": "ad48562c04ddc5eae2c11aa7090eed81",
"assets/assets/logo/logo_bg_white.png": "cd1c6e10cfb787454841d7a71ae0d551",
"assets/assets/logo/logo_no_sologan.svg": "5d51ece8b9c8eef81c0d9ee9058ac246",
"assets/assets/logo/logo_text.svg": "cd2e2a0033b686594c7006b3df2331f9",
"assets/assets/logo/logo_text_white.png": "8c08795a7be3523a5646c8df01f1788b",
"assets/assets/logo/logo_white.png": "909e75001e9e61856dbf2924beb49111",
"assets/assets/logo/logo_white.svg": "92cdf642f1b460618ee2514744f38b06",
"assets/FontManifest.json": "7749a12d1011e4fe8245cc288427ae27",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "602e10826838333169047e48feb1bb4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4ca04ff0a3911f5c4e30b8fb02f42ec0",
"/": "4ca04ff0a3911f5c4e30b8fb02f42ec0",
"main.dart.js": "20eab211a24998d3f75ce3ada438b70b",
"manifest.json": "6e325df4bbc3cc127f426dc13939301d",
"splash/img/dark-1x.png": "cc1d37a897070822c533f3861f29e38c",
"splash/img/dark-2x.png": "00c5dd8a96da4f8eba6587b7e69a693b",
"splash/img/dark-3x.png": "f8f1faedeed3036f6c95fdc195878ae5",
"splash/img/light-1x.png": "cc1d37a897070822c533f3861f29e38c",
"splash/img/light-2x.png": "00c5dd8a96da4f8eba6587b7e69a693b",
"splash/img/light-3x.png": "f8f1faedeed3036f6c95fdc195878ae5",
"splash/style.css": "1a36b159fc9b0d83837cad10aed474dc",
"version.json": "08436f3f22231ec34ae95e51fca7ff2d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
