let numero1 = 5
let numero2 = 5
//variael nao pode começar com caracter especial, nem numero e não pode usar o ç, â, ã...
//operador de soma
let soma = numero1 + numero2
console.log("A soma foi igual a " + soma)

//operador de subtração
let subtracao = numero1 - numero2
console.log("A subtração foi igual a " + subtracao)

let multiplicacao = numero1 * numero2
console.log("A multiplicação foi igual a " + multiplicacao)

let divisao = numero1 / numero2
console.log("A divisão foi igual a " + divisao)

//Operador de módulo: capturar o resto de uma divisão
numero2 = 2
let modulo = numero1 % numero2
console.log("O resto foi igual a " + modulo)

//Potencia - math.pow
let base = 5
let expoente = 2
let potencia = Math.pow(base, expoente)
console.log("A potência é igual a " + potencia)


//radiciação - Math.sqrt
let radiciacao = Math.sqrt(potencia)
console.log("A raiz quarada é igual a " + radiciacao)
