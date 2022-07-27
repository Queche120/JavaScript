const boton_enviar = document.getElementById("nota-enviar");

boton_enviar.addEventListener("click", ()=>{
    let resultado,mensaje;
    try{
        prevRes = parseInt.document.getElementById("nota");
        if (isNaN(prevRes)) {
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(prevRes)
    }catch(e){
        resultado="¿Sos graciosos?";
        mensaje="he descubierto que intentaste hackear el sitio"
    }
    abrirModal(resultado,mensaje);
})

const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1 : resultado ="No podes ser tan HDP";
        break;
        case 2 : resultado ="Sos malisimo";
        break;
        case 3 : resultado ="No sabes nada";
        break;
        case 4 : resultado ="Muy mal";
        break;
        case 5 : resultado ="Mal";
        break;
        case 6 : resultado ="Regular";
        break;
        case 7 : resultado ="Bien, pero puede mejorar";
        break;
        case 8 : resultado ="¡Muy bien!";
        break;
        case 9 : resultado ="¡Excelente!";
        break;
        case 10 : resultado ="¡Insuperable!";
        break;
        default: resultado = null
    }
    return resultado;
}

const verificarAprobacion = (prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7) {
        let resultado = "<span class=´green´"
    }
}

const abrirModal = (res,msg)=>{
    console.log(msg);
    console.log(res);
}