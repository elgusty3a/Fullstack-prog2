import { Escuela } from "./Escuela";
import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

let cresta = new Escuela("CRESTA");

let pintura = new Curso("Pintura",cresta);
let alfareria = new Curso("Alfareria",cresta);
let fotografia = new Curso("Fotografia",cresta);

let maria = new Profesor("Garcia","Maria",25789456,pintura);
let rafa = new Profesor("Rafa","Ela",27486153,alfareria);

let bruno = new Alumno("Bruno","Nosehablade",31759153,pintura);
let agus = new Alumno("Agus","Tina",33005486,pintura);
let pame = new Alumno("Mara","Donna",34884631,pintura);
let max = new Alumno("Max","Verstappen",35675778,alfareria);
let alex = new Alumno("Alex","Albon",34551662,alfareria);
let oscar = new Alumno("Oscar","Piastri",35446113,alfareria);
let kimi = new Alumno("Kimi","Raikkonen",29578796,alfareria);
let frida = new Alumno("Frida","Khalo",3306568,fotografia);

let baseAlumn =[bruno,agus,pame,max,alex,kimi];
cresta.altaCurso(pintura);
cresta.altaCurso(alfareria);
cresta.contratarProfesor(maria);
cresta.contratarProfesor(rafa);
cresta.matricularAlumno(oscar);
cresta.matricularAlumnos(baseAlumn);
cresta.matricularAlumno(kimi);
console.log("--------------------------\n--------------------------");
// cresta.mostrarInfo();
// console.log("--------------------------\n--------------------------");
// pintura.mostrarInfo();
// console.log("--------------------------\n--------------------------");
// alfareria.mostrarInfo();
// console.log("--------------------------\n--------------------------");

cresta.altaCurso(fotografia);
cresta.matricularAlumno(frida);
// cresta.getCursos();
// fotografia.mostrarInfo();
let manu = new Profesor("Manu","Ela",29228778,fotografia);
cresta.contratarProfesor(manu);
// console.log(fotografia.cursoActivo())

// console.log(manu.getCurso().getAsignatura())
// fotografia.mostrarInfo();
// console.log(fotografia.getProfesor());
cresta.mostrarInfo();
