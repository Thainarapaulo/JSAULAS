const numero = 8;

console.log(`${numero}:`);

for (let contador = 1; contador <= 10; contador++) {
  const resultado = numero * contador;
  console.log(`${numero} x ${contador} = ${resultado}`);
}

// Correção

// for (var cont = 1; cont <=10; cont++){
//    console.log(`${cont} x 8 = ${cont * 8}`);
// }