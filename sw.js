/* Offline-Cache nur fuer eigene Dateien dieser App */
const PREFIX="notenrechner-",CACHE=PREFIX+"v8";
const SHELL=["./","index.html","app.js","manifest.webmanifest","fonts/fonts.css",
 "fonts/archivo-latin-700-normal.woff2","fonts/archivo-latin-800-normal.woff2",
 "fonts/source-sans-3-latin-400-normal.woff2","fonts/source-sans-3-latin-600-normal.woff2","fonts/source-sans-3-latin-700-normal.woff2",
 "fonts/ibm-plex-mono-latin-500-normal.woff2","fonts/ibm-plex-mono-latin-600-normal.woff2",
 "vendor/jspdf.umd.min.js","vendor/docx.umd.js","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL.map(u=>new Request(u,{cache:"reload"})))).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith(PREFIX)&&n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const req=e.request,url=new URL(req.url);
  if(req.method!=="GET"||url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  const fromNet=()=>fetch(req).then(r=>{if(r.ok&&r.type==="basic"){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return r;});
  /* Immer zuerst das Netz (neue Version sofort), offline aus dem Cache */
  e.respondWith(fromNet().catch(()=>caches.match(req,{ignoreSearch:true}).then(h=>h||(req.mode==="navigate"?caches.match("index.html"):Response.error()))));
});
