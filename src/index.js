let nível = prompt("Digite o nível do jogador (0 a 100000): ");
console.log("Digita o nome do seu jogador")
let nome = prompt("Digite o nome do seu jogador: ");
console.log("Olá, " + nome + "! Bem-vindo ao jogo!");
switch (nível) {
    case "ferro":
        if (nível >= 1000) {
                console.log("Você no nível Ferro!");
            }
        break;
    case "bronze":
        if (nível >= 1001 && nível <= 2000) {
            console.log("Você no nível Bronze!");
        }
        break;
    case "prata":
        if (nível >= 2001 && nível <= 5000) {
            console.log("Você no nível Prata!");
        }
        break;
    case "ouro":
        if (nível >= 5001 && nível <= 7000) {
            console.log("Você no nível Ouro!");
        }
        break; 
    case "platina":
        if (nível >= 7001 && nível <= 8000) {
            console.log("Você no nível Platina!");
        }
        break;
    case "ascendente":
        if (nível >= 8001 && nível <= 9000) {
            console.log("Você no nível Platina!");
        }
        break;
    case "imortal":
        if (nível >= 9001 && nível <= 10000) {
            console.log("Você no nível Imortal!");
        }
        break;
    case "radiante":
        if (nível > 10001) {
                console.log("Você no nível Radiante!");
            }
        break;
    default:
        console.log("Nível inválido. Por favor, verifique o nível do jogador.");
}
console.log("O Herói de nome " + nome + " está no nível de **" + nível + "**");