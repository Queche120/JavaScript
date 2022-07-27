const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    }else {
        error[0]=true;
        resultado.innerHTML = "Solicitud enviada";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 4 && nombre.value.length > 20){
        error[0]=true;
        error[1]="El nombre no puede tener menos de 4 caracteres";
        return error;
    }else if(email.value.length < 4 && 
        email.value.length > 40 && 
        email.value.includes("@") &&
        email.value.includes(".com") ){
            error[0]=true;
            error[1]="El mail es invalido";
            return error;
    }else if (materia.value < 4 || materia.value > 40){
        error[0]=true;
        error[1]="La materia no existe";
    }

    error[0]=false;
    return error;

}

