const entradas = [5.5];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

const media = Number(gets());

if (media < 5) {
    print("reprovado");
} else if (media >= 5 && media < 7) {
    print("recuperação");
} else {
    print("Aprovado");
}