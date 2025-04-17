import { isDeepStrictEqual } from "util";
import { Alumno } from "./Alumno";
import { Escuela } from "./Escuela";
import { Profesor } from "./Profesor";

export class Curso{

  private asignatura: string;
  private institucion:Escuela;
  private alumnosDe:Alumno[];
  private profesor:Profesor | null;

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

  // Se fija si el profesor o el alumno que se quiere dar de alta esta en el curso correcto
  public cursoCorrecto(pPersona: Alumno | Profesor):boolean{
    return (this.asignatura == pPersona.getCurso().getAsignatura());
  }

  //--------------------------------------------------
  //------------------ ALUMNOS -----------------------
  //--------------------------------------------------

  public getProfesor(): Profesor | null | void{
    if(this.cursoActivo()){
      return this.profesor ;
    }else{
      console.log("El curso aun no dispone de un profesor");
    }
  }

  public setProfesor(pProfesor:Profesor | null): void{
    this.profesor = pProfesor;
  }

  public contratarProfesor(pProfesor:Profesor): void{
    if (!this.cursoActivo() && this.cursoCorrecto(pProfesor)) {
      this.setProfesor(pProfesor);
    }
  }

  public despedirProfesor(pProfesor:Profesor){
    if (this.existeProfesor(pProfesor) && this.cursoCorrecto(pProfesor) && pProfesor == this.profesor) {
      this.setProfesor(null);
    }
  }

  public existeProfesor(pProfesor:Profesor){
    return (this.profesor == pProfesor);
  }

  public cursoActivo():boolean{
    return !(this.profesor == null)
  }

  //--------------------------------------------------
  //------------------ ALUMNOS -----------------------
  //--------------------------------------------------

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

  public existeAlumno(pAlumno:Alumno){
    return this.alumnosDe.includes(pAlumno);
  }

  //--------------------------------------------------
  //------------------ INFO --------------------------
  //--------------------------------------------------

  public mostrarInfo(): void{
    console.log(`Nombre del curso: ${this.asignatura}`);
    if (this.profesor != null) {
      this.profesor.mostrarInfo();
    }else{console.log("El curso aun no tiene profesor");}
    this.getListaAlumnosDe()
  }


}