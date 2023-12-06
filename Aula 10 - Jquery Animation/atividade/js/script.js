var btnTema = $('#trocaTema');
var body =$('body');

btnTema.on('click', function(){
    if (btnTema.hasClass('temaClaro')){
        btnTema.removeClass('temaClaro');
        btnTema.addClass('temaEscuro');
        btnTema.text("OLÁ")

        body.removeClass('temaClaro');
        body.addClass('temaEscuro');
    }else{
        btnTema.removeClass('temaEscuro');
        btnTema.addClass('temaClaro');
        btnTema.text("TCHAU!");

        body.removeClass('temaEscuro');
        body.addClass('temaClaro');
    }
});
var caixa = $("#img");
$("#trocaTema").on('click',function(){
    caixa.animate({marginTop: "300px", marginRight: "500px", rotate: "360deg"}, {duration: 1000,});
 }); 