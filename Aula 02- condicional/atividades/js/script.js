var idade = Number(prompt("Digite sua idade"));

if (idade >= 0 && idade < 15){
    alert("Criança");
location.reload();
}else{
 if (idade >= 15 && idade <30){
   alert("Jovem");
   location.reload();
}else{
    if (idade >= 30  && idade <60){
    alert("Adulto");
    location.reload();
}else{
    if (idade >= 60){
    alert("Idoso");
    location.reload();
    }else{
        if(idade != idade);
        alert("Idade errada! Diigite sua idade novamente");
        location.reload()
    }
}
}
}

// Correção

// var idade = Number(prompt("Qual é a sua idade?"));

// if(idade <= 0){
//     alert("idade invalida! tente Novamente!");
//     location.reload();
// }
// if(idade > 0 && idade < 15){
//     alert("Criança");
//     location.reload();
// }
// if(idade >= 15 && idade < 30){
//     alert("Jovem");
//     location.reload()
// ;}
// if(idade >= 30 && idade < 60 ){
//     alert("Adulto");
//     location.reload();    
// }
// if(idade >= 60){
//     alert("Idoso");
//     location.reload();
// }

// var idade = Number(prompt("Qual é a sua idade?"));
// if(idade <= 0){
//         alert("idade invalida! tente Novamente!");
//         location.reload();
//     }else{
//         if (idade > 0 && idade < 15){
//         alert("Criança");
//     location.reload();
//     }else{
//      if (idade >= 15 && idade <30){
//        alert("Jovem");
//        location.reload();
//     }else{
//         if (idade >= 30  && idade <60){
//         alert("Adulto");
//         location.reload();
//     }else{
//         if (idade >= 60){
//         alert("Idoso");
//         location.reload();
//         }else{
//             if(idade != idade);
//             alert("Idade errada! Diigite sua idade novamente");
//             location.reload()
//         }
//     }
//     }
//     }
//         }