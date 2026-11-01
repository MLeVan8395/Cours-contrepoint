// Service worker : permet d'installer l'appli et de l'utiliser hors connexion.
const CACHE='atelier-contrepoint-v3';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  // réseau d'abord (pour recevoir les mises à jour), cache en secours hors connexion
  e.respondWith(fetch(e.request).then(r=>{const copy=r.clone(); if(r.ok&&(e.request.url.startsWith(self.location.origin)||e.request.url.includes('fonts.g'))) caches.open(CACHE).then(c=>c.put(e.request,copy)); return r;}).catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html'))));
});
