import sumar from "./sumador";
import esBisiesto from "./esBisiesto";

const year = document.querySelector("#year");

const form = document.querySelector("#year-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const y = Number.parseInt(year.value);
if(esBisiesto(y))
{
  div.innerHTML = "<p>" + "Es Bisiesto" + "</p>";
}
else{
  div.innerHTML = "<p>" + "No es Bisiesto" + "</p>";
}
  
});
