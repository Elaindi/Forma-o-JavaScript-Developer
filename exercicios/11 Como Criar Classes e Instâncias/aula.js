class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const elaine = new Pessoa();

elaine.nome = "Elaine";
elaine.idade = 44;

console.log(elaine);
elaine.descrever();

const ricardo = new Pessoa();

ricardo.nome = "Ricardo";
ricardo.idade = 49;
console.log(ricardo)
   
elaine.descrever();
ricardo.descrever();
    


