"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rdl = require("readline-sync");
// import { Socio } from "./socio";
var gestorLibros_1 = require("./gestorLibros");
var libro_1 = require("./libro");
var sarmiento = new gestorLibros_1.GestorLibros("Sarmiento");
var got1 = new libro_1.Libro("Juego de tronos", "GRR Martin", "Fantasia", "Americana");
var got2 = new libro_1.Libro("Duelo de reyes", "GRR Martin", "Fantasia", "Americana");
var got3 = new libro_1.Libro("Tormenta de espadas", "GRR Martin", "Fantasia", "Americana");
var cortazar1 = new libro_1.Libro("Un tal lucas", "Julio Cortazar", "Realismo", "Clarin");
var opcion;
var listaLibros = [got1, got2, got3, cortazar1];
sarmiento.insertarLibros(listaLibros);
do {
    opcion = rdl.questionInt("Bienvenidos a Biblioteca ".concat(sarmiento.getNombre(), "\nElija una opcion:\n\n    1 - Buscar Libro\n\n    2 - Crear Libro\n\n    3 - Modificar Libro\n\n    4 - Eliminar Libro\n\n    5 - Imprimir lista de libros\n\n    0 - Terminar programa\n"));
    switch (opcion) {
        case 1:
            var indice = sarmiento.buscarLibro(rdl.question("Ingrese el titulo a buscar\n"));
            if (indice != undefined) {
                sarmiento.imprimirLibro(indice);
            }
            else {
                console.log("El libro no exite\n");
            }
            break;
        case 2:
            sarmiento.crearLibro();
            sarmiento.imprimirListaLibros();
            break;
        case 3:
            var titulo = rdl.question("Ingrese el titulo del libro a modificar\n");
            sarmiento.imprimirLibro(sarmiento.buscarLibro(titulo));
            var respuesta = rdl.question("Si este es el libro a modificar ingrese Y");
            if (respuesta.toUpperCase() == "Y") {
                sarmiento.modificar(titulo);
            }
            break;
        case 4:
            var tituloDeleted = rdl.question("Ingrese el titulo del libro a eliminar\n");
            sarmiento.imprimirLibro(sarmiento.buscarLibro(tituloDeleted));
            var confirmacion = rdl.question("Si este es el libro a eliminar ingrese Y");
            if (confirmacion.toUpperCase() == "Y") {
                sarmiento.modificar(tituloDeleted);
            }
            // sarmiento.eliminar(rdl.question(`Ingrese el titulo del libro a eliminar\n`));
            break;
        case 5:
            sarmiento.imprimirListaLibros();
            break;
        case 0:
            console.log("Fin\n----------");
            break;
        default:
            console.log("La opcion no es válida\n");
            break;
    }
} while (opcion != 10);
