import { Alumno } from "./Alumno";

export class Maestro {

  private apellido:string;
  private nombre:string;
  private grado:string;
  private alumnosDe:Alumno[];

  constructor(pApellido:string,pNombre:string,pGrado:string,pAlumnos:Alumno[]) {
    this.apellido = pApellido;
    this.nombre = pNombre;
    this.grado = pGrado;
    this.alumnosDe = pAlumnos;
    // this.alumnos = new Array(); //TODO ver si se puede iniciar asi un arreglo vacio
  }

  public getApellido() {
    return this.apellido;
  }

  public setApellido(pApellido:string) {
    this.apellido = pApellido;
  }

  public getNombre() {
    return this.nombre;
  }

  public setNombre(pNombre:string) {
    this.nombre = pNombre;
  }

  public getGrado() {
    return this.grado;
  }

  public setGrado(pGrado:string) {
    this.grado = pGrado;
  }

  public getListaAlumnosDe() {
    console.log(`Alumnos de ${this.nombre}:`);
    console.log(`------`);
    for (const alum of this.alumnosDe) {
      console.log(`Apellido: ${alum.getApellido()} \nNombre: ${alum.getNombre()} \nGrado: ${alum.getGrado()} \nNota: ${alum.getNota()}\n`);
    }
    console.log(`------`);
  }

  //agrega un grupo de alumnos en forma de arreglo
  public setAlumnos(pAlumnos:Alumno[]) {
    pAlumnos.forEach(alumno => {
      this.setAlumno(alumno);
    });
  }
  //agrega un alumno al final del arreglo
  public setAlumno(pAlumno:Alumno) {
    if (pAlumno.getGrado() == this.getGrado()) {
      this.alumnosDe.push(pAlumno);
    }else{
      console.log(`El alumno ${pAlumno.getNombre()} no cursa el grado ${this.getGrado()}`);
    }
  }


}