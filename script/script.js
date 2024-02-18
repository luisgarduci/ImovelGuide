let telefone_corretora = document.getElementById("telefone-corretora");
let telefone_corretor = document.getElementById("telefone-corretor");

telefone_corretora.addEventListener("click", () => {
telefone_corretora.style.textDecoration = "none";
telefone_corretora.innerHTML = "(11) 98901-5678";
});

telefone_corretor.addEventListener("click", () => {
    telefone_corretor.innerHTML = "(11) 96001-0287";
    telefone_corretor.style.textDecoration = "none";
})

let mensagem = document.getElementById("mensagem")
let enviarMensagem = document.getElementById ("enviarMensagem");
enviarMensagem.addEventListener("click", () => {
alert ("Cpf: \n Telefone:  \n Mensagem: " + mensagem.value)
})
//Obtendo o id do body para anexar o modal
let body = document.getElementById("body")
//Obtendo o id do modal
let abrir_modal = document.getElementById("abrir-modal");
let cardAnimacao = document.getElementById("cardAnimacao");
window.onload = () => {
    setTimeout(() => {
        cardAnimacao.style.backgroundImage = "../imagens/casa.jpg" 
     }, 10000);
}

abrir_modal.addEventListener("click", () => {
    let section = document.createElement("section");
    section.setAttribute("class", "modal");
    let divClose = document.createElement("div");
    divClose.setAttribute("class", "divClose");
    let close = document.createElement("img");
    close.setAttribute("src", "imagens/fechar.png");
    close.setAttribute("id", "closeX");
    
    let imagem = document.createElement("div");
    
    imagem.setAttribute("class", "imagem-modal")
    divClose.appendChild(close);
    section.appendChild(divClose);
    section.appendChild(imagem)
    body.appendChild(section);
   
    let closeX = document.getElementById("closeX")
    closeX.addEventListener("click", () => {
    section.remove();
})
})

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3");
let resultado = document.getElementById("resultado");
let calcular = document.getElementById("calcular")
calcular.addEventListener("click", () => {
    let conta = (num2.value * num3.value) / num1.value;
    resultado.innerHTML = conta.toFixed(2)
})