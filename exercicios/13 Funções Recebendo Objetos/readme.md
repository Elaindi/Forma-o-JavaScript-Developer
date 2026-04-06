📘 Exercício: Classe Pessoa e Comparação de Idades
🧠 Objetivo

Criar uma classe em JavaScript que represente uma pessoa e desenvolver uma função para comparar a idade entre duas pessoas.

🛠️ Tecnologias utilizadas
JavaScript (ES6+)
📂 Estrutura do Código
🔹 Classe Pessoa

A classe possui:

nome
idade
anoDeNascimento (calculado automaticamente)
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2026 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
🔹 Função de Comparação

Função que compara duas pessoas e informa quem é mais velho ou se têm a mesma idade:

function compararpessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else{
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
    }
}
🔹 Instanciando Objetos
const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);
🔹 Executando a Comparação
compararpessoas(pessoa1, pessoa2);
✅ Resultado esperado
João é mais velho(a) que Maria
💡 Aprendizados
Criação de classes em JavaScript
Uso de constructor
Uso do this
Funções com parâmetros
Comparação de dados entre objetos
🚀 Próximos passos (sugestões)
Comparar mais de duas pessoas
Ordenar uma lista de pessoas por idade
Exibir o ano de nascimento no método descrever