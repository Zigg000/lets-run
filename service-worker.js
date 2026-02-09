const CACHE="run-game-v1";
const FILES=[
  "./",
  "./index.html",
  "./bg.gif",
  "./player.gif",
  "./obstacle.png",
  "./bgm.mp3",
  "./jump.wav",
  "./gameover.wav"
];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
