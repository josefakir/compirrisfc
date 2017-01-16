// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});


// Option 2. Using live 'page:init' event handlers for each page (not recommended)
$$(document).on('page:init', '.page[data-page="jugadores"]', function (e) {
    url = "http://graphicsandcode.com/compirris/jugadores.json";
    $.ajax({
        url : url,
        beforeSend : function(){
            $('#loading').fadeIn('fast')
        },
        success : function(data){
            //console.log(data.Jugadores);
            $.each( data.Jugadores, function( key, value ) {
                html = '<li class="item-content"><div class="item-media"><img src="http://graphicsandcode.com/compirris/'+value.Foto+'" alt=""></div><div class="item-inner"><div class="item-title">'+value.Numero+' '+value.Nombre+' ('+value.Posicion+')</div><div class="item-after">'+value.Goles+' goles</div></div></li>'
                $('#listajugadores').append(html);
            });
            $('#loading').fadeOut('fast');
        }
    })
})   

$$(document).on('page:init', '.page[data-page="index"]', function (e) {
   url = "http://graphicsandcode.com/compirris/ultimo-resultado.json";
    $.ajax({
        url : url,
        beforeSend : function(){
            $('#loading').fadeIn('fast')
        },
        success : function(data){
            $('#golescompirris').html(data.goles_compirris);
            $('#golesotro').html(data.goles_otroequipo);
            $('#nombreotro').html(data.nombre_otroequipo);
            $('#loading').fadeOut('fast');
        }
    });
})

$(document).ready(function(){
    url = "http://graphicsandcode.com/compirris/ultimo-resultado.json";
    $.ajax({
        url : url,
        beforeSend : function(){
            $('#loading').fadeIn('fast')
        },
        success : function(data){
            $('#golescompirris').html(data.goles_compirris);
            $('#golesotro').html(data.goles_otroequipo);
            $('#nombreotro').html(data.nombre_otroequipo);
            $('#loading').fadeOut('fast');
        }
    });
})
$$(document).on('page:init', '.page[data-page="proximo-partido"]', function (e) {
    url = "http://graphicsandcode.com/compirris/proximo-partido.json";
    $.ajax({
        url : url,
        beforeSend : function(){
            $('#loading').fadeIn('fast')
        },
        success : function(data){
            console.log(data);
            $('#otroequipo').html(data.equipo);
            $('#cancha').html(data.cancha);
            $('#gatorades').html(data.gatorades);
            $('#loading').fadeOut('fast');
        }
    });
})

$$(document).on('page:init', '.page[data-page="resultados"]', function (e) {
    url = "http://graphicsandcode.com/compirris/resultados.json";
     $.ajax({
        url : url,
        beforeSend : function(){
            $('#loading').fadeIn('fast')
        },
        success : function(data){
            console.log(data);
             $.each( data.Resultados, function( key, value ) {
                resultado = value.Goles_Compirris+' - '+value.Goles_OtroEquipo+' '+value.OtroEquipo;
                html = '<li class="item-content"><div class="item-media"><img src="img/logo.png" alt="" class="comp"></div><div class="item-inner"><div class="item-title">'+resultado+'</div></div></li>';
                $('#listapartidos').append(html);
            });
            imagen = "http://graphicsandcode.com/compirris/"+data.Tabla;
            $('#tablageneral').attr('src',imagen);
            $('#loading').fadeOut('fast');
            //<li class="item-content"><div class="item-media"><img src="img/logo.png" alt="" class="comp"></div><div class="item-inner"><div class="item-title">1 - 0 Naranja Mecánica</div></div></li>

        }
    });
})






