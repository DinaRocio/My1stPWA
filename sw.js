"use strict";
//Service workers have introduced a new API named cache API, or cache storage , in order to precached our app shell (check into applicatio in dev tools)

const carDeasCacheName = "carDealsCacheV1"

const carDealsCacheFiles = [
  "https://cdn.jsdelivr.net/npm/pwacompat@2.0.17/pwacompat.min.js",
  "https://cdn.jsdelivr.net/gh/bstavroulakis/progressive-web-apps/resources/localforage.js",
  "js/app.js",
  "js/carPageService.js",
  "js/carService.js",
  "js/clientStorage.js",
  "js/constants.js",
  "js/swRegister.js",
  "js/template.js",
  "/",
  "index.html",
  "style.css",
];

self.addEventListener("install", (event) => {
  console.log("From SW: Instalar Evento");
  const preCache = async () => {
    const cache = await caches.open(carDeasCacheName);
    return cache.addAll(carDealsCacheFiles)
  };
  //to tell the browser that the service worker won't be considered installed until the promise is resolved or rejected
  event.waitUntil(preCache()); 
});
self.addEventListener("activate", (event) => {
  console.log("From SW: Activar evento");
});
