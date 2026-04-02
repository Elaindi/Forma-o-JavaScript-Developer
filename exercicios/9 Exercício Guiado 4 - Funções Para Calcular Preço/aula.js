function aplicarDesconto(valor,desconto){
   return  (valor - (valor * desconto))

}


precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log(aplicarDesconto - (precoEtiqueta,10 ));

} else if (formaDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3){
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
