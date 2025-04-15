import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

export class Escuela {

  private nombreInstitucion:string;
  private alumnos:Alumno[];
  private profesores:Profesor[];
  private cursos:Curso[];
  private asignaNroLegajo:number =+1;

  constructor(pNombre:string) {
    this.nombreInstitucion = pNombre;
    this.alumnos = new Array();
    this.profesores = new Array();
    this.cursos = new Array();
  }

  public getNombreInstitucion(){
    return this.nombreInstitucion;
  }
  public setNombreInstitucion(pNombre:string){
    this.nombreInstitucion = pNombre;
  }

  public getListaAlumnos() :void{
    console.log(`Alumnos de la institucion:`);
    console.log(`------`);
    for (const alum of this.alumnos) {
      console.log(`Apellido: ${alum.getApellido()} \nNombre: ${alum.getNombre()}\n`);
    }
    console.log(`------`);
  }

  public expulsarAlumno(pAlumno:Alumno) :void{
    let indice:number = this.alumnos.indexOf(pAlumno);
    this.alumnos.splice(indice,1);
    this.cursos.forEach(curso => {
      if (curso.existeAlumno(pAlumno)) {
        curso.expulsarAlumno(pAlumno);
      }
    });
  }

  public existeAlumno(pAlumno:Alumno){
    return this.alumnos.includes(pAlumno);
  }

  //------------------ Profesores
  public contratarProfesores(pProfesor:Profesor[]) :void{
    pProfesor.forEach(maestro => {
      this.contratarProfesor(maestro);
    });
  }

  public contratarProfesor(pProfesor:Profesor){
    if (!this.existeProfesor(pProfesor)){
      this.profesores.push(pProfesor);
      this.cursos.forEach(curso => {
        if (!curso.cursoActivo() && pProfesor.getCurso().getAsignatura() == curso.getAsignatura()) {
          curso.setProfesor(pProfesor)
        };
      });
    }
  }

  public despedirProfesor(pProfesor:Profesor){
    if (this.existeProfesor(pProfesor)) {
      let indice:number = this.profesores.indexOf(pProfesor);
      this.profesores.splice(indice,1);
    }else{
      console.log(`El maestro ${pProfesor.getNombre()} ${pProfesor.getApellido()} no pertenece a la institucion`);
    }
  }

  public getProfesores() :void{
    console.log(`Profesores de la institucion:`);
    console.log(`------`);
    for (const profe of this.profesores) {
      console.log(`Apellido: ${profe.getApellido()} \nNombre: ${profe.getNombre()} \nAsignatura: ${profe.getCurso().getAsignatura()}\n`);
    }
    console.log(`------`);
  }

  public existeProfesor(pProfesor:Profesor){
    return this.profesores.includes(pProfesor);
  }


}