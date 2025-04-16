import { isDeepStrictEqual } from "util";
import { Alumno } from "./Alumno";
import { Escuela } from "./Escuela";
import { Profesor } from "./Profesor";

export class Curso{

  private asignatura: string;
  private institucion:Escuela;
  private alumnosDe:Alumno[];
  private profesor:Profesor;

  constructor(pAsignatura:string,pInstitucion:Escuela){
    this.asignatura = pAsignatura;
    this.institucion = pInstitucion;
    this.alumnosDe = new Array();
  }

  public getAsignatura(): string {
    return this.asignatura;
  }
  public setAsignatura(pAsignatura: string) {
    this.asignatura = pAsignatura;
  }

  public getInstitucion(): Escuela {
    return this.institucion;
  }
  public setInstitucion(pInstitucion: Escuela) {
    this.institucion = pInstitucion;
  }

  public getProfesor(): Profesor | void{
    if(this.cursoActivo()){
      return this.profesor ;
    }else{
      console.log("El curso aun no dispone de un profesor");
    }
  }

  public setProfesor(pProfesor:Profesor): void{
    this.profesor = pProfesor;
  }

  public matricularAlumnos(pAlumnos:Alumno[]) {
    pAlumnos.forEach(alumno => {
      this.matricularAlumno(alumno);
    });
  }

  public matricularAlumno(pAlumno:Alumno){
    if (!this.existeAlumno(pAlumno) && this.cursoCorrecto(pAlumno)) {
      this.alumnosDe.push(pAlumno);
    }
  }

  public contratarProfesor(pProfesor:Profesor): void{
    if (!this.cursoActivo() && this.cursoCorrecto(pProfesor)) {
      this.setProfesor(pProfesor);
    }
  }

  public cursoCorrecto(pPersona: Alumno | Profesor):boolean{
    return (this.asignatura == pPersona.getCurso().getAsignatura());
  }

  public cursoActivo():boolean{
    return !(this.profesor === undefined)
  }

  public getListaAlumnosDe(): void {
    console.log(`\nAlumnos de ${this.getAsignatura()}:`);
    console.log(`------`);
    for (const alum of this.alumnosDe) {
      alum.mostrarInfo();
    }
    console.log(`------`);
  }

  // agrega un alumno al final del arreglo
  public setAlumno(pAlumno:Alumno) {
    if (!this.existeAlumno(pAlumno)) {
        this.alumnosDe.push(pAlumno); //se agrega a lista de alumnos del maestro
    }
  }

  public expulsarAlumno(pAlumno:Alumno){
    if (this.existeAlumno(pAlumno)) {
      let indice:number = this.alumnosDe.indexOf(pAlumno);
      this.alumnosDe.splice(indice,1);
    }
  }

  public existeProfesor(pProfesor:Profesor){
    return (this.profesor == pProfesor);
  }

  public existeAlumno(pAlumno:Alumno){
    return this.alumnosDe.includes(pAlumno);
  }

  public mostrarInfo(): void{
    console.log(`Nombre del curso: ${this.asignatura}`);
    if (this.cursoActivo()) {
      this.profesor.mostrarInfo();
    }else{console.log("El curso aun no tiene profesor");}
    this.getListaAlumnosDe()
  }


}