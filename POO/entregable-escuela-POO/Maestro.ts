import { Alumno } from "./Alumno";
import { Escuela } from "./Escuela";

export class Maestro {

  private apellido:string;
  private nombre:string;
  private grado:string;
  private escuela:Escuela;
  private alumnosDe:Alumno[];

  // constructor(pApellido:string,pNombre:string,pGrado:string,pAlumnos:Alumno[]) {
  constructor(pApellido:string,pNombre:string,pGrado:string,pEscuela:Escuela) {
    this.apellido = pApellido;
    this.nombre = pNombre;
    this.grado = pGrado;
    this.escuela = pEscuela;
    this.alumnosDe = new Array(); //TODO ver si se puede iniciar asi un arreglo vacio
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

  //agrega un grupo de alumnos en forma de arreglo
  public setAlumnos(pAlumnos:Alumno[]) {
    pAlumnos.forEach(alumno => {
      // console.log(alumno);
      this.setAlumno(alumno);
    });
  }
  //agrega un alumno al final del arreglo
  public setAlumno(pAlumno:Alumno) {
    if (!this.existeAlumno(pAlumno)) {
      if (pAlumno.getGrado() == this.getGrado()) {
        this.alumnosDe.push(pAlumno); //se agrega a lista de alumnos del maestro
        if (!this.escuela.existeAlumno(pAlumno)) {
          this.escuela.matricularAlumno(pAlumno); //se agrega a lista de alumnos de al istitucion
        }
      } else {
        console.log(`El alumno ${pAlumno.getNombre()} no cursa el grado ${this.getGrado()}`);
      }
    }else{
      console.log(`El alumno ${pAlumno.getNombre()} ya pertenece a la institucion`);
    }
  }

  public existeAlumno(pAlumno:Alumno){
    return this.alumnosDe.includes(pAlumno);
  }


}