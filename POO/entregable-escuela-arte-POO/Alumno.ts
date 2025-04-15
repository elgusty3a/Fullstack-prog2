import { Curso } from "./Curso";
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

  public setNota(pNota:number){
    this.nota = pNota;
  }

  public getCurso():Curso{
    return this.curso;
  }

  public setCurso(pAsignatura:Curso):void{
    this.curso = pAsignatura;
  }

  public mostrarInfo(): void{
    super.mostrarInfo();
  }

}