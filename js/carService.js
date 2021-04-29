
import { API_URL_LATEST } from "./constants.js";
import { appendCars } from "./template.js";
import { addCars, getCars, getLastItemId } from "./clientStorage.js";
import { preCacheDetailsPage } from "./carPageService.js";

export const loadCars = async () => {
  document.getElementById("connection-status").innerHTML = await fetchPromise();
  const cars = await getCars();
  appendCars(cars);
};

const fetchPromise = () => {
  // Lanzaremos un error que atrape la situación cuando el usuario no tenga conexión
  const promiseRequest = new Promise(async (resolve) => {
    try {
      await loadCarsRequest();
    } catch (err) {
      resolve("No hay conexión, mostrándote resultados offline");
    }
    resolve("Esta conexión está OK, mostrándote los últimos resultados");
  });
  const promiseHanging = new Promise((resolve) => {
    setTimeout(
      resolve,
      3000,
      "La conexión está algo lenta, mostrándote resultados offline"
    );
  });
  return Promise.race([promiseRequest, promiseHanging]);
};

export const loadCarsRequest = async () => {
  const requestURL = `${API_URL_LATEST}?carId=${await getLastItemId()}`;
  const response = await fetch(requestURL);
  const data = await response.json();
  await addCars(data.cars);
  data.cars.forEach(preCacheDetailsPage);
};
