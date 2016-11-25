$(document).ready(iniciar);
var ship = $("<img id='foto' src='lib/lanave.png'/>");
function iniciar(){
    $("#boton").click(Ajax);
    $("#espai").append(ship);
    $("#foto").css("height","100px");
    ship.css("position", "absolute");
    $("#start").click(initGame);
    }
    
    function Ajax(){
       
        
        var nombre = $("#texto").val();
        var puntuacion = $("#puntuacion").val();
         $.ajax({
        type: "POST",
        url: "newEmptyPHP.php",
        dataType: "json",
        data:{
            "nombre": nombre,
            "puntuacion": puntuacion
            
        },
        success: function (respuesta) {
             
                var elemento="<ul>";
            for(var nombre in respuesta){
                console.log(respuesta[nombre]);
                console.log(nombre);
                 elemento +="<li>"+"Nombre: "+nombre+"</li><li>"+"Puntuación: "+respuesta[nombre]+"</li></br>";
               
                
                
            }
             elemento+="</ul>";
            $("#tabla").append(elemento);
            
            $("#espai").fadeOut(0);
            $("#escudo").fadeOut(0);
            $("#puntuacion").fadeOut(0);
            $("#restart").fadeOut(0);
            $("#espai").fadeIn(100);
            $("#start").fadeIn(100);
             $("#input").fadeOut(100);
             $("#escudo").fadeIn(100);
             $("#puntuacion").fadeIn(100);
            //$("#tabla").css("height":"500px");
            //$("#tabla").css("width":"300px");
            
           // source = respuesta.posicion;
           // puntos();
             
        }
            
       
    });
}
function initGame() {
  
   
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37:
                ship.stop().animate({
                    left: '-=100'
                }); //left arrow key
                break;
            case 38:
                ship.stop().animate({
                    top: '-=100'
                }); //up arrow key
                break;
            case 39:
                ship.stop().animate({
                    left: '+=100'
                }); //right arrow key
                break;
            case 40:
                ship.stop().animate({
                    top: '+=100'
                }); //bottom arrow key
                break;
            case 87:
                ship.stop().animate({
                    top: '-=100'
                }); //w key
                break;
            case 65:
                ship.stop().animate({
                    left: '-=100'
                });//a key
                break;
            case 83:
                ship.stop().animate({
                    top: '+=100'
                }); //s key
                break;
            case 68:
                ship.stop().animate({
                    left: '+=100'
                });//d key
                break;
        }
    });
    }
//    function puntos(){
//        var array;
//        $.ajax({
//        type: "POST",
//        url: "newEmptyPHP.php",
//        dataType: "json",
//        data:{"lista":"lista"},
//        success: function (respuesta) {
//           array = JSON.parse(respuesta);
//           console.log(array);
//        }
//            
//       
//    });
//        
//        
//    }