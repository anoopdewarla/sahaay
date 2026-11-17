/* Old location: clear the cache and step aside so the redirect always loads. */
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()));});
