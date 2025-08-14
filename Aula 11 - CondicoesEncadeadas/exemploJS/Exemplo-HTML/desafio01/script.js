function mostrarResultado(){
    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let notaRecuperacao = document.getElementById("notaRecuperacao");
    let resultadoMedia = document.getElementById("media");
    let resultado = document.getElementById("resultado");

    let media = (nota1 + nota2) / 2;
    resultadoMedia.innerHTML="A sua média é de " + media;

    if (media >= 70){
        resultado.innerHTML="APROVADO! ";
        resultado.style.color="green";
        notaRecuperacao.style.display="none";

    } else if (media >= 50){
        
        let valorNotaRecuperacao = parseInt(notaRecuperacao.value);
        let mediaFinal = (media + valorNotaRecuperacao)/2;

        if (isNaN(valorNotaRecuperacao)){
            resultado.innerHTML="RECUPERAÇÃO!";
            resultado.style.color="orange";
            notaRecuperacao.style.display="block";

        }else if (mediaFinal >= 70) {
        resultado.innerHTML = "APROVADO";
        resultado.style.color = "green";
        resultadoMedia.innerHTML = "A sua média é  " + mediaFinal;
        } else {
        resultado.innerHTML= "REPROVADO!";
        resultado.style.color= "red";
        resultadoMedia.innerHTML = "A sua média é  " + mediaFinal;
        notaRecuperacao.style.display="none";
    }
}
else {
    resultado.innerHTML = "REPROVADO";
    resultado.style.color = "red";
    notaRecuperacao.style.display = "none";
}

    } 