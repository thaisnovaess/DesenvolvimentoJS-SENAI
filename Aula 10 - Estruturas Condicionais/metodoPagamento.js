let valorGasto = 1000
let metodoPagamento = 1
if (metodoPagamento == 1) {
    console.log("Método de Pagamento Boleto/Pix");
    let valorDesconto = valorGasto * 0.9
    console.log("O valor final foi de: " + valorDesconto) 
} else {
    console.log("Método de Pagamento Crédito");
    console.log("O valor final foi de: " + valorGasto);
}