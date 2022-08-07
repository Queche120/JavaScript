/*
peticion = fetch("https://reqres.in/api/users/2",{
    method: "POST",
    body : `{"nombre":"Queche","apellido":"Bustos"}`,
    headers: {"Content-type":"application/json;charset=utf-8"}
})
    .then(res=>res.text())
    .then(res=>console.log(JSON.parse(res)));
*/


axios.post("https://reqres.in/api/users",{"pedro":"nombre"})
    .then(res=>console.log(res))