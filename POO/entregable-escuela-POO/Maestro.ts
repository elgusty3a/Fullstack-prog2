import { Alumno } from "./Alumno";

export class Maestro {

  private apellido:string;
  private nombre:string;
  private grado:string;
  private alumnosDe:Alumno[];

  constructor(pApellido:string,pNombre:string,pGrado:string) {
    this.apellido = pApellido;
    this.nombre = pNombre;
    this.grado = pGrado;
    this.alumnosDe = new Array();
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
  public getAlumnosDe(){
    return this.alumnosDe;
  }

  public getListaAlumnosDe() {
    console.log(`Alumnos de ${this.nombre}:`);
    console.log(`------`);
    for (const alum of this.alumnosDe) {
      console.log(`Apellido: ${alum.getApellido()} \nNombre: ${alum.getNombre()} \nGrado: ${alum.getGrado()} \nNota: ${alum.getNota()}\n`);
    }
    console.log(`------`);
  }

  //agrega un alumno al final del arreglo
  public setAlumno(pAlumno:Alumno) {
      if (pAlumno.getGrado() == this.getGrado()) {
        this.alumnosDe.push(pAlumno); //se agrega a lista de alumnos del maestro
    }
  }

  public expulsarAlumno(pAlumno:Alumno){
    let indice:number = this.alumnosDe.indexOf(pAlumno);
    this.alumnosDe.splice(indice,1);
  }

  public existeAlumno(pAlumno:Alumno){
    return this.alumnosDe.includes(pAlumno);
  }


}