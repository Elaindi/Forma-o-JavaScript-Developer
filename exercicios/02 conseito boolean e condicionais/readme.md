# 📘 README - Exercícios 2 em JavaScript

Este projeto contém dois pequenos programas em JavaScript com foco em lógica de programação e operações básicas. Ideal para iniciantes que estão aprendendo estruturas condicionais, operadores e cálculos simples.

---

## 🧠 1. Verificação de número divisível por 5

### 📌 Descrição

O programa verifica se um número é divisível por 5 e também valida se o número informado é diferente de zero.

### 💻 Código

```javascript
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
```

### ⚙️ Como funciona

* Utiliza o operador `%` (módulo) para verificar o resto da divisão por 5.
* Se o resto for 0, o número é divisível.
* Também verifica se o número é igual a zero, tratando como inválido.

### 📤 Saída esperada (para numero = 12)

```
false
não
```

---

## 🚗 2. Cálculo de custo de viagem

### 📌 Descrição

Este programa calcula o custo de uma viagem com base na distância, consumo do veículo e tipo de combustível.

### 💻 Código

```javascript
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
```

### ⚙️ Como funciona

* Calcula quantos litros serão consumidos:
  `litros = distância ÷ km por litro`
* Multiplica o consumo pelo preço do combustível escolhido.
* Usa `.toFixed(2)` para formatar o valor com duas casas decimais.

### 📤 Saída esperada (para gasolina)

```
66.60
```

---

## 📚 Conceitos abordados

* Variáveis (`const`)
* Operadores matemáticos (`%`, `/`, `*`)
* Estruturas condicionais (`if`, `else if`, `else`)
* Comparação de valores (`===`)
* Formatação de números (`toFixed`)

---

## 🚀 Objetivo

Praticar lógica de programação e dar os primeiros passos no desenvolvimento com JavaScript.

---

## ✨ Melhorias futuras

* Permitir entrada de dados pelo usuário
* Criar funções reutilizáveis
* Adicionar interface simples (HTML + JS)
* Validar tipos de combustível automaticamente

---

Feito para aprendizado e evolução contínua 💻🔥
