var loginEmail = document.getElementById("signinEmail");
var loginPassword = document.getElementById("signinPassword");
var loginBtn = document.getElementById("loginBtn");
var inputsLogin = Array.from(document.getElementsByClassName('log-in'));
var alertSignin = document.getElementById('alertSignin');
var welcomeSignal = document.getElementById('welcomeSignal');

var username = localStorage.getItem('loginList');


// ...reset Login Form...
function resetFormLogin(){
  for(var i = 0; i < inputsLogin.length; i++){
      inputsLogin[i].value = '';
  }
}

// var users = [];

// Check data in local storage
var users ;
if (JSON.parse(localStorage.getItem('usersList')) != null)
{
    users = JSON.parse(localStorage.getItem('usersList'));
}
else
{
    users = [];
}


if(loginBtn){
  loginBtn.addEventListener('click', logIn);
  
}

function logIn (){
  var email = loginEmail.value;
  var password = loginPassword;
  if( email == "" || password == "") {
    alertSignin.innerHTML = 'All inputs is required.';
    alertSignin.classList.replace('d-none','d-block');
    alertSignin.classList.add('text-danger'); 
}
else 
    {
        for(var i = 0; i < users.length; i++){
            if(email == users[i].email && password == users[i].password ){
                localStorage.setItem('loginList' , JSON.stringify(users[i].name));
                window.location.href = ('welcome.html');
            }
            else
            {
                alertSignin.innerHTML = 'There is an error in Email, Password or Both..';
                alertSignin.classList.replace('d-none','d-block');
                alertSignin.classList.add('text-danger');
                resetFormLogin();
            }
        }
    }

}

// ....Welcome User.....
if(welcomeSignal){
    welcomeSignal.innerHTML = `Welcome ${username}`;
}

































