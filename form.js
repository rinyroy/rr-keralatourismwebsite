let email=document.getElementById("exampleInputEmail1");
let pwd=document.getElementById("exampleInputPassword1");

function validate(){
    if(email.value==""||pwd.value==""){
        alert("Fields cannot be empty")
        return false;
    }

    else{
        alert ("Validation completed");
        return true;
    }
}