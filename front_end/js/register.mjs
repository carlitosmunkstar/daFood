
//imports

import { validation } from "./services/validation.mjs";

//funtion register
const formRegister = document.querySelector(".formulario__register");
const formLogin = document.querySelector(".formulario__login");


formRegister.addEventListener('submit',handlerSubmit);
formLogin.addEventListener('submit', handlerLogin);


function handlerLogin(event){
    event.preventDefault();

    fetch('http://localhost:3000/users?username=', {
        method: "GET",
        headers: {
            'content-Type' : 'application/json'
        },
    }).then(res => console.log(res) )


}

function handlerSubmit (event){
    event.preventDefault();
        let fromData =  new FormData(formRegister);
        let data = Object.fromEntries(fromData);
        let jsonData = JSON.stringify(data);
        
        if(validation(data)){
            fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    'content-Type' : 'application/json'
                },
                body: jsonData
            }).then(res => res.json())
            .then(result => console.log(result.data))
            .catch(err => console.log(err))
        }   
        else{
            alert('no se pudo enviar el formulario')
        }

        
}


