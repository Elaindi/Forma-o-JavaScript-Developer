/* faça um programa para calcular o valor de uma viagem.
voce terá 3 variaveis sendo elas:
1 - preço do combistivel:
2 - gasto medio de combiustivel po km:
3 - distancia rm km da viagem:*/

const precoCombustivel = 5.79; // preço do combustível por litro
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);


