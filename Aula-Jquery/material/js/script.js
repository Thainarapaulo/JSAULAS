// seletor Jquery = $(# ou . elemento(tag))
var titulo = $("#tituloDaPagina").text("JQUERY AULA");
console.log(titulo);

//  Passar o mouse e trocar o texto com jquery (ação - on)
var paragrafo = $("#textoDaPagina").on("mouseover", () =>{
    console.log("Este é o texto do site");
});

// sem jquery
// var paragrafo = document.querySelector("#textoDaPagina");
// paragrafo.addEventListener ("mouseover", consoleListar);
// function consoleListar(){
//     console.log("Este é o texto do site");
// }

// comportamento
// jquery tem capacidade de avaliar valores não definidos e vazios
var usuario = "Victor";
var usuarioIndefinido = undefined;

var usuarioResultado = $("#testeIndefinido").text(usuarioIndefinido);

// algoritmo contagem de caracteres

var blocoDeTexto = $("#blocoDeTexto").on("input", function(){
    let blocoDeTextoValue = $("#blocoDeTexto").val();
    let resposta = $("#numCaracteres");
    
    var contagem = blocoDeTextoValue.length;
    resposta.text(contagem);
});