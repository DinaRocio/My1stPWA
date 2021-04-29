import { API_URL_LATEST } from "./constants.js";
import { appendCars } from "./template.js";
import { addCars } from "./clientStorage.js";

export const loadCars = async () => {
  const response = await fetch(API_URL_LATEST);
  const data = await response.json();
  appendCars(data.cars);
  await addCars(data.cars);
};
