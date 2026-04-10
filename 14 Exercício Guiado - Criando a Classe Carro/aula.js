/* 
crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por quilómetro rodado.
Crie um método que dado a quantidade de quilómetro e preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }
    calcularGastoPercurso(distanciaEmKm,precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}

const uno = new Carro("Fiat","Preto",1/12);
console.log(uno);


console.log(uno.calcularGastoPercurso(70,5));

const palio = new Carro('fiat','prata',1/10);
console.log(palio.calcularGastoPercurso(70,5));