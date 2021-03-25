function crearNavbar(){
    var cuerpo = document.getElementById("navbaree");

    var navbar = document.createElement("nav");
        navbar.setAttribute("class","navbar navbar-dark bg-dark");
        navbar.setAttribute("id","navbar");
            cuerpo.appendChild(navbar);
    var rutaNav = document.getElementById("navbar");

    var elementA = document.createElement("a");
        elementA.setAttribute("class","navbar-brand");
        elementA.setAttribute("id","A")
            rutaNav.appendChild(elementA);
    var rutaA = document.getElementById("A");

    var imagen = document.createElement("img");
        imagen.setAttribute("src","media/icon-image-512.webp");
        imagen.setAttribute("width","30");
        imagen.setAttribute("height","30");
        imagen.setAttribute("class","d-inline-block align-top");
            rutaA.appendChild(imagen);
}
function createSelect(){

    var div = document.getElementById("molecula");
    
        var inp = document.createElement("select");
    
        inp.setAttribute("class","custom-select separacionInput");
    
    
        div.appendChild(inp);
    
    
        for(var i = 0; i < 3; i++){
            var opcion = document.createElement("option");
            opcion.text = "relleno"; 
    
            opcion.setAttribute("data-ejemplo","algo");
            opcion.setAttribute("data-ejemplo2","algo");
            inp.appendChild(opcion);
        }
    }
