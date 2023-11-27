class Aluno{
    constructor(ValorNome, ValorIdade, ValorTurma){
      this.nome = ValorNome;
      this.idade = ValorIdade;
      this.turma = ValorTurma;
    }
}

class Qualificacao{
    constructor(ValorNome, ValorDuracao, ValorTipo){
      this.nome = ValorNome;
      this.duracao = ValorDuracao;
      this.tipo = ValorTipo;
    }
}
var curso1 = new Qualificacao("FRONT", 220, "Tecnologia");
var curso2 = new Qualificacao("Java", 400, "Tecnologia");
var curso3 = new Qualificacao("Culinaria", 400, "Alimentação");

var aluno1 = new Aluno("Leandro", 25, curso1);
var aluno2 = new Aluno("Alice", 20, curso2);


// atributo privativo = apenas o objeto em si podera mudar seus valores, não aceitando uma reatribuição fora de seu objeto  
