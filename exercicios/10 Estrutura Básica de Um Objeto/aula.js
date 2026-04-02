const pessoa = {
    nome: 'Elaine',
    idade: 44,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
pessoa.descrever();

