/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con 
	la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

// 1.1

//declaración de la constante showMe que contiene el elemento con la clase .showme

const showMe = document.querySelector(".showme");

//mostrar por consola el elemento showMe

console.log(showMe);

// 1.2

//declaración de la constante pillado que contiene el elemento con el id #pillado

const pillado = document.querySelector("#pillado");

//mostrar por consola el elemento pillado

console.log(pillado);

// 1.3

//declaración de la constante p que contiene todos los elementos p

const p = document.querySelectorAll("p");

//mostrar por consola todos los elementos p

console.log(p);

// 1.4

//declaración de la constante pokemon que contiene todos los elementos con la clase .pokemon

const pokemon = document.querySelectorAll(".pokemon");

//mostrar por consola todos los elementos con la clase .pokemon

console.log(pokemon);

// 1.5

//declaración de la constante dataFunction que contiene todos los elementos con el atributo data-function="testMe"

const dataFunction = document.querySelectorAll("[data-function= testMe]");

//mostrar por consola todos los elementos con el atributo data-function="testMe"

console.log(dataFunction);

//1.6

//declaracion de la constante personaje que contiene el tercer personaje con el atributo data-function="testMe"

const personaje = document.querySelectorAll("[data-function= testMe]")[2];

//mostrar por consola el tercer personaje con el atributo data-function="testMe"

console.log(personaje);
