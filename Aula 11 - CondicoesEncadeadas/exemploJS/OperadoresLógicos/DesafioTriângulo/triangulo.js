let ladoA = 3;
let ladoB = 4;
let ladoC = 4;

let ladoAB = ladoA + ladoB;
let ladoAC = ladoA + ladoB;
let ladoBC = ladoB + ladoC;

if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA) {
    console.log("LADOS VÁLIDOS PARA FORMAR UM TRIÂNGULO");
    } if (ladoA == ladoB == ladoC ) {
        console.log("TRIÂNGULO CLASSIFICADO COMO : EQUILÁTERO")
    } else if (ladoA == ladoB || ladoB == ladoC   || ladoA == ladoC ){
        console.log("TRIÂNGULO CLASSIFICADO COMO :  ISÓSCELES");
    } else if (ladoA != ladoB != ladoC){
        console.log("TRIÂNGULO CLASSIFICADO COMO : ESCALENO");
    }
else {
    console.log("COM ESSES VALORES, NÃO É POSSÍVEL FORMAR UM TRIÂNGULO");
}  
