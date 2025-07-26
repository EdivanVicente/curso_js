// torrar()

// function torrar() {
//     console.log("Torrando o pão");
    
// }


// // atribuindo a função torrar a uma variável

// torrar("Pão de forma")
// torrar("Pão francês")
// //o pao dentro da função é uma variavel que nao precisa colocar let)
// //pode colocar varios parametros dentro da mesma funcao 
// function torrar(pao) {
//     console.log("Torrando o " + pao);
// }


// atribuindo a função torrar a uma variável na function tem que deixar os 2 parametros na sequencia das variaveis que estao na funcao 
// torrar("Pão de forma", "Edivan")
// function torrar (pao, nome) {
//     console.log("Torrando o " + pao);
//     console.log("Pedido de " + pao + " para " + nome);
// }


//funcao com retorno

let resultado = soma(5, 10)
console.log("O resultado da soma é " + resultado);
function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}
