

// supuesta base de datos
const obtenerInformacion = (text)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*2000)
    })
}

const mostrarData = async ()=>{
    data1 = await obtenerInformacion("1:jose");
    data2 = await obtenerInformacion("2:bernardo");
    data3 = await obtenerInformacion("3:eduardo");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData()