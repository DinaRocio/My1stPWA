const generateCarCard = (car) => {
  console.log(car.value)
  const template = document.querySelector("#car-card").innerHTML;
  return template.replace(/\${(.*?)}/g, (x, g) => car.value[g]);
};

export const appendCars = (cars) => {
  if (!cars) return;
  console.log(cars)
  const cardHTML = cars.map((c) => generateCarCard(c)).join("");
  document.querySelector(".mdl-grid").innerHTML += cardHTML;
}
