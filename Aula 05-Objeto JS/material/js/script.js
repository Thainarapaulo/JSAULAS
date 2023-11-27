// var cliente1Nome = "Leonardo";
// var cliente1Saldo = 0;
// var cliente1Cpf = 0;
// var cliente1Agencia = "001";
// var cliente1Conta = "25123123";
// var cliente1DataDeNascimento = "25/02/1998";

// var cliente1 = ["Nome = Leonadro", "Saldo = 99999"]
 class Cliente {
    nome;
    dataDeNascimento;
    cpf;
    conta;
    agencia;
    saldo;
   //  Froction
    sacar(valor){
         // this.atributo => chama atributo da classe
         if(this.saldo >= valor){
            this.saldo = this.saldo - valor;       // saldo-=valor
            return "Valor sacado: R$" +valor;
         }else{
            return "Operação não autorizada! Tá quebrado hein!"
         }
        
    };
    depositar(valor){
        if(valor >= 0){
            this.saldo = this.saldo + valor;       // saldo-=valor
            return "Valor depositado: R$" +valor;
         }else{
            return "Operação não autorizada! Faça um deposito de pelos menos R$0,01";
         }
    };
    consultarSaldo(){
        return "O saldo da conta é de : R$" +this.saldo;
    }
 }
// Adicionar novo cliente
 var cliente1 = new Cliente ();
 cliente1.nome = "Leonardo";
 cliente1.dataDeNascimento = "25/02/1998";
 cliente1.cpf = "99999";
 cliente1.conta = "25123123";
 cliente1.agencia = "x001";
 cliente1.saldo = "100";

 console.log(cliente1);
 
 var cliente2 = new Cliente();

//  comandos
 cliente1.saldo = 1;
 cliente1.depositar(2000);
 cliente1.sacar(200);
 cliente1.consultarSaldo();
