

let vitorias = 80;
let derrotas = 3;
function calculoRank(vitorias, derrotas){
    
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";
    console.log("Saldo de vitórias: " + saldoVitorias);
    if (vitorias < 10){
        nivel = "Ferro";
    }else if(vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze";
    }else if(vitorias >= 21 && vitorias <= 30){
        nivel = "Prata";
    }else if(vitorias >= 31 && vitorias <= 40){
        nivel = "Ouro";
    }else if(vitorias >= 41 && vitorias <= 50){
        nivel = "Platina";
    }else if(vitorias >= 51 && vitorias <= 60){
        nivel = "Diamante";
    }else if(vitorias >= 61 && vitorias <= 70){
        nivel = "Ascendente";
    }else if(vitorias >= 71 && vitorias <= 80){
        nivel = "lendario";
    }else if(vitorias >= 81 && vitorias <= 90){
        nivel = "Imortal";
    }else{
        nivel = "Master"
    }
        return "o nivel do jogador é " + nivel;
    }
let resultadoRank = calculoRank(vitorias, derrotas);
console.log(resultadoRank);
