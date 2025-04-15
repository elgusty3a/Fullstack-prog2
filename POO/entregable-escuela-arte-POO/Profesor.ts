import { Curso } from "./Curso";
import { Persona } from "./Persona";

export class Profesor extends Persona {

  private curso:Curso;

  constructor(pApellido:string,pNombre:string,pDni:number,pAsignatura:Curso) {
    super(pApellido,pNombre,pDni);
    this.curso = pAsignatura;
  }

  public getCurso():Curso{
    return this.curso;
  }

  public setCurso(pAsignatura:Curso):void{
    this.curso = pAsignatura;
  }



}