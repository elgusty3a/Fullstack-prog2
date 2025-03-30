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
var vero = new Alumno_1.Alumno("Martin", "Veronica", "Fullstack", 9);
var gus = new Alumno_1.Alumno("Arias", "Gustavo", "Fullstack", 4);
var juan = new Alumno_1.Alumno("Bayugar", "Juan", "Fullstack", 8);
var grupoAlu1 = [vero, gus, juan];
var braian = new Maestro_1.Maestro("Aued", "Braian", "Fullstack", grupoAlu1);
var karen = new Maestro_1.Maestro("Simari", "Karen", "Fullstack", grupoAlu1);
var staff1 = [braian, karen];
var cresta = new Escuela_1.Escuela(grupoAlu1, staff1, 5, 3);
cresta.getListaAlumnos();
karen.getListaAlumnos();
var noe = new Alumno_1.Alumno("Martin", "Noelia", "Fullstack", 2);
cresta.matricularAlumno(noe);
cresta.getListaMaestros();
karen.getListaAlumnos();
gus.aprobo();
vero.aprobo();
