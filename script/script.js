//Resolução Mostrar Telefone
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

//Resolução Máscara
let cpf = document.getElementById('cpf');
let telefone = document.getElementById("telefone");
$('#cpf').mask('000.000.000-00', {reverse: true});
$('#telefone').mask('(00) 00000-0000');
let mensagem = document.getElementById("mensagem")
let enviarMensagem = document.getElementById ("enviarMensagem");
enviarMensagem.addEventListener("click", () => {
alert ("Cpf: " + cpf.value + "  \n Telefone: " + telefone.value + " \n Mensagem: " + mensagem.value)
})

//Resolução Modal
let body = document.getElementById("body");
let abrir_modal = document.getElementById("abrir-modal");
let cardAnimacao = document.getElementById("cardAnimacao");
let header = document.getElementById("header");
let principal = document.querySelector(".container-principal");
let footer = document.getElementById("footer");

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
    header.style.filter = "grayscale(55%)";
    principal.style.filter = "grayscale(55%)";
    footer.style.filter = "grayscale(55%)";
    let closeX = document.getElementById("closeX")
    closeX.addEventListener("click", () => {
    header.style.filter = "grayscale(0%)";
    principal.style.filter = "grayscale(0%)";
    footer.style.filter = "grayscale(0%)";
    section.remove();
})
})


window.onload = () => {
    setTimeout(() => {
        cardAnimacao.style.backgroundImage = "url('imagens/casa.jpg')"
     }, 11500);
}

//Resolução Regra de 3
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3");
let resultado = document.getElementById("resultado");
let calcular = document.getElementById("calcular")
calcular.addEventListener("click", () => {
    let conta = (num2.value * num3.value) / num1.value;
    resultado.innerHTML = conta.toFixed(2)
})

//Resolução Biblioteca externa Canvas
document.addEventListener('DOMContentLoaded', function() {
    // Seu código html2canvas aqui
    html2canvas(document.getElementById('cardCanvas')).then(function(canvas) {
        // Converta o canvas em um URL de dados
        var dataURL = canvas.toDataURL();
    
        // Crie um elemento <a> para o link
        var downloadLink = document.getElementById("download");
        downloadLink.href = dataURL;
        downloadLink.download = 'casa.jpg';
    
        // Anexe o link ao corpo do documento
    });
    
});

