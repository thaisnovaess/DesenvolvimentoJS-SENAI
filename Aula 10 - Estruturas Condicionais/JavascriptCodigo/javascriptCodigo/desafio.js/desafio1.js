function mostrarResultado(){
let velocidadeMaxima = 80;
let velocidade = parseInt(document.getElementById("velocidade").value);
let paragrafoResultado = document.getElementById("Resultado");
if (isNaN(velocidade)){
    mostrarResultado.innerHTML = "Informe um valor válido"
    return
}
if (velocidade > velocidadeMaxima){
    let multa = 7 * (velocidade - velocidadeMaxima);
    paragrafoResultado.innerHTML = "Você ultrapassou o limite permitido nessa via <br> A multa aplicada será de " + multa.toFixed(2).replace(".", ",") + " reais";
    paragrafoResultado.style.fontWeight = "bold"

} else {
    paragrafoResultado.innerHTML = "Você está dentro do limite permtido!";
    paragrafoResultado.style.fontWeight = "bold"
}
}