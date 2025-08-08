function mostrarResultado(){
    let nota1 = parseInt(document.getElementById("nota1").value)
    let nota2 = parseInt(document.querySelector("#nota2").value)
    let media = (nota1 + nota2)  / 2 
    console.log(media);
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = "A sua média foi igual a " + media
}