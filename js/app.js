import { loadCars } from "./carService.js";
import { loadCarPage } from "./carPageService.js";

window.pageEvents = {
  loadCarPage,
  loadCars,
};

loadCars();
