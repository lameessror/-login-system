var userNameInput = document.getElementById('name');
var userEmailInput = document.getElementById('email');
var userPasswordInput = document.getElementById('pass');
var alertName = document.getElementById('alertName');
var alertEmail = document.getElementById('alertEmail');
var alertPass = document.getElementById('alertPass');
var signupBtn = document.getElementById('signupBtn');
var inputsSignUp = Array.from(document.getElementsByClassName('sign-up'));
var alertSignup = document.getElementById('alertSignup');



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



// when enter data in inputsSignUp
if(userNameInput != null){
    userNameInput.addEventListener('input' , validUserName);
}

if(userEmailInput != null){
    userEmailInput.addEventListener('input' , validUserEmail);
}

if(userPasswordInput != null){
    userPasswordInput.addEventListener('input' , validUserPass);
}



function signUp(){
    if(validUserName() == true && validUserEmail() == true && validUserPass() == true)
    {
        alertSignup.innerHTML = ('Successfully Registered');
        alertSignup.classList.replace('d-none','d-block');
        alertSignup.classList.add('text-success');
        alertSignup.classList.remove('text-danger');
        addUser();
        clearInput();
        
    }
    
    else if(validUserName() == false || validUserEmail() == false || validUserPass() == false)
    {
        alertSignup.innerHTML = ('There are Invalid fields.. You should fill them correctly');
        alertSignup.classList.replace('d-none','d-block');
        alertSignup.classList.add('text-danger');
        alertSignup.classList.remove('text-success');
        clearInput();
    }
    
}



//... add a new user in local Storage...
function addUser(){
    var user = {
        name : userNameInput.value,
        email : userEmailInput.value,
        password : userPasswordInput.value,
    }
    users.push(user);
    localStorage.setItem('usersList' , JSON.stringify(users));
}






//...Validation...
function validUserName(){
    var regexName = /^[A-Z][a-z- ]{2,15}$/;
    if(regexName.test(userNameInput.value))
    {
        userNameInput.classList.add('is-valid');
        userNameInput.classList.remove('is-invalid');
        alertName.classList.add('d-none');
        return true;
    }
    else
    {
        userNameInput.classList.add('is-invalid');
        userNameInput.classList.remove('is-valid');
        alertName.classList.remove('d-none');
        return false;
    }
}

function validUserEmail(){
    let regexEmail = /^[a-zA-Z0-9_]{3,10}(@[a-zA-Z0-9]{3,15}\.com)$/;
    if(regexEmail.test(userEmailInput.value))
    {
        userEmailInput.classList.add('is-valid');
        userEmailInput.classList.remove('is-invalid');
        alertEmail.classList.add('d-none');
        return true;

    }
    else
    {
        userEmailInput.classList.add('is-invalid');
        userEmailInput.classList.remove('is-valid');
        alertEmail.classList.remove('d-none');
        return false;
    }
}

function validUserPass(){
    var regexPass = /^[a-zA-Z0-9_]{4,15}$/;
    if(regexPass.test(userPasswordInput.value))
    {
        userPasswordInput.classList.add('is-valid');
        userPasswordInput.classList.remove('is-invalid');
        alertPass.classList.add('d-none');
        return true;
    }
    else
    {
        userPasswordInput.classList.add('is-invalid');
        userPasswordInput.classList.remove('is-valid');
        alertPass.classList.remove('d-none');
        return false;
    }
}

function clearInput() {
    userNameInput.value = "";
    userEmailInput.value = "";
    userPasswordInput.value = "";
  }