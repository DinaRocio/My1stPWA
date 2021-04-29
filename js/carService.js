import { API_URL_LATEST } from "./constants.js";
import { appendCars } from "./template.js";
import { addCars, getCars, getLastItemId } from "./clientStorage.js";

export const loadCars = async () => {
  await loadCarsRequest();
  const cars = await getCars();
  appendCars(cars);
};

export const loadCarsRequest = async () => {
  const requestURL = `${API_URL_LATEST}?carId=${await getLastItemId()}`;
  const response = await fetch(requestURL);
  const data = await response.json();
  await addCars(data.cars);
};
