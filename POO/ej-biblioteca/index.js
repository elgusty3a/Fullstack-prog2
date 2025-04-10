"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Socio } from "./socio";
var gestorLibros_1 = require("./gestorLibros");
var libro_1 = require("./libro");
var sarmiento = new gestorLibros_1.GestorLibros("Sarmiento");
var got1 = new libro_1.Libro("Juego de tronos", "GRR Martin", "Fantasia", "Americana");
var got2 = new libro_1.Libro("Duelo de reyes", "GRR Martin", "Fantasia", "Americana");
var got3 = new libro_1.Libro("Tormenta de espadas", "GRR Martin", "Fantasia", "Americana");
var cortazar1 = new libro_1.Libro("Un tal lucas", "Julio Cortazar", "Realismo", "Clarin");
var listaLibros = [got1, got2, got3, cortazar1];
sarmiento.insertarLibros(listaLibros);
sarmiento.menuGestor();
