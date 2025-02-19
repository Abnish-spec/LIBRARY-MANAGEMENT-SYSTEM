//NAME
let first_name=document.getElementById("n1");
 let Name_error=document.getElementById("error1");

function fname_check(){
    let data = first_name.value;
    if (data.length > 0 && data[0] !== data[0].toUpperCase()) {
      Name_error.innerHTML = "*Please make sure the first letter is capital.";
      Name_error.style.color = "red";
  }
    else {
        Name_error.innerHTML=""
    } 

}
first_name.addEventListener("input",fname_check);


// EMAIL
let your_email=document.getElementById("n2");
 let YourEmail_error=document.getElementById("error2");

function email_check(){
    let data = your_email.value;
    if (data.length<1) {
      YourEmail_error.innerHTML ="*Empty field is not allowed";
      document.getElementById("error2").style.color = "red";
      
  } 
  else if(!data.includes("@") || !data.includes(".")){
      YourEmail_error.innerHTML ="*must contain  special character";
      document.getElementById("error2").style.color = "red";
    
    }
    else{
      YourEmail_error.innerHTML =""
    }

}
your_email.addEventListener("input",email_check);


//NUMBER
let number=document.getElementById("n3");
let Number_error=document.getElementById("error3");

function number_check(){
    let data=number.value;
     if(data.length<10 || data.length>10){
        Number_error.innerHTML="*invalid input"
        document.getElementById("error3").style.color="red";
     } 
     else{
        Number_error.innerHTML=""
        
     }  
    
}
number.addEventListener("input",number_check);


//MESSAGE
let message=document.getElementById("n4");
let Message_error=document.getElementById("error4");

function message_check(){
    let data=message.value;
     if(data.length<10 || data.length>200){
        Message_error.innerHTML="*invalid input"
        document.getElementById("error4").style.color="red";
     } 
     else{
        Message_error.innerHTML=""
        
     }  
    
}
message.addEventListener("input",message_check);


//BUTTON
let submit_btn = document.getElementById('n5');

  submit_btn.addEventListener('click', function() {
    alert('Submitted Successfully.');
  });