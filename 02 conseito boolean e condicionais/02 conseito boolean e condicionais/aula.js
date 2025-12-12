const numero = 12;

const numeroDivisivelPor5 = (numero % 5) === 0;
console.log(numeroDivisivelPor5);

if (numero === 0) {
    console.log('o número é inválido');
}
else if (numeroDivisivelPor5) {
    console.log('sim');
} else {
    console.log('não');
}





