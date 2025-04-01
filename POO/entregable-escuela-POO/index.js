"use strict";
//**
//? Ejercicio 1
// TODO Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
// * Los profesores deben tener un listado de sus alumnos.
// ! Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).
//  La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
//
// Integrantes:
//            - Veronica Martin
//            - Juan Bayugar
//            - Gustavo Arias
// */
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno_1 = require("./Alumno");
var Escuela_1 = require("./Escuela");
var Maestro_1 = require("./Maestro");
console.log(("creamos la escuela"));
console.log(("-/-/-/-/-/-/-/-"));
var cresta = new Escuela_1.Escuela("Cresta");
console.log(("creamos los alumnos"));
console.log(("-/-/-/-/-/-/-/-"));
var vero = new Alumno_1.Alumno("Martin", "Veronica", "2do cuatrimestre", 9);
var gus = new Alumno_1.Alumno("Arias", "Gustavo", "2do cuatrimestre", 4);
var juan = new Alumno_1.Alumno("Bayugar", "Juan", "1er cuatrimestre", 8);
var grupoAlu1 = [vero, gus, juan];
console.log(("creamos los profes"));
console.log(("-/-/-/-/-/-/-/-"));
var pedro = new Maestro_1.Maestro("Doñate", "Pedro", "2do cuatrimestre");
var braian = new Maestro_1.Maestro("Aued", "Braian", "2do cuatrimestre");
var karen = new Maestro_1.Maestro("Simari", "Karen", "1er cuatrimestre");
console.log(("contratamos los profes y mostramos"));
console.log(("-/-/-/-/-/-/-/-"));
cresta.contratarMaestro(braian);
cresta.contratarMaestro(karen);
cresta.getListaMaestros();
console.log(("-/-/-/-/-/-/-/-"));
console.log(("cargamos alumnos a la institucion"));
cresta.matricularAlumnos(grupoAlu1);
console.log(("mostramos los alumnos de la institucion"));
cresta.getListaAlumnos();
console.log(("-/-/-/-/-/-/-/-"));
console.log(("mostramos los alumnos de karen"));
karen.getListaAlumnosDe();
console.log(("-/-/-/-/-/-/-/-"));
console.log(("mostramos los alumnos de braian"));
braian.getListaAlumnosDe();
console.log(("-/-/-/-/-/-/-/-"));
console.log(("creamos dos alumnos nuevos"));
console.log(("-/-/-/-/-/-/-/-"));
var noe = new Alumno_1.Alumno("Martin", "Noelia", "1er cuatrimestre", 2);
var pablo = new Alumno_1.Alumno("De Mateo", "Pablo", "2do cuatrimestre", 9);
console.log(("cargamos alumnos nuevo a la institucion"));
cresta.matricularAlumno(noe);
cresta.matricularAlumno(pablo);
console.log(("-/-/-/-/-/-/-/-"));
console.log(("mostramos los nuevos alumnos de la institucion"));
cresta.getListaAlumnos();
console.log(("-/-/-/-/-/-/-/-"));
console.log(("mostramos los alumnos de karen"));
karen.getListaAlumnosDe();
console.log(("-/-/-/-/-/-/-/-"));
console.log(("como pablo no cursa el grado de Karen lo matriculo en la escuela y se deberia asignar a braian"));
braian.getListaAlumnosDe();
console.log(("-/-/-/-/-/-/-/-"));
cresta.matricularAlumno(noe); //ver si me tira que ya esta matriculado
gus.aprobo();
vero.aprobo();
console.log(("-/-/-/-/-/-/-/-"));
console.log(("expulso a gus y muestro lista de alumnos de cada maestro y de la institucion para ver"));
cresta.expulsarAlumno(gus);
karen.getListaAlumnosDe();
braian.getListaAlumnosDe();
cresta.getListaAlumnos();
console.log(("-/-/-/-/-/-/-/-"));
console.log(("expulso a braian y muestro lista de maestros de la institucion "));
cresta.despedirMaestro(braian); //deberia decir que no pertenece a dicha escuela
cresta.getListaMaestros();
cresta.despedirMaestro(pedro); //deberia decir que no pertenece a dicha escuela
cresta.contratarMaestro(pedro);
cresta.getListaMaestros();
pedro.getListaAlumnosDe();
console.log(("-/-/-/-/-/-/-/-"));
