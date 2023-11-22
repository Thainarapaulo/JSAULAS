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
    }
}
}
}
