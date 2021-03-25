function crearTitulo(){
    var cuerpo = document.getElementById("atomo");

    var titulo = document.createElement("h4");
        titulo.setAttribute("STYLE","color:red");
        titulo.setAttribute("id","titulo");
            cuerpo.appendChild(titulo);
        var rutaTitulo = document.getElementById("titulo");
            rutaTitulo.innerText = "SOY UN TITULO";   
}