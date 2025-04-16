import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

export class Escuela {

  private nombreInstitucion:string;
  private alumnos:Alumno[];
  private profesores:Profesor[];
  private cursos:Curso[];

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
      alum.mostrarInfo();
    }
    console.log(`------`);
  }

  public matricularAlumnos(pAlumnos:Alumno[]) {
    pAlumnos.forEach(alumno => {
      this.matricularAlumno(alumno);
    });
  }

  public matricularAlumno(pAlumno:Alumno){
    if (!this.existeAlumno(pAlumno)) {
      this.alumnos.push(pAlumno);
      this.cursos.forEach(curso => {
          curso.matricularAlumno(pAlumno);
      });
    }else{
      console.log(`El alumno ${pAlumno.getNombre()} ${pAlumno.getApellido()} ya está matriculado`);
    }
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

  public contratarProfesor(pProfesor:Profesor): void{
    if (!this.existeProfesor(pProfesor)){
      this.profesores.push(pProfesor);
      this.cursos.forEach(curso => {
        curso.contratarProfesor(pProfesor);
      });
    }else{
      console.log(`El profesor ${pProfesor.getNombre()} ${pProfesor.getApellido()} ya pertenece a la institucion`);
    }
  }

  public despedirProfesor(pProfesor:Profesor){
    if (this.existeProfesor(pProfesor)) {
      let indice:number = this.profesores.indexOf(pProfesor);
      this.profesores.splice(indice,1);
    }else{
      console.log(`El profesor ${pProfesor.getNombre()} ${pProfesor.getApellido()} no pertenece a la institucion`);
    }
  }

  public getProfesores() :void{
    console.log(`Profesores de la institucion:`);
    console.log(`------`);
    for (const profe of this.profesores) {
      profe.mostrarInfo();
    }
    console.log(`------`);
  }

  public existeProfesor(pProfesor:Profesor){
    return this.profesores.includes(pProfesor);
  }

  public getCursos(): void{
    console.log(`Cursos disponibles:`);
    console.log(`------`);
    for (const curso of this.cursos) {
      console.log(`Curso: ${curso.getAsignatura()} \n`);
    }
    console.log(`------`);
  }

  public altaCurso(pCurso:Curso){
    if (!this.existeCurso(pCurso)){
      this.cursos.push(pCurso);
    }
  }

  public bajaCurso(pCurso:Curso): void{
    if (this.existeCurso(pCurso)) {
      let indice:number = this.cursos.indexOf(pCurso);
      this.cursos.splice(indice,1);
    }else{
      console.log(`El curso ${pCurso.getAsignatura()} no existe`);
    }
  }

  public existeCurso(pCurso:Curso): boolean{
    return (this.cursos.includes(pCurso))
  }

  public mostrarInfo(): void{
    console.log(`Nombre de la institución: ${this.nombreInstitucion}`);
    this.getCursos();
    this.getProfesores();
    this.getListaAlumnos();
  }


}