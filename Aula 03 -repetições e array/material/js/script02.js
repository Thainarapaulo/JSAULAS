// ARRAY
var estoqueProdutos = ["Tenis", "Bola","Video Game"];
console.log(estoqueProdutos);
// indice
console.log(estoqueProdutos[1]);

// // metodo alternativo
// var frutas = Array();
// frutas[0] = "Banana";
// frutas[1] = "Abacaxi";
// frutas[2] = "Laranja";
// console.log(frutas);

// Comando array acrescentar na lista 
estoqueProdutos.push("Chocolate"); // fim da lista
console.log(estoqueProdutos);
estoqueProdutos.unshift("Refrigerante");  // começo da lista
console.log(estoqueProdutos);
// pop- remover um elemento na última posição
estoqueProdutos.pop();
console.log(estoqueProdutos);
// shift - remove o primeiro elemento dentro da array
estoqueProdutos.shift();
console.log(estoqueProdutos);
// splice - (indice, quantos indices, novo elemento) - remover
estoqueProdutos.splice(1,2);
console.log(estoqueProdutos);
// splice - (indice, quantos indices, novo elemento) - adicionar
estoqueProdutos.splice(1,0, "Chocolate");
console.log(estoqueProdutos);
// includes - busca um item no array
console.log(estoqueProdutos.includes("Chocolate"));
// length - quantidade de elementos no array
console.log(`Existem ${estoqueProdutos.length} no estoque`);