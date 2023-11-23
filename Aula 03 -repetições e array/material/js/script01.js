// Repetições
// While (verifica e depois faz);
var contador = 0;

// enquanto (condicao) faca

// contador + 1
// fimEnquanto

while (contador <= 10){
  console.log(contador);
  contador = contador + 1; // ou contador++
}

// Do while (faz e repita);
// repita

// contador
// ate (condicao)

var cont = 20
do{
    console.log(`Fiz ${cont} Vezes`);
    cont++;
}
while( cont <= 10);


// For
// Para (var, condicao, controlador);

// fimPara

for (let controlador = 1; controlador <= 10; controlador++){// somente let e var (n pode const);
   console.log(controlador+"- For é legal")
} 

// For each
console.log("ELEMENTOS");
var elementos = ["ELEMENTO1", "ELEMENTO2", "ELEMENTO3"];

// function pseudofunction, anonima
elementos.forEach((cadaElemento) => {
  console.log("-"+cadaElemento);
});