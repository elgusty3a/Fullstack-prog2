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
var vero = new Alumno_1.Alumno("Martin", "Veronica", "2do cuatrimestre", 9);
var gus = new Alumno_1.Alumno("Arias", "Gustavo", "2do cuatrimestre", 4);
var juan = new Alumno_1.Alumno("Bayugar", "Juan", "1er cuatrimestre", 8);
var grupoAlu1 = [vero, gus, juan];
var braian = new Maestro_1.Maestro("Aued", "Braian", "2do cuatrimestre", grupoAlu1);
var karen = new Maestro_1.Maestro("Simari", "Karen", "1er cuatrimestre", grupoAlu1);
var staff1 = [braian, karen];
var cresta = new Escuela_1.Escuela(grupoAlu1, staff1, 5, 3);
cresta.getListaAlumnos();
karen.getListaAlumnosDe();
var noe = new Alumno_1.Alumno("Martin", "Noelia", "1er cuatrimestre", 2);
var pablo = new Alumno_1.Alumno("De Mateo", "Pablo", "2do cuatrimestre", 9);
karen.setAlumno(noe);
karen.setAlumno(pablo);
karen.getListaAlumnosDe();
cresta.getListaAlumnos();
cresta.matricularAlumno(pablo);
cresta.getListaMaestros();
cresta.getListaAlumnos();
karen.getListaAlumnosDe();
gus.aprobo();
vero.aprobo();
