const btnStart = document.querySelector("button").addEventListener("click", gerarSenha)
const caracteres = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!*"
const copiarSenha = document.querySelector("#senhaGerada").addEventListener("click", copiar)

let range = document.querySelector("#tamanhoSenha").addEventListener("change", numCaractere)
let senha = ""

function numCaractere(){
    let num = document.querySelector("#tamanhoSenha").value
    document.querySelector("#mostrarTamanho").innerHTML = num
}

function gerarSenha(){
    let num = document.querySelector("#tamanhoSenha").value
    let senhaGerada = document.querySelector("#senhaGerada")
    senha = ""

    for (let i = 0; i < num; i++) {
        let indice = Math.floor(Math.random() * caracteres.length)
        let caractere = caracteres.charAt(indice)
        senha += caractere
    }

    senhaGerada.innerText = `${senha}`
    let mostrarSenha = document.querySelector("#blockSenha")
    mostrarSenha.classList.remove("hide")
}

function copiar() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(senha)
}
numCaractere()