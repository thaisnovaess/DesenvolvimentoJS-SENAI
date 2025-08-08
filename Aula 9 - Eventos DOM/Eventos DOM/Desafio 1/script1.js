function mostrarResultado(){
    let numero = parseInt(document.getElementById("numero")).value
    let sucessor = numero + 1
    let antecessor = numero - 1

    let resultadoSucessor = document.querySelector("#antecessor")
    let resultadoAtecessor = document.querySelector("#sucessor")

    resultadoAntecessor.innerHTML = "O antecessor é igual a " + antecessor
    resultadoSucessor.innerHTML = "O sucessor é igual a " + sucessor
}