


function createInput(objeto,etiqueta){

//buscar el div llamado principal
var div = document.getElementById("principal");

//crear un elemento select
    var inp = document.createElement("select");

//ponerle atributos a la select
    inp.setAttribute("class","custom-select separacionInput");
    inp.setAttribute("id",etiqueta);


//añadir al div la select
    div.appendChild(inp);

//bucle para  crear los elementos de la select

    for(var i = 0; i < 3; i++){
        var opcion = document.createElement("option");
        opcion.text = objeto[i].nombre; 

        opcion.setAttribute("data-ingredientes",objeto[i].ingredientes);
        opcion.setAttribute("data-precio",objeto[i].precio);
        inp.appendChild(opcion);
    }
}

function createButtonInfo(etiqueta){
    //buscar el div llamado principal
    var div = document.getElementById("principal");
    var boton = document.createElement("button");
    boton.innerText = "Info";
    boton.setAttribute("type","button");
    boton.setAttribute("class","btn btn-danger");
    boton.setAttribute("data-toggle","modal");
    boton.setAttribute("data-target","#exampleModal");
    boton.setAttribute("id",etiqueta);
    div.appendChild(boton);
    boton.addEventListener("click",modalinfo.bind(null,etiqueta));
}

function createPrecioReserva(){
    //Buscar div para el precio
    var div = document.getElementById("sec1");
    //Buscar div para el boton
    var div2 = document.getElementById("sec2")

    //Todo esto crear un elemento
    var newDiv = document.createElement("div"); //Div
    var span = document.createElement("span"); //Span
    var input = document.createElement("input");//input
    var boton = document.createElement("button");//boton

    //Añadir atributos a los elementos anteriores
    newDiv.setAttribute("class","input-group-prepend");
    span.setAttribute("class","input-group-text ");
    span.setAttribute("id","inputGroup-sizing-default");
    span.innerText = "Precio Total: ";
    input.setAttribute("type","text");
    input.setAttribute("class","form-control");
    input.setAttribute("aria-label","Sizing example input");
    input.setAttribute("style","width: 10px;");
    input.setAttribute("id","precioTotal");
    boton.setAttribute("type","button");
    boton.setAttribute("class","btn btn-primary");
    boton.innerText="Reservar";

    //Añadir lo creado
    div.appendChild(newDiv);
    newDiv.appendChild(span);
    div.appendChild(input);

    div2.appendChild(boton);

    
}
