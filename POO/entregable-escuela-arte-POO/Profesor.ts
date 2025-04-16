import { Curso } from "./Curso";
import { Persona } from "./Persona";

export class Profesor extends Persona {

  private curso:Curso;
  private salario:number;

  constructor(pApellido:string,pNombre:string,pDni:number,pCurso:Curso) {
    super(pApellido,pNombre,pDni);
    this.curso = pCurso;
    this.salario = 0;
  }

  public getApellido() {
    return super.getApellido();
  }

  public setApellido(pApellido:string) {
    super.setApellido(pApellido);
  }

  public getNombre() {
    return super.getNombre();
  }

  public setNombre(pNombre:string) {
    super.setNombre(pNombre);
  }

  public getDni() {
    return super.getDni();
  }

  public setDni(pDni:number) {
    super.setDni(pDni);
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
    console.log(`Titular de: ${this.curso.getAsignatura()}:`);
    super.mostrarInfo();
  }

}