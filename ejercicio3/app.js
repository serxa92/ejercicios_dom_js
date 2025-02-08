/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.

 */

// 1.1

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");

countries.forEach((country) => {
  const li = document.createElement("li");
  li.textContent = country;
  ul.appendChild(li);
});

document.body.appendChild(ul);

console.log(ul);

// 1.2

const removeMe = document.querySelector(".fn-remove-me");

removeMe.remove();

// 1.3

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHere = document.querySelector('[data-function="printHere"]');

const ul2 = document.createElement("ul");

cars.forEach((car) => {
  const li = document.createElement("li");
  li.textContent = car;
  ul2.appendChild(li);
});

printHere.appendChild(ul2);

// 1.4

const countries2 = ["España", "Francia", "Suiza", "Australia", "Venezuela"];

const divs = document.createElement("div");

countries2.forEach((country) => {
  const h4 = document.createElement("h4");
  h4.textContent = country;
  const img = document.createElement("img");
  img.src = `https://picsum.photos/300/200?random=${Math.floor(
    Math.random() * 10
  )}`;
  divs.appendChild(h4);
  divs.appendChild(img);
});

document.body.appendChild(divs);

// 1.5

const removeLast = document.createElement("button");

removeLast.textContent = "Remove last country";

removeLast.addEventListener("click", () => {
  divs.lastChild.remove();
});

document.body.appendChild(removeLast);

// 1.6

const divsArray = Array.from(divs.children);

divsArray.forEach((div) => {
  const removeDiv = document.createElement("button");
  removeDiv.textContent = "Remove this country";
  removeDiv.addEventListener("click", () => {
    div.remove();
  });
  div.appendChild(removeDiv);
});
