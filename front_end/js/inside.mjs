
window.addEventListener("load", inicio);

let prueba = document.querySelector("#name");
let objeto = localStorage.getItem("username");

let parsedData = JSON.parse(objeto);

function inicio (){

    let username = parsedData.username;
    prueba.innerHTML = `${username}`;
   
}

