



const formulario = document.querySelector(".formulario__register");

console.log(formulario)

formulario.addEventListener('submit',handlerSubmit)

function handlerSubmit (event){
    event.preventDefault();
        let fromData =  new FormData(formulario);
        let data = Object.fromEntries(fromData);
        let jsonData = JSON.stringify(data);
}


