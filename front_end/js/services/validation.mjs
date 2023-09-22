
const errorAll = document.querySelector("#error_register_campos");
const errorEmail = document.querySelector("#error_register_email");
const errorName = document.querySelector("#error_register_username")



export function validation (data){

    let email = data.email;
    let username = data.username;
    let password = data.password;

    const email_validation =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; 


    if(email === "" || username === "" || password === ""){
        errorAll.style.display = "block";
        errorAll.style.color = "red";
        return false
    }
    else if (!email_validation.test(email)){
        errorEmail.style.display = "block";
        errorEmail.style.color = "red";
        return false
    }else if(username.length > 16  ){
        errorName.style.display = "block";
        errorName.style.color = "red";
        return false
    }
    else{
        return true
    }

}