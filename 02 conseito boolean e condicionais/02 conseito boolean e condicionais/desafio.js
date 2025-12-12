// faça um programa para calcular o valor de uma viagem.

// variáveis:
const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'gasolina'; // ou 'etanol'

// cálculo:
const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
