const getName = async ()=>{
    let peticion = await fetch ("https://reqres.in/api/users?page=2");
    let resultado = await peticion.json();
    let numeroRand = Math.floor(Math.random() * 6);
    let nombreRes = resultado.data[numeroRand].first_name+" "+ resultado.data[numeroRand].last_name;
    let mailRes = resultado.data[numeroRand].email;
    let HTMLcode = `Nombre : ${nombreRes} <br> Email: ${mailRes}`;
    document.querySelector(".resultado").innerHTML = HTMLcode;
}

document.getElementById("nombre").addEventListener("click",getName)