const sliderElement = document.querySelector('#slider');
const buttonElement = document.querySelector('#button');
const sizePassword = document.querySelector('#value');
const password = document.querySelector('#password');
const containerPassword = document.querySelector('#container-password');

const charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*'

let newPassword = '';


sizePassword.innerHTML = sliderElement.value 

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = '';

    let n = charset.length;

    for (let i = 0;  i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    newPassword = pass;
}

function copyPassword() {
    alert('Senha Copiada com Sucesso')
    navigator.clipboard.writeText(newPassword)
}