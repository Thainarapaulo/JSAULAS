// CASE
// escolha variavel 
//    caso isso 
//       isso
//       fimcaso
//    caso...
// fimescolha

// Calculadora

var numero1 = Number(prompt("Digite o primeiro número"));
var operador = prompt("Digite o operador");
var numero2 = Number(prompt("Digite o segundo número"));

switch(operador){
    case "+":
        var resultado = numero1 + numero2;
        alert(`O resultado da operação é ${resultado}`);
        var novoCalculo = confirm("Deseja fazer um novo calculo");
        if (novoCalculo == true){
            location.reload();
        }
        break;
    case "-":
        var resultado = numero1 - numero2;
        alert(`O resultado da operação é ${resultado}`);
        var novoCalculo = confirm("Deseja fazer um novo calculo");
        if (novoCalculo == true){
            location.reload();
        }
        break;
    case "*":
        var resultado = numero1 * numero2;
        alert(`O resultado da operação é ${resultado}`);
        var novoCalculo = confirm("Deseja fazer um novo calculo");
        if (novoCalculo == true){
            location.reload();
        }
        break;
    case "/":
            var resultado = numero1 / numero2;
            alert(`O resultado da operação é ${resultado}`);
            var novoCalculo = confirm("Deseja fazer um novo calculo");
            if (novoCalculo == true){
                location.reload();
            }
        break;
    default:
    alert("Operador invalido! tente novamente!");
    location.reload();
        break;
}


