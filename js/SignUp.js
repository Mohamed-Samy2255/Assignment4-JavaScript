var signinNameInput = document.getElementById("signinNameInput");
var signinEmailInput = document.getElementById("signinEmailInput");
var signinPasswordInput = document.getElementById("signinPasswordInput");

var allDataList = [];

if( localStorage.getItem( "Data" ) !=null ){

    allDataList = JSON.parse (localStorage.getItem ( "Data" ) );
}


var button = document.getElementById("button");
button.addEventListener( 'click' , function(){
    signUp()
} )

function signUp(){
    var danger = document.getElementById("danger");
    if( signinNameInput.value == "" || signinEmailInput.value == "" || signinPasswordInput.value == "" ){
        incorrect.classList.remove("d-none")
        danger.classList.add("d-none")
        
    }
  else if( valUserName() && valEmail() && valPassword() && theCheek() == false ){
    var userData = {
        name: signinNameInput.value,
        email: signinEmailInput.value,
        password: signinPasswordInput.value,
       }
       allDataList.push(userData)
       incorrect.classList.add("d-none")
       success.classList.remove("d-none")
       danger.classList.add("d-none")
       localStorage.setItem( "Data" , JSON.stringify( allDataList ) )
       
   
       console.log(allDataList);    
  }
  else{
    danger.classList.remove("d-none")
    success.classList.add("d-none")
  }
}



signinNameInput.addEventListener("input" , function(){
    valUserName();
})

signinEmailInput.addEventListener("input" , function(){
    valEmail();
})

signinPasswordInput.addEventListener("input" , function(){
    valPassword();
})

function theCheek(){
    for( var i =0; i<allDataList.length; i++ ){
        if( allDataList[i].name.toLowerCase()  == signinNameInput.value.toLowerCase() ||
        allDataList[i].email.toLowerCase() == signinEmailInput.value.toLowerCase() ){
            console.log("correct data");
            return true;
        }
    }
    console.log("no correct data");
    return false;
}

function valUserName(){
var userNamePattern = /^(?=.*[A-Z])[A-Za-z]{1,20}$/
var name = document.getElementById("name");

if( userNamePattern.test(signinNameInput.value) ){
    console.log("name is valid");
    signinNameInput.classList.remove("is-invalid")
    signinNameInput.classList.add("is-valid")
    // name.classList.replace("d-none" , "d-block")
    name.classList.add("d-none")
    return true
}
else{
    console.log("name is not valid");
    signinNameInput.classList.remove("is-valid")
    signinNameInput.classList.add("is-invalid")
    // name.classList.replace("d-block" , "d-none")
    name.classList.remove("d-none")
    return false
}
}

function valEmail(){
    var userEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    var email = document.getElementById("email");

    if( userEmailPattern.test(signinEmailInput.value) ){
        console.log("email is valid");
        signinEmailInput.classList.remove("is-invalid");
        signinEmailInput.classList.add("is-valid");
        email.classList.add("d-none")
        return true
    }
    else{
        console.log("email is not valid");
        signinEmailInput.classList.remove("is-valid")
        signinEmailInput.classList.add("is-invalid")
        email.classList.remove("d-none")
        return false
    }
}

function valPassword(){
    var passwordPattern = /^.{5,15}$/
    var password = document.getElementById("password")

    if( passwordPattern.test(signinPasswordInput.value) ){
        console.log("password is valid");
        signinPasswordInput.classList.remove("is-invalid")
        signinPasswordInput.classList.add("is-valid")
        password.classList.add("d-none")
        return true;
    }
    else{
        console.log("password is not valid");
        signinPasswordInput.classList.remove("is-valid")
        signinPasswordInput.classList.add("is-invalid")
        password.classList.remove("d-none");
        return false;
    }
}



var session = JSON.parse(localStorage.getItem("name"))
function login(){
    var signinEmail = document.getElementById("signinEmail");
    var signinPassword = document.getElementById("signinPassword");

    var error = document.getElementById("error")

    for( var i =0; i <allDataList.length; i++ ){
        if( allDataList[i].email.toLowerCase() == signinEmail.value.toLowerCase() &&
        allDataList[i].password.toLowerCase() == signinPassword.value.toLowerCase() )
        {
            session = allDataList[i].name
            localStorage.setItem("name" , JSON.stringify(session))
            window.location.href="./home.html"
            return true
        }
    }
    error.classList.remove("d-none")
}




function welcome(){
    var  userNameContainer = document.getElementById("userName").innerHTML = `Hello ${session}`;
}


function logout(){
localStorage.removeItem("name")
window.location.href = "./index.html "
}