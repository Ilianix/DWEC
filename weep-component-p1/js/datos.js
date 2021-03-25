
 class allPlatos{
    constructor(nombre,ingredientes,precio){
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}
var plato1F = new allPlatos("Rollitos de Salmon relleno de cangrejo","Salmon//Cangrejo//Huevo//Queso",10);
var plato2F = new allPlatos("Croquetas de Jamon","Jamon//Harina//Nuez moscada//Aceite de Girasol//Huevo/cebolla",15);
var plato3F = new allPlatos("Pastel de esparragos y salmon","Salmon//Gelatina//Esparragos",12);
var array1 = [plato1F,plato2F,plato3F];

var plato1S = new allPlatos("Ensalada Cesar","lechuga romana//huevo//queso parmesano//limon//anchoas//mostaza//ajo//picatostes//salasa inglesa// pollo// sal// pimienta",8);
var plato2S = new allPlatos("Espaguetis Carbonara","Espagueti//huevos//queso curado//bacon//sal//pimienta",6);
var plato3S = new allPlatos("Macarrones con carne","Macarrones//carne picada//tomate frito//cebolla//ajo//oregano//sal//pimienta",18);
var array2 = [plato1S,plato2S,plato3S];

var postre1 = new allPlatos("Tiramisu","queso-crema ascarpone//huevo//azucar glass//Amaretto//cacao//cafe//sal",15);
var postre2 = new allPlatos("Tarta de Fresa","fresas",25);
var postre3 = new allPlatos("Helado","helado de vainilla",5);
var array3 = [postre1,postre2,postre3];

//https://byspel.com/crear-select-dinamico-javascript-usando-clases-bootstrap/