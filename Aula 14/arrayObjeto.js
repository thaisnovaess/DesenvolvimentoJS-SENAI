let produtos = [
    {tipo: "Notebook", preco: 5000, categoria: "Eletrônico"},
    {tipo: "Teclado", preco: 200, categoria: "Periférico"},
    {tipo: "mouse", preco: 200, categoria: "Periférico"},
    {tipo: "Computador", preco: 5000, categoria: "Periférico"},
    {tipo: "Monitor", preco: 1000, categoria: "Eletrônico"},
    {tipo: "Fone", preco: 200 , categoria: "Periférico"},
    {tipo: "Microfone", preco: 300, categoria: "Periférico"},
    {tipo: "Processador", preco: 5000, categoria: "Eletrônico"},
    {tipo: "Placa de Vídeo", preco: 2000, categoria: "Eletrônico"},
    {tipo: "Mouse Pad", preco: 50, categoria: "Periférico"}

    ]


    //array produtos
    produtos.forEach((produtos) => {
        console.log(produtos.tipo + " R$" + produtos.preco)
    })

    //filtro
    const produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletrônico")
    console.log("PRODUTOS ELETRÔNICOS:")
    
    produtosEletronicos.forEach((produto) => {
        console.log(produto.tipo + " R$" + produto.preco);
         
    })
  
    