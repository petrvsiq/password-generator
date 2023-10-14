let sliderElement = () => document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = () => document.querySelector("#valor");
let password = document.querySelector("#password");


let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*";
let novaSenha = "";

const updatePasswordSize = () => {
    document.getElementById("valor").innerHTML = sliderElement().value;
}




function load() {
    updatePasswordSize()
    document.querySelector("#slider").addEventListener("input", (event) => {
        const value = document.querySelector("#valor");
        value.textContent = event.target.value;
    });




}

function gerarSenha() {

    let passwordSize = document.querySelector("#valor").textContent
    const randomNumber = Math.random().toString()
    const hash = CryptoJS.MD5(randomNumber).toString()
    const password = hash.substring(0, passwordSize)
    document.querySelector("#container-password").className = "container-password"
    document.querySelector("#password").textContent = password

}


async function copyPassword() {
    const password = document.querySelector("#password").textContent
    await navigator.clipboard.writeText(password)

    alert("Senha copiada!")
}