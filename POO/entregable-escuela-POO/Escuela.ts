import { Maestro } from "./Maestro";
import { Alumno } from "./Alumno";

export class Escuela {

  private alumnos:Alumno[];
  private maestros:Maestro[];
  private cupoAlumno:number;
  private cupoMaestro:number;

  constructor(pAlumnos:Alumno[],pMaestros:Maestro[],pCupoAlumno:number,pCupoMaestro:number) {
    // TODO ver como hacer el costructor de la escuela y demas
    this.alumnos = pAlumnos;
    this.maestros = pMaestros;
    this.cupoAlumno = pCupoAlumno;
    this.cupoMaestro = pCupoMaestro; //TODO ver si se puede iniciar vacio
  }

  public getListaAlumnos() {
    console.log(`Alumnos de:`);
    console.log(`------`);
    for (const alum of this.alumnos) {
      console.log(`Nombre: ${alum.getNombre()}`);
      console.log(`------`);
    }
  }

  public matricularAlumno(pAlumno:Alumno){
    this.alumnos.push(pAlumno);
    // this.maestros.map(maestro)
  }

  public expulsarAlumno(pAlumno:Alumno){
    let indice:number = this.alumnos.indexOf(pAlumno);
    this.alumnos.splice(indice,1);
  }

  public contratarMaestro(pMaestro:Maestro){
    this.maestros.push(pMaestro);
  }

  public despedirMaestro(pMaestro:Maestro){
    let indice:number = this.maestros.indexOf(pMaestro);
    this.maestros.splice(indice,1);
  }

  public getListaMaestros() {
    console.log(`Maestros:`);
    console.log(`------`);
    for (const maestro of this.maestros) {
      console.log(`Nombre: ${maestro.getNombre()}`);
      console.log(`------`);
    }
  }

  public getCupoAlumnos(){
    return this.cupoAlumno;
  }
  //TODO hacer set de los cupos
  public getCupoMaestros(){
    return this.cupoMaestro;
  }




}