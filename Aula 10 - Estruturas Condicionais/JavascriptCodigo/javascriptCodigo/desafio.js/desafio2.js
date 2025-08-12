let distancia = 900;
let distanciaMaxima = 200;

if(distancia> distanciaMaxima) {
    let preco1 = 0.45 * distancia;
    console.log("O total da sua viagem é de " + preco1 +" reais");
} else {
    let preco2 = 0.50 * distancia;
    console.log("O total da sua viagem é de " + preco2 + " reais");
}