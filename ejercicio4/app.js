/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

// 1.1

const btnToClick = document.createElement("button");

btnToClick.id = "btnToClick";

btnToClick.textContent = "Click me!";

document.body.appendChild(btnToClick);

btnToClick.addEventListener("click", (e) => {
  console.log(e);
});

// 1.2

const inputFocus = document.createElement("input");

inputFocus.id = "inputFocus";

document.body.appendChild(inputFocus);

inputFocus.addEventListener("focus", (e) => {
  console.log(e.target.value);
});

// 1.3

const inputInput = document.createElement("input");

inputInput.id = "inputInput";

document.body.appendChild(inputInput);

inputInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});
