class Carro{
    marca;
    modelo;
    ano;
    cor;
    velocidadeMaxima; 
    velocidadeAtual;
    acelerar(numero){
      if( numero>= 0){
        var novaVelocidade = this.velocidadeAtual + numero;
        if (novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
            return "Velocidade atual: " + this.velocidadeAtual;
        } else {
            this.velocidadeAtual = this.velocidadeMaxima;
            return "Ultrapassou o limite máximo. Velocidade atual: " + this.velocidadeAtual;
        }
    } else {
        return "Aceleração inválida. O número deve ser positivo.";
    }
}
        
      };

var carro1 = new Carro ();
   carro1.marca ="PEGEOUT"
   carro1.modelo = "PEGEOUT 208";
   carro1.ano = 2010;
   carro1.cor = "PRATA";
   carro1.velocidadeMaxima = 80; 
   carro1.VelocidadeAtual = 40;