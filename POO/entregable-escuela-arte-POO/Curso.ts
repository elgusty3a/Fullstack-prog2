import { Alumno } from "./Alumno";
import { Escuela } from "./Escuela";
import { Profesor } from "./Profesor";

export class Curso{

  private asignatura: string;
  private institucion:Escuela;
  private alumnosDe:Alumno[];
  private profesor:Profesor | undefined;

  constructor(pAsignatura:string,pInstitucion:Escuela,pProfesor?:Profesor){
    this.asignatura = pAsignatura;
    this.institucion = pInstitucion;
    this.alumnosDe = new Array();
    this.profesor = pProfesor?? undefined;
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
    if (!this.alumnosDe.includes(pAlumno)) {
      this.alumnosDe.push(pAlumno);
    }else{
      console.log(`El alumno ${pAlumno.getNombre()} ${pAlumno.getApellido()} ya está matriculado`);
    }
  }

  public cursoActivo():boolean{
    return (this.profesor != undefined)
  }

  public getListaAlumnosDe() {
    console.log(`Alumnos de ${this.getAsignatura()}:`);
    console.log(`------`);
    for (const alum of this.alumnosDe) {
      console.log(`Apellido: ${alum.getApellido()} \nNombre: ${alum.getNombre()} \n`);
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


}