// Operadores logicos (comparar)
// > maior que
// < menor que
// != diferente (<>)
// == igual (= recebe, == compara valor, === compara valor e tipo)
// <= menor ou igual
// >= maior ou igual

// Operadores alternários
// && E (duas condições deverão ser iguais em resultado)
// || OU (se uma das condições for verdadeira será executado)
// ! NÃO (se não for a condição)

// Condicionais

// IF (se senao)
if(true){
    console.log("Sou verdaeiro");
}else{
    console.log("Sou falso");
}

// verificar idade 
var idade = Number(prompt("Qual é a sua idade?"));

if (idade >=18){
    alert("Seja bem vindo");
}else{
    if(idade == 0){
        alert("Idade invalida, tente novamente!");
        location.reload();
    }else{
    alert("Você não tem autorização para entrar no site!");
    // location.reload(); // manda para a página atual
    location.href = "https://www.google.com.br/";
}
}

// condição ? bloco1 : bloco2 if ternario
// x > 10 ? alert("legal") : ("maneiro")
