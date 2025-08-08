function numeroConta(){
    let numeroInteiro = parseInt(document.querySelector("#numero").value)
    let dobro = (numeroInteiro * 2)
    let triplo = (numeroInteiro * 3)
    let raiz = Math.sqrt(numeroInteiro)

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "  O dobro desse número é " + dobro + "<br>O triplo desse número é " + triplo + "<br>A raiz quadrada desse número é " + raiz 
}