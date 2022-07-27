

const contenedor = document.querySelector(".container");

function crearLlave(nombre,modelo,precio){
	nombre= `<h2>${nombre}</h2>`;
	img = `<img src="llave.png">`;
	modelo= `<h3>${modelo}</h3>`;
	precio= `<p>Precio: <b>${precio}</b></p>`;
	return [img,nombre,modelo,precio];

}
//const llave = crearLlave("Llave1","modelo x", "33");

//document.write(llave[0],llave[1],llave[2])

//contenedor.innerHTML = llave[0]+llave[1]+llave[2];
const changeHidden = (number)=>{
	document.querySelector(".key-data").value = number;
}

let fragment = document.createDocumentFragment();

for (var i=1; i <= 20; i++){
	let modeloramdom = Math.round(Math.random()*10000);
	let preciorandom = Math.round(Math.random()*10+30);
	let llave = crearLlave(`llave ${i}`,`modelo ${modeloramdom}`,`precio ${preciorandom}`);
	let div=document.createElement("DIV");
	div.addEventListener("click",()=>{changeHidden(modeloRamdom)});
	div.tabIndex = i;
	div.classList.add(`item-${i}`,`flex-item`);
	div.innerHTML = llave [0] + llave[1] + llave[2] + llave[3];
	fragment.appendChild(div);
}

contenedor.appendChild(fragment);