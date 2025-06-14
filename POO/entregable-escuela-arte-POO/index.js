"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Escuela_1 = require("./Escuela");
var Profesor_1 = require("./Profesor");
var Alumno_1 = require("./Alumno");
var Curso_1 = require("./Curso");
var cresta = new Escuela_1.Escuela("CRESTA");
var pintura = new Curso_1.Curso("Pintura", cresta);
var alfareria = new Curso_1.Curso("Alfareria", cresta);
var fotografia = new Curso_1.Curso("Fotografia", cresta);
var maria = new Profesor_1.Profesor("Garcia", "Maria", 25789456, pintura);
var rafa = new Profesor_1.Profesor("Rafa", "Ela", 27486153, alfareria);
var bruno = new Alumno_1.Alumno("Bruno", "Nosehablade", 31759153, pintura);
var agus = new Alumno_1.Alumno("Agus", "Tina", 33005486, pintura);
var pame = new Alumno_1.Alumno("Mara", "Donna", 34884631, pintura);
var max = new Alumno_1.Alumno("Max", "Verstappen", 35675778, alfareria);
var alex = new Alumno_1.Alumno("Alex", "Albon", 34551662, alfareria);
var oscar = new Alumno_1.Alumno("Oscar", "Piastri", 35446113, alfareria);
var kimi = new Alumno_1.Alumno("Kimi", "Raikkonen", 29578796, alfareria);
var frida = new Alumno_1.Alumno("Frida", "Khalo", 3306568, fotografia);
var baseAlumn = [bruno, agus, pame, max, alex, kimi];
cresta.altaCurso(pintura);
cresta.altaCurso(alfareria);
cresta.contratarProfesor(maria);
cresta.contratarProfesor(rafa);
cresta.matricularAlumno(oscar);
cresta.matricularAlumnos(baseAlumn);
cresta.matricularAlumno(kimi);
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se muestra toda la informacion inicial de la institucion");
cresta.mostrarInfo();
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se muestra toda la informacion inicial del curso Pintura");
pintura.mostrarInfo();
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se muestra toda la informacion inicial del curso Alfareria");
alfareria.mostrarInfo();
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se da de alta el curso de Fotografia");
cresta.altaCurso(fotografia);
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se matricula un nuevo alumno, Frida");
cresta.matricularAlumno(frida);
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se muestra toda la informacion inicial del curso Fotografia");
fotografia.mostrarInfo();
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se listan todos los cursos de la institucion");
cresta.getCursos();
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se crea un profesor para Fotografia y se lo contrata");
var manu = new Profesor_1.Profesor("Manu", "Ela", 29228778, fotografia);
cresta.contratarProfesor(manu);
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se despide un profesor, Maria, del curso de Pintura y se muestra la informacion de Pintura");
cresta.despedirProfesor(maria);
pintura.mostrarInfo();
console.log("----------------------------------------------------\n----------------------------------------------------");
console.log("Se da de baja el curso de alfareria y se muestra la informacion de la insstitucion");
cresta.bajaCurso(alfareria);
cresta.mostrarInfo();
console.log("----------------------------------------------------\n----------------------------------------------------");
