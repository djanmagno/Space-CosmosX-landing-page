import Countdown from "./countdown.js";

const tempoParaOWWB = new Countdown("5 November 2021 10:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);

/* Local Storage */

// Pegando dados do Input no html
const name = document.getElementById('nome');
const nickname = document.getElementById('sobrenome');
const mail = document.getElementById('email');
const botao = document.getElementById('btninsert');

// funcao para salvar os dados ao clicar no botao
botao.onclick = () => {
    // Pagegando os valores recolhidos
    const nome = name.value;
    const sobrenome = nickname.value;
    const email = mail.value;

    if (nome && sobrenome && email) {
        // Salvando no localStorage
        localStorage.setItem("nome", nome);
        localStorage.setItem("sobrenome", sobrenome);
        localStorage.setItem("email", email);
        
        // Refresh da Página
        location.reload();
    };
};