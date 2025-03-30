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

let vero = new Alumno("Martin","Veronica","Fullstack",9);
let gus = new Alumno("Arias","Gustavo","Fullstack",4);
let juan = new Alumno("Bayugar","Juan","Fullstack",8);
let grupoAlu1 = [vero,gus,juan];

let braian = new Maestro("Aued","Braian","Fullstack",grupoAlu1);
let karen = new Maestro("Simari","Karen","Fullstack",grupoAlu1);
let staff1 = [braian,karen];

let cresta = new Escuela(grupoAlu1,staff1,5,3);
cresta.getListaAlumnos();
karen.getListaAlumnos();

let noe = new Alumno("Martin","Noelia","Fullstack",2);
cresta.matricularAlumno(noe);
cresta.getListaMaestros();
karen.getListaAlumnos();
gus.aprobo();
vero.aprobo();

