import { Curso } from "./Curso";
import { Persona } from "./Persona";

export class Profesor extends Persona {

  private curso:Curso;
  private salario:number;

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

  public getSalario():number{
    return this.salario;
  }

  public setSalario(pSalario:number):void{
    this.salario = pSalario;
  }

  public mostrarInfo(): void{
    super.mostrarInfo();
  }

}