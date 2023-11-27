//pegar input
var input = document.querySelector("#inputText");
// add evento focos e perder foco
input.addEventListener("focus", mudaCor);
input.addEventListener("blur", mudaCorVerifica);
// fazer o input ficar amarelo quando selecionado
function mudaCor(){
    var mensaegem = document.querySelector("#mensagem");
    input.style.backgroundColor = "yellow";
    mensaegem.innerHTML = "Digite uma senha com mais de 3 caracteres"
}
function mudaCorVerifica(){
    let inputValor = input.value.length
    var mensaegem = document.querySelector("#mensagem");
    if (inputValor <3){
        input.style.backgroundColor = "red";
        mensaegem.innerHTML = "Digite uma senha valida!"

    }else{
        input.style.backgroundColor = "green";
        mensaegem.innerHTML = "Senha atinge os requisitos!"

    }
}
// pegar a quantidade de caracteres
// verificar se tem 3  ou mais para verde
// verificar se menos que 3 para vermelho