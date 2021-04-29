const generateCarCard = (car) => {
  console.log(car.value)
  const template = document.querySelector("#car-card").innerHTML;
  return template.replace(/\${(.*?)}/g, (x, g) => car.value[g]);
};

export const appendCars = (cars) => {
  document.getElementById("first-load").innerHTML="";
  if (!cars) return;
  const cardHTML = cars.map((c) => generateCarCard(c)).join("");
  document.querySelector(".mdl-grid").innerHTML += cardHTML;
}
