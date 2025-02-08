/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */

// 2.1

// Crear un div vacio

const div = document.createElement("div");

document.body.appendChild(div);

console.log(div);

// 2.2

// Crear un div con un <p>

const divP = document.createElement("div");

const p = document.createElement("p");

divP.appendChild(p);

document.body.appendChild(divP);

console.log(divP);

// 2.3

// Crear un div con 6 <p> con un bucle

const divLoop = document.createElement("div");

for (let i = 0; i < 5; i++) {
    const p = document.createElement("p");
    divLoop.appendChild(p);
}

divLoop.appendChild(p);

document.body.appendChild(divLoop);

console.log(divLoop);

// 2.4

// Crear un <p> con el texto 'Soy dinámico!' y añadirlo al body


const pText = document.createElement("p");

pText.textContent = "Soy dinámico!";

document.body.appendChild(pText);

console.log(pText);

// 2.5

// Añadir 'Wubba Lubba dub dub' al h2 con la clase .fn-insert-here

const h2 = document.querySelector(".fn-insert-here");

h2.textContent = "Wubba Lubba dub dub";

console.log(h2);


// 2.6

// Crear una lista ul > li con los textos del array

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
    const li = document.createElement("li");
    li.textContent = apps[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

console.log(ul);


// 2.7

// Eliminar todos los nodos que tengan la clase .fn-remove-me

const removeMe = document.querySelectorAll(".fn-remove-me");

removeMe.forEach((element) => {
    element.remove();
});

console.log(removeMe);

// 2.8

// No me quedaba claro entre que div lo querias insertar🤣

const pMid = document.createElement("p");

pMid.textContent = "Voy en medio!";

document.body.insertBefore(pMid, divP);

console.log(pMid);

// 2.9

// Aqui al haber modificado antes los divs con esa clase, solo se inserta en el div con la clase .fn-insert-here que queda😅😅, no se si te vale así

const pIn = document.createElement("p");

pIn.textContent = "Voy dentro!";

const insertHere = document.querySelectorAll(".fn-insert-here");

insertHere.forEach((element) => {
    element.appendChild(pIn);
});

console.log(pIn);

