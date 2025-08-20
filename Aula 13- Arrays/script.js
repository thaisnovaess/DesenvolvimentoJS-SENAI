let times = ["São Paulo", "Santos", "Palmeiras",];

//verificar o valor de um item 
console.log(times[0]);
console.log(times[3]);

//adicionar itens no array
times.push("Flamengo");
times.push("Vasco");
times.push("Corinthians");
console.log(times);

//times.lenght - quant de times dentro da "variável" (lista array)- variável + length
console.log(times.length);

// times.unshft - adicionar o time na primeira posição 
times.unshift("Bahia");
console.log(times);

// remover itens no começo da lista
times.shift();

// remover itens no final da lista
times.pop();
console.log(times);

//index off - encontrar a posição de um intem 
console.log(times.indexOf("São Paulo"));

let times2 = ["Santos", "São Paulo", "Palmeiras"];

//.splice - remove elemento na posição desejada - 1 inica a posição do elemento de inicio e 1 indica a quantidade de itens a serem removidos (1,1) 
times2.splice(1,1)
console.log(times2);

//substituir elementos : .splice
times2.splice(1,2, "São Paulo", "Corinthians");
console.log(times2);

//adicionar elementos sem remover .splica (1 -posição , 0 - elemento a ser removiso - 0)
times2.splice(1,0, "São Paulo", "Palmeiras");
