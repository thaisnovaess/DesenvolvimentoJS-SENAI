// Valor gasto pelo usuario.
// Metodo de pagamento
//   - 1 - Boleto/Pix = 10% desconto
//   - 2 - Débito : 5% de desconto
//   - 3 - Credito = Valor total  
//   - 1 - A vista
//   - 2 - Parcelado 2x - com juros de 5%
//   - 3 - Parcelado 3x - com juros de 10% 

let valorGasto = 1000;
let metodoPagamento = 3;


if (metodoPagamento == 1) {
    let valorFinal = valorGasto * 0.9;
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX");
    console.log("O valor final foi de R$ " + valorFinal);

}else if (metodoPagamento == 2) {
    console.log("MÉTODO DE PAGAMENTO DÉBITO");
    console.log("O valor final foi de R$" + valorGasto * 0.95);
}else {
    let pagamentoCredito = 2;

    if ( pagamentoCredito == 1) {
    console.log("MÉTODO DE PAGAMENTO: CRÉDITO À VISTA");
    console.log("O valor final foi de R$" + valorGasto); 
    } else if (pagamentoCredito == 2) { 
        console.log("MÉTODO DE PAGAMENTO: CRÉDITO PARCELADO EM 2X COM 5% DE JUROS");
        console.log("O valor final foi de R$" + valorGasto * 1.05 );      
    } else if (pagamentoCredito == 3) {
        console.log("MÉTODO DE PAGAMENTO: CRÉDITO PARCELADO EM 3X COM 10% DE JUROS");
        console.log("O valor final foi de R$" + valorGasto * 1.10);
    }
} 
