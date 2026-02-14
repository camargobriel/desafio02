// Entrada de dados

let Vitorias = "";
let Derrotas = "";

// Validação de dados

let function validacaoDados(params) {

    if (typeof Vitorias === "number" || typeof Derrotas === "number") {
    console.log("Erro: Valores devem ser numericos");
    }

    else if (Vitorias < 0 || Derrotas < 0) {
    console.log("Erro: Valores devem ser positivos");
    }

else 
}



// Processamento de dados

let Saldo = Vitorias - Derrotas;


// Classificação do jogador

const Classificacao = (Saldo) => {
    vitorias < 10 = "Ferro";
    vitorias >= 11 = "Bronze";
    vitorias >= 21 = "Prata";
    vitorias >= 51 = "Ouro";
    vitorias >= 81 = "Diamante";
    vitorias >= 91 = "Lendário";
    vitorias >= 101 = "Imortal";

// Saida
console.log ("O Herói tem o saldo de " + Saldo + " e está no nível " + Classificacao);