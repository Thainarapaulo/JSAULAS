// REPLACE/ REPLACEALL
var frase = "Olá mundo, o mundo é muito legal!";
console.log(frase);

console.log(frase.replace("mundo","bacana")); // REPLACE substituir um
console.log(frase.replaceAll("mundo","bacana")); // REPLACEALL substituir tudo

// SETATRIBUTE mudar atributo
document.querySelector("span").setAttribute("style", "color: blue;");

// CLASS LIST gerenciar classe
document.querySelector("#classlist").classList.remove("claro");
document.querySelector("#classlist").classList.add("claro");
var elemento = document.querySelector("#classlist");
// contains se contem a classe
// toggle troca de classe
if(elemento.classList.contains("claro")){
// elemento.classList.toggle("escuro");
elemento.classList.replace("claro", "escuro");
}

// INDEX OF / INCLUDES  - PESQUISA VALOR
var frutas = ['Morango','Banana', 'Laranja', 'Uva']
// INCLUDES TRUE E FALSE
console.log(frutas.includes("Morango"));

// INDEXOF O VALOR INDICE DO ARRAY (CASO NÃO EXISTA -1)
console.log(frutas.indexOf("Abacaxi"));

if(frutas.indexOf("Abacaxi" == -1)){
    console.log("Não achei");

}    
if(frutas.indexOf("Abacaxi" == false)){
    console.log("Não achei");
}

// SET TIMEOUT TEMPO async - não segue ordem
function msg(){
    // PROMISE - SE ASSEMLEHA A UM FUNÇÃO, PORÉM ELE CONFIGURA SUCESSO E ERRO
    return new Promise ((resolve) => {
        setTimeout(()=>{
            console.log("Bom dia!");
          }, 2000);
            resolve()
    })
   

}
async function carregando(){
    console.log("iniciou");
    await msg();
    console.log("Seja bem vindo");
}

carregando();