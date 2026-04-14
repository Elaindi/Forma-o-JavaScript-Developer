/*
crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
Sas pessoas devem ter capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75m de altura e peça para José dizer o valor do seu IMC.
*/

class pessoa {
    nome; 
    pesso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura =altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);

    }
    
    calcularIMC(){
        return this.peso / (this.altura * this.altura);

    }

classificarImc(){
    const imc = this.calcularIMC();
    if(imc < 18.5){
        return "Abaixo do peso";
    }   else if(imc >= 18.5 && imc < 25){
        return "Peso normal";
    }    else if(imc >= 25 && imc < 30){
        return "Sobrepeso";
    }    else if(imc >= 30 && imc < 35){
        return "Obesidade grau 1";
    }    else if(imc >= 35 && imc < 40){
        return "Obesidade grau 2";
    }    else {
        return "Obesidade grau 3";
    }              
}


}

const jose = new pessoa("José", 70, 1.75);
console.log(jose.classificarImc());
const elaine = new pessoa("Elaine", 74, 1.62);
console.log(elaine.classificarImc());  
