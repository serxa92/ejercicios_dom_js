/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul"); 

ul.id = "albums"; 

albums.forEach((album) => {
  const li = document.createElement("li"); 
  li.textContent = album; 

  const img = document.createElement("img");

  //Imagen del peruano aleman
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJOxWh-QirKWXBNhjtnpR8ChEzi4K0X5nHA&s";
  img.alt = album;
  img.style.width = "100px"; 
  li.appendChild(img); 
  ul.appendChild(li);
});

document.body.appendChild(ul); 