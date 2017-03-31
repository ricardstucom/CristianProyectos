window.onload = inicio;

function inicio(){
    
    //Quan l’usuari situï el ratolí sobre la imatge, es demanarà per AJAX una pista sobre
   //la pregunta que se li farà.
   
   document.getElementById("pista").style.visibility = "hidden";
   document.getElementById("empezar").addEventListener("click", rutaAjaxImagen, false);
  
   
 
}

function rutaAjaxImagen(){
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.open("GET","resp.php?ruta=si");
     xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     xmlHttp.onreadystatechange= function(){
         if(xmlHttp.readyState === 4){
              var respuestaJSON = JSON.parse(xmlHttp.responseText);
              
              var ruta = respuestaJSON.ruta;
                var img = "<img id='img' src='"+ruta+"'/>";
                var divImagen = document.getElementById("imagen");
                divImagen.innerHTML = img;
            divImagen.addEventListener("mouseover", addNewPista, false);
         }
         
         
     };
     xmlHttp.send(null);
     
}
function addNewPista(){

  document.getElementById("imagen");
        removeEventListener("mouseover", addNewPista, false);
            var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET","resp.php?pista=si");
     xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     xmlHttp.onreadystatechange= function(){
         if(xmlHttp.readyState === 4){
                var respuestaJSON = JSON.parse(xmlHttp.responseText);
                
                document.getElementById("pista").style.visibility = "visible";
                
                document.getElementById("pista").innerHTML=respuestaJSON.pista; 
         }
    
     };
    
    xmlHttp.send(null);
}