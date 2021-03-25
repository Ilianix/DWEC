function createPrecioReserva(){

    var div = document.getElementById("organismo");


    var newDiv = document.createElement("div"); //Div
        newDiv.setAttribute("class","input-group-prepend");
            div.appendChild(newDiv);
            

    var divBoton = document.createElement("div");//DivBoton
            div.appendChild(divBoton);

    var span = document.createElement("span"); //Span
        span.setAttribute("class","input-group-text ");
        span.setAttribute("id","inputGroup-sizing-default");
        span.innerText = "Precio Total: ";
            newDiv.appendChild(span);

    var input = document.createElement("input");//input
        input.setAttribute("type","text");
        input.setAttribute("class","form-control");
        input.setAttribute("aria-label","Sizing example input");
        input.setAttribute("style","width: 80px;");
        input.setAttribute("id","precioTotal");
            newDiv.appendChild(input);

    var boton = document.createElement("button");//boton
        boton.setAttribute("type","button");
        boton.setAttribute("class","btn btn-primary");
        boton.innerText="Reservar";
            divBoton.appendChild(boton);

    
}
