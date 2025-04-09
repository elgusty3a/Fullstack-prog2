import { readlinkSync } from "fs";
import * as rdl from 'readline-sync';
// import { Socio } from "./socio";
import { GestorLibros } from "./gestorLibros";
import { Libro } from "./libro";

let sarmiento = new GestorLibros("Sarmiento");
let got1 = new Libro("Juego de tronos","GRR Martin","Fantasia","Americana");
let got2 = new Libro("Duelo de reyes","GRR Martin","Fantasia","Americana");
let got3 = new Libro("Tormenta de espadas","GRR Martin","Fantasia","Americana");
let cortazar1 = new Libro("Un tal lucas","Julio Cortazar","Realismo","Clarin");
let listaLibros:Libro[] = [got1,got2,got3,cortazar1];
sarmiento.insertarLibros(listaLibros);
sarmiento.menuGestor();

