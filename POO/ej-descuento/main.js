"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rdl = require("readline-sync");
var precio = rdl.questionFloat("Ingrese el precio al que quiera aplicar el descuento: ");
console.log(precio);
var descuento = 0.1;
console.log(descuento);
console.log(calcular(precio, descuento));
function calcular(precio, descuento) {
    var resultado = precio * (1 - descuento);
    return resultado;
}
