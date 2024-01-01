

var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

var dataList = [];


// var back = localStorage.getItem("Data")
// console.log(back);

// backData = JSON.parse ( localStorage.getItem( "Data" ) );
// console.log(backData);


/* عملت فانكشن خاص بالزرار لاول ملف إتش إم إل */ 
var btn = document.getElementById("btn");
btn.addEventListener('click' , function(){
    addData()
})

function addData(){

  if( signinEmail.value == "" || signinPassword.value == "" ){
    incorrect.classList.remove("d-none")
  }
  
  else{
    
     var data = {
      email: signinEmail.value,
      password: signinPassword.value,
     }

     dataList.push(data)
     clearForm();
     incorrect.classList.add("d-none")
     console.log(dataList);
     
  }
   
 
}
  

function clearForm(){
  signinEmail.value = "";
  signinPassword.value = "";
}









/* عشان اتنقل لملف ال إندكس التاني عن طريق الجافا */
// var mohamed = document.getElementById('mohamed');
// console.log(mohamed);
// mohamed.addEventListener( "click" , function(){
//   window.location = "./SignUp.html"
// } )
