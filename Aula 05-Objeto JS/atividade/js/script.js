// class Carro{
//     marca;
//     modelo;
//     ano;
//     cor;
//     velocidadeMaxima; 
//     velocidadeAtual;
//     acelerar(numero){
//       if( numero>= 0){
//         var novaVelocidade = this.velocidadeAtual + numero;
//         if (novaVelocidade <= this.velocidadeMaxima){
//             this.velocidadeAtual = novaVelocidade;
//             return "Velocidade atual: " + this.velocidadeAtual;
//         } else {
//             this.velocidadeAtual = this.velocidadeMaxima;
//             return "Ultrapassou o limite máximo. Velocidade atual: " + this.velocidadeAtual;
//         }
//     } else {
//         return "Aceleração inválida. O número deve ser positivo.";
//     }
// }
        
//       };

// var carro1 = new Carro ();
//    carro1.marca ="PEGEOUT"
//    carro1.modelo = "PEGEOUT 208";
//    carro1.ano = 2010;
//    carro1.cor = "PRATA";
//    carro1.velocidadeMaxima = 80; 
//    carro1.VelocidadeAtual = 0;

// Correcao

class Carro{
  constructor(marca, modelo, ano, cor, velocidadeMaxima){
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
      this.velocidadeMaxima = velocidadeMaxima;
      this.velocidadeAtual = 0;
  }
  acelerar(velocidadeAcelerada){
    if(velocidadeAcelerada <= 0){
      return "Velocidade não permitida! Coloque uma aceleração acima de 0";
    }else{
      if(velocidadeAcelerada + this.velocidadeAtual > this.velocidadeMaxima){
        return "Velocidade não permitida! Velocidade maxima ultrapassada!";
      }else{
          this.velocidadeAtual += velocidadeAcelerada;
          return "Você acelerou" +velocidadeAcelerada;
          {

        }
      }
    }
      // velocidade atual + valor
  }
};

var btnCarro = document.querySelector("#btnCarro");

// AÇÃO DO BOTAO - CLICAR
btnCarro.addEventListener('click', criarCarro);

function criarCarro(){
  let marcaInput = document.querySelector("#marca").value;
  let modeloInput = document.querySelector("#modelo").value;
  let dataInput = document.querySelector("#data").value;
  let corInput = document.querySelector("#cor").value;
  let velocidadeMaximaInput = document.querySelector("#velocidadeMaxima").value;
  let resposta = document.querySelector("#resposta");

  var carro = new Carro(marcaInput, modeloInput, dataInput, corInput, velocidadeMaximaInput);
  
  resposta.innerHTML = `<div class = "post">
  <h3>${carro.modelo}</h3>
  <p>Marca: ${carro.marca}</p>
  <p>Data: ${carro.ano}</p>
  <p>Cor do carro: <span style = "color:${carro.cor}">COR</span>
  <p>Velocidade Maxima: ${carro.velocidadeMaxima}</p>
  </div>`;

}