const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");

let tamanho = 1;

botaoNao.addEventListener("click", function() {

    tamanho += 0.3;

    botaoSim.style.transform =
        `scale(${tamanho})`;

});

botaoSim.addEventListener("click", function() {

    mensagem.innerHTML = "Eu sabia! 😉";

    botaoNao.style.display = "none";

    botaoSim.innerHTML = "❤️";

});