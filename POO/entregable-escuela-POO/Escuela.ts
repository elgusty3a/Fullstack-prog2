import { Maestro } from "./Maestro";
import { Alumno } from "./Alumno";

export class Escuela {

  private nombreInstitucion:string;
  private alumnos:Alumno[];
  private maestros:Maestro[];
  private cupoAlumno:number;
  private cupoMaestro:number;

  constructor(pNombre:string,pCupoAlumno:number,pCupoMaestro:number) {
    // TODO ver como hacer el costructor de la escuela y demas
    this.nombreInstitucion = pNombre;
    this.alumnos = new Array();
    this.maestros = new Array();
    this.cupoAlumno = pCupoAlumno;
    this.cupoMaestro = pCupoMaestro; //TODO ver si se puede iniciar vacio
  }

  public getListaAlumnos() {
    console.log(`Alumnos de la institucion:`);
    console.log(`------`);
    for (const alum of this.alumnos) {
      console.log(`Apellido: ${alum.getApellido()} \nNombre: ${alum.getNombre()} \nGrado: ${alum.getGrado()} \nNota: ${alum.getNota()}\n`);
    }
    console.log(`------`);
  }

  public matricularAlumno(pAlumno:Alumno){
    if (!this.alumnos.includes(pAlumno)) {
      this.alumnos.push(pAlumno);
      this.maestros.forEach(maestro => {
        if (!maestro.existeAlumno(pAlumno)) {
        // if (this.existeAlumno(pAlumno) && !maestro.existeAlumno(pAlumno)) {
          maestro.setAlumno(pAlumno);
        }
      });
    }else{
      console.log(`El alumno ${pAlumno.getNombre()} ${pAlumno.getApellido()} ya está matriculado`);
    }
    // this.maestros.map(maestro)
  }

  public expulsarAlumno(pAlumno:Alumno){
    let indice:number = this.alumnos.indexOf(pAlumno);
    this.alumnos.splice(indice,1);
    this.maestros.forEach(maestro => {
      if (maestro.existeAlumno(pAlumno)) {
      // if (this.existeAlumno(pAlumno) && !maestro.existeAlumno(pAlumno)) {
        maestro.expulsarAlumno(pAlumno);
      }
    });
  }

  public contratarMaestro(pMaestro:Maestro){
    this.maestros.push(pMaestro);
  }

  public despedirMaestro(pMaestro:Maestro){
    let indice:number = this.maestros.indexOf(pMaestro);
    this.maestros.splice(indice,1);
  }

  public getListaMaestros() {
    console.log(`Maestros de la institucion: `);
    console.log(`------`);
    for (const maestro of this.maestros) {
      console.log(`Apellido: ${maestro.getApellido()} \nNombre: ${maestro.getNombre()} \nGrado: ${maestro.getGrado()} \n`);
    }
    console.log(`------`);
  }

  public getCupoAlumnos(){
    return this.cupoAlumno;
  }
  //TODO hacer set de los cupos
  public getCupoMaestros(){
    return this.cupoMaestro;
  }

  public existeAlumno(pAlumno:Alumno){
    return this.alumnos.includes(pAlumno);
  }


}