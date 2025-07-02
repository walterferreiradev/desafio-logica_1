let pontuacaoXp = prompt("Digite o nível do jogador (0 a 100000): ");
let nível = parseInt(pontuacaoXp);
if (isNaN(nível) || nível < 0 || nível > 100000 || nível === null) {
    console.log("Nível inválido. Por favor, insira um número entre 0 e 100000.");
    nível = 0; // Define um nível padrão se a entrada for inválida
}
let nome = prompt("Digite o nome do seu jogador: ");
console.log("Olá, " + nome + "! Bem-vindo ao jogo!");

let nivelDescricao = "";

if (nível >= 0 && nível <= 1000) {
    nivelDescricao = "Ferro";
} else if (nível >= 1001 && nível <= 2000) {
    nivelDescricao = "Bronze";
} else if (nível >= 2001 && nível <= 5000) {
    nivelDescricao = "Prata";
} else if (nível >= 5001 && nível <= 7000) {
    nivelDescricao = "Ouro";
} else if (nível >= 7001 && nível <= 8000) {
    nivelDescricao = "Platina";
} else if (nível >= 8001 && nível <= 9000) {
    nivelDescricao = "Ascendente";
} else if (nível >= 9001 && nível <= 10000) {
    nivelDescricao = "Imortal";
} else if (nível > 10000) {
    nivelDescricao = "Radiante";
} else {
    nivelDescricao = "Inválido";
}

console.log("Sua pontuação foi " + pontuacaoXp + "!");
console.log("O Herói de nome " + nome + " está no nível de **" + nivelDescricao + "**");