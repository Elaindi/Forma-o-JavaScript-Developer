//faça um programa que receba a média de um aluno.
//caso a média sesa < 5 imprima "reprovado"
//caso a média seja >= 5 e 7 imprima "recuperação"
//caso a média seja >= 7 imprima "Aprovado"

//exemplo:
//  entrada:  
//      5.5
//      saida:
//       recuperação

const { gets, print } = require('./funcoes-auxiliares');

const media = gets();

if (media < 5){
    print("reprovado");
} else if (media >= 5 && media < 7){
    print("recuperação");   
} else if (media >= 7){
    print("Aprovado");  
}