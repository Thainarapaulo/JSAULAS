class Filme{
    constructor(nome, descricao, data, diretor, categoria){
     this.nomeFilme = nome;
     this.descricao = descricao;
     this.data = data;
     this.diretor = diretor;
     this.categoria = categoria;
    }
}

var btnCadastrar = document.querySelector ("#btnCadastrar");
btnCadastrar.addEventListener('click', cadastrarFilme);
function cadastrarFilme(){
    let nomeFilmeInput = document.querySelector("#nomeFilme").value;
    let descricaoInput = document.querySelector("#descricao").value;
    let dataInput = document.querySelector("#data").value;
    let diretorInput = document.querySelector("#diretor").value;
    let categoriaInput = document.querySelector("#categoria").value;
    let resposta = document.querySelector("#resposta");
    
    var filme = new Filme(nomeFilmeInput, descricaoInput, dataInput, diretorInput, categoriaInput);

    resposta.innerHTML = `<div class = "post">
    <h3>${filme.nomeFilme}</h3>
    <p>${filme.descricao}</p>
    <p>${filme.data}</p>
    <p>${filme.diretor}</p>
    <p>${filme.categoria}</p>
    </div>`
}