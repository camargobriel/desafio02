// Entrada de dados

let vitorias = 35;
let derrotas = 17;

// Verificacao de Dados

function verificarDados(vitorias, derrotas) {
    if (typeof vitorias !== number && typeof derrotas !== number) {
    console.log("Erro: Valores devem ser numericos");
    return false;
    }


    else if (vitorias < 0 && derrotas < 0) {
    console.log("Erro: Valores devem ser positivos");
    return false;
    }

else 
    return true;
}



// Processamento de dados

function calcularSaldo {
    saldo = vitorias - derrotas;
}


// Classificação do jogador

function classificacao = (vitorias) => {
    vitorias < 10 = "Ferro";
    vitorias >= 11 = "Bronze";
    vitorias >= 21 = "Prata";
    vitorias >= 51 = "Ouro";
    vitorias >= 81 = "Diamante";
    vitorias >= 91 = "Lendário";
    vitorias >= 101 = "Imortal";

// Saida


console.log ("O Herói tem o saldo de " + saldo + " e está no nível " + classificacao);