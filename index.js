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

if (xp <= 1000) {
    console.log("jogador" + " " + jogador + " é um " + bronze);
}else if(xp <= 2000) {
    console.log("jogador" + " " + jogador + " é um " + prata);
}else if(xp <=3000){
    console.log("jogador" + " " + jogador + " é um " + ouro);
}else if(xp <= 4000){
    console.log("jogador" + " " + jogador + " é um " + platina);
}else if(xp <= 5000){
    console.log("jogador" + " "+ jogador + " é um " + diamante);
}else if(xp <= 6000){
    console.log("jogador" + " " + jogador + " é um " + ascendente);
}   else if(xp <= 7000){
    console.log("jogador" + " " + jogador + " é um " + imortal); 
}else if(xp > 10000){    
    console.log("jogador" + " " + jogador + " é um " + radiante);
}        

// Comentário: O código acima verifica o nível de experiência do jogador e imprime o título correspondente com base no valor de xp.
// O jogador "Edivan" tem 4001 de xp, então o console exibirá "jogador Edivan é um Diamante".