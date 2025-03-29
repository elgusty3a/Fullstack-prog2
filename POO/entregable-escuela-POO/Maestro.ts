import { Alumno } from "./Alumno";

export class Maestro {

  private apellido:string;
  private nombre:string;
  private grado:string;
  private alumnos:Alumno[];

  constructor(pApellido:string,pNombre:string,pGrado:string,pAlumnos:Alumno[]) {
    this.apellido = pApellido;
    this.nombre = pNombre;
    this.grado = pGrado;
    this.alumnos = pAlumnos;
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

  public getListaAlumnos() {
    console.log(`Alumnos:`);
    console.log(`------`);
    for (const alum of this.alumnos) {
      console.log(`Nombre: ${alum.getNombre()}`);
      console.log(`------`);
    }
  }

  public setAlumnos(pAlumnos:Alumno[]) {
    this.alumnos = pAlumnos;
  }




}