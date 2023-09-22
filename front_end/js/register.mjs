//? aquí se crean dos funciones encargadas de enviar 
//? o pedir información a la DB para inicio o creación de cuenta

//imports
import { validation } from "./services/validation.mjs";

//funtion register
const formRegister = document.querySelector(".formulario__register");
const formLogin = document.querySelector(".formulario__login");

formRegister.addEventListener("submit", handlerSubmit);
formLogin.addEventListener("submit", handlerLogin);

function handlerLogin(event) {
  event.preventDefault();

  let fromData = new FormData(formLogin);
  let data = Object.fromEntries(fromData);
  let convert = JSON.stringify(data);


  fetch(`http://localhost:3000/users?username=${data.username}`, {
    method: "GET",
    headers: { "content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.length > 0) {
        // Verificar si se encontró al menos un usuario con el nombre de usuario proporcionado
        const user = response[0]; // Suponiendo que solo se espera un usuario con ese nombre de usuario
        if (user.password === data.password) {
            localStorage.setItem("username", convert);
            window.location.href = "./inside.html"
        } else {
          alert('La contraseña es incorrecta');
        }
      } else {
        // No se encontró ningún usuario con el nombre de usuario proporcionado
        alert('Usuario no encontrado');
      }
    })
    .catch((err) => alert("Hubo un problema"));  

    

}

function handlerSubmit(event) {
  event.preventDefault();
  let fromData = new FormData(formRegister);
  let data = Object.fromEntries(fromData);
  let jsonData = JSON.stringify(data);

  if (validation(data)) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((res) => res.json())
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  } else {
    alert("no se pudo enviar el formulario");
  }
}
