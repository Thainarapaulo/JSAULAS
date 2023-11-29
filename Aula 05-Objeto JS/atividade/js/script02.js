//modelo
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
var btnListar = document.querySelector("#btnListar");
var filme = [];

btnCadastrar.addEventListener('click', cadastrarFilme);
btnListar.addEventListener('click', listar);

function cadastrarFilme(){
    let nomeFilmeInput = document.querySelector("#nomeFilme").value;
    let descricaoInput = document.querySelector("#descricao").value;
    let dataInput = document.querySelector("#data").value;
    let diretorInput = document.querySelector("#diretor").value;
    let categoriaInput = document.querySelector("#categoria").value;

    filme.push(new Filme(nomeFilmeInput, descricaoInput, dataInput, diretorInput, categoriaInput));
}
function listar(){
    let divResposta = document.querySelector("#resposta");

    divResposta.innerHTML ="";

    filme.forEach(elemento => {
    divResposta.innerHTML += `<div class = "post">
    <h3>${elemento.nomeFilme}</h3>
    <p>${elemento.descricao}</p>
    <p>${elemento.data}</p>
    <p>${elemento.diretor}</p>
    <p>${elemento.categoria}</p>
    </div>`;
}
    )
}
    


