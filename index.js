class heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }


}

let mago = new heroi ('Galdalff', 105, 'Mago', 'Magia');
mago.atacar();

let guerreiro = new heroi ('He-man', 25, 'Guerreiro', 'Espada');
guerreiro.atacar();

let monge = new heroi ('Bruce Lee', 30, 'Monge', 'Artes Marciais');
monge.atacar();

let ninja = new heroi ('Naruto', 30, 'Ninja', 'Shuriken');
ninja.atacar();