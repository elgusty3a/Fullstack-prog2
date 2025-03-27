import { Alumno } from "./Alumno";

export class Maestro {

  private apellido:string;
  private nombre:string;
  private grado:string;
  private alumnos:Alumno[];

  constructor(pApellido:string,pNombre:string,pGrado:string) {
    this.apellido = pApellido;
    this.nombre = pNombre;
    this.grado = pGrado;
    this.alumnos = new Array();
  }

  public getListaAlumnos() {
    console.log(`Alumnos:`);
    console.log(`------`);
    for (const alum of this.alumnos) {
      console.log(`Nombre: ${alum.getNombre()}`);
      console.log(`------`);
    }
  }


}