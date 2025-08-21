//Variável composta
let produto = {
    tipo: "Notebook",
    preco: 3500,
    marca: "Positivo",
    processador: "Intel Celeron",
    emEstoque: true
}


console.log(produto)


//Exibir a informação de um item no objeto
console.log(produto.marca) //Positivo
console.log(produto.preco) //3500
console.log(produto["tipo"]) //Notebook
console.log(produto["processador"]) //Intel Celeron

//Adicionar itens no objeto 
produto.memoriaRam = "4 gb"
console.log(produto);

//Remover item
delete produto 

//Diferente do array o objeto faz descrição para identificar cada valor salvo, com a {}.

