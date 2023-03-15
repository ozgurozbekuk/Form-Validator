const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input,message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
function success(input) {
    input.className = 'form-control is-valid'
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(username.value === '') {
        error(username,'Kullanıcı adı giriniz');
    }else {
        success(username);
    }

    if(email.value === '') {
        error(email,'Email giriniz');
    }else if(!validateEmail(email.value)){
        error(email,'düzgün bir mail adresi giriniz..')
    }
    
    else{
        success(email);
    }

    if(password.value === '') {
        error(password,'Parola giriniz'); 
    }else {
        success(password);
    }

    if(repassword.value === '') {
        error(repassword,'Parola giriniz');
    }else {
        success(repassword);
    }
})

function checkRequired(inputs) {
    inputs.forEach(function(input){
        if(input.value === '') {
            error(input,`${input.id} gerekli`);
        }else {
            success(input);
        }
    });
}

function checkLength(input,min,max){
    if (input.value.length < min){
        error(input,` ${input.id} en az ${min} karakterli olmalıdır`)
    }else if(input.value.length > max){
        error(input,`${input.id} en çok ${max} karakterli olmalıdır`)
    }
}

function checkPassword(input1,input2) {
    if (input1.value !== input2.value ){
        error(input2,`Parolalar eşleşmiyor`)
    }

}


form.addEventListener('submit',function(e){
    e.preventDefault();
    
    checkRequired([username,email,password,repassword]);
    checkLength(username,7,16);
    checkLength(password,6,12)
    checkPassword(password,repassword);
    
}) 