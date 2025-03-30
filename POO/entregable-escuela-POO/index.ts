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

import { Alumno } from "./Alumno";
import { Escuela } from "./Escuela";
import { Maestro } from "./Maestro";

let vero = new Alumno("Martin","Veronica","2do cuatrimestre",9);
let gus = new Alumno("Arias","Gustavo","2do cuatrimestre",4);
let juan = new Alumno("Bayugar","Juan","1er cuatrimestre",8);
let grupoAlu1 = [vero,gus,juan];

let braian = new Maestro("Aued","Braian","2do cuatrimestre",grupoAlu1);
let karen = new Maestro("Simari","Karen","1er cuatrimestre",grupoAlu1);
let staff1 = [braian,karen];

let cresta = new Escuela(grupoAlu1,staff1,5,3);
cresta.getListaAlumnos();
karen.getListaAlumnosDe();

let noe = new Alumno("Martin","Noelia","1er cuatrimestre",2);
let pablo = new Alumno("De Mateo","Pablo","2do cuatrimestre",9);
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

