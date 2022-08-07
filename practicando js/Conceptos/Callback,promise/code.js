/*

class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Lucas Dalto", "@SoyDalto"],
    ["Robertico","@Robertico"],
    ["Rancio Ramirez", "@RancioR"],
    ["Camila Nesa", ],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id,cb)=>{
    if (personas[id] == undefined) {
        cb("No se ha encontrado la persona");
    }else {
        cb(null,personas[id],id)
    }
}


const obtenerInstagram = (id,cb)=>{
    if (personas[id].instagram == undefined){
        cb("No se ha encontrado el instagram");
    }else {
        cb(null,personas[id].instagram)
    }
}

obtenerPersona(1, (err, persona,id)=>{
    if (err)console.log(err);
    else {
        console.log(persona.nombre)
        obtenerInstagram(id,(err,instagram)=>{
            if (err)console.log(err);
            else console.log(instagram);
        })
    }
})

*/

let nombre = "Queche"

const promesa = new Promise((resolve, reject)=>{
    if (nombre !== "Queche") reject("Lo siento, el nombre no es pedro");
    else resolve(nombre);
})

promesa.then((resultado)=>{
    conole.log(resultado)
}).catch((e)=>{
    console.log(e)
})