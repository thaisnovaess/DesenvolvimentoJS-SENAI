function mostrarResultado() {
    let ladoA = parseInt(document.getElementById("lado1").value);
    let ladoB = parseInt(document.getElementById("lado2").value);
    let ladoC = parseInt(document.getElementById("lado3").value);
    let resultado = document.getElementById("resultado");
    let tipoTriangulo = document.getElementById("tipoTriangulo")

    let ladoAB = ladoA + ladoB;
    let ladoAC = ladoA + ladoC;
    let ladoBC = ladoB + ladoC;

    if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA) {
        resultado.innerHTML = "LADOS VÁLIDOS PARA FORMAR UM TRIÂNGULO";
         if (ladoA == ladoB && ladoB == ladoC ) {
            tipoTriangulo.innerHTML = "TRIÂNGULO CLASSIFICADO COMO : EQUILÁTERO";
        } else if (ladoA == ladoB || ladoB == ladoC   || ladoA == ladoC ){
            tipoTriangulo.innerHTML= "TRIÂNGULO CLASSIFICADO COMO :  ISÓSCELES";
        } else if (ladoA != ladoB != ladoC){
            tipoTriangulo.innerHTML = "TRIÂNGULO CLASSIFICADO COMO : ESCALENO";
        }
    }
    else {
        tipoTriangulo.style.display = "block";
        resultado.innerHTML = "COM ESSES VALORES, NÃO É POSSÍVEL FORMAR UM TRIÂNGULO";
    }  
}