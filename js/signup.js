const submit = document.querySelector('.signingup');
const fname =  document.querySelector('.input-email');
const email = document.querySelector('.in-email');
const check = document.querySelector('.check');
const password = document.querySelector('#password');
const showHidePassword = document.querySelector('#showHidePassword');


submit.addEventListener('click', function(){


    const info = {
        firstname : fname.value,
        email: email.value,
        password : password.value,
        check : check.value
    }

    localStorage.setItem('info', JSON.stringify(info));

    const retinfoJSON = localStorage.getItem('info');
    const retinfoStr = JSON.parse(retinfoJSON);
    // console.log(retinfoStr);


})



showHidePassword.addEventListener('click', function(){

    const type = password.getAttribute('type')==='password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    if(showHidePassword.className === 'far fa-eye-slash'){
        showHidePassword.className = 'far fa-eye';
    }else{
        showHidePassword.className = 'far fa-eye-slash';
    }
});


