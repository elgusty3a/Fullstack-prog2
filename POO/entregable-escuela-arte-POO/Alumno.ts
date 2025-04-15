import { Curso } from "./Curso";
import { Escuela } from "./Escuela";
import { Persona } from "./Persona";

export class Alumno extends Persona {

private nota:number;
private curso:Curso;

  constructor(pApellido:string,pNombre:string,pDni:number,pCurso:Curso) {
    super(pApellido,pNombre,pDni);
    this.nota = 0;
    this.curso = pCurso;
  }

  public getNota(): number{
    return this.nota;
  }

  

}