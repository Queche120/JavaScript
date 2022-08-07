const peticion = new XMLHttpRequest;

peticion.open("GET","informacion.txt");

peticion.send();

console.log(peticion)