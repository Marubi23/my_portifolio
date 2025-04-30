function login(){
  const username= document.getElementById("username").value;
  const password= document.getElementById("password").value;

  const validUser= "admin";
  const validPass="1234";

  if(username===validUser && password===validPass){
    window.location.href="private.html";
  }
  else{
    document.getElementById("error-msg").textContent= "Invalid username or password!";
  }

}
