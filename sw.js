const CACHE_NAME = "maggie-lab-home-v21";
const APP_SHELL = [
  "./index.html",
  "./PetHabitKingdom.html",
  "./ZhuyinTypingAdventure.html",
  "./Explore.html",
  "./manifest.webmanifest",
  "./favicons/icon-192.png",
  "./images/hero-scene-v2.webp",
  "./images/why-family.webp",
  "./images/pet-habit-card.webp",
  "./images/pet-habit-intro.webp",
  "./images/work-process.webp",
  "./images/zhuyin-cover.webp",
  "./images/zhuyin-intro.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // content/ 底下的 JSON 是 Pages CMS 編輯的內容，一律先連網路抓最新版本，
  // 抓不到（離線）才退回用快取裡的舊版本。不能用「快取優先」，
  // 否則妳在 Pages CMS 編輯完，網站可能還是顯示舊內容。
  if (url.pathname.includes("/content/")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
    )
  );
});
