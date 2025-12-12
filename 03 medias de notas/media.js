/* Faça um algoritmo que, dadas as 3 notas tiradas por um aluno
em um semestre da faculdade, calcule e imprima a média e a sua
classificação conforme a tabela:

média = (nota1 + nota2 + nota3) / 3;

classificação:
- média menor que 5 → reprovação;
- média entre 5 e 7 → recuperação;
- média acima de 7 → passou de semestre;
*/

const nota1 = 5;
const nota2 = 3;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media.toFixed(2));

if (media < 5) {
    console.log("Classificação: Reprovação");
} else if (media >= 5 && media <= 7) {
    console.log("Classificação: Recuperação");
} else {
    console.log("Classificação: Passou de semestre");
}
