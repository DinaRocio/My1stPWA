import { API_URL_LATEST } from "./constants.js";
import { appendCars } from "./template.js";

export const loadCars = async () => {
  const response = await fetch(API_URL_LATEST);
  const data = await response.json();
  console.log(data.cars)
  appendCars(data.cars)
};
