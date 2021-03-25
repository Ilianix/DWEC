var price;
//MOSTRAR INFO ////////////////////////////////////////////////////////////////////////////////////////////////
            function modalinfo(etiqueta){
                var juez = etiqueta;
                console.log(juez);
                var ingredientes = document.getElementById(juez)
                var index = ingredientes.selectedIndex;
                var opciones = ingredientes.options
                document.getElementById("infoPlato").innerHTML= opciones[index].dataset.ingredientes;
                }


                function mostrarIngedientes(){

                    var select1 = document.getElementById("primero");
        
                    var index = select1.selectedIndex;
                    var opciones = select1.options
                    var precio1 = opciones[index].dataset.precio;
        
                    var select2 = document.getElementById("segundo");
                    var index = select2.selectedIndex;
                    var opciones = select2.options
                    var precio2 = opciones[index].dataset.precio;
        
                    var select3 = document.getElementById("tercero");
                    var index = select3.selectedIndex;
                    var opciones = select3.options
                    var precio3 = opciones[index].dataset.precio;
        
                    var precioTotal = (Number(precio1) + Number(precio2)) + Number(precio3);
                    
                    var rutaPrecio = document.getElementById("precioTotal");
                    console.log(rutaPrecio);
                    rutaPrecio.value = precioTotal + " euros";
                    }


                //crear los select con sus options
                createInput(array1,"primero");
                createButtonInfo("primero");
                createInput(array2,"segundo");
                createButtonInfo("segundo");
                createInput(array3,"tercero");
                createButtonInfo("tercero");
                createPrecioReserva();

            
            
//VENTANA CARGADA/////////////////////////////////////////////////////////////////////////////////////////////
        window.onload= function (){
            mostrarIngedientes();
            price = setInterval(mostrarIngedientes,2000);
        }