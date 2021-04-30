"use strict";

self.addEventListener("install", (event) => {
  console.log("From SW: Instalar Evento");
});
self.addEventListener("activate", (event) => {
  console.log("From SW: Activar evento");
});
