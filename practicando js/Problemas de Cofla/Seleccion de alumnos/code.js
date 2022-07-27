 let alumnos = [{
    nombre: "Queche Bustos",
    email: "keche@gmail.com",
    materia: "Matematica",
 },{
    nombre: "Ana Mendieta",
    email: "Anad@gmail.com",
    materia: "Fisica",
 },{
    nombre: "Carlos Perez",
    email: "PCarl@gmail.com",
    materia: "Literatura",
 },{
    nombre: "Juan Plomo",
    email: "Juanp@gmail.com",
    materia: "Matematica",
 },{
    nombre: "Micaela Nelda",
    email: "Micaa@gmail.com",
    materia: "Filosofia",
 }];

 const boton = document.querySelector(".boton-confirmar");
 const contenedor = document.querySelector(".grid-container")

 for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlcode = `<div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana_elegida">
            <option value="semana 1">semana 1</option>
            <option value="semana 2">semana 2</option>
        </select>
    </div>`;
   contenedor.innerHTML+=htmlcode;
 }

 boton.addEventListener("click", ()=>{
   let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
   if (confirmar) {
      document.body.removeChild(boton);
      let elementos = document.querySelectorAll(".semana");
      let semanasElegidas = document.querySelectorAll(".semana_elegida");
      for (elemento in elementos){
         semana = elementos[elemento];
         semana.innerHTML = semanasElegidas[elemento].value;
   }
   }
 })
 