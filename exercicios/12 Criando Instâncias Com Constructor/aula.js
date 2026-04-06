class Pessoa {
    nome;
    idade;
    anoDeNascimento

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2026 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const elaine = new Pessoa('Elaine', 44);
const ricardo = new Pessoa('Ricardo', 49);

console.log(elaine);