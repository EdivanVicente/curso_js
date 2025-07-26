let jogador = "Edivan";
let xp = 4001; 
let ferro = "Ferro";
let bronze = "Bronze";  
let ouro = "Ouro";    
let prata = "Prata";    
let platina = "Platina";
let diamante = "Diamante";  
let ascendente = "Ascendente";
let imortal = "Imortal";
let radiante = "Radiante";

switch (true) {
    case (xp <= 1000):  
        console.log("jogador" + " " + jogador + " é um " + bronze);
        break;  
    case (xp <= 2000):
        console.log("jogador" + " " + jogador + " é um " + prata);
        break;          
    case (xp <= 3000):
        console.log("jogador" + " " + jogador + " é um " + ouro);
        break;          
    case (xp <= 4000):
        console.log("jogador" + " " + jogador + " é um " + platina);
        break;
    case (xp <= 5000):
        console.log("jogador" + " " + jogador + " é um " + diamante);
        break;
    case (xp <= 6000):
        console.log("jogador" + " " + jogador + " é um " + ascendente);
        break;
    case (xp <= 7000):
        console.log("jogador" + " " + jogador + " é um " + imortal);           
        break;
    case (xp > 10000):      
        console.log("jogador" + " " + jogador + " é um " + radiante);
        break;  
    default:
        console.log("jogador" + " " + jogador + " não possui um título");
        break;
}
// Comentário: O código acima utiliza um switch case para verificar o nível de experiência do jogador e imprimir o título correspondente com base no valor de xp.
// O jogador "Edivan" tem 4001 de xp, então o console exibirá "jogador Edivan é um Diamante".  
