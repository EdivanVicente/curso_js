class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
atacar(){
    let ataque;
    switch(this.tipo){
        case 'mago':
            ataque = "Magia poderosa";
            break;  
        case 'guerreiro':
            ataque = "Ataque corpo a corpo";
            break;
        case 'arqueiro':
            ataque = "Flecha certeira";
            break;
        case 'monge':
            ataque = "Golpe rápido";
            break;
        default:
            ataque = "Ataque padrão";
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
}
}

const mago = new heroi('Gandalf', 300, 'mago');
mago.atacar();
const guerreiro = new heroi('Conan', 35, 'guerreiro');
guerreiro.atacar();
const arqueiro = new heroi('Legolas', 200, 'arqueiro');
arqueiro.atacar();
const monge = new heroi('Shifu', 50, 'monge');
monge.atacar();