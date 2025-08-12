let velocidade = 90 
let velocidadeMaxima = 80


if (velocidade > velocidadeMaxima){
    let multa = 7 * (velocidade - velocidadeMaxima);
    console.log("Você ultrapassou o limite permitido nessa via, a multa aplicada será de " + multa + " reais");
} else {
    console.log("Você está dentro do limite permtido!");
}