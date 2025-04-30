document.getElementById('signUp-form').addEventListener('submit',function(e){
e.preventDefault();

const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

if(password){


}

console.log('signing up user',{name,email,password});
alert('signed up successfully');
});