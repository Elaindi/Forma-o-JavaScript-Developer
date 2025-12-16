/*
O IMC - indice de massa corporal é um critério da organização mundial de saúde para dar uma indicação sobre a condição se peso de uma pessoa adulta.
formula do IMC:
IMC = peso / (altura * altura)
IMC = peso / (altura * altura)  

elabore um algoritino que dado o peso e altura de um adulto mostre sua condiçãp de acordo com a tabela abaixo.

IMC em adultos condição:
- abaixo de 18.5 abaixo do peso;
- entre 18.5 e 25 peso normal;
- entre 25 e 30 acima do peso;
- entre 30 e 40 obesidade;
- acima de 40 obesidade grave;
*/ 

const peso = 72;
const altura = 1.62
const imc = peso / Math.pow(altura,2);
console.log(imc);
  if (imc < 18.5){
    console.log('abaixo do peso')

  }else if (IMC >= 18.5 && IMC <= 25){
    console.log('peso normal')
  }else if (imc > 25 && imc <= 30){
    console.log('acima do peso')
  }else if (imc > 30 && imc <= 40){
    console.log('obesidade')
  }else {
    console.log('obesidade grave')
  }



    

