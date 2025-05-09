class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

let p1 = new Pessoa("gordiço", "24");
let p2 = new Pessoa("neguin", "56");

p1.apresentar();
p2.apresentar();



