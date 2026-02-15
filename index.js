// Entrada de dados

let vitorias = 35;
let derrotas = 17;

// Verificacao de Dados

function verificarDados(vitorias, derrotas) {
    
    if (typeof vitorias !== "number" && typeof derrotas !== "number") {
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

function calcularSaldo (vitorias, derrotas) {
    return vitorias - derrotas;
}

// Classificação do jogador

function classificacao (saldo) {
    
    if (saldo <= 10)
        return "Ferro";

    else if (saldo <= 20)
        return "Bronze";
    
    else if (saldo <= 50)
        return "Prata";

    else if (saldo <= 80)
        return "Ouro";
    
    else if (saldo <= 90)
        return "Diamante";
    
    else if (saldo <= 100)
        return "Lendário";
    
    else
        return "Imortal";
}

// Saida

if (verificarDados(vitorias, derrotas)) {
    
    let saldo = calcularSaldo(vitorias, derrotas);
    let nivel = classificacao(saldo);

console.log ("O Herói tem o saldo de " + saldo + " e está no nível " + nivel);
}