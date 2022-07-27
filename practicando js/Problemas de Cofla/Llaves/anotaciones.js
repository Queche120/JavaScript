/* 
class animal {
	constructor (especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${especie}, tengo ${edad} años y soy de color ${color}`;
	}
	verInfo(){
		document.write(this.info +"<br/>")
	}
}

let perro = new animal ("perro", 5, "marron");

perro.verInfo(); */


/*
class celulares {
	constructor(color,peso,rdp,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.rdc = rdc;
		this.ram = ram;
		this.rdp = rdp;
		this.encendido = false;
	}
	botonEncendido (){
		if(this.encendido == false){
			alert("Prendiendo");
			this.encendido = true;}
			else{alert("Apagando");
				this.encendido = false;
			}
	}
	reiniciar (){
		if(this.encendido == true){
			alert("Reiniciando");
			this.encendido = false;
			this.encendido = true;
		}
	}
	info () {return `Color: <b>${this.color}</b><br/>
					 Peso: ${this.peso}<br/>
					 Resolucion de pantalla: ${this.rdp}<br/>
					 Resolucion de camara: ${this.rdc}<br/>
					 Memoria RAM: ${this.ram}<br/>`
	}
}

motorola = new celulares ("rojo", "200gr", "4pulgadas", "20px", "2GB");

//document.write(
//	`${motorola.info()}`);

let caracteristicas = ["pantalla", "bateria", "color"];

let cadena = caracteristicas.includes("color");

document.write(cadena);
*/
// ---------------------------------------****----------------------------------------------
/*
class Calculadora {
	constructor () {
	}
sumar (num1, num2) {
	return parseInt(num1) + parseInt(num2);
}
restar (num1, num2) {
	return parseInt(num1) + parseInt(num2);
}
dividir (num1, num2) {
	return parseInt(num1) / parseInt(num2);
}
multiplicar (num1, num2) {
	return parseInt(num1) * parseInt(num2);
}
potenciar (num1, exp) {
	return parseInt(num1) ** parseInt(exp);
}
raizcuadrada (num) {
	return Math.sqrt(num);
}
raizcubica (num) {
	return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("¿Que operación desea realizar?");
let operacion = prompt("1:suma  2:resta	3:division  4:multiplicación  5:potenciacion  6:raiz cuadrada  7:raiz cubica");

if (operacion == 1) {
	let numero1 = prompt("¿Primer número para sumar?");
	let numero2 = prompt("¿Segundo número para sumar?");
	resultado = calculadora.sumar(numero1,numero2);
	alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 2) {
	let numero1 = prompt("¿Primer número para restar?");
	let numero2 = prompt("¿Segundo número para restar?");
	resultado = calculadora.restar(numero1,numero2);
	alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 3) {
	let numero1 = prompt("¿Primer número para dividir?");
	let numero2 = prompt("¿Segundo número para dividir?");
	resultado = calculadora.dividir(numero1,numero2);
	alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 4) {
	let numero1 = prompt("¿Primer número para multiplicar?");
	let numero2 = prompt("¿Segundo número para multiplicar?");
	resultado = calculadora.multiplicar(numero1,numero2);
	alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 5) {
	let numero1 = prompt("¿Número para potenciar?");
	let numero2 = prompt("¿A cuánto deseas potenciar?");
	resultado = calculadora.potenciar(numero1,numero2);
	alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 6) {
	let numero1 = prompt("¿Número para buscar raiz cuadrada?");
	resultado = calculadora.raizcuadrada(numero1);
	alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 7) {
	let numero1 = prompt("¿Número para buscar raiz cubica?");
	resultado = calculadora.raizcubica(numero1);
	alert(`Tu resultado es ${resultado}`);
}

else {
	alert("No se a encontrado la operación")
}
*/
//---------------------------------------------****------------------------------------------

/*
const obtenerInformacion = (materia)=> {
	materias = {
		fisica: ["Carrasco","Juan","Juanita","Pedro","Matilda"],
		matematica: ["Montesor","Pedro","Matias","Maria","Matilda"],
		politica: ["Plovski","Juan","Pedro","Matias","Maria",],
		musica: ["Mendieta","Juan","Juanita","Pedro","Matias","Maria","Matilda"],
	}
	if (materias[materia] != undefined) {
		return [materias[materia],materia];
	}
		else {
			return false;
		}
}

const mostrarInformacion = (materia)=> {
	let informacion = obtenerInformacion(materia);

if (informacion !== false) {
	let profesor = informacion[0][0];
	let alumnos = informacion[0];
	alumnos.shift();
	document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
					Los alumnos son: <b style="color:purple">${alumnos}</b><br> `);
}
}

const cantidadDeClases = (alumno)=> {
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion){
		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(" " + info);
		}
	}
	return `${alumno} esta en ${cantidadTotal} clases: ${clasesPresentes}`
}


mostrarInformacion("fisica");
mostrarInformacion("matematica");
mostrarInformacion("politica");
mostrarInformacion("musica");

document.write(cantidadDeClases("Juan"))
document.write(cantidadDeClases("Maria"))
document.write(cantidadDeClases("Juanita"))
document.write(cantidadDeClases("Pedro"))

*/
