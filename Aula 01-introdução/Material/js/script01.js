// caixas de texto 
// alert("Olá mundo");
// confirm("Bom dia, o dia está bom?");// Requer uma confirmação de sim ou não
// prompt("Qual é a sua idade:"); // Requer uma resposta

console.log("Olha que legal!"); // Aparece no console

// Variáveis
// let temporaria, é sobrescrevivel. Escopo local
function letTeste(){
    let numero = 0;
    numero = 1;
    console.log(numero);
}

// var variavel, recebe valores e é sobrescrevivel(pode mudar o valor). Escopo global: consegue chamá-lo a qualquer hora ou momento
var nome = "Victor";

// const constante, não é sobrescrevivel. Escopo global. Não muda o valor
const pi = 3.14;

const name = prompt("Qual é o seu nome?");
// Concatenação
alert("Seja bem vindo(a)," + name);
// Comando abaixo utiliza crase
// ${} desconsidera elemrnto como texto ou string!
alert(`${name}, aproveite a estadia!`);

// Tipos de valores
// String
var texto = "Olá mundo";
// Number
var numeroBacana = 10;
// Boolean
var ligado = true;
// Objeto
var carro = [atributo = "algo"];
