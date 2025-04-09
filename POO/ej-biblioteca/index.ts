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

// let opcion:number;
// let indice:number;
// do {
//   opcion = rdl.questionInt(`Bienvenidos a Biblioteca ${sarmiento.getNombre()}\nElija una opcion:\n
//     1 - Buscar Libro\n
//     2 - Crear Libro\n
//     3 - Modificar Libro\n
//     4 - Eliminar Libro\n
//     5 - Imprimir lista de libros\n
//     0 - Terminar programa\n`)
//   switch (opcion) {
//     case 1:
//       indice = sarmiento.buscarLibro(rdl.question(`Ingrese el titulo a buscar\n`));
//       if(indice >= 0){
//         sarmiento.imprimirLibro(indice);
//       }else{console.log("El libro no exite\n");}
//       break;
//       case 2:
//         sarmiento.crearLibro();
//         sarmiento.imprimirListaLibros();
//         break;
//       case 3:
//         indice = sarmiento.buscarLibro(rdl.question(`Ingrese el titulo a buscar\n`));
//         if(indice >= 0){
//           sarmiento.imprimirLibro(indice);
//           let respuesta:string = rdl.question("Si este es el libro a modificar ingrese Y");
//           if (respuesta.toUpperCase() == "Y") {
//             sarmiento.modificar(indice);
//           }
//         }else{console.log("El libro no exite\n");}
//       break;
//     case 4:
//       indice = sarmiento.buscarLibro(rdl.question(`Ingrese el titulo a eliminar\n`));
//       if(indice >= 0){
//         sarmiento.imprimirLibro(indice);
//         let respuesta:string = rdl.question("Si este es el libro a eliminar ingrese Y");
//         if (respuesta.toUpperCase() == "Y") {
//           sarmiento.eliminar(indice);
//         }
//       }else{console.log("El libro no exite\n");}
//       break;
//     case 5:
//       sarmiento.imprimirListaLibros();
//       break;
//     case 0:
//       console.log("Fin\n----------");
//       break;
//     default: console.log("La opcion no es válida\n");break;
//   }
// }while (opcion != 0);