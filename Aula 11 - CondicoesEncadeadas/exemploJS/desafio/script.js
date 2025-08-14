function mostrarResultado(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado = document.getElementById("resultado");
    

    if (operacao === "1" ){ 
        let resultadoFinal = numero1 * numero2;
        resultado.innerHTML = `A multiplicação entre ${numero1} e ${numero2} é igual ${resultadoFinal}`;

    } else if(operacao === "2") {
        resultadoFinal = numero1 / numero2;
        resultado.innerHTML = `A divisão entre ${numero1} e ${numero2} é igual ${resultadoFinal}`;
    
    } else if(operacao === "3"){
        resultadoFinal = numero1 + numero2;
        resultado.innerHTML = `A soma entre ${numero1} e ${numero2} é igual ${resultadoFinal}`;
    } else if (operacao === "4") {
        resultado.innerHTML = `A subtração entre ${numero1} e ${numero2} é igual ${resultadoFinal}`;
        resultadoFinal = numero1 - numero2;
    }
}