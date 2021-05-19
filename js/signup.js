const showHidePassword = document.querySelector('#showHidePassword');
const password = document.querySelector('#password');

showHidePassword.addEventListener('click', function(){

    const type = password.getAttribute('type')==='password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    if(showHidePassword.className === 'far fa-eye-slash'){
        showHidePassword.className = 'far fa-eye';
    }else{
        showHidePassword.className = 'far fa-eye-slash';
    }
});